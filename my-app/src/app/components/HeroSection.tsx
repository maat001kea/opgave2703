"use client";

import { useState } from "react";
import styles from "./HeroSection.module.css";
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
      let newIndex = currentIndex;

      if (direction === "next") {
        newIndex = (currentIndex + 1) % COLOR_ORDER.length;
      } else {
        newIndex = (currentIndex - 1 + COLOR_ORDER.length) % COLOR_ORDER.length;
      }
      return COLOR_ORDER[newIndex];
    });
  };

  const currentIndex = COLOR_ORDER.indexOf(selectedColor);

  const getNumberIcon = () => {
    switch (currentIndex + 1) {
      case 1:
        return <RiNumber1 className={styles.numberIcon} />;
      case 2:
        return <RiNumber2 className={styles.numberIcon} />;
      case 3:
        return <RiNumber3 className={styles.numberIcon} />;
      default:
        return <RiNumber1 className={styles.numberIcon} />;
    }
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.grid}>
        <div className={styles.textArea}>
          <h1 className={styles.title}>The Perfect Moment</h1>
          <p className={styles.subtitle}>Between Past And Future.</p>
          <button className={styles.ctaButton}>Buy now</button>
        </div>

        <div className={styles.item}>
          <div className={styles.watchImage}>
            <img src={watchImages[selectedColor]} alt={`${selectedColor} watch`} width="700" className={styles.watchImage} />
            <div className={styles.colorSelector}>
              <ColorSelector selected={selectedColor} setSelected={setSelectedColor} />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.thumbnailSelector}>
        <ThumbnailSelector selected={selectedColor} setSelected={setSelectedColor} />
      </div>

      <div className={styles.arrowNavigation}>
        <FaArrowLeftLong onClick={() => handleColorChange("prev")} className={`${styles.navArrow} ${currentIndex === 0 ? styles.disabled : ""}`} />

        <div className={styles.stepIndicator}>{getNumberIcon()}</div>

        <FaArrowRight onClick={() => handleColorChange("next")} className={`${styles.navArrow} ${currentIndex === COLOR_ORDER.length - 1 ? styles.disabled : ""}`} />
      </div>
    </section>
  );
}
