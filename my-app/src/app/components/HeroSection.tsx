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
    setSelectedColor((prevColor) => {
      const currentIndex = COLOR_ORDER.indexOf(prevColor);
      const newIndex = direction === "next" ? (currentIndex + 1) % COLOR_ORDER.length : (currentIndex - 1 + COLOR_ORDER.length) % COLOR_ORDER.length;
      return COLOR_ORDER[newIndex];
    });
  };

  const currentIndex = COLOR_ORDER.indexOf(selectedColor);

  const getNumberIcon = () => {
    const numberIcons = [RiNumber1, RiNumber2, RiNumber3];
    const StepIcon = numberIcons[currentIndex];
    return <StepIcon className="text-xl" />;
  };

  return (
    <section className="grid grid-rows-[auto_auto] ml-[5%]">
      {/* Grid layout for text + image */}
      <div className="grid grid-cols-2">
        {/* Text Area */}
        <div className="flex flex-col justify-center pt-[10%] leading-[70pt]">
          <h1 className="text-[5.5rem] font-bold">The Perfect Moment</h1>
          <p className="text-[5.25rem]">Between Past And Future.</p>
          <button className="flex justify-center items-center w-[300px] border-2 border-white rounded-full bg-transparent text-white tracking-wider text-[38px] mt-[10%] hover:bg-white hover:text-black transition duration-300">Buy now</button>
        </div>

        {/* Watch Image + Color Selector */}
        <div className="relative flex items-center justify-center">
          <img src={watchImages[selectedColor]} alt={`${selectedColor} watch`} className="w-[700px] z-10" />
        </div>
      </div>
      <div className="absolute right-[10%] top-[20%] z-20">
        <ColorSelector selected={selectedColor} setSelected={setSelectedColor} />
      </div>

      {/* Thumbnails */}
      <div className="flex justify-end pr-[13%] mt-[680px] z-[2]">
        <ThumbnailSelector selected={selectedColor} setSelected={setSelectedColor} />
      </div>

      {/* Navigation Arrows + Step Indicator */}
      <div className="flex items-center gap-8 mt-8 ml-[0.5%] relative z-[5] top-[-20.5rem]">
        <FaArrowLeftLong onClick={() => handleColorChange("prev")} className={`cursor-pointer text-white text-5xl p-2 hover:scale-125 transition-transform ${currentIndex === 0 ? "opacity-50 pointer-events-none" : ""}`} />
        <div className="flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white/10 text-[1.2rem]">{getNumberIcon()}</div>
        <FaArrowRight onClick={() => handleColorChange("next")} className={`cursor-pointer text-white text-5xl p-2 hover:scale-125 transition-transform ${currentIndex === COLOR_ORDER.length - 1 ? "opacity-50 pointer-events-none" : ""}`} />
      </div>
    </section>
  );
}
