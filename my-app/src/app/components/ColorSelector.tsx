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
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      {colors.map((color) => (
        <div
          key={color}
          onClick={() => setSelected(color)}
          style={{
            width: 20,
            height: 20,
            borderRadius: "50%",
            backgroundColor: colorStyles[color],
            border: selected === color ? "2px solid black" : "1px solid gray",
            cursor: "pointer",
          }}
        />
      ))}
    </div>
  );
}
