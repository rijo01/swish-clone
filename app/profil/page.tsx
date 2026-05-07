"use client";

import { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import {
  Settings,
  ChevronRight,
  Infinity,
  Ban,
  Landmark,
  BarChart3,
  Upload,
  RotateCcw,
  X,
} from "lucide-react";
import { useApp } from "@/context/AppContext";

export default function ProfilPage() {
  const { phone, customQR, setCustomQR, hydrated } = useApp();
  const fileRef = useRef<HTMLInputElement>(null);
  const [showSettings, setShowSettings] = useState(false);

  const onPickFile = () => fileRef.current?.click();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setCustomQR(reader.result as string);
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  return (
    <div className="px-5 pt-2">
      {/* Header */}
      <div className="flex items-center justify-between mt-3 mb-6">
        <h1 className="text-3xl font-bold">Profil</h1>
        <button
          aria-label="Inställningar"
          className="text-white/90"
          onClick={() => setShowSettings(true)}
        >
          <Settings size={24} />
        </button>
      </div>

      {/* QR card with green frame */}
      <div className="bg-accentGreen rounded-2xl p-4 mb-3">
        <div className="bg-white rounded-xl p-5 flex items-center justify-center aspect-square">
          {!hydrated ? (
            <div className="w-full h-full bg-gray-100 animate-pulse rounded" />
          ) : customQR ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={customQR}
              alt="Egen uppladdad bild"
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <QRCodeSVG
              value={phone || "+46"}
              size={220}
              level="M"
              bgColor="#ffffff"
              fgColor="#000000"
            />
          )}
        </div>
        <div className="text-center text-white font-semibold tracking-wide py-3">
          {hydrated ? phone : "+46 ..."}
        </div>
      </div>

      {/* Upload / reset row */}
      <div className="flex gap-2 mb-5">
        <button
          onClick={onPickFile}
          className="flex-1 bg-secondaryBg rounded-full py-3 px-4 text-white text-sm font-medium flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
        >
          <Upload size={16} />
          <span>Ladda upp egen bild</span>
        </button>
        {customQR && (
          <button
            onClick={() => setCustomQR(null)}
            className="bg-secondaryBg rounded-full py-3 px-4 text-white text-sm font-medium flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
            aria-label="Återställ QR-kod"
          >
            <RotateCcw size={16} />
            <span>Återställ</span>
          </button>
        )}
        <input
          ref={fileRef}
          type="file"
          accept="image/*"
          onChange={onFileChange}
          className="hidden"
        />
      </div>

      {/* Settings list */}
      <ul className="bg-card rounded-2xl divide-y divide-white/5 overflow-hidden">
        <ProfilRow icon={<Infinity size={20} />} label="Automatiska betalningar" />
        <ProfilRow icon={<Ban size={20} />} label="Blockerade avsändare" />
        <ProfilRow icon={<Landmark size={20} />} label="Min bank" />
        <ProfilRow icon={<BarChart3 size={20} />} label="Min data" />
      </ul>

      {showSettings && (
        <SettingsModal onClose={() => setShowSettings(false)} />
      )}
    </div>
  );
}

function ProfilRow({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <li>
      <button className="w-full flex items-center gap-3 px-4 py-4 text-left active:bg-white/5">
        <span className="text-textSecondary">{icon}</span>
        <span className="flex-1 text-white">{label}</span>
        <ChevronRight size={18} className="text-textSecondary" />
      </button>
    </li>
  );
}

function SettingsModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/60">
      <div className="bg-card w-full max-w-phone rounded-t-2xl p-5 pb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Inställningar</h2>
          <button onClick={onClose} aria-label="Stäng">
            <X size={22} />
          </button>
        </div>
        <p className="text-textSecondary text-sm">
          Detta är en visuell prototyp för demoändamål.
        </p>
        <p className="text-textSecondary text-xs mt-3 italic">
          Demo — ej Swish AB
        </p>
      </div>
    </div>
  );
}
