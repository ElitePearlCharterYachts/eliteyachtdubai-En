import { useEffect } from "react";

function upsertMeta(nameOrPropKey, keyValue, content) {
  const selector =
    nameOrPropKey === "name"
      ? `meta[name="${keyValue}"]`
      : `meta[property="${keyValue}"]`;

  if (!content) {
    const existing = document.head.querySelector(selector);
    if (existing) existing.remove();
    return;
  }

  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(nameOrPropKey, keyValue);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) {
    const existing = document.head.querySelector(`link[rel="${rel}"]`);
    if (existing) existing.remove();
    return;
  }

  let link = document.head.querySelector(`link[rel="${rel}"]`);
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    document.head.appendChild(link);
  }
  link.setAttribute("href", href);
}

export default function Seo({
  title,
  description,
  keywords,
  canonical,

  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType = "website",
  ogLocale = "ar_AE",

  twitterCard = "summary_large_image",

  robots = "index, follow, max-image-preview:large",

  lang,
  dir,
}) {
  useEffect(() => {
    if (title) document.title = title;

    if (lang) document.documentElement.setAttribute("lang", lang);
    if (dir) document.documentElement.setAttribute("dir", dir);

    upsertMeta("name", "description", description);

    upsertMeta("name", "keywords", keywords);

    upsertMeta("name", "robots", robots);

    upsertLink("canonical", canonical);

    upsertMeta("property", "og:type", ogType);
    upsertMeta("property", "og:locale", ogLocale);
    upsertMeta("property", "og:title", ogTitle || title);
    upsertMeta("property", "og:description", ogDescription || description);
    upsertMeta("property", "og:image", ogImage);
    upsertMeta("property", "og:url", ogUrl || canonical);

    upsertMeta("name", "twitter:card", twitterCard);
    upsertMeta("name", "twitter:title", ogTitle || title);
    upsertMeta("name", "twitter:description", ogDescription || description);
    upsertMeta("name", "twitter:image", ogImage);
  }, [
    title,
    description,
    keywords,
    canonical,
    ogTitle,
    ogDescription,
    ogImage,
    ogUrl,
    ogType,
    ogLocale,
    twitterCard,
    robots,
    lang,
    dir,
  ]);

  return null;
}
