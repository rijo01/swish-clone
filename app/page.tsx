"use client";

import Link from "next/link";
import { QrCode } from "lucide-react";
import AppLogo from "@/components/AppLogo";
import PrimaryButton from "@/components/PrimaryButton";
import SecondaryButton from "@/components/SecondaryButton";

function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 240 200"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="phoneGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#1F2F4D" />
          <stop offset="100%" stopColor="#142037" />
        </linearGradient>
        <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1B2C49" />
          <stop offset="100%" stopColor="#0F1A2E" />
        </linearGradient>
      </defs>

      {/* Phone body */}
      <rect
        x="60"
        y="20"
        width="120"
        height="170"
        rx="20"
        fill="url(#phoneGrad)"
        stroke="#2A3A5C"
        strokeWidth="2"
      />
      <rect
        x="68"
        y="32"
        width="104"
        height="146"
        rx="12"
        fill="url(#screenGrad)"
      />

      {/* Toggle row */}
      <text
        x="80"
        y="78"
        fill="#fff"
        fontSize="9"
        fontFamily="sans-serif"
        fontWeight="600"
      >
        Datadelning
      </text>
      <rect x="138" y="68" width="26" height="14" rx="7" fill="#7FB539" />
      <circle cx="158" cy="75" r="5" fill="#fff" />

      {/* Two row placeholders */}
      <rect x="80" y="96" width="80" height="6" rx="3" fill="#2A3A5C" />
      <rect x="80" y="108" width="60" height="6" rx="3" fill="#2A3A5C" />

      {/* Pointing hand */}
      <g transform="translate(140 110)">
        <ellipse cx="14" cy="40" rx="22" ry="10" fill="#0B1220" opacity="0.4" />
        <path
          d="M0 30 L10 12 L18 14 L20 6 L26 8 L24 22 L36 24 L36 36 L18 42 Z"
          fill="#F4C9A8"
          stroke="#C99B79"
          strokeWidth="1"
        />
      </g>
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="px-5 pt-2 flex flex-col h-[calc(100vh-44px)]">
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <AppLogo size={44} />
        <div className="leading-tight">
          <div className="font-bold text-xl">Swish</div>
          <div className="text-textSecondary text-sm">Nordea</div>
        </div>
      </div>

      {/* Card */}
      <div className="bg-card rounded-2xl p-5 mb-4">
        <div className="px-4">
          <HeroIllustration />
        </div>
        <h1 className="text-2xl font-bold leading-tight mt-2 mb-4">
          Hjälp oss göra Swish ännu bättre
        </h1>
        <div className="flex gap-2">
          <SecondaryButton className="flex-1">Läs mer</SecondaryButton>
          <SecondaryButton className="flex-1">Tillåt datadelning</SecondaryButton>
        </div>
      </div>

      <div className="flex-1" />

      {/* Bottom CTAs */}
      <div className="flex gap-3 mb-2">
        <Link href="/swisha" className="flex-[3]">
          <PrimaryButton>Swisha</PrimaryButton>
        </Link>
        <Link href="/skanna" className="flex-1">
          <button className="bg-secondaryBg w-full h-full rounded-full py-4 text-white flex items-center justify-center gap-2 font-semibold active:scale-[0.99] transition-transform">
            <QrCode size={20} />
            <span>Skanna</span>
          </button>
        </Link>
      </div>
    </div>
  );
}
