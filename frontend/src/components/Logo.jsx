import React from "react";

const LOGO_PATH = "/logo.webp";

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
