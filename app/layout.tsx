import type { Metadata, Viewport } from "next";
import "./globals.css";
import StatusBar from "@/components/StatusBar";
import TabBar from "@/components/TabBar";
import PhoneFrame from "@/components/PhoneFrame";
import { AppProvider } from "@/context/AppContext";

export const metadata: Metadata = {
  title: "Swish-klon (Demo)",
  description: "Visuell prototyp — ej Swish AB",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0B1220",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body className="bg-black">
        <AppProvider>
          <PhoneFrame>
            <StatusBar />
            <main className="pb-24">{children}</main>
            <TabBar />
          </PhoneFrame>
        </AppProvider>
      </body>
    </html>
  );
}
