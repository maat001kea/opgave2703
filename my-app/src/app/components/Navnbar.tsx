import { FaApple, FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-12 py-6 bg-transparent font-sans text-white">
      {/* Logo */}
      <div className="text-[3.8rem] ml-[3%]">
        <FaApple />
      </div>

      {/* Menu */}
      <ul className="flex gap-8 list-none text-[2rem] m-0 p-0">
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition">Mac...</li>
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition">iPhone...</li>
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition">iPad</li>
        <li className="bg-white text-[#b6ccda] px-4 py-1 rounded-full font-bold opacity-100">iWatch</li>
        <li className="cursor-pointer opacity-70 hover:opacity-100 transition">Support</li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-6 text-[2.2rem] mr-[3%] cursor-pointer">
        <span className="hover:opacity-80 transition">
          <FaSearch />
        </span>
        <span className="text-[2.2rem] mt-[-10px] text-gray-300">|</span>
        <span className="hover:opacity-80 transition">
          <FiShoppingBag />
        </span>
      </div>
    </nav>
  );
}
