"use client";

type WatchColor = "navy" | "mint" | "ocean";

interface Props {
  selected: WatchColor;
  setSelected: (color: WatchColor) => void;
}

export default function ColorSelector({ selected, setSelected }: Props) {
  const colors: WatchColor[] = ["navy", "mint", "ocean"];

  const colorStyles: Record<WatchColor, string> = {
    navy: "bg-[#434558]",
    mint: "bg-[#6ADDCC]",
    ocean: "bg-[#F9CDC4]",
  };

  return (
    <div className="flex flex-col gap-4">
      {colors.map((color) => (
        <button key={color} onClick={() => setSelected(color)} className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${colorStyles[color]} ${selected === color ? "ring-2 ring-white scale-110" : "border-gray-300"}`} />
      ))}
    </div>
  );
}
