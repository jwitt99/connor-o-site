"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Gallery", href: "/gallery" },
    { name: "Resume", href: "/resume" },
    { name: "Writing", href: "/writing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800 dark:bg-zinc-950/95 dark:supports-[backdrop-filter]:bg-zinc-950/60">
      <nav className="flex w-full items-center py-4">
        <Link href="/" className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 ml-20">
          Connor O. Locklin
        </Link>
        <ul className="flex items-center gap-8 mx-auto">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-zinc-900 dark:hover:text-zinc-50 ${
                  pathname === item.href
                    ? "text-zinc-900 dark:text-zinc-50"
                    : "text-zinc-600 dark:text-zinc-400"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
