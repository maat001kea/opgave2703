import { FaApple, FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-38 py-6 font-sans text-white bg-[#b6ccda] w-full z-50">
      {/* Left: Logo */}
      <div className="text-[4.2rem]">
        <FaApple />
      </div>

      {/* Center: Menu */}
      <ul className="flex gap-25 text-[1.5rem] font-medium">
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition">Mac</li>
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition">iPhone</li>
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition">iPad</li>
        <li className="bg-white text-[#b6ccda] px-5 py-1 rounded-full font-bold">iWatch</li>
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition">Support</li>
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
