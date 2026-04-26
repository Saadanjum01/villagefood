import React from "react";
import { Pizza } from "lucide-react";

/**
 * Logo — swap the placeholder for a real image:
 *   1) Drop your file at /app/frontend/src/assets/logo.webp
 *   2) Replace `const logoSrc = null;` below with:
 *        import logo from "../assets/logo.webp";
 *        const logoSrc = logo;
 */
const logoSrc = null;

export const Logo = ({ size = 44, withText = false, textColor = "var(--gold)" }) => {
  return (
    <div className="flex items-center gap-3" data-testid="brand-logo">
      {logoSrc ? (
        <img
          src={logoSrc}
          alt="Village Pizza & Seafood"
          style={{ height: size, width: size, objectFit: "contain" }}
        />
      ) : (
        <div
          className="brand-gradient-warm flex items-center justify-center rounded-full"
          style={{
            height: size,
            width: size,
            border: "2px solid var(--gold)",
          }}
        >
          <Pizza color="#fff" size={size * 0.55} />
        </div>
      )}
      {withText && (
        <div className="leading-none">
          <div
            className="font-display"
            style={{ color: textColor, fontSize: size * 0.55, lineHeight: 1 }}
          >
            VILLAGE
          </div>
          <div
            className="font-ui"
            style={{
              color: textColor,
              fontSize: size * 0.28,
              letterSpacing: "0.18em",
              marginTop: 2,
            }}
          >
            Pizza & Seafood
          </div>
        </div>
      )}
    </div>
  );
};

export default Logo;
