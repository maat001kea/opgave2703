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
    <div style={{ display: "flex", gap: "25px" }}>
      {thumbnails.map((color) => (
        <div
          key={color}
          onClick={() => setSelected(color)}
          style={{
            height: 40,
            cursor: "pointer",
            marginTop: "25px",
            padding: "0.5rem",
            borderRadius: "10px",
            backgroundColor: backgroundColors[color],

            transition: "border 0.3s ease",
          }}
        >
          <img
            src={`/images/${color}.png`}
            alt={color}
            width="100"
            height="100"
            style={{
              marginTop: "-55px", // 👈 Den eneste ændring
            }}
          />
        </div>
      ))}
    </div>
  );
}
