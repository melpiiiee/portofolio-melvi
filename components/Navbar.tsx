"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Works", href: "/works" },
  { label: "Skills", href: "/skills" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-6 relative z-50">
      <Link href="/" className="flex items-center gap-1 text-xl font-bold">
        melvi.<span className="text-purple-500">*</span>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
        {navLinks.map((link) => (
          <NavLink key={link.label} link={link} isActive={pathname === link.href} />
        ))}
      </ul>

      {/* Hamburger Button */}
      <button className="md:hidden z-50 p-2 text-gray-700" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-b border-gray-100 p-6 flex flex-col items-center gap-6 md:hidden z-40">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-semibold ${
                pathname === link.href ? "text-purple-500" : "text-gray-800"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}

function NavLink({ link, isActive }: { link: { label: string, href: string }, isActive: boolean }) {
  return (
    <li className="relative">
      <Link href={link.href} className={`transition-colors hover:text-purple-500 ${isActive ? "text-purple-500" : ""}`}>
        {link.label}
      </Link>
      {isActive && <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-purple-500" />}
    </li>
  );
}