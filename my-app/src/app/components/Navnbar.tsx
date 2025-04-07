"use client"; // 👈 Nødvendigt i Next.js App Router for at kunne bruge client-side hooks som usePathname()

import { FaApple, FaSearch } from "react-icons/fa"; // Apple-logo og søgeikon
import { FiShoppingBag } from "react-icons/fi"; // Shopping bag ikon
import Link from "next/link"; // Next.js link-komponent til navigation
import { usePathname } from "next/navigation"; // Bruges til at hente den aktuelle URL-path

export default function Navbar() {
  const pathname = usePathname(); // Henter den aktuelle path, fx "/ipad"

  return (
    <nav className="flex justify-between items-center px-38 py-6 font-sans text-white bg-[#b6ccda] w-full z-50">
      {/* Venstre side: Apple logo */}
      <div className="text-[4.2rem]">
        <FaApple />
      </div>

      {/* Midten: Navigation links */}
      <ul className="flex gap-25 text-[1.5rem] font-medium">
        {/* Hvert menupunkt er et Link med visuel feedback hvis det er aktivt */}
        <li>
          <Link href="/mac">
            <span className={`${pathname === "/mac" ? "underline decoration-white underline-offset-4" : "opacity-70 hover:opacity-100"}`}>iMac</span>
          </Link>
        </li>

        <li>
          <Link href="/ipad">
            <span className={`${pathname === "/ipad" ? "underline decoration-white underline-offset-4" : "opacity-70 hover:opacity-100"}`}>iPad</span>
          </Link>
        </li>

        <li>
          <Link href="/iphone">
            <span className={`${pathname === "/iphone" ? "underline decoration-white underline-offset-4" : "opacity-70 hover:opacity-100"}`}>iPhone</span>
          </Link>
        </li>

        <li>
          <Link href="/iwatch">
            <span className={`${pathname === "/iwatch" ? "underline decoration-white underline-offset-4 font-bold" : "opacity-70 hover:opacity-100 Z-1000"}`}>iWatch</span>
          </Link>
        </li>

        <li>
          <Link href="/support">
            <span className={`${pathname === "/support" ? "underline decoration-white underline-offset-4" : "opacity-70 hover:opacity-100 Z-1000"}`}>Support</span>
          </Link>
        </li>
      </ul>

      {/* Højre side: Ikoner */}
      <div className="flex items-center gap-6 text-[1.7rem]">
        {/* Søgeikon */}
        <span className="hover:opacity-80 transition">
          <FaSearch />
        </span>

        {/* Lodret skillelinje */}
        <span className="text-white text-[1.8rem] select-none">|</span>

        {/* Indkøbspose ikon */}
        <span className="hover:opacity-80 transition">
          <FiShoppingBag />
        </span>
      </div>
    </nav>
  );
}
