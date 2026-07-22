"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, MapPin, Maximize2, Users } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProject() {
    const [sliderPosition, setSliderPosition] = useState(50);
    const sectionRef = useRef(null);
    const containerRef = useRef(null);

    const handleMouseMove = (e: React.MouseEvent | React.TouchEvent) => {
        if (!containerRef.current) return;
        const container = containerRef.current as HTMLElement;
        const rect = container.getBoundingClientRect();
        const x = "touches" in e ? (e as React.TouchEvent).touches[0].clientX : (e as React.MouseEvent).clientX;
        const position = ((x - rect.left) / rect.width) * 100;
        setSliderPosition(Math.max(0, Math.min(100, position)));
    };

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".featured-content", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                x: 50,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
            });

            gsap.from(".featured-image-container", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                scale: 0.95,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="featured"
            ref={sectionRef}
            style={{
                width: "100%",
                padding: "clamp(5rem, 10vw, 10rem) 0",
                backgroundColor: "#FDFDFB",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "1800px",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: "0 2rem",
                    gap: "3rem",
                }}
                className="featured-container"
            >
                {/* Left Side: Before/After Slider */}
                <div
                    className="featured-image-container"
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleMouseMove}
                    style={{
                        flex: "1 1 500px",
                        position: "relative",
                        height: "clamp(400px, 60vh, 700px)",
                        borderRadius: "2rem",
                        overflow: "hidden",
                        cursor: "col-resize",
                        boxShadow: "0 40px 100px -20px rgba(0,0,0,0.15)",
                    }}
                >
                    {/* After Image (Background) */}
                    <Image
                        src="https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&q=80&w=1200"
                        alt="After - Contemporary Living Room"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            bottom: "2rem",
                            right: "2rem",
                            backgroundColor: "rgba(255,255,255,0.2)",
                            backdropFilter: "blur(10px)",
                            padding: "0.5rem 1rem",
                            borderRadius: "100px",
                            color: "#ffffff",
                            fontSize: "10px",
                            fontFamily: "var(--font-montserrat)",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            zIndex: 5
                        }}
                    >
                        After
                    </div>

                    {/* Before Image (Overlay) */}
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            width: `${sliderPosition}%`,
                            overflow: "hidden",
                            borderRight: "2px solid #ffffff",
                            zIndex: 2
                        }}
                    >
                        <div style={{
                            position: "absolute",
                            inset: 0,
                            width: containerRef.current ? (containerRef.current as HTMLElement).offsetWidth : "100vw",
                            height: "100%"
                        }}>
                            <Image
                                src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1200"
                                alt="Before - Outdated Space"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <div
                            style={{
                                position: "absolute",
                                bottom: "2rem",
                                left: "2rem",
                                backgroundColor: "rgba(0,0,0,0.2)",
                                backdropFilter: "blur(10px)",
                                padding: "0.5rem 1rem",
                                borderRadius: "100px",
                                color: "#ffffff",
                                fontSize: "10px",
                                fontFamily: "var(--font-montserrat)",
                                fontWeight: 600,
                                textTransform: "uppercase",
                                letterSpacing: "0.1em",
                            }}
                        >
                            Before
                        </div>
                    </div>

                    {/* Slider Handle */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            bottom: 0,
                            left: `${sliderPosition}%`,
                            width: "4px",
                            backgroundColor: "#ffffff",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                            pointerEvents: "none",
                        }}
                    >
                        <div
                            style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                width: "40px",
                                height: "40px",
                                borderRadius: "100%",
                                backgroundColor: "#ffffff",
                                boxShadow: "0 0 20px rgba(0,0,0,0.2)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <div style={{ display: "flex", gap: "3px" }}>
                                <div style={{ width: "2px", height: "10px", backgroundColor: "#4A90A4" }}></div>
                                <div style={{ width: "2px", height: "10px", backgroundColor: "#4A90A4" }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Details Card */}
                <div
                    className="featured-content"
                    style={{
                        flex: "1 1 400px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <div
                        style={{
                            backgroundColor: "#ffffff",
                            padding: "clamp(2rem, 5vw, 4rem)",
                            borderRadius: "2rem",
                            boxShadow: "0 30px 60px -10px rgba(0,0,0,0.05)",
                            border: "1px solid rgba(0,0,0,0.02)",
                        }}
                    >
                        <span
                            style={{
                                fontFamily: "var(--font-montserrat)",
                                fontSize: "10px",
                                fontWeight: 700,
                                color: "#4A90A4",
                                letterSpacing: "0.3em",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: "1.5rem",
                            }}
                        >
                            Featured Case Study
                        </span>
                        <h2
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                                lineHeight: "1.1",
                                color: "#2C2C2C",
                                marginBottom: "1.5rem",
                            }}
                        >
                            The Serene Retreat <br /> — Indiranagar Villa
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-dm-sans)",
                                fontSize: "1rem",
                                color: "rgba(44,44,44,0.7)",
                                lineHeight: "1.8",
                                marginBottom: "2.5rem",
                            }}
                        >
                            A 4BHK luxury villa redesigned with locally sourced teak furniture,
                            hand-crafted veneers, and panoramic open-plan living spaces.
                            Every room breathes calm.
                        </p>

                        {/* Project Stats */}
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "1.5rem",
                                marginBottom: "3rem",
                                padding: "1.5rem 0",
                                borderTop: "1px solid rgba(0,0,0,0.05)",
                                borderBottom: "1px solid rgba(0,0,0,0.05)",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <Users size={16} color="#A8B5A0" />
                                <span style={{ fontSize: "0.85rem", color: "#2C2C2C", fontWeight: 500 }}>Residential</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <Maximize2 size={16} color="#A8B5A0" />
                                <span style={{ fontSize: "0.85rem", color: "#2C2C2C", fontWeight: 500 }}>3200 sqft</span>
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <MapPin size={16} color="#A8B5A0" />
                                <span style={{ fontSize: "0.85rem", color: "#2C2C2C", fontWeight: 500 }}>Kochi, Kerala</span>
                            </div>
                        </div>

                        <button
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "1.5rem",
                                background: "none",
                                border: "none",
                                padding: 0,
                                cursor: "pointer",
                            }}
                            onMouseEnter={(e: any) => {
                                const arrow = e.currentTarget.querySelector(".arrow-circle");
                                if (arrow) (arrow as HTMLElement).style.transform = "translateX(5px)";
                            }}
                            onMouseLeave={(e: any) => {
                                const arrow = e.currentTarget.querySelector(".arrow-circle");
                                if (arrow) (arrow as HTMLElement).style.transform = "translateX(0)";
                            }}
                        >
                            <span
                                style={{
                                    fontFamily: "var(--font-montserrat)",
                                    fontSize: "11px",
                                    fontWeight: 700,
                                    color: "#2C2C2C",
                                    letterSpacing: "0.2em",
                                    textTransform: "uppercase",
                                }}
                            >
                                See Full Case Study
                            </span>
                            <div
                                className="arrow-circle"
                                style={{
                                    width: "2.5rem",
                                    height: "2.5rem",
                                    borderRadius: "100%",
                                    border: "1px solid #4A90A4",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "transform 0.4s ease",
                                }}
                            >
                                <ArrowRight size={16} color="#4A90A4" />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            <style jsx>{`
          @media (max-width: 968px) {
            .featured-container {
              flex-direction: column !important;
            }
            .featured-image-container {
              width: 100% !important;
              flex: 1 1 auto !important;
            }
            .featured-content {
              width: 100% !important;
              flex: 1 1 auto !important;
            }
          }
        `}</style>
        </section>
    );
}
