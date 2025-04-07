"use client"; // Denne komponent kører som client component (nødvendigt for interaktivitet i Next.js)

type WatchColor = "navy" | "mint" | "ocean"; // De mulige farver på uret

// Props til komponenten: den valgte farve og en funktion til at ændre den
interface Props {
  selected: WatchColor;
  setSelected: (color: WatchColor) => void;
}

// Komponent til at vælge urfarve
export default function ColorSelector({ selected, setSelected }: Props) {
  const colors: WatchColor[] = ["navy", "mint", "ocean"]; // Liste over farver i rækkefølge

  // Mapping fra farvenavn til faktisk hex-farve
  const colorStyles: Record<WatchColor, string> = {
    navy: "#434558",
    mint: "#6ADDCC",
    ocean: "#F9CDC4",
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Gennemgår alle farver og genererer en lille farvecirkel som knap */}
      {colors.map((color) => (
        <button
          key={color} // React key for performance
          onClick={() => setSelected(color)} // Når der klikkes, vælges denne farve
          aria-label={`Select ${color}`} // Gør knappen tilgængelig for skærmlæsere
          className={`w-5 h-5 rounded-full border cursor-pointer transition 
            ${selected === color ? "border-white" : "border-gray-400"}`} // Fremhæv den valgte farve
          style={{ backgroundColor: colorStyles[color] }} // Indstil baggrundsfarve dynamisk
        />
      ))}
    </div>
  );
}
