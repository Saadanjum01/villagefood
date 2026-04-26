import React from "react";

const LOGO_PATH = "/logo.webp";
const FALLBACK_LOGO_URL =
  "https://villagepizzaseafood.com/wp-content/uploads/2026/01/qtq_95.webp";

/**
 * The actual brand logo already contains the words "Village Pizza & Seafood".
 * No supporting text needed — just render the image.
 */
export const Logo = ({ size = 56, className = "" }) => (
  <img
    src={LOGO_PATH}
    alt="Village Pizza & Seafood"
    loading="eager"
    fetchPriority="high"
    decoding="async"
    onError={(e) => {
      // Keep a remote fallback so logo still appears even if local asset is missing.
      if (e.currentTarget.src !== FALLBACK_LOGO_URL) {
        e.currentTarget.src = FALLBACK_LOGO_URL;
      }
    }}
    style={{
      height: size,
      width: "auto",
      objectFit: "contain",
    }}
    className={className}
    data-testid="brand-logo"
    draggable={false}
  />
);

export default Logo;
