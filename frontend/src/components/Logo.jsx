import React from "react";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_pizzavillage-deploy/artifacts/jehugfca_admin-ajax.webp";

/**
 * The actual brand logo already contains the words "Village Pizza & Seafood".
 * No supporting text needed — just render the image.
 */
export const Logo = ({ size = 56, className = "" }) => (
  <img
    src={LOGO_URL}
    alt="Village Pizza & Seafood"
    style={{
      height: size,
      width: "auto",
      objectFit: "contain",
      mixBlendMode: "screen",
    }}
    className={className}
    data-testid="brand-logo"
    draggable={false}
  />
);

export default Logo;
