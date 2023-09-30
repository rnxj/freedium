"use client";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogPage() {
  const searchParams = useSearchParams();
  const url = searchParams.get("url");
  const [blogContent, setBlogContent] = useState("");
  const fetchBlog = async () => {
    const res = await fetch("api/fetchBlog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    });
    const htmlContent = await res.text();
    const tempElement = document.createElement("div");
    tempElement.innerHTML = htmlContent;

    // Remove the <title> element
    const titleElement = tempElement.querySelector("title");
    if (titleElement) {
      titleElement.remove();
    }

    // Remove specific meta tags by their attributes (example: name="author")
    const metaTagsToRemove = tempElement.querySelectorAll(
      'meta[name="author"]',
    );
    metaTagsToRemove.forEach((metaTag) => {
      metaTag.remove();
    });

    // Remove specific link tags by their attributes (example: rel="canonical")
    const linkTagsToRemove = tempElement.querySelectorAll(
      'link[rel="canonical"]',
    );
    linkTagsToRemove.forEach((linkTag) => {
      linkTag.remove();
    });

    // Remove specific script tags by their attributes (example: type="application/ld+json")
    const scriptTagsToRemove = tempElement.querySelectorAll(
      'script[type="application/ld+json"]',
    );
    scriptTagsToRemove.forEach((scriptTag) => {
      scriptTag.remove();
    });

    // Remove the <base> element
    const baseElement = tempElement.querySelector("base");
    if (baseElement) {
      baseElement.remove();
    }

    // Remove specific divs by their attributes (example: id="google-cache-hdr")
    const divsWithGoogleCacheHdr = tempElement.querySelectorAll(
      'div[id*="google-cache-hdr"]',
    );
    divsWithGoogleCacheHdr.forEach((div) => {
      div.parentNode!.removeChild(div);
    });

    // Remove div with class "sl sm sn so sp l bw", "ab ca", "ru rv rw rx ry rz sa sb gt ab q sc sd c", "l m n o c", "ab co jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw"
    const divsWithClass = tempElement.querySelectorAll(
      'div[class*="sl sm sn so sp l bw"], div[class*="ru rv rw rx ry rz sa sb gt ab q sc sd c"], div[class*="l m n o c"], div[class*="ab co jh ji jj jk jl jm jn jo jp jq jr js jt ju jv jw"]',
    );
    divsWithClass.forEach((div) => {
      div.parentNode!.removeChild(div);
    });

    // 'tempElement' contains the modified HTML without the specified elements
    const modifiedHTML = tempElement.innerHTML;

    setBlogContent(modifiedHTML);
  };

  useEffect(() => {
    const res = fetchBlog();
  }, []);
  return (
    <div className="w-full">
      <div
        className="my-8 max-h-5"
        dangerouslySetInnerHTML={{ __html: blogContent }}
      ></div>
    </div>
  );
}
