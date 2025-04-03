import "./globals.css";

export const metadata = {
  title: "iWatch",
  description: "iWatch demo UI",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
