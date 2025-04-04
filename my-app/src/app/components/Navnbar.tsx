"use client"; // 👈 Required for using usePathname()

import { FaApple, FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname(); // ✅ You forgot this line before

  return (
    <nav className="flex justify-between items-center px-38 py-6 font-sans text-white bg-[#b6ccda] w-full z-50">
      {/* Left: Logo */}
      <div className="text-[4.2rem]">
        <FaApple />
      </div>

      {/* Center: Menu */}
      <ul className="flex gap-25 text-[1.5rem] font-medium  Z-1000">
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

      {/* Right: Icons */}
      <div className="flex items-center gap-6 text-[1.7rem]">
        <span className="hover:opacity-80 transition">
          <FaSearch />
        </span>
        <span className="text-white text-[1.8rem] select-none">|</span>
        <span className="hover:opacity-80 transition">
          <FiShoppingBag />
        </span>
      </div>
    </nav>
  );
}
