"use client";
import { useState } from "react";
import ColorSelector from "./ColorSelector";
import ThumbnailSelector from "./ThumbnailSelector";
import { FaArrowLeftLong, FaArrowRight } from "react-icons/fa6";
import { RiNumber1, RiNumber2, RiNumber3 } from "react-icons/ri";

type WatchColor = "navy" | "mint" | "ocean";
const COLOR_ORDER: WatchColor[] = ["navy", "mint", "ocean"];

const watchImages: Record<WatchColor, string> = {
  navy: "../images/navy.png",
  mint: "../images/mint.png",
  ocean: "../images/ocean.png",
};

export default function HeroSection() {
  const [selectedColor, setSelectedColor] = useState<WatchColor>("navy");

  const handleColorChange = (direction: "next" | "prev") => {
    const currentIndex = COLOR_ORDER.indexOf(selectedColor);
    const newIndex = direction === "next" ? (currentIndex + 1) % COLOR_ORDER.length : (currentIndex - 1 + COLOR_ORDER.length) % COLOR_ORDER.length;
    setSelectedColor(COLOR_ORDER[newIndex]);
  };

  const getNumberIcon = () => {
    const numberIcons = [RiNumber1, RiNumber2, RiNumber3];
    const StepIcon = numberIcons[COLOR_ORDER.indexOf(selectedColor)];
    return <StepIcon className="text-2xl text-white" />;
  };

  return (
    <section className="w-full px-6 py-20 bg-[#b6ccda] font-sans">
      {/* Wrapper */}
      <div className="grid grid-rows-[auto_auto] gap-8 max-w-[1400px] mx-auto">
        {/* Text + Watch Image */}
        <div className="grid lg:grid-cols-2 gap-[2rem] items-center">
          {/* Text */}
          <div className="flex flex-col  pt-[10%] -ml-25">
            <h1 className="text-[5.5rem] font-bold leading-[1.1] text-white mb-0 w-250">The Perfect Moment</h1>
            <p className="text-[5.25rem] leading-[1.1] text-white mb-8">Between Past And Future.</p>
            <button className="inline-flex items-center justify-center w-[300px] h-[60px] border-2 border-white rounded-full bg-transparent text-white text-[1.5rem] tracking-wide mt-[15%] transition-all duration-300 hover:bg-white hover:text-black">Buy now</button>
          </div>

          {/* Image + Color Selector */}
          <div className="relative flex justify-center items-center mb-0 overflow-visible">
            <img src={watchImages[selectedColor]} alt={`${selectedColor} watch`} className="w-auto h-auto scale-[1.5] transform  -mt-20 ml-55" />
            <div className="absolute -right-25 top-1/2 -translate-y-1/2 z-20 scale-[1.5]">
              <ColorSelector selected={selectedColor} setSelected={setSelectedColor} />
            </div>
          </div>
        </div>

        {/* ThumbnailSelector */}
        <div className="flex justify-end pt-25 pr-[13%] -pt-35 z-10 -mr-50">
          <ThumbnailSelector selected={selectedColor} setSelected={setSelectedColor} />
        </div>

        {/* Arrow Navigatiown */}
        <div className="flex items-center gap-8 mt-8 -ml-25 relative z-10 bottom-35">
          <FaArrowLeftLong onClick={() => handleColorChange("prev")} className={`navArrow cursor-pointer text-white text-5xl p-2 transition-transform hover:scale-125 ${selectedColor === "navy" ? "opacity-50 pointer-events-none" : ""}`} />
          <div className="stepIndicator flex items-center justify-center w-[50px] h-[50px] rounded-full bg-white/10 text-[1.2rem]">{getNumberIcon()}</div>
          <FaArrowRight onClick={() => handleColorChange("next")} className={`navArrow cursor-pointer text-white text-5xl p-2 transition-transform hover:scale-125 ${selectedColor === "ocean" ? "opacity-50 pointer-events-none" : ""}`} />
        </div>
      </div>
    </section>
  );
}
