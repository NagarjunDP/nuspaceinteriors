"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play, Instagram, Linkedin, Facebook, Twitter } from "lucide-react";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1.8,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.5
      });

      gsap.from(".hero-video-frame", {
        scale: 0.9,
        opacity: 0,
        duration: 2.2,
        ease: "expo.out",
        delay: 0.2
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
        backgroundColor: "#0F0F0F",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        padding: "8rem 2rem 4rem"
      }}
    >
      {/* Background Grain/Texture Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        opacity: 0.03,
        pointerEvents: "none",
        backgroundImage: `url("https://www.transparenttextures.com/patterns/asfalt-dark.png")`
      }}></div>

      <div style={{
        maxWidth: "1440px",
        margin: "0 auto",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "4rem",
        alignItems: "center",
        zIndex: 10
      }} className="hero-container">

        {/* Left Content - Editorial */}
        <div className="hero-content" style={{
          flex: "1 1 500px",
          display: "flex",
          flexDirection: "column",
          gap: "3rem",
          textAlign: "left"
        }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <span style={{ width: "2.5rem", height: "1px", backgroundColor: "#f3cc5e" }}></span>
              <span style={{
                fontFamily: "var(--font-montserrat)",
                color: "#f3cc5e",
                letterSpacing: "0.5em",
                fontSize: "10px",
                fontWeight: 500,
                textTransform: "uppercase"
              }}>
                Est. 2012 / Bengaluru
              </span>
            </div>
            <h1 style={{
              color: "#ffffff",
              fontFamily: "var(--font-cormorant)",
              fontStyle: "italic",
              lineHeight: "1.0",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              fontWeight: 500,
              margin: 0,
              maxWidth: "900px"
            }} className="hero-title">
              Turning <br /> Dreams into <br /> <span style={{ color: "#f3cc5e" }}>Reality.</span>
            </h1>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "3rem", maxWidth: "480px" }}>
            <p style={{
              color: "rgba(255, 255, 255, 0.5)",
              fontSize: "clamp(1rem, 2vw, 1.25rem)",
              fontWeight: 300,
              lineHeight: "1.7"
            }} className="hero-description">
              Architectural interior design for those who value the transition from urban energy to coastal calm.
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem" }} className="hero-actions">
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={{
                  padding: "1.25rem 3rem",
                  borderRadius: "100px",
                  backgroundColor: isHovered ? "#f3cc5e" : "transparent",
                  color: isHovered ? "#000000" : "#ffffff",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "9px",
                  fontWeight: 600,
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem"
                }}
              >
                Initiate Project
                <ArrowUpRight size={14} />
              </button>

              <button style={{
                background: "none",
                border: "none",
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                cursor: "pointer",
                padding: "1rem 0"
              }}
                onMouseEnter={(e) => e.currentTarget.style.opacity = "1"}
                onMouseLeave={(e) => e.currentTarget.style.opacity = "0.7"}
              >
                <div style={{
                  width: "2.5rem",
                  height: "1px",
                  backgroundColor: "#f3cc5e"
                }}></div>
                <span style={{
                  fontFamily: "var(--font-montserrat)",
                  fontSize: "9px",
                  fontWeight: 500,
                  color: "#ffffff",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  opacity: 0.7
                }}>View Showreel</span>
              </button>
            </div>
          </div>

          {/* Social Icons */}
          <div style={{
            marginTop: "1rem",
            display: "flex",
            gap: "2.5rem",
            alignItems: "center"
          }}>
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <Icon key={i} size={16} color="rgba(255,255,255,0.3)" style={{ cursor: "pointer", transition: "color 0.3s ease" }}
                onMouseEnter={(e: any) => e.currentTarget.style.color = "#f3cc5e"}
                onMouseLeave={(e: any) => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}
              />
            ))}
          </div>
        </div>

        {/* Right Content - Cinematic Video Frame */}
        <div className="hero-video-frame" style={{
          flex: "1 1 400px",
          position: "relative",
          minHeight: "500px",
          maxHeight: "750px"
        }}>
          <div style={{
            position: "relative",
            width: "100%",
            height: "100%",
            borderRadius: "3rem",
            overflow: "hidden",
            border: "1px solid rgba(255, 255, 255, 0.05)",
            boxShadow: "0 60px 120px -30px rgba(0,0,0,0.6)",
            aspectRatio: "4/5"
          }}>
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.8
              }}
            >
              <source src="/assets/videos/Video-582.mp4" type="video/mp4" />
            </video>

            {/* Video Overlay Info */}
            <div style={{
              position: "absolute",
              bottom: "clamp(2rem, 5vw, 4rem)",
              left: "clamp(2rem, 5vw, 4rem)",
              right: "clamp(2rem, 5vw, 4rem)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end"
            }} className="video-overlay">
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-montserrat)", fontSize: "8px", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>Current Feature</span>
                <h3 style={{ color: "#ffffff", fontFamily: "var(--font-cormorant)", fontStyle: "italic", fontSize: "1.5rem", fontWeight: 400 }}>Coastal Minimalist</h3>
              </div>
              <div style={{
                width: "3.5rem",
                height: "3.5rem",
                borderRadius: "100%",
                backgroundColor: "rgba(255,255,255,0.1)",
                backdropFilter: "blur(10px)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid rgba(255,255,255,0.1)"
              }}>
                <Play size={16} color="#ffffff" fill="#ffffff" />
              </div>
            </div>
          </div>

          {/* Floating Decorative Elements */}
          <div style={{
            position: "absolute",
            top: "-1.5rem",
            right: "2rem",
            width: "100px",
            height: "100px",
            borderRadius: "100%",
            border: "1px solid rgba(243, 204, 94, 0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "rgba(15, 15, 15, 0.5)",
            backdropFilter: "blur(5px)"
          }} className="decorative-circle">
            <div style={{
              width: "70px",
              height: "70px",
              borderRadius: "100%",
              border: "1px solid rgba(243, 204, 94, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}>
              <span style={{ fontFamily: "var(--font-cormorant)", fontStyle: "italic", color: "#f3cc5e", fontSize: "1.25rem" }}>C.I.</span>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Scroll Indicator */}
      <div style={{
        position: "absolute",
        bottom: "2.5rem",
        left: "2rem",
        display: "flex",
        alignItems: "center",
        gap: "1.5rem"
      }}>
        <span style={{
          fontFamily: "var(--font-montserrat)",
          color: "rgba(255, 255, 255, 0.2)",
          fontSize: "9px",
          fontWeight: 600,
          letterSpacing: "0.4em",
          textTransform: "uppercase"
        }}>Scroll</span>
        <div style={{ width: "40px", height: "1px", backgroundColor: "rgba(255,255,255,0.1)" }}>
          <div className="scroll-progress-line" style={{ width: "20%", height: "1px", backgroundColor: "#f3cc5e" }}></div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 968px) {
          section {
            height: auto !important;
            min-height: 100vh !important;
            padding: 10rem 1.5rem 6rem !important;
          }
          .hero-container {
            flex-direction: column !important;
            gap: 5rem !important;
          }
          .hero-content {
            flex: 1 1 auto !important;
            align-items: center !important;
            text-align: center !important;
          }
          .hero-title {
            font-size: 4rem !important;
          }
          .hero-description {
            max-width: 100% !important;
          }
          .hero-actions {
            justify-content: center !important;
          }
          .hero-video-frame {
            width: 100% !important;
            flex: 1 1 auto !important;
            min-height: 0 !important;
          }
          .decorative-circle {
            right: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}
