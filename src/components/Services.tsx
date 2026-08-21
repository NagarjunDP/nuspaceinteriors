"use client";

import { useState, useEffect, useRef } from "react";
import { Home, RefreshCw, Key, Sparkles, ArrowUpRight } from "lucide-react";
import { getCdnUrl } from "@/lib/cdn";

const services = [
  {
    id: "residential",
    number: "01",
    title: "Residential & Commercial Design",
    description: "Bespoke, end-to-end interior design and execution for luxury homes, private villas, corporate offices, and boutique commercial environments.",
    icon: Home,
    accent: "#8B263E",
    highlights: ["Bespoke Villa Interiors", "Corporate Executive Offices", "Retail & Hospitality Design"],
    src: getCdnUrl("/work/living_room/living_room_01.jpeg"),
  },
  {
    id: "renovation",
    number: "02",
    title: "Renovation & Remodeling",
    description: "Transform existing spaces with innovative spatial planning, optimized floor layouts, modern architectural aesthetics, and high-end surface finishes.",
    icon: RefreshCw,
    accent: "#6b4f3a",
    highlights: ["Structural Layout Overhaul", "Modern Facelift & Finishes", "Space Optimisation"],
    src: getCdnUrl("/work/bedroom/bedroom_01.jpeg"),
  },
  {
    id: "turnkey",
    number: "03",
    title: "Turnkey Project Management",
    description: "Complete hands-off project management — Concept → Planning → Procurement → Execution → Quality Control → Timely Handover. One team, zero chaos.",
    icon: Key,
    accent: "#3a5e6b",
    highlights: ["Single Point of Accountability", "Transparent BOQ & Costing", "On-time Delivery Tracking"],
    src: getCdnUrl("/work/kitchen/kitchen_01.jpeg"),
  },
  {
    id: "interior",
    number: "04",
    title: "End-to-End Interior Solutions",
    description: "Comprehensive solutions including space planning, custom furniture manufacturing, modular kitchens, wardrobes, lighting design, and full décor styling.",
    icon: Sparkles,
    accent: "#4a6b3a",
    highlights: ["Custom Modular Furniture", "Bespoke Teak & Veneer Joinery", "Lighting & Styling"],
    src: getCdnUrl("/work/living_room/living_room_01.jpeg"),
  },
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

export default function Services() {
  const { ref: sectionRef, inView } = useInView(0.1);

  const scrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        position: "relative",
        padding: "clamp(4.5rem, 8vw, 8.5rem) 1.5rem",
        backgroundColor: "#FDFBF7",
        color: "#141312",
        overflow: "hidden",
      }}
    >
      {/* Subtle Warm Sand Radial Glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(197,160,89,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1350px", margin: "0 auto", position: "relative" }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#8B263E",
              }}
            >
              WHAT WE DO
            </span>
            <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              color: "#141312",
              marginBottom: "1rem",
              fontWeight: 500,
              lineHeight: 1.15,
            }}
          >
            Interior Solutions, Engineered for Living
          </h2>

          <p
            style={{
              color: "#4A4744",
              fontSize: "1rem",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            From initial spatial planning to custom furniture craftsmanship and turnkey site delivery.
          </p>
        </div>

        {/* Services Cards Grid — Refined Small Icon Badge Treatment */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 290px), 1fr))",
            gap: "1.5rem",
            marginBottom: "3.5rem",
          }}
        >
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <ServiceCard
                key={service.id}
                service={service}
                Icon={Icon}
                delay={idx * 100}
                inView={inView}
                onCardClick={scrollToContact}
              />
            );
          })}
        </div>

        {/* Section CTA */}
        <div style={{ textAlign: "center", opacity: inView ? 1 : 0, transition: "opacity 1s ease 0.6s" }}>
          <a
            href="#contact"
            onClick={scrollToContact}
            className="btn-primary"
            style={{
              borderRadius: "9999px",
              padding: "1.05rem 2.5rem",
              fontSize: "0.85rem",
              letterSpacing: "0.12em",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              textDecoration: "none",
              backgroundColor: "#8B263E",
              color: "#ffffff",
              boxShadow: "0 12px 32px rgba(139,38,62,0.28)",
              transition: "transform 0.3s ease, boxShadow 0.3s ease",
            }}
          >
            <span>DISCUSS YOUR PROJECT REQUIREMENTS</span>
            <ArrowUpRight size={18} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  Icon,
  delay,
  inView,
  onCardClick,
}: {
  service: typeof services[0];
  Icon: React.ElementType;
  delay: number;
  inView: boolean;
  onCardClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#contact"
      onClick={onCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        borderRadius: "1.25rem",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        border: hovered ? "1px solid #C5A059" : "1px solid rgba(0, 0, 0, 0.08)",
        boxShadow: hovered ? "0 22px 45px -10px rgba(197, 160, 89, 0.22)" : "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
        transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: hovered ? "translateY(-6px)" : inView ? "none" : "translateY(40px)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${delay}ms`,
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        minHeight: "440px",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {/* ── 100% Uniform Full-Bleed Photo Background with Subtle Light Overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${service.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: hovered ? 0.16 : 0.07,
          transform: hovered ? "scale(1.06)" : "scale(1)",
          transition: "opacity 0.55s ease, transform 0.55s ease",
        }}
      />

      {/* ── Light Multi-Stop Gradient Overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(255,255,255,0.96) 0%, rgba(255,255,255,0.92) 50%, rgba(255,255,255,0.98) 100%)",
        }}
      />

      {/* ── Card Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          padding: "2.25rem 1.75rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <div>
          {/* Header Row: Index Number + Refined Small Icon Badge */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1.25rem",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "3.5rem",
                fontWeight: 300,
                lineHeight: 1,
                color: "transparent",
                WebkitTextStroke: hovered ? "1.5px #8B263E" : "1.5px #C5A059",
                transition: "all 0.3s ease",
              }}
            >
              {service.number}
            </div>

            <div
              style={{
                width: "2.75rem",
                height: "2.75rem",
                borderRadius: "50%",
                backgroundColor: "#F7F4EE",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.04)",
                transition: "transform 0.3s ease, backgroundColor 0.3s ease",
                transform: hovered ? "scale(1.08)" : "scale(1)",
              }}
            >
              <Icon size={20} strokeWidth={1.5} color="#8B263E" />
            </div>
          </div>

          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "1.55rem",
              color: "#141312",
              marginBottom: "0.9rem",
              lineHeight: 1.25,
              fontWeight: 500,
            }}
          >
            {service.title}
          </h3>

          <p
            style={{
              fontSize: "0.9rem",
              color: "#4A4744",
              lineHeight: 1.65,
              marginBottom: "1.25rem",
            }}
          >
            {service.description}
          </p>

          {/* Highlights as Refined Sand Pill Badges */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "1.5rem",
            }}
          >
            {service.highlights.map((h, i) => (
              <span
                key={i}
                style={{
                  fontSize: "0.7rem",
                  color: "#3A3734",
                  fontWeight: 500,
                  backgroundColor: "#F7F4EE",
                  border: "1px solid rgba(0, 0, 0, 0.08)",
                  borderRadius: "9999px",
                  padding: "0.25rem 0.65rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.35rem",
                }}
              >
                <span
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "#8B263E",
                    flexShrink: 0,
                  }}
                />
                {h}
              </span>
            ))}
          </div>
        </div>

        {/* ── Working Boutique Interactive CTA Button ── */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            marginTop: "1.5rem",
            padding: "0.55rem 1.15rem",
            borderRadius: "9999px",
            backgroundColor: hovered ? "#8B263E" : "#F4F0E8",
            border: hovered ? "1px solid #8B263E" : "1px solid rgba(0, 0, 0, 0.12)",
            color: hovered ? "#FFFFFF" : "#141312",
            fontSize: "0.72rem",
            fontWeight: 600,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            width: "fit-content",
            boxShadow: hovered ? "0 6px 20px rgba(139, 38, 62, 0.3)" : "none",
          }}
        >
          <span>Explore Service</span>
          <ArrowUpRight
            size={14}
            strokeWidth={1.75}
            style={{
              transform: hovered ? "translate(2px, -2px)" : "none",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
      </div>
    </a>
  );
}
