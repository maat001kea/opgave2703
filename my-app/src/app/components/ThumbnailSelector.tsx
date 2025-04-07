// Definerer de mulige farver for uret
type WatchColor = "navy" | "mint" | "ocean";

// Props som komponenten modtager: den valgte farve og en funktion til at opdatere den
interface Props {
  selected: WatchColor;
  setSelected: (color: WatchColor) => void;
}

// Hovedkomponenten: ThumbnailSelector
export default function ThumbnailSelector({ selected, setSelected }: Props) {
  // Liste over thumbnails (samme som farverne)
  const thumbnails: WatchColor[] = ["navy", "mint", "ocean"];

  // Definerer baggrundsfarver for hver thumbnail
  const backgroundColors: Record<WatchColor, string> = {
    navy: "#434558",
    mint: "#6ADDCC",
    ocean: "#F9CDC4",
  };

  return (
    // Wrapper div for thumbnails – viser dem i en række med spacing
    <div className="flex gap-[25px]">
      {/* Mapper over hver farve og returnerer en knap med billede */}
      {thumbnails.map((color) => (
        <button
          key={color} // React kræver en unik key når man mapper
          onClick={() => setSelected(color)} // Når knappen klikkes, ændres den valgte farve
          aria-label={`Select ${color} thumbnail`} // Gør knappen tilgængelig for screen readers
          className={`relative h-[60px] mt-[25px] p-2 rounded-[10px] transition-border duration-300 border-2
            ${selected === color ? "border-white" : "border-transparent"}`} // Hvis farven er valgt → vis hvid kant
          style={{ backgroundColor: backgroundColors[color] }} // Sætter dynamisk baggrundsfarve
        >
          {/* Billede af uret med negativ topmargin så det overlapper knappen */}
          <img src={`/images/${color}.png`} alt={color} width="100" height="60" className="-mt-[55px]" />
        </button>
      ))}
    </div>
  );
}
