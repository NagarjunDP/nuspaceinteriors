"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { X, ArrowRight, Grid3X3, LayoutGrid } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

import { getCdnUrl } from "@/lib/cdn";
import manifest from "@/data/portfolio_manifest.json";

gsap.registerPlugin(ScrollTrigger);

const CATEGORIES = [
  { id: "all",         label: "All Work" },
  { id: "residential", label: "Residential" },
  { id: "living_room", label: "Living Room" },
  { id: "bedroom",     label: "Bedroom" },
  { id: "kitchen",     label: "Kitchen" },
  { id: "bathroom",    label: "Bathroom" },
  { id: "dining",      label: "Dining" },
  { id: "wardrobe",    label: "Wardrobe" },
  { id: "commercial",  label: "Commercial" },
  { id: "renovation",  label: "Renovation" },
  { id: "turnkey",     label: "Turnkey" },
];

const ALL_PHOTOS = Object.entries(manifest).flatMap(([cat, paths]) =>
  paths.map((path, idx) => ({
    id: `${cat}_${idx + 1}`,
    src: getCdnUrl(path),
    category: cat,
    label: cat.replace("_", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
  }))
);

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState<null | string>(null);
  const [visibleCount, setVisibleCount] = useState(24);
  const sectionRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeCategory === "all"
      ? ALL_PHOTOS
      : ALL_PHOTOS.filter((p) => p.category === activeCategory);

  const visible = filtered.slice(0, visibleCount);

  // Animate cards on category change
  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".pf-card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.96 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.55,
        stagger: 0.04,
        ease: "power3.out",
      }
    );
  }, [activeCategory, visibleCount]);

  // Section entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".pf-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Lightbox keyboard close
  useEffect(() => {
    const close = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      style={{
        padding: "7rem 1.5rem",
        backgroundColor: "#FAF8F5",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>

        {/* ── Header ── */}
        <div className="pf-header" style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem" }}>
            <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
            <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#8B263E" }}>
              OUR WORK
            </span>
            <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
          </div>
          <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.4rem, 5vw, 4rem)", color: "#1C1B1A", fontWeight: 500, marginBottom: "0.75rem" }}>
            Spaces We&apos;ve Transformed
          </h2>
          <p style={{ color: "rgba(28,27,26,0.7)", fontSize: "1rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.65 }}>
            Every project is a bespoke story of craft, material, and light — delivered across Bengaluru since 2015.
          </p>
        </div>

        {/* ── Category Filter Tabs ── */}
        <div
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
            marginBottom: "2.5rem",
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = cat.id === activeCategory;
            return (
              <button
                key={cat.id}
                onClick={() => { setActiveCategory(cat.id); setVisibleCount(24); }}
                style={{
                  padding: "0.5rem 1.1rem",
                  borderRadius: "9999px",
                  border: isActive ? "1px solid #8B263E" : "1px solid rgba(28,27,26,0.2)",
                  backgroundColor: isActive ? "#8B263E" : "transparent",
                  color: isActive ? "#ffffff" : "#1C1B1A",
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* ── Photo Grid ── */}
        <div
          ref={gridRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "0.85rem",
          }}
        >
          {visible.map((photo) => (
            <div
              key={photo.id}
              className="pf-card"
              onClick={() => setLightbox(photo.src)}
              style={{
                position: "relative",
                aspectRatio: "4 / 3",
                borderRadius: "0.85rem",
                overflow: "hidden",
                cursor: "pointer",
                backgroundColor: "#e8e4df",
              }}
              onMouseEnter={(e) => {
                const overlay = e.currentTarget.querySelector(".pf-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "1";
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1.06)";
              }}
              onMouseLeave={(e) => {
                const overlay = e.currentTarget.querySelector(".pf-overlay") as HTMLElement;
                if (overlay) overlay.style.opacity = "0";
                const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                if (img) img.style.transform = "scale(1)";
              }}
            >
              <Image
                src={photo.src}
                alt={photo.label}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 320px"
                style={{
                  objectFit: "cover",
                  transition: "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                loading="lazy"
              />
              {/* Hover overlay */}
              <div
                className="pf-overlay"
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(20,19,18,0.75) 0%, transparent 60%)",
                  opacity: 0,
                  transition: "opacity 0.35s ease",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "1.25rem",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "#ffffff",
                  }}
                >
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Load More ── */}
        {visibleCount < filtered.length && (
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <button
              className="btn-primary"
              onClick={() => setVisibleCount((c) => c + 16)}
              style={{ padding: "0.9rem 2.5rem", borderRadius: "9999px" }}
            >
              <span>Load More Projects</span>
              <ArrowRight size={16} />
            </button>
            <p style={{ marginTop: "0.75rem", fontSize: "0.8rem", color: "rgba(28,27,26,0.5)" }}>
              Showing {visible.length} of {filtered.length} photos
            </p>
          </div>
        )}

        {/* ── CTA Strip ── */}
        <div
          style={{
            marginTop: "4rem",
            background: "linear-gradient(135deg, #8B263E, #5c1828)",
            borderRadius: "1.5rem",
            padding: "3rem 2.5rem",
            textAlign: "center",
            color: "#ffffff",
          }}
        >
          <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 500, marginBottom: "0.85rem" }}>
            Ready to Begin Your Project?
          </h3>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", marginBottom: "2rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
            Discuss your space with our design team. Free initial consultation — Bengaluru wide.
          </p>
          <a
            href="#contact"
            className="btn-outline-white"
            style={{ padding: "0.9rem 2.5rem", display: "inline-flex", alignItems: "center", gap: "0.75rem", borderRadius: "9999px" }}
          >
            <span>Book Free Consultation</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.92)",
            zIndex: 9000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: "1.25rem",
              right: "1.25rem",
              background: "rgba(255,255,255,0.1)",
              border: "none",
              borderRadius: "50%",
              width: "2.75rem",
              height: "2.75rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: "#ffffff",
            }}
          >
            <X size={22} />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "min(90vw, 1100px)",
              height: "min(80vh, 750px)",
              borderRadius: "1rem",
              overflow: "hidden",
            }}
          >
            <Image
              src={lightbox}
              alt="Nuspace Creations project"
              fill
              sizes="90vw"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      )}
    </section>
  );
}
