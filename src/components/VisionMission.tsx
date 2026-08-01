"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Eye, Target, CheckCircle2, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { getCdnUrl } from "@/lib/cdn";

gsap.registerPlugin(ScrollTrigger);

const missionPoints = [
  "Functionality & Spatial Efficiency",
  "Timeless Contemporary Aesthetics",
  "Bespoke Material & Joinery Craftsmanship",
  "Sustainable & Conscious Design",
  "Uncompromising Quality & Integrity",
  "Timely Execution & Delivery Precision",
];

export default function VisionMission() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".vm-box", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="vision-mission"
      ref={containerRef}
      style={{
        padding: "7rem 1.5rem",
        backgroundColor: "#FAF8F5",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "2.5rem",
          }}
        >
          {/* Vision Box */}
          <div
            className="vm-box vm-card"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "1.5rem",
              padding: "3.5rem 2.5rem",
              boxShadow: "0 20px 40px -10px rgba(28, 27, 26, 0.06)",
              border: "1px solid rgba(28, 27, 26, 0.09)",
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
              position: "relative",
              transition: "transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  backgroundColor: "rgba(139, 38, 62, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#8B263E",
                }}
              >
                <Eye size={24} />
              </div>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#8B263E",
                }}
              >
                OUR VISION
              </span>
            </div>

            <h3
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 500,
                color: "#1C1B1A",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              Redefining the Way Spaces Are Experienced.
            </h3>

            <p
              style={{
                color: "#1C1B1A",
                opacity: 0.82,
                fontSize: "1.02rem",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              At Nuspace Creations, our vision is to combine creative innovation, functional clarity, and meticulous architectural precision to deliver transformative spaces that celebrate individuality and elevate modern living across Bengaluru.
            </p>
          </div>

          {/* Mission Box with background photo texture */}
          <div
            className="vm-box vm-card"
            style={{
              backgroundColor: "#1C1B1A",
              color: "#ffffff",
              borderRadius: "1.5rem",
              padding: "3.5rem 2.5rem",
              boxShadow: "0 30px 60px -15px rgba(0,0,0,0.25)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              display: "flex",
              flexDirection: "column",
              gap: "1.75rem",
              position: "relative",
              overflow: "hidden",
              transition: "transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease",
            }}
          >
            {/* Subtle faded project image background */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
                opacity: 0.16,
                pointerEvents: "none",
              }}
            >
              <Image
                src={getCdnUrl("/work/turnkey/turnkey_01.jpeg")}
                alt="Turnkey Craftsmanship Background"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                style={{ objectFit: "cover" }}
              />
            </div>
            {/* Overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(28,27,26,0.92) 0%, rgba(20,19,18,0.85) 100%)",
                zIndex: 1,
                pointerEvents: "none",
              }}
            />

            <div style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: "1.75rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                  style={{
                    width: "3.5rem",
                    height: "3.5rem",
                    borderRadius: "50%",
                    backgroundColor: "rgba(139, 38, 62, 0.25)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                  }}
                >
                  <Target size={24} />
                </div>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.75rem",
                    fontWeight: 600,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#8B263E",
                  }}
                >
                  OUR MISSION
                </span>
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                  fontWeight: 500,
                  color: "#FAF8F5",
                  lineHeight: 1.2,
                  margin: 0,
                }}
              >
                Turning Ideas Into Exceptional Spaces.
              </h3>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "0.9rem",
                  marginTop: "0.25rem",
                }}
              >
                {missionPoints.map((point, index) => (
                  <div
                    key={index}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.65rem",
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.88)",
                    }}
                  >
                    <CheckCircle2 size={16} color="#8B263E" style={{ flexShrink: 0 }} />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Client Testimonial Placeholder Component ── */}
        <div
          style={{
            marginTop: "3.5rem",
            backgroundColor: "#ffffff",
            borderRadius: "1.25rem",
            padding: "2.25rem 2rem",
            boxShadow: "0 15px 35px -10px rgba(28, 27, 26, 0.05)",
            border: "1px solid rgba(139, 38, 62, 0.18)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: "0.75rem",
          }}
        >
          <Quote size={24} color="#8B263E" style={{ opacity: 0.8 }} />
          <p
            style={{
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: "clamp(1.05rem, 2vw, 1.25rem)",
              color: "#1C1B1A",
              maxWidth: "820px",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            &ldquo;Nuspace Creations transformed our home into a sanctuary. The architectural precision, custom joinery, and spatial harmony exceeded every expectation.&rdquo;
          </p>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8B263E",
              marginTop: "0.25rem",
            }}
          >
            — Verified Client, Indiranagar Penthouse Project
          </span>
        </div>
      </div>

      <style jsx>{`
        .vm-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 30px 60px -15px rgba(139, 38, 62, 0.18) !important;
          border-color: rgba(139, 38, 62, 0.5) !important;
        }
      `}</style>
    </section>
  );
}
