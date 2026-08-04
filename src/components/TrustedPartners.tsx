"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getCdnUrl } from "@/lib/cdn";
import { ShieldCheck } from "lucide-react";

interface Partner {
  name: string;
  category: string;
  logo: string;
}

const partners: Partner[] = [
  { name: "Greenply", category: "Plywood & Veneers", logo: getCdnUrl("/images/partners/greenply.svg") },
  { name: "CenturyPly", category: "Plywood & Laminates", logo: getCdnUrl("/images/partners/centuryply.svg") },
  { name: "Merino", category: "Surface Laminates", logo: getCdnUrl("/images/partners/merino.svg") },
  { name: "Greenlam", category: "Architectural Cladding", logo: getCdnUrl("/images/partners/greenlam.svg") },
  { name: "Hettich", category: "German Hardware", logo: getCdnUrl("/images/partners/hettich.svg") },
  { name: "Action Tesa", category: "HDMR & MDF Boards", logo: getCdnUrl("/images/partners/actiontesa.svg") },
  { name: "Häfele", category: "Architectural Fittings", logo: getCdnUrl("/images/partners/hafele.svg") },
  { name: "Ebco", category: "Furniture Accessories", logo: getCdnUrl("/images/partners/ebco.svg") },
  { name: "Asian Paints", category: "Paints & Coatings", logo: getCdnUrl("/images/partners/asianpaints.svg") },
  { name: "Saint-Gobain", category: "High Performance Glass", logo: getCdnUrl("/images/partners/saintgobain.svg") },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function TrustedPartners() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="partners"
      ref={ref}
      style={{
        padding: "clamp(4rem, 8vw, 8rem) 1.5rem",
        backgroundColor: "#FAF8F5",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(28, 27, 26, 0.08)",
        borderBottom: "1px solid rgba(28, 27, 26, 0.08)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(24px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#8B263E",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <ShieldCheck size={14} strokeWidth={1.5} color="#8B263E" />
              MATERIAL & HARDWARE STANDARDS
            </span>
            <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 5vw, 4rem)",
              color: "#1C1B1A",
              fontWeight: 500,
              marginBottom: "1rem",
              lineHeight: 1.12,
            }}
          >
            Our Trusted Partners
          </h2>

          <p
            style={{
              color: "rgba(28, 27, 26, 0.72)",
              fontSize: "1rem",
              maxWidth: "680px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Collaborating with India&apos;s leading material and hardware brands to deliver uncompromising quality, architectural endurance, and luxury finishes.
          </p>
        </div>

        {/* Desktop 5-Col x 2-Row Grid (Visible >= 768px) */}
        <div
          className="partners-desktop-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "1.25rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(30px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
          }}
        >
          {partners.map((partner, idx) => (
            <PartnerCard key={idx} partner={partner} />
          ))}
        </div>

        {/* Mobile Horizontal Auto-Scroll Marquee (Visible < 768px) */}
        <div className="partners-mobile-marquee">
          <div className="marquee-track">
            {/* Render 2 sets for continuous infinite loop */}
            {[...partners, ...partners].map((partner, idx) => (
              <div key={idx} className="marquee-item">
                <PartnerCard partner={partner} isMobile />
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .partners-desktop-grid {
          display: grid;
        }
        .partners-mobile-marquee {
          display: none;
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }

        .marquee-track {
          display: flex;
          gap: 1rem;
          width: max-content;
          animation: marquee 25s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover,
        .marquee-track:active {
          animation-play-state: paused;
        }

        .marquee-item {
          width: 200px;
          flex-shrink: 0;
        }

        @keyframes marquee {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @media (max-width: 767px) {
          .partners-desktop-grid {
            display: none !important;
          }
          .partners-mobile-marquee {
            display: block !important;
          }
        }
      `}</style>
    </section>
  );
}

function PartnerCard({ partner, isMobile }: { partner: Partner; isMobile?: boolean }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#F3EFEA",
        borderRadius: "1rem",
        border: hovered ? "1px solid rgba(139, 38, 62, 0.4)" : "1px solid rgba(28, 27, 26, 0.12)",
        height: isMobile ? "90px" : "100px",
        padding: "1rem 1.25rem",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxShadow: hovered ? "0 12px 28px -6px rgba(28, 27, 26, 0.12)" : "none",
        transform: hovered ? "scale(1.04)" : "scale(1)",
        transition: "all 150ms cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          filter: hovered ? "grayscale(0%) opacity(1)" : "grayscale(100%) opacity(0.7)",
          transition: "filter 150ms ease, opacity 150ms ease",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={partner.logo}
          alt={`${partner.name} - Nuspace Creations Trusted Material Partner`}
          fill
          sizes="200px"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
