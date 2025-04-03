"use client";

import { useState } from "react";
import ColorSelector from "./ColorSelector";
import ThumbnailSelector from "./ThumbnailSelector";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

type WatchColor = "navy" | "mint" | "ocean";
const COLOR_ORDER: WatchColor[] = ["navy", "mint", "ocean"];

const watchImages: Record<WatchColor, string> = {
  navy: "/images/navy.png",
  mint: "/images/mint.png",
  ocean: "/images/ocean.png",
};

export default function HeroSection() {
  const [selectedColor, setSelectedColor] = useState<WatchColor>("navy");

  const handleColorChange = (direction: "next" | "prev") => {
    const currentIndex = COLOR_ORDER.indexOf(selectedColor);
    const newIndex = direction === "next" ? (currentIndex + 1) % COLOR_ORDER.length : (currentIndex - 1 + COLOR_ORDER.length) % COLOR_ORDER.length;
    setSelectedColor(COLOR_ORDER[newIndex]);
  };

  const currentIndex = COLOR_ORDER.indexOf(selectedColor);

  const getNumberIcon = () => {
    const icons = [<RiNumber1 />, <RiNumber2 />, <RiNumber3 />];
    return <div className="text-[1.5rem] text-white">{icons[currentIndex]}</div>;
  };

  return (
    <section className="relative min-h-screen bg-[#b6ccda] text-white px-16 py-20 overflow-hidden rounded-[1rem]">
      {/* Top Grid */}
      <div className="grid grid-cols-2 items-center">
        {/* LEFT: Text */}
        <div className="space-y-6">
          <h1 className="text-[4.5rem] font-bold leading-tight">The Perfect Moment</h1>
          <p className="text-[2.5rem] text-white leading-snug">Between Past And Future.</p>
          <button className="mt-6 border border-white text-white px-8 py-2 rounded-full text-lg hover:bg-white hover:text-[#b6ccda] transition-all">Buy Now</button>
        </div>

        {/* RIGHT: Watch + ColorSelector */}
        <div className="relative flex justify-center items-center">
          <img src={watchImages[selectedColor]} alt={`${selectedColor} watch`} className="w-[420px] z-10" />
          <div className="absolute right-[-40px] top-[25%] flex flex-col gap-4 z-20">
            <ColorSelector selected={selectedColor} setSelected={setSelectedColor} />
          </div>
        </div>
      </div>

      {/* Bottom: Navigation and Thumbnails */}
      <div className="absolute bottom-10 left-0 right-0 px-16 flex items-center justify-between">
        {/* Navigation Arrows */}
        <div className="flex items-center gap-6">
          <FaArrowLeftLong onClick={() => handleColorChange("prev")} className={`text-white text-xl cursor-pointer transition-transform ${currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "hover:scale-125"}`} />
          {getNumberIcon()}
          <FaArrowRight onClick={() => handleColorChange("next")} className={`text-white text-xl cursor-pointer transition-transform ${currentIndex === COLOR_ORDER.length - 1 ? "opacity-50 cursor-not-allowed" : "hover:scale-125"}`} />
        </div>

        {/* Thumbnails */}
        <div>
          <ThumbnailSelector selected={selectedColor} setSelected={setSelectedColor} />
        </div>
      </div>
    </section>
  );
}
