"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";
import gsap from "gsap";
import { getCdnUrl } from "@/lib/cdn";

// ── 6 real hero-quality photos from the largest files ──
const HERO_SLIDES = [
  getCdnUrl("/work/residential/residential_01.jpeg"),
  getCdnUrl("/work/living_room/living_room_01.jpeg"),
  getCdnUrl("/work/bedroom/bedroom_01.jpeg"),
  getCdnUrl("/work/kitchen/kitchen_01.jpeg"),
  getCdnUrl("/work/commercial/commercial_01.jpeg"),
  getCdnUrl("/work/turnkey/turnkey_01.jpeg"),
];

// ── Floating thumbnail strip (the best 8 photos from diverse categories) ──
const FLOATING_THUMBS = [
  getCdnUrl("/work/living_room/living_room_02.jpeg"),
  getCdnUrl("/work/bedroom/bedroom_02.jpeg"),
  getCdnUrl("/work/kitchen/kitchen_02.jpeg"),
  getCdnUrl("/work/bathroom/bathroom_01.jpeg"),
  getCdnUrl("/work/dining/dining_01.jpeg"),
  getCdnUrl("/work/renovation/renovation_01.jpeg"),
  getCdnUrl("/work/wardrobe/wardrobe_01.jpeg"),
  getCdnUrl("/work/commercial/commercial_02.jpeg"),
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-badge", { y: -30, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.2 });
      gsap.from(".hero-title-text", { y: 55, opacity: 0, duration: 1.6, stagger: 0.14, ease: "power4.out", delay: 0.4 });
      gsap.from(".hero-subtext", { y: 30, opacity: 0, duration: 1.4, ease: "power3.out", delay: 0.7 });
      gsap.from(".hero-cta-group", { y: 20, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.9 });
      gsap.from(".hero-stats", { y: 20, opacity: 0, duration: 1.2, ease: "power3.out", delay: 1.1 });
      gsap.from(".hero-thumb", {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.07, ease: "power3.out", delay: 1.3,
      });
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#141312",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "8rem 2rem 5rem",
      }}
    >
      {/* ── Crossfade Background Slideshow (real photos) ── */}
      {HERO_SLIDES.map((src, idx) => (
        <div
          key={src}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: idx === currentSlide ? 1 : 0,
            transition: "opacity 1.4s ease-in-out",
          }}
        >
          <Image
            src={src}
            alt="Nuspace Creations interior project"
            fill
            priority={idx === 0}
            sizes="100vw"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </div>
      ))}

      {/* ── Dark gradient overlay ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "linear-gradient(180deg, rgba(20,19,18,0.72) 0%, rgba(20,19,18,0.38) 45%, rgba(20,19,18,0.88) 100%)",
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: 10,
          position: "relative",
          gap: "1.75rem",
        }}
      >
        {/* Badge */}
        <div
          className="hero-badge"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            padding: "0.45rem 1.4rem",
            borderRadius: "9999px",
            backgroundColor: "rgba(139, 38, 62, 0.22)",
            border: "1px solid rgba(139, 38, 62, 0.55)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Sparkles size={13} color="#8B263E" />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.32em",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            NUSPACE CREATIONS — EST. 2015 BENGALURU
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            color: "#ffffff",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(3rem, 7vw, 6rem)",
            fontWeight: 500,
            lineHeight: 1.06,
            letterSpacing: "-0.02em",
            maxWidth: "1050px",
            margin: 0,
          }}
        >
          <span className="hero-title-text" style={{ display: "block" }}>
            DREAMS TO PERFECTION
          </span>
          <span
            className="hero-title-text"
            style={{
              display: "block",
              fontStyle: "italic",
              fontWeight: 400,
              color: "#FAF8F5",
              fontSize: "0.82em",
            }}
          >
            Crafting Timeless Interiors, Bengaluru
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="hero-subtext"
          style={{
            color: "rgba(250,248,245,0.82)",
            fontSize: "clamp(1rem, 2vw, 1.28rem)",
            fontWeight: 300,
            maxWidth: "720px",
            lineHeight: 1.7,
            margin: "0 auto",
          }}
        >
          From initial concept to turnkey handover — we craft residential and commercial interiors
          that define the way you live, entertain, and work.
        </p>

        {/* CTAs */}
        <div
          className="hero-cta-group"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="#portfolio" className="btn-primary">
            <span>View Our Work</span>
            <ArrowRight size={15} />
          </a>
          <a href="#contact" className="btn-outline-white">
            <span>Book a Consultation</span>
          </a>
        </div>

        {/* Minimal Stat Strip */}
        <div
          className="hero-stats"
          style={{
            marginTop: "2.5rem",
            width: "100%",
            maxWidth: "900px",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            padding: "1rem 0",
          }}
        >
          <div className="hero-stat-strip">
            {[
              "350+ Projects Delivered",
              "Est. 2015",
              "Bengaluru-Based",
              "End-to-End Execution",
            ].map((item, idx) => (
              <div key={item} className="hero-stat-item">
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "rgba(255, 255, 255, 0.88)",
                  }}
                >
                  {item}
                </span>
                {idx < 3 && <span className="hero-stat-divider" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── Horizontal real photo strip ── */}
        <div
          style={{
            display: "flex",
            gap: "0.6rem",
            overflowX: "auto",
            paddingBottom: "0.25rem",
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            maxWidth: "100%",
          }}
        >
          {FLOATING_THUMBS.map((src, i) => (
            <div
              key={i}
              className="hero-thumb"
              style={{
                position: "relative",
                width: "90px",
                height: "60px",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: 0,
                border: "1.5px solid rgba(255,255,255,0.15)",
                transition: "transform 0.3s ease, border-color 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.06)";
                e.currentTarget.style.borderColor = "#8B263E";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
              }}
              onClick={() => { const idx = i % HERO_SLIDES.length; setCurrentSlide(idx); }}
            >
              <Image
                src={src}
                alt="Nuspace Creations interior"
                fill
                sizes="90px"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              style={{
                width: i === currentSlide ? "1.6rem" : "0.4rem",
                height: "4px",
                borderRadius: "9999px",
                backgroundColor: i === currentSlide ? "#8B263E" : "rgba(255,255,255,0.35)",
                border: "none",
                cursor: "pointer",
                transition: "width 0.4s ease, background-color 0.3s ease",
                padding: 0,
              }}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .hero-stat-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
        }
        .hero-stat-item {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }
        .hero-stat-divider {
          width: 1px;
          height: 12px;
          background-color: rgba(255, 255, 255, 0.25);
          display: inline-block;
        }
        @media (max-width: 640px) {
          .hero-stat-strip {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 0.75rem 1rem !important;
            text-align: center !important;
          }
          .hero-stat-item {
            justify-content: center !important;
          }
          .hero-stat-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
