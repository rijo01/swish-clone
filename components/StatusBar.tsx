import { Signal, Wifi, BatteryFull } from "lucide-react";

export default function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-3 pb-1 text-white text-sm font-semibold">
      <span className="tracking-tight">20:55</span>
      <div className="flex items-center gap-1.5">
        <span className="text-xs font-bold">5G</span>
        <Signal size={14} strokeWidth={3} />
        <BatteryFull size={18} strokeWidth={2} />
      </div>
    </div>
  );
}
