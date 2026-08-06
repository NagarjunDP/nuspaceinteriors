"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getCdnUrl } from "@/lib/cdn";
import { ShieldCheck } from "lucide-react";

interface Partner {
  name: string;
  category: string;
  logo: string;
  bg?: string;
}

const partners: Partner[] = [
  { name: "Greenply", category: "Plywood & Veneers", logo: getCdnUrl("/images/partners/greenply.svg") },
  { name: "CenturyPly", category: "Plywood & Laminates", logo: getCdnUrl("/images/partners/centuryply.png") },
  { name: "Merino", category: "Surface Laminates", logo: getCdnUrl("/images/partners/merino.png") },
  { name: "Greenlam", category: "Architectural Cladding", logo: getCdnUrl("/images/partners/greenlam.png") },
  { name: "Hettich", category: "German Hardware", logo: getCdnUrl("/images/partners/hettich.svg") },
  { name: "Action Tesa", category: "HDMR & MDF Boards", logo: getCdnUrl("/images/partners/actiontesa.png") },
  { name: "Häfele", category: "Architectural Fittings", logo: getCdnUrl("/images/partners/hafele.svg") },
  { name: "Ebco", category: "Furniture Accessories", logo: getCdnUrl("/images/partners/ebco.avif"), bg: "#0B1E36" },
  { name: "Asian Paints", category: "Paints & Coatings", logo: getCdnUrl("/images/partners/asianpaints.avif") },
  { name: "Saint-Gobain", category: "High Performance Glass", logo: getCdnUrl("/images/partners/saintgobain.png") },
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
        padding: "clamp(4.5rem, 8vw, 8.5rem) 0",
        backgroundColor: "#FAF8F5",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(28, 27, 26, 0.08)",
        borderBottom: "1px solid rgba(28, 27, 26, 0.08)",
      }}
    >
      <div style={{ maxWidth: "1350px", margin: "0 auto", padding: "0 1.5rem" }}>
        
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

      </div>

      {/* ── Continuous Infinite Auto-Scroll Marquee Flow (Vivid Full Color) ── */}
      <div className="partners-continuous-marquee">
        <div className="marquee-track">
          {/* Duplicate partners 3 times for seamless 60fps infinite marquee loop */}
          {[...partners, ...partners, ...partners].map((partner, idx) => (
            <div key={idx} className="marquee-item">
              <PartnerCard partner={partner} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .partners-continuous-marquee {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          padding: 0.5rem 0;
        }

        .marquee-track {
          display: flex;
          gap: 1.25rem;
          width: max-content;
          animation: marquee-flow 32s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        .marquee-item {
          width: 220px;
          flex-shrink: 0;
        }

        @keyframes marquee-flow {
          0% {
            transform: translate3d(0, 0, 0);
          }
          100% {
            transform: translate3d(-33.3333%, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}

function PartnerCard({ partner }: { partner: Partner }) {
  const [hovered, setHovered] = useState(false);
  const cardBg = partner.bg || "#FFFFFF";
  const isDark = cardBg !== "#FFFFFF";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: cardBg,
        borderRadius: "1rem",
        border: hovered
          ? "1px solid #8B263E"
          : isDark
          ? "1px solid rgba(255, 255, 255, 0.12)"
          : "1px solid rgba(0, 0, 0, 0.08)",
        height: "105px",
        padding: "1rem 1.35rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        boxShadow: hovered
          ? "0 14px 32px -6px rgba(139, 38, 62, 0.28)"
          : isDark
          ? "0 4px 14px rgba(0, 0, 0, 0.3)"
          : "0 4px 14px rgba(0, 0, 0, 0.04)",
        transform: hovered ? "translateY(-4px) scale(1.03)" : "scale(1)",
        transition: "all 200ms cubic-bezier(0.16, 1, 0.3, 1)",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          filter: "none",
          opacity: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={partner.logo}
          alt={`${partner.name} - Nuspace Creations Trusted Material Partner`}
          fill
          unoptimized
          sizes="220px"
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
}
