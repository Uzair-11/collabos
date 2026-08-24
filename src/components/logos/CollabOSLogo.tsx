import React from "react";

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * CollabOS Primary Lockup (Light / Parchment backgrounds)
 * Full color: Pine, Clay, Parchment, Slate Ink
 */
export function CollabOSPrimaryLight({ className = "h-10 w-auto", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 280 90"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CollabOS logo"
      className={className}
      {...props}
    >
      <title>CollabOS primary lockup, light</title>
      <path d="M 22 68 L 42 68 L 42 90 L 32 80 L 22 90 Z" fill="#93481F" />
      <path d="M 42 68 L 62 68 L 62 90 L 52 80 L 42 90 Z" fill="#C1622E" />
      <circle cx="42" cy="42" r="24" fill="#1F3D2E" />
      <circle cx="42" cy="42" r="21" fill="none" stroke="#C1622E" strokeWidth="1" />
      <circle cx="42" cy="42" r="18" fill="#F6F0E4" />
      <text
        x="42"
        y="50"
        fontFamily="var(--font-baloo), 'Baloo 2', sans-serif"
        fontWeight="700"
        fontSize="22"
        fill="#1F3D2E"
        textAnchor="middle"
      >
        C
      </text>
      <text
        x="80"
        y="50"
        fontFamily="var(--font-baloo), 'Baloo 2', sans-serif"
        fontWeight="700"
        fontSize="30"
        fill="#2B2B28"
      >
        CollabOS
      </text>
    </svg>
  );
}

/**
 * CollabOS Primary Lockup (Reversed / Dark Pine backgrounds)
 * Light colors on dark surfaces
 */
export function CollabOSPrimaryReversed({ className = "h-10 w-auto", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 280 90"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CollabOS logo reversed"
      className={className}
      {...props}
    >
      <title>CollabOS primary lockup, reversed</title>
      <path d="M 22 68 L 42 68 L 42 90 L 32 80 L 22 90 Z" fill="#D98A5E" />
      <path d="M 42 68 L 62 68 L 62 90 L 52 80 L 42 90 Z" fill="#F2AB84" />
      <circle cx="42" cy="42" r="24" fill="#F6F0E4" />
      <circle cx="42" cy="42" r="18" fill="#1F3D2E" />
      <text
        x="42"
        y="50"
        fontFamily="var(--font-baloo), 'Baloo 2', sans-serif"
        fontWeight="700"
        fontSize="22"
        fill="#F6F0E4"
        textAnchor="middle"
      >
        C
      </text>
      <text
        x="80"
        y="50"
        fontFamily="var(--font-baloo), 'Baloo 2', sans-serif"
        fontWeight="700"
        fontSize="30"
        fill="#F6F0E4"
      >
        CollabOS
      </text>
    </svg>
  );
}

/**
 * CollabOS Icon Badge (Circle monogram with clay ring)
 */
export function CollabOSIconBadge({ className = "h-8 w-8", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 88 88"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CollabOS badge"
      className={className}
      {...props}
    >
      <title>CollabOS icon, badge</title>
      <circle cx="44" cy="44" r="40" fill="#1F3D2E" />
      <circle cx="44" cy="44" r="34" fill="none" stroke="#C1622E" strokeWidth="2" />
      <circle cx="44" cy="44" r="28" fill="#F6F0E4" />
      <text
        x="44"
        y="55"
        fontFamily="var(--font-baloo), 'Baloo 2', sans-serif"
        fontWeight="700"
        fontSize="34"
        fill="#1F3D2E"
        textAnchor="middle"
      >
        C
      </text>
    </svg>
  );
}

/**
 * CollabOS Favicon Icon (Squircle mark)
 */
export function CollabOSFavicon({ className = "h-5 w-5", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CollabOS favicon"
      className={className}
      {...props}
    >
      <title>CollabOS favicon</title>
      <rect width="48" height="48" rx="10" fill="#1F3D2E" />
      <text
        x="24"
        y="32"
        fontFamily="var(--font-baloo), 'Baloo 2', sans-serif"
        fontWeight="700"
        fontSize="22"
        fill="#F6F0E4"
        textAnchor="middle"
      >
        C
      </text>
    </svg>
  );
}

/**
 * CollabOS Watermark (15% opacity document watermark)
 */
export function CollabOSWatermark({ className = "w-36 h-36", ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 90 90"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="CollabOS watermark"
      className={className}
      {...props}
    >
      <title>CollabOS watermark</title>
      <circle cx="45" cy="45" r="40" fill="none" stroke="#2B2B28" strokeWidth="3" opacity="0.15" />
      <text
        x="45"
        y="56"
        fontFamily="var(--font-baloo), 'Baloo 2', sans-serif"
        fontWeight="700"
        fontSize="34"
        fill="#2B2B28"
        opacity="0.15"
        textAnchor="middle"
      >
        C
      </text>
    </svg>
  );
}
