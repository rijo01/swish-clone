import { ReactNode } from "react";

export default function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-black flex justify-center">
      <div className="relative w-full max-w-phone min-h-screen bg-bg overflow-hidden">
        {children}
      </div>
    </div>
  );
}
