"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Inbox, History, User } from "lucide-react";

type Tab = {
  href: string;
  label: string;
  Icon: typeof Home;
};

const tabs: Tab[] = [
  { href: "/", label: "Hem", Icon: Home },
  { href: "/forfragningar", label: "Förfrågningar", Icon: Inbox },
  { href: "/historik", label: "Historik", Icon: History },
  { href: "/profil", label: "Profil", Icon: User },
];

export default function TabBar() {
  const pathname = usePathname();

  // Hide tab bar on /swisha and /skanna (full-screen flows)
  if (pathname === "/swisha" || pathname === "/skanna") return null;

  return (
    <nav className="absolute bottom-0 left-0 right-0 bg-bg/95 backdrop-blur-md border-t border-white/5 pb-6 pt-2">
      <ul className="flex items-center justify-around">
        {tabs.map(({ href, label, Icon }) => {
          const active = pathname === href;
          return (
            <li key={href}>
              <Link
                href={href}
                className={`flex flex-col items-center gap-1 px-3 py-1 transition-colors ${
                  active ? "text-primary" : "text-textSecondary"
                }`}
              >
                <Icon size={22} strokeWidth={active ? 2.5 : 2} />
                <span className="text-[10px] font-medium">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
