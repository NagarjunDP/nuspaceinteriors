"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import gsap from "gsap";
import { getCdnUrl } from "@/lib/cdn";

// ── 3 Luxury Full-Bleed Background Slides (Ken Burns Zoom) ──
const HERO_SLIDES = [
  getCdnUrl("/work/living_room/living_room_01.jpeg"),
  getCdnUrl("/work/living_room/living_room_03.jpeg"),
  getCdnUrl("/work/bedroom/bedroom_01.jpeg"),
];

// ── Floating thumbnail strip (cleaned up with zero person images) ──
const FLOATING_THUMBS = [
  getCdnUrl("/work/living_room/living_room_02.jpeg"),
  getCdnUrl("/work/bedroom/bedroom_02.jpeg"),
  getCdnUrl("/work/kitchen/kitchen_03.jpeg"),
  getCdnUrl("/work/bathroom/bathroom_01.jpeg"),
  getCdnUrl("/work/dining/dining_01.jpeg"),
  getCdnUrl("/work/renovation/renovation_02.jpeg"),
  getCdnUrl("/work/wardrobe/wardrobe_01.jpeg"),
  getCdnUrl("/work/commercial/commercial_02.jpeg"),
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const primaryCtaRef = useRef<HTMLAnchorElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((s) => (s + 1) % HERO_SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // Magnetic hover effect for Primary CTA Button
  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const btn = primaryCtaRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btn.style.transform = `translate3d(${x * 0.18}px, ${y * 0.18}px, 0) scale(1.03)`;
  };

  const handleMouseLeave = () => {
    const btn = primaryCtaRef.current;
    if (!btn) return;
    btn.style.transform = "translate3d(0, 0, 0) scale(1)";
  };

  // GSAP entrance animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-gold-line", { scaleX: 0, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.1 });
      gsap.from(".hero-badge", { y: -25, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.3 });
      gsap.from(".hero-title-text", { y: 45, opacity: 0, duration: 1.5, stagger: 0.12, ease: "power4.out", delay: 0.45 });
      gsap.from(".hero-subtext", { y: 25, opacity: 0, duration: 1.3, ease: "power3.out", delay: 0.7 });
      gsap.from(".hero-cta-group", { y: 20, opacity: 0, duration: 1.2, ease: "power3.out", delay: 0.9 });
      gsap.from(".hero-stats", { y: 20, opacity: 0, duration: 1.2, ease: "power3.out", delay: 1.1 });
      gsap.from(".hero-thumb", {
        y: 25, opacity: 0, duration: 0.7, stagger: 0.06, ease: "power3.out", delay: 1.25,
      });
      gsap.from(".hero-scroll-cue", { opacity: 0, y: -10, duration: 1, ease: "power2.out", delay: 1.5 });
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
        padding: "8rem 1.5rem 6rem",
      }}
    >
      {/* ── Full-Bleed Crossfade Background with Ken-Burns Slow Zoom ── */}
      {HERO_SLIDES.map((src, idx) => (
        <div
          key={src}
          className={`kenburns-slide ${idx === currentSlide ? "active" : ""}`}
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            opacity: idx === currentSlide ? 1 : 0,
            transition: "opacity 1.8s ease-in-out",
          }}
        >
          <Image
            src={src}
            alt="Nuspace Creations luxury interior background"
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

      {/* ── Multi-Stop Vignette Overlay for High Legibility ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          background:
            "radial-gradient(ellipse at center, rgba(20,19,18,0.55) 0%, rgba(20,19,18,0.85) 75%, rgba(20,19,18,0.96) 100%)",
        }}
      />

      {/* ── Hero Content ── */}
      <div
        style={{
          maxWidth: "1240px",
          margin: "0 auto",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          zIndex: 10,
          position: "relative",
          gap: "1.5rem",
        }}
      >
        {/* Champagne / Gold Accent Line (1px x 60px) */}
        <div
          className="hero-gold-line"
          style={{
            width: "60px",
            height: "1px",
            backgroundColor: "#C5A059",
            boxShadow: "0 0 12px rgba(197, 160, 89, 0.6)",
            marginBottom: "0.25rem",
          }}
        />

        {/* Eyebrow Badge */}
        <div
          className="hero-badge"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            padding: "0.4rem 1.3rem",
            borderRadius: "9999px",
            backgroundColor: "rgba(20, 19, 18, 0.75)",
            border: "1px solid rgba(197, 160, 89, 0.35)",
            backdropFilter: "blur(12px)",
          }}
        >
          <Sparkles size={13} color="#C5A059" strokeWidth={1.5} />
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#FAF8F5",
            }}
          >
            NUSPACE CREATIONS — EST. 2015 BENGALURU
          </span>
        </div>

        {/* Editorial Display Headline */}
        <h1
          style={{
            color: "#ffffff",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2.6rem, 6vw, 5.4rem)",
            fontWeight: 400,
            lineHeight: 1.08,
            letterSpacing: "0.01em",
            maxWidth: "1050px",
            margin: 0,
          }}
        >
          <span className="hero-title-text" style={{ display: "block" }}>
            Spaces Designed for Living.
          </span>
          <span
            className="hero-title-text"
            style={{
              display: "block",
              fontStyle: "italic",
              fontWeight: 300,
              color: "rgba(250,248,245,0.9)",
              fontSize: "0.85em",
            }}
          >
            Crafted for Life.
          </span>
        </h1>

        {/* Editorial Subtext */}
        <p
          className="hero-subtext"
          style={{
            color: "rgba(250,248,245,0.82)",
            fontSize: "clamp(0.98rem, 1.8vw, 1.2rem)",
            fontWeight: 300,
            maxWidth: "680px",
            lineHeight: 1.75,
            margin: "0 auto",
          }}
        >
          Bespoke residential &amp; commercial interiors crafted with architectural precision,
          custom woodwork, and timeless material balance across Bengaluru.
        </p>

        {/* Magnetic CTA Group */}
        <div
          className="hero-cta-group"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.1rem",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "0.5rem",
          }}
        >
          <a
            href="#portfolio"
            ref={primaryCtaRef}
            className="btn-primary"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s",
              willChange: "transform",
            }}
          >
            <span>View Portfolio</span>
            <ArrowRight size={15} strokeWidth={1.5} />
          </a>
          <a href="#contact" className="btn-outline-white">
            <span>Book Consultation</span>
          </a>
        </div>

        {/* Minimal Stat Strip */}
        <div
          className="hero-stats"
          style={{
            marginTop: "2rem",
            width: "100%",
            maxWidth: "880px",
            borderTop: "1px solid rgba(255,255,255,0.12)",
            borderBottom: "1px solid rgba(255,255,255,0.12)",
            padding: "0.85rem 0",
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
                    fontSize: "0.7rem",
                    fontWeight: 600,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "rgba(255, 255, 255, 0.82)",
                  }}
                >
                  {item}
                </span>
                {idx < 3 && <span className="hero-stat-divider" />}
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Real Work Photo Strip */}
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
                width: "84px",
                height: "56px",
                borderRadius: "8px",
                overflow: "hidden",
                flexShrink: 0,
                border: "1px solid rgba(255,255,255,0.15)",
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
              onClick={() => {
                setCurrentSlide(i % HERO_SLIDES.length);
              }}
            >
              <Image
                src={src}
                alt="Nuspace interior sample"
                fill
                sizes="84px"
                style={{ objectFit: "cover" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Slide Indicators */}
        <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.25rem" }}>
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                width: i === currentSlide ? "1.6rem" : "0.4rem",
                height: "4px",
                borderRadius: "9999px",
                backgroundColor: i === currentSlide ? "#8B263E" : "rgba(255,255,255,0.35)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated Scroll Cue (Bottom Center) */}
      <a
        href="#about"
        className="hero-scroll-cue"
        aria-label="Scroll to content"
        style={{
          position: "absolute",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.3rem",
          color: "rgba(255, 255, 255, 0.6)",
          textDecoration: "none",
          transition: "opacity 0.3s ease",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.62rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          SCROLL
        </span>
        <ChevronDown size={16} strokeWidth={1.5} className="scroll-chevron-anim" />
      </a>

      <style jsx>{`
        .kenburns-slide {
          transform: scale(1);
          transition: transform 20s linear, opacity 1.8s ease-in-out;
        }
        .kenburns-slide.active {
          transform: scale(1.14);
        }

        .hero-stat-strip {
          display: flex;
          justify-content: space-around;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.75rem;
        }

        .hero-stat-item {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .hero-stat-divider {
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background-color: #8B263E;
        }

        @keyframes scrollPulse {
          0%, 100% {
            transform: translateY(0);
            opacity: 0.5;
          }
          50% {
            transform: translateY(6px);
            opacity: 1;
          }
        }

        :global(.scroll-chevron-anim) {
          animation: scrollPulse 2s infinite ease-in-out;
        }

        @media (max-width: 640px) {
          .hero-stat-divider {
            display: none;
          }
          .hero-stat-strip {
            flex-direction: column;
            gap: 0.4rem;
          }
        }
      `}</style>
    </section>
  );
}
