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
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Nuspace Creations | Luxury Interior Design Studio Bengaluru",
  description: "Nuspace Creations is a boutique interior design studio in Bengaluru specializing in bespoke residential, commercial, renovation, and turnkey interiors. Dreams to Perfection.",
  keywords: [
    "Nuspace Creations",
    "Interior designers in Bangalore",
    "Interior design company in Bangalore",
    "Interior designers in Bengaluru",
    "Interior design studio Bangalore",
    "Residential interior designers Bangalore",
    "Commercial interior designers Bangalore",
    "Turnkey interior design Bangalore",
    "Home interior design Bangalore",
    "Renovation and remodeling Bangalore"
  ],
  openGraph: {
    title: "Nuspace Creations | Dreams to Perfection | Luxury Interiors Bengaluru",
    description: "Bespoke residential & commercial interior design studio in Bengaluru. Experience luxury, functionality, and timeless aesthetics.",
    type: "website",
    locale: "en_IN",
    siteName: "Nuspace Creations",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InteriorDesignBusiness",
    "name": "Nuspace Creations",
    "alternateName": "Nuspace Creations Studio",
    "description": "Bespoke residential and commercial interior design studio specializing in luxury homes, renovation, and turnkey execution in Bengaluru.",
    "foundingDate": "2015",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Vinayaka Layout, Abbigere",
      "addressLocality": "Bengaluru",
      "addressRegion": "Karnataka",
      "postalCode": "560090",
      "addressCountry": "IN"
    },
    "telephone": "+919886527878",
    "email": "nuspacedecor@gmail.com",
    "taxID": "29DVLPP6022C1ZH",
    "priceRange": "$$$$"
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${cormorantGaramond.variable} ${playfairDisplay.variable} ${dmSans.variable} ${montserrat.variable} cinematic-grain`}
      >
        {children}
      </body>
    </html>
  );
}

