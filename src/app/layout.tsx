import type { Metadata } from "next";
import { Cormorant_Garamond, Playfair_Display, DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Coastal Interio | Crafting Spaces That Breathe",
  description: "Bespoke interior design for residential homes in India. Elevate your living rooms, kitchens, and bedrooms with a touch of coastal luxury.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${playfairDisplay.variable} ${dmSans.variable} ${montserrat.variable} cinematic-grain`}
      >
        {children}
      </body>
    </html>
  );
}
