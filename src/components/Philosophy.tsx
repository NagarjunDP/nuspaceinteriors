"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Compass, Eye, Layers, ShieldCheck } from "lucide-react";
import { getCdnUrl } from "@/lib/cdn";

const principles = [
  {
    icon: Compass,
    number: "01",
    title: "Timeless",
    description: "We design for longevity — not trend cycles. Every material, proportion, and palette choice is made to endure beautifully across decades.",
  },
  {
    icon: Eye,
    number: "02",
    title: "Personal",
    description: "Every space is a portrait of its owner. We listen deeply to your lifestyle, identity, and aspirations before a single line is drawn.",
  },
  {
    icon: Layers,
    number: "03",
    title: "Functional",
    description: "True luxury is space that works beautifully. Form always follows function — flow, storage, light, and scale are choreographed precisely.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Precise",
    description: "Material selections, joinery tolerances, lighting angles — every detail passes our rigorous quality standard before it reaches your space.",
  },
];

function useInView(threshold = 0.12) {
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

export default function Philosophy() {
  const { ref, inView } = useInView(0.1);

  return (
    <section
      id="philosophy"
      ref={ref}
      style={{
        padding: "clamp(5rem, 9vw, 9rem) 1.5rem 0",
        backgroundColor: "#141312",
        color: "#ffffff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Moody Interior Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.18,
          filter: "contrast(110%) brightness(85%)",
        }}
      >
        <Image
          src={getCdnUrl("/work/living_room/living_room_01.jpeg")}
          alt="Moody Interior Atmosphere"
          fill
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
      </div>

      {/* Dark gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          background: "linear-gradient(180deg, rgba(20,19,18,0.94) 0%, rgba(20,19,18,0.85) 50%, rgba(20,19,18,0.98) 100%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(32px)",
            transition: "opacity 0.9s ease, transform 0.9s ease",
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
              DESIGN PHILOSOPHY
            </span>
            <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              fontWeight: 500,
              lineHeight: 1.1,
              color: "#FAF8F5",
              marginBottom: "1.5rem",
            }}
          >
            Designed for Living.{" "}
            <em style={{ fontStyle: "italic", color: "rgba(250,248,245,0.7)" }}>Crafted for Life.</em>
          </h2>

          {/* Emotional Pull-Quote with Expanded Margin */}
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              color: "#FAF8F5",
              fontSize: "clamp(1.15rem, 2.2vw, 1.5rem)",
              maxWidth: "700px",
              margin: "0 auto 1.5rem",
              opacity: 0.9,
              lineHeight: 1.6,
            }}
          >
            &ldquo;We don&apos;t design rooms. We design the way you&apos;ll remember them.&rdquo;
          </p>

          <p
            style={{
              color: "rgba(255,255,255,0.6)",
              fontSize: "0.95rem",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Our four founding principles guide every decision — from your first conversation to the final handover.
          </p>
        </div>

        {/* Principles Grid — Boutique Gallery Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
            gap: "1.75rem",
            marginBottom: "5rem",
          }}
        >
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <PhilosophyCard key={p.number} p={p} Icon={Icon} delay={idx * 150} inView={inView} />
            );
          })}
        </div>
      </div>

      {/* Closing Pull-Quote Band (Full-Width Architectural Magazine Style) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          backgroundColor: "#100F0E",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          padding: "5rem 1.5rem",
          textAlign: "center",
          opacity: inView ? 1 : 0,
          transition: "opacity 1s ease 0.6s",
        }}
      >
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <blockquote
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.3rem, 2.8vw, 2.1rem)",
              color: "rgba(255,255,255,0.92)",
              lineHeight: 1.55,
              margin: 0,
              fontWeight: 300,
            }}
          >
            &ldquo;A Nuspace Creations project is not a renovation — it is an orchestration of light, material, and lived experience.&rdquo;
          </blockquote>
          <p
            style={{
              marginTop: "1.5rem",
              color: "#8B263E",
              fontSize: "0.76rem",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
            }}
          >
            — NUSPACE CREATIONS, EST. 2015 BENGALURU
          </p>
        </div>
      </div>
    </section>
  );
}

function PhilosophyCard({
  p,
  Icon,
  delay,
  inView,
}: {
  p: typeof principles[0];
  Icon: React.ElementType;
  delay: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: hovered ? "rgba(255, 255, 255, 0.07)" : "rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(16px)",
        border: hovered ? "1px solid rgba(139, 38, 62, 0.4)" : "1px solid rgba(255, 255, 255, 0.08)",
        borderRadius: "1.25rem",
        padding: "2.75rem 2rem",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: hovered ? "translateY(-6px)" : inView ? "none" : "translateY(35px)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${delay}ms`,
        cursor: "default",
        boxShadow: hovered ? "0 20px 40px -10px rgba(0,0,0,0.5)" : "none",
      }}
    >
      {/* Header: Clean Single-Line Ghosted Icon (No Background Box) + Thin Serif Outline Index */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div
          style={{
            color: hovered ? "#8B263E" : "rgba(255, 255, 255, 0.7)",
            transition: "color 0.3s ease, transform 0.3s ease",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        >
          <Icon size={30} strokeWidth={1.5} color={hovered ? "#8B263E" : "#FAF8F5"} />
        </div>
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "2.5rem",
            fontWeight: 300,
            color: "transparent",
            WebkitTextStroke: hovered ? "1px #8B263E" : "1px rgba(255,255,255,0.2)",
            transition: "all 0.3s ease",
          }}
        >
          {p.number}
        </span>
      </div>

      {/* Shared Thin Hairline Divider (Consistent Charcoal/Sand across all cards) */}
      <div
        style={{
          height: "1px",
          backgroundColor: hovered ? "rgba(139, 38, 62, 0.5)" : "rgba(255, 255, 255, 0.12)",
          transition: "background-color 0.3s ease",
          width: "100%",
        }}
      />

      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.75rem",
          fontWeight: 500,
          color: "#ffffff",
          margin: 0,
          lineHeight: 1.15,
        }}
      >
        {p.title}
      </h3>

      <p
        style={{
          color: "rgba(255, 255, 255, 0.72)",
          fontSize: "0.9rem",
          lineHeight: 1.7,
          margin: 0,
        }}
      >
        {p.description}
      </p>
    </div>
  );
}
