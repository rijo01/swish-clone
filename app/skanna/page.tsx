"use client";

import { useRouter } from "next/navigation";
import { X, Image as ImageIcon, Zap } from "lucide-react";

export default function SkannaPage() {
  const router = useRouter();

  return (
    <div className="absolute inset-0 bg-black flex flex-col">
      {/* Top bar */}
      <div className="flex items-center justify-between px-5 pt-12 pb-4 z-10">
        <button
          aria-label="Stäng"
          onClick={() => router.push("/")}
          className="text-white bg-white/10 rounded-full p-2"
        >
          <X size={22} />
        </button>
        <h1 className="text-white font-semibold">Skanna QR-kod</h1>
        <button aria-label="Blixt" className="text-white bg-white/10 rounded-full p-2">
          <Zap size={22} />
        </button>
      </div>

      {/* Camera viewport placeholder */}
      <div className="flex-1 relative flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 via-zinc-800 to-zinc-900" />
        <div className="relative w-64 h-64">
          {/* Corner brackets */}
          <span className="absolute top-0 left-0 w-10 h-10 border-t-4 border-l-4 border-white rounded-tl-xl" />
          <span className="absolute top-0 right-0 w-10 h-10 border-t-4 border-r-4 border-white rounded-tr-xl" />
          <span className="absolute bottom-0 left-0 w-10 h-10 border-b-4 border-l-4 border-white rounded-bl-xl" />
          <span className="absolute bottom-0 right-0 w-10 h-10 border-b-4 border-r-4 border-white rounded-br-xl" />
        </div>
        <p className="absolute bottom-32 left-0 right-0 text-center text-white/80 text-sm px-8">
          Rikta kameran mot en QR-kod
        </p>
      </div>

      {/* Bottom action */}
      <div className="px-5 pb-10 z-10">
        <button className="w-full bg-white/10 backdrop-blur rounded-full py-4 text-white font-medium flex items-center justify-center gap-2">
          <ImageIcon size={20} />
          <span>Välj från bildbibliotek</span>
        </button>
      </div>
    </div>
  );
}
