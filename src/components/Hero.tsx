"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown, Sparkles } from "lucide-react";
import gsap from "gsap";
import { getCdnUrl } from "@/lib/cdn";

// ── Stagnant Hero Background Image ──
const HERO_BG = getCdnUrl("/work/living_room/living_room_01.jpeg");

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const primaryCtaRef = useRef<HTMLAnchorElement>(null);

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
      gsap.from(".hero-scroll-cue", { opacity: 0, y: -10, duration: 1, ease: "power2.out", delay: 1.3 });
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
      {/* ── Single Stagnant Hero Background Image ── */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      >
        <Image
          src={HERO_BG}
          alt="Nuspace Creations luxury interior background"
          fill
          priority
          sizes="100vw"
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </div>

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
            padding: "0.4rem 1.25rem",
            borderRadius: "9999px",
            backgroundColor: "rgba(20, 19, 18, 0.8)",
            border: "1px solid rgba(197, 160, 89, 0.4)",
            backdropFilter: "blur(12px)",
            maxWidth: "100%",
          }}
        >
          <Sparkles size={12} color="#C5A059" strokeWidth={1.5} style={{ flexShrink: 0 }} />
          <span
            className="hero-badge-text"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.68rem",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#FAF8F5",
            }}
          >
            NUSPACE CREATIONS · EST. 2015 · BENGALURU
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
          .hero-badge {
            padding: 0.35rem 0.85rem !important;
            gap: 0.4rem !important;
          }
          .hero-badge-text {
            font-size: 0.58rem !important;
            letter-spacing: 0.12em !important;
            white-space: nowrap !important;
          }
          .hero-cta-group {
            flex-direction: column;
            width: 100%;
          }
          .hero-cta-group a {
            width: 100%;
            max-width: 300px;
            justify-content: center;
          }
          .hero-stat-divider {
            display: none;
          }
          .hero-stat-strip {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 0.6rem 0.5rem;
            text-align: center;
          }
          .hero-stat-item {
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
