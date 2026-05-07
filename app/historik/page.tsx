"use client";

import { Mail } from "lucide-react";
import PrimaryButton from "@/components/PrimaryButton";
import BankIDLogo from "@/components/BankIDLogo";

function SkeletonRow({
  avatar,
  trailing,
}: {
  avatar: React.ReactNode;
  trailing?: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 py-4">
      {avatar}
      <div className="flex-1 space-y-2">
        <div className="h-3 bg-secondaryBg rounded w-2/3" />
        <div className="h-3 bg-secondaryBg rounded w-1/3" />
      </div>
      {trailing}
    </div>
  );
}

export default function HistorikPage() {
  return (
    <div className="px-5 pt-2 flex flex-col h-[calc(100vh-44px)]">
      <h1 className="text-3xl font-bold mb-6 mt-3">Historik</h1>

      <div className="flex-1 space-y-1">
        <SkeletonRow
          avatar={<div className="w-12 h-12 rounded-full bg-secondaryBg" />}
        />
        <SkeletonRow
          avatar={
            <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center font-bold text-white">
              GF
            </div>
          }
          trailing={
            <span className="text-2xl" aria-hidden>
              ✉️
            </span>
          }
        />
        <SkeletonRow
          avatar={
            <div className="w-12 h-12 rounded-md bg-[#1A2A45] flex items-center justify-center font-bold text-white">
              P
            </div>
          }
        />

        <p className="text-textSecondary text-center mt-8 text-sm">
          Identifiera dig med BankID för att se din historik.
        </p>
      </div>

      <div className="mb-4">
        <PrimaryButton trailing={<BankIDLogo />}>Visa historik</PrimaryButton>
      </div>
    </div>
  );
}
