"use client";

import { useEffect, useRef } from "react";
import { Eye, Target, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

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
        padding: "8rem 2rem",
        backgroundColor: "#FAF8F5",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "3rem",
          }}
        >
          {/* Vision Box */}
          <div
            className="vm-box"
            style={{
              backgroundColor: "#ffffff",
              borderRadius: "1.5rem",
              padding: "4rem 3rem",
              boxShadow: "0 20px 40px -10px rgba(28, 27, 26, 0.06)",
              border: "1px solid rgba(28, 27, 26, 0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
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
                fontSize: "clamp(2rem, 3vw, 2.8rem)",
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
                opacity: 0.8,
                fontSize: "1.05rem",
                lineHeight: 1.8,
                margin: 0,
              }}
            >
              At Nuspace Decor, our vision is to combine creative innovation, functional clarity, and meticulous architectural precision to deliver transformative spaces that celebrate individuality and elevate modern living across Bengaluru.
            </p>
          </div>

          {/* Mission Box */}
          <div
            className="vm-box"
            style={{
              backgroundColor: "#1C1B1A",
              color: "#ffffff",
              borderRadius: "1.5rem",
              padding: "4rem 3rem",
              boxShadow: "0 30px 60px -15px rgba(0,0,0,0.2)",
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
              <div
                style={{
                  width: "3.5rem",
                  height: "3.5rem",
                  borderRadius: "50%",
                  backgroundColor: "rgba(139, 38, 62, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#8B263E",
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
                fontSize: "clamp(2rem, 3vw, 2.8rem)",
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
                gap: "1rem",
                marginTop: "0.5rem",
              }}
            >
              {missionPoints.map((point, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.75rem",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.85)",
                  }}
                >
                  <CheckCircle2 size={16} color="#8B263E" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
