type WatchColor = "navy" | "mint" | "ocean";

interface Props {
  selected: WatchColor;
  setSelected: (color: WatchColor) => void;
}

export default function ThumbnailSelector({ selected, setSelected }: Props) {
  const thumbnails: WatchColor[] = ["navy", "mint", "ocean"];

  const backgroundColors: Record<WatchColor, string> = {
    navy: "#434558",
    mint: "#6ADDCC",
    ocean: "#F9CDC4",
  };

  return (
    <div className="flex gap-[25px]">
      {thumbnails.map((color) => (
        <button
          key={color}
          onClick={() => setSelected(color)}
          aria-label={`Select ${color} thumbnail`}
          className={`relative h-[60px] mt-[25px] p-2 rounded-[10px] transition-border duration-300 border-2
            ${selected === color ? "border-black" : "border-transparent"}`}
          style={{ backgroundColor: backgroundColors[color] }}
        >
          <img src={`/images/${color}.png`} alt={color} width="100" height="60" className="-mt-[55px]" />
        </button>
      ))}
    </div>
  );
}
