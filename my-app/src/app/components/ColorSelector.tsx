"use client";
type WatchColor = "navy" | "mint" | "ocean";

interface Props {
  selected: WatchColor;
  setSelected: (color: WatchColor) => void;
}

export default function ColorSelector({ selected, setSelected }: Props) {
  const colors: WatchColor[] = ["navy", "mint", "ocean"];

  const colorStyles: Record<WatchColor, string> = {
    navy: "#434558",
    mint: "#6ADDCC",
    ocean: "#F9CDC4",
  };

  return (
    <div className="flex flex-col gap-4">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => setSelected(color)}
          aria-label={`Select ${color}`}
          className={`w-5 h-5 rounded-full border cursor-pointer transition 
            ${selected === color ? "border-white" : "border-gray-400"}`}
          style={{ backgroundColor: colorStyles[color] }}
        />
      ))}
    </div>
  );
}
