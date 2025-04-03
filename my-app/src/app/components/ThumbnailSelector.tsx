"use client";

type WatchColor = "navy" | "mint" | "ocean";

interface Props {
  selected: WatchColor;
  setSelected: (color: WatchColor) => void;
}

export default function ThumbnailSelector({ selected, setSelected }: Props) {
  const thumbnails: WatchColor[] = ["navy", "mint", "ocean"];

  const backgroundColors: Record<WatchColor, string> = {
    navy: "bg-[#434558]",
    mint: "bg-[#6ADDCC]",
    ocean: "bg-[#F9CDC4]",
  };

  return (
    <div className="flex gap-8 mt-4">
      {thumbnails.map((color) => (
        <button key={color} onClick={() => setSelected(color)} className={`relative w-[10px] h-[10px] rounded-xl overflow-visible transition-all duration-300 ${backgroundColors[color]} ${selected === color ? "ring-4 ring-white scale-105" : "opacity-80 hover:scale-105"}`}>
          <img src={`/images/${color}.png`} alt={color} className="w-[100px] absolute -top-12 left-1/2 -translate-x-1/2" />
        </button>
      ))}
    </div>
  );
}
