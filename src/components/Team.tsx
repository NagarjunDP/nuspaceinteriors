"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Sparkles, Quote, Award } from "lucide-react";
import { getCdnUrl } from "@/lib/cdn";

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Team() {
  const { ref: containerRef, inView } = useInView(0.1);

  return (
    <section
      id="team"
      ref={containerRef}
      style={{
        padding: "7rem 1.5rem",
        backgroundColor: "#1C1B1A",
        color: "#ffffff",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1140px", margin: "0 auto" }}>

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
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }}></span>
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
              FOUNDER & LEADERSHIP
            </span>
            <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }}></span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              color: "#FAF8F5",
              fontWeight: 500,
              marginBottom: "1rem",
              lineHeight: 1.1,
            }}
          >
            Meet the Founder
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "1rem",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            The vision, philosophy, and dedication behind Nuspace Creations.
          </p>
        </div>

        {/* Main Founder Block */}
        <div
          className="founder-card-container"
          style={{
            backgroundColor: "#141312",
            borderRadius: "1.75rem",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            boxShadow: "0 25px 50px -15px rgba(0,0,0,0.5)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "0",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(35px)",
            transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
            marginBottom: "3.5rem",
          }}
        >
          {/* Founder Photo */}
          <div
            style={{
              position: "relative",
              aspectRatio: "4 / 4.8",
              minHeight: "380px",
              backgroundColor: "#252321",
              overflow: "hidden",
            }}
          >
            <Image
              src={getCdnUrl("/founder.jpeg")}
              alt="Prashanth - Founder & CEO, Nuspace Creations"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              style={{
                objectFit: "cover",
                objectPosition: "top center",
              }}
              priority
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to top, rgba(20, 19, 18, 0.95) 0%, transparent 55%)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "1.25rem",
                left: "1.25rem",
                backgroundColor: "rgba(139, 38, 62, 0.9)",
                backdropFilter: "blur(10px)",
                padding: "0.45rem 1.1rem",
                borderRadius: "9999px",
                fontSize: "0.68rem",
                color: "#ffffff",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
              }}
            >
              <Sparkles size={12} />
              FOUNDER & CEO
            </div>
          </div>

          {/* Founder Bio Content */}
          <div
            style={{
              padding: "3.5rem 3rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              gap: "1.25rem",
            }}
            className="founder-bio-box"
          >
            <div>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                  fontWeight: 500,
                  color: "#ffffff",
                  margin: 0,
                  lineHeight: 1.1,
                }}
              >
                Prashanth
              </h3>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.78rem",
                  fontWeight: 600,
                  color: "#8B263E",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  display: "block",
                  marginTop: "0.4rem",
                }}
              >
                Founder & CEO, Nuspace Creations
              </span>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "rgba(255, 255, 255, 0.8)", fontSize: "0.98rem", lineHeight: 1.75 }}>
              <p style={{ margin: 0 }}>
                Prashanth founded Nuspace Creations in 2015 with a simple belief — that a space should feel like the person living in it, not like a showroom.
              </p>
              <p style={{ margin: 0 }}>
                Over the last decade, that belief has shaped 350+ homes and commercial spaces across Bengaluru, each one built around a single principle: design that is timeless, deeply personal, and executed without compromise. His approach blends architectural precision with an obsessive attention to material, light, and craftsmanship — turning ideas into spaces people don&apos;t just live in, but feel at home in.
              </p>
            </div>

            {/* Mission Quote Bar */}
            <div
              style={{
                marginTop: "1rem",
                padding: "1.25rem 1.5rem",
                borderRadius: "1rem",
                backgroundColor: "rgba(139, 38, 62, 0.12)",
                borderLeft: "3px solid #8B263E",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  fontSize: "1.05rem",
                  color: "#FAF8F5",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                &ldquo;Every space we build should outlive trends — and still feel personal, decades from now.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Supporting Designer Credit Line */}
        <div
          style={{
            backgroundColor: "#141312",
            borderRadius: "1.25rem",
            padding: "1.5rem 2rem",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1.25rem",
            opacity: inView ? 1 : 0,
            transition: "opacity 0.9s ease 0.4s",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
            <div
              style={{
                position: "relative",
                width: "54px",
                height: "54px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "2px solid #8B263E",
                flexShrink: 0,
              }}
            >
              <Image
                src={getCdnUrl("/shanmukha.png")}
                alt="Shanmukha - Principal Designer"
                fill
                sizes="60px"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.2rem", fontWeight: 500, color: "#ffffff", margin: 0 }}>
                Shanmukha
              </h4>
              <span style={{ fontSize: "0.75rem", color: "#8B263E", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
                Principal Designer
              </span>
            </div>
          </div>

          <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.88rem", margin: 0, maxWidth: "520px", lineHeight: 1.5 }}>
            Design execution & creative direction led by Principal Designer Shanmukha, ensuring spatial harmony and bespoke joinery across every project.
          </p>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .founder-bio-box {
            padding: 2.25rem 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
