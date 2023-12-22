import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Product Design Portfolio of Zac Halbert",
  description: "Look at my work please and thank you",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
