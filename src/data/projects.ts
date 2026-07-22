export interface Project {
  id: string;
  title: string;
  category: "Residential" | "Commercial" | "Renovation" | "Turnkey";
  location: string;
  year: string;
  subtitle: string;
  coverImage: string;
  gallery: string[];
  overview: string;
  designStory: string;
  materials: string[];
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "the-luminary-villa",
    title: "The Luminary Villa",
    category: "Residential",
    location: "Indiranagar, Bengaluru",
    year: "2024",
    subtitle: "Double-Height Luxury Living with Warm Architectural Wood & Marble",
    coverImage: "/images/portfolio/project-01/cover.png",
    gallery: [
      "/images/portfolio/project-01/cover.png",
      "/images/hero/hero_bg.png",
      "/images/about/about_studio.png"
    ],
    overview: "A sprawling 4,500 sq.ft luxury private residence crafted with customized teakwood paneling, Italian Statuario marble walls, and floor-to-ceiling glass connections to lush garden surroundings.",
    designStory: "Designed for a modern family in Indiranagar, this residence harmonizes indoor luxury with tropical greenery. Nuspace Decor executed end-to-end custom furniture, spatial planning, and layered architectural lighting.",
    materials: ["Burma Teakwood", "Statuario Marble", "Fluted Glass", "Custom Brushed Brass", "Bouclé Upholstery"],
    featured: true,
  },
  {
    id: "arcadian-corporate-lounge",
    title: "Arcadian Studio & Lounge",
    category: "Commercial",
    location: "UB City Corridor, Bengaluru",
    year: "2024",
    subtitle: "Bespoke Commercial Experience Center with Architectural Crimson Accents",
    coverImage: "/images/portfolio/project-02/cover.png",
    gallery: [
      "/images/portfolio/project-02/cover.png",
      "/images/about/about_studio.png"
    ],
    overview: "A refined boutique corporate studio featuring fluted wooden acoustic paneling, polished terrazzo flooring, and ambient line lighting designed to elevate brand identity.",
    designStory: "Nuspace Decor transformed this 3,200 sq.ft commercial space into an immersive work environment. The interior balances quiet focus areas with open, collaborative lounge spaces.",
    materials: ["Fluted Walnut", "Black Nero Marquina Granite", "Terrazzo", "Architectural LED Strips"],
    featured: true,
  },
  {
    id: "the-sanctuary-penthouse",
    title: "The Sanctuary Penthouse",
    category: "Renovation",
    location: "Koramangala, Bengaluru",
    year: "2023",
    subtitle: "Comprehensive Penthouse Remodeling & Spatial Optimization",
    coverImage: "/images/hero/hero_bg.png",
    gallery: [
      "/images/hero/hero_bg.png",
      "/images/portfolio/project-01/cover.png"
    ],
    overview: "A total layout overhaul of a 3,800 sq.ft penthouse into a sanctuary of minimalist warmth, customized modular wardrobes, and integrated Smart Home automation.",
    designStory: "Stripping away compartmentalized walls, Nuspace Decor created fluid open sightlines between the living, dining, and outdoor deck areas while upgrading all civil, electrical, and cabinetry systems.",
    materials: ["White Oak", "Quartz Surfaces", "Linen Drapery", "Matte Black Metalwork"],
    featured: true,
  },
  {
    id: "zenith-residence-turnkey",
    title: "Zenith Residence",
    category: "Turnkey",
    location: "Sadashivanagar, Bengaluru",
    year: "2024",
    subtitle: "Turnkey Execution of Bespoke Modern Apartment Interior",
    coverImage: "/images/about/about_studio.png",
    gallery: [
      "/images/about/about_studio.png",
      "/images/portfolio/project-02/cover.png"
    ],
    overview: "Complete turnkey design, procurement, civil execution, and styling delivered within a strict 90-day timeline with zero snag compromise.",
    designStory: "From conceptual 3D renders to final handover, every custom wardrobe, modular kitchen unit, and false ceiling detail was crafted in Nuspace's precision workshop.",
    materials: ["Veneer Paneling", "Italian Travertine", "Custom Metal Elements", "Acoustic Insulation"],
    featured: true,
  }
];
