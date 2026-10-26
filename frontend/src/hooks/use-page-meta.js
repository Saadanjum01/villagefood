import { useEffect } from "react";

// Sets document title, meta description and an optional JSON-LD block for the page's lifetime.
export const usePageMeta = ({ title, description, schema, schemaId = "page-schema" }) => {
  useEffect(() => {
    document.title = title;

    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.name = "description";
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    if (!schema) return undefined;
    let tag = document.getElementById(schemaId);
    if (!tag) {
      tag = document.createElement("script");
      tag.id = schemaId;
      tag.type = "application/ld+json";
      document.head.appendChild(tag);
    }
    tag.textContent = JSON.stringify(schema);
    return () => document.getElementById(schemaId)?.remove();
  }, [title, description, schema, schemaId]);
};
