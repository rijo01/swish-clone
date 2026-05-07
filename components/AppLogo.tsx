export default function AppLogo({ size = 40 }: { size?: number }) {
  // Custom (non-Swish) colorful gradient circle, original artwork.
  const gradientId = `logo-gradient-${size}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="App-logotyp"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF3B6F" />
          <stop offset="35%" stopColor="#FF7A3D" />
          <stop offset="70%" stopColor="#A557FF" />
          <stop offset="100%" stopColor="#3FA9F5" />
        </linearGradient>
      </defs>
      <circle cx="20" cy="20" r="18" fill={`url(#${gradientId})`} />
      <path
        d="M14 22 C14 18, 18 16, 22 18 C26 20, 26 24, 22 26"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
