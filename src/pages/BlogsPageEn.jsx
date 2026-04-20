import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { listPublishedBlogs } from "../lib/blogsPublic";
import { supabasePublic } from "../lib/supabasePublic";

const BUCKET = "blog-covers";
const PAGE_SIZE = 24;

function urlToStorageKey(url) {
  const v = (url || "").trim();
  if (!v) return "";
  if (!v.startsWith("http://") && !v.startsWith("https://")) return v;

  const marker = `/storage/v1/object/public/${BUCKET}/`;
  const idx = v.indexOf(marker);
  if (idx === -1) return "";
  return v.slice(idx + marker.length);
}

export default function BlogsPage() {
  const [blogs, setBlogs] = useState([]);
  const [covers, setCovers] = useState({});
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [err, setErr] = useState("");

  const [from, setFrom] = useState(0);
  const [total, setTotal] = useState(null); 
  const loadFirst = async () => {
    setLoading(true);
    setErr("");
    setFrom(0);
    setTotal(null);

    const t = toast.loading("Loading blogs…");
    try {
      const res = await listPublishedBlogs({ limit: PAGE_SIZE, from: 0 });
      const rows = Array.isArray(res?.data) ? res.data : [];

      setBlogs(rows);
      setTotal(typeof res?.count === "number" ? res.count : null);
      setFrom(rows.length);

      toast.success(`Loaded ${rows.length} blogs`, { id: t });
    } catch (e) {
      console.error("❌ Blogs fetch error:", e);
      const msg =
        e?.message ||
        e?.error_description ||
        "Failed to fetch blogs. Check RLS policy + published status.";
      setErr(msg);
      toast.error(msg, { id: t });
    } finally {
      setLoading(false);
    }
  };

  const loadMore = async () => {
    if (loadingMore) return;
    if (total != null && blogs.length >= total) return;

    setLoadingMore(true);
    try {
      const res = await listPublishedBlogs({ limit: PAGE_SIZE, from });
      const rows = Array.isArray(res?.data) ? res.data : [];

      // append (avoid duplicates just in case)
      setBlogs((prev) => {
        const seen = new Set(prev.map((x) => x.id));
        const next = rows.filter((x) => x?.id && !seen.has(x.id));
        return [...prev, ...next];
      });

      setTotal(typeof res?.count === "number" ? res.count : total);
      setFrom((p) => p + rows.length);
    } catch (e) {
      console.error("❌ Load more failed:", e);
      toast.error(e?.message || "Failed to load more blogs");
    } finally {
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    loadFirst();
  }, []);

  useEffect(() => {
    let alive = true;

    (async () => {
      const toFetch = blogs.filter(
        (b) => b?.id && b?.cover_image_url && !covers[b.id]
      );

      await Promise.all(
        toFetch.map(async (b) => {
          const key = urlToStorageKey(b.cover_image_url);
          if (!key) return;

          try {
            const { data, error } = await supabasePublic.storage
              .from(BUCKET)
              .download(key);

            if (error) throw error;

            const blobUrl = URL.createObjectURL(data);
            if (!alive) return;

            setCovers((p) => ({ ...p, [b.id]: blobUrl }));
          } catch (e) {
            console.error("❌ cover download failed:", b.cover_image_url, e);
          }
        })
      );
    })();

    return () => {
      alive = false;
    };
  }, [blogs, covers]);

  useEffect(() => {
    return () => {
      Object.values(covers).forEach((u) => {
        try {
          URL.revokeObjectURL(u);
        } catch {}
      });
    };
  }, [covers]);

  const hasMore =
    total == null ? true : blogs.length < total;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10 text-black">
      <div className="flex items-center justify-between gap-3">
        <h1 className="text-3xl font-semibold">Blogs</h1>

        <button
          onClick={loadFirst}
          disabled={loading}
          className="rounded-xl px-4 py-2 text-sm ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition disabled:opacity-60"
        >
          {loading ? "Loading…" : "Refresh"}
        </button>
      </div>

      {err ? (
        <div className="mt-6 rounded-2xl bg-red-500/10 ring-1 ring-red-500/20 p-4">
          <p className="text-sm text-red-200 font-semibold">
            Failed to load blogs
          </p>
          <p className="mt-1 text-xs text-red-200/80">{err}</p>
        </div>
      ) : null}

      {loading ? (
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="rounded-2xl bg-white/5 ring-1 ring-black/10 overflow-hidden"
            >
              <div className="h-48 bg-white/5 animate-pulse" />
              <div className="p-5 space-y-3">
                <div className="h-3 w-24 bg-black/10 rounded animate-pulse" />
                <div className="h-4 w-3/4 bg-black/10 rounded animate-pulse" />
                <div className="h-3 w-full bg-black/10 rounded animate-pulse" />
              </div>
            </div>
          ))}
        </div>
      ) : null}

      {!loading && !err && blogs.length === 0 ? (
        <div className="mt-10 rounded-2xl bg-white/5 ring-1 ring-white/10 p-6">
          <p className="text-sm text-white/80 font-semibold">
            No published blogs found
          </p>
        </div>
      ) : null}

      {!loading && !err && blogs.length > 0 ? (
        <>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {blogs.map((b) => {
              const cover = b?.id ? covers[b.id] : "";
              const date = b?.published_at
                ? new Date(b.published_at).toLocaleDateString()
                : "";

              return (
                <Link
                  key={b.id}
                  to={`/مدونة/${b.slug}`}
                  className="group rounded-2xl bg-white/5 ring-1 ring-black/10 overflow-hidden hover:bg-white/10 transition"
                >
                  {cover ? (
                    <img
                      src={cover}
                      alt={b.title || "Blog cover"}
                      className="block h-48 w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="h-48 bg-white/5" />
                  )}

                  <div className="p-5">
                    <p className="text-xs text-white/50">{date}</p>
                    <h3 className="mt-2 text-lg font-semibold">{b.title}</h3>
                    <p className="mt-2 text-sm text-white/70 line-clamp-3">
                      {b.excerpt || ""}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-10 flex items-center justify-center">
            <button
              onClick={loadMore}
              disabled={!hasMore || loadingMore}
              className="rounded-xl px-5 py-2 text-sm ring-1 ring-white/10 bg-white/5 hover:bg-white/10 transition disabled:opacity-60"
            >
              {loadingMore
                ? "Loading more…"
                : hasMore
                ? "Load more"
                : "No more blogs"}
            </button>
          </div>

          {typeof total === "number" ? (
            <p className="mt-3 text-center text-xs text-white/40">
              Showing {blogs.length} of {total}
            </p>
          ) : null}
        </>
      ) : null}
    </div>
  );
}
