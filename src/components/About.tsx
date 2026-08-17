"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getCdnUrl } from "@/lib/cdn";
import { Calendar, Award, MapPin, Compass, Sparkles, CheckCircle2, ArrowUpRight } from "lucide-react";

const stats = [
    { label: "FOUNDED", value: "2015", sub: "10+ Years Experience", icon: Calendar },
    { label: "DELIVERED", value: "350+", sub: "Luxury Residences & Studios", icon: Award },
    { label: "FLAGSHIP", value: "Bengaluru", sub: "Indiranagar Practice", icon: MapPin },
    { label: "EXECUTION", value: "End-to-End", sub: "Design to Turnkey Handover", icon: Compass },
];

const designPillars = [
    { id: "01", name: "PEOPLE" },
    { id: "02", name: "SPACE" },
    { id: "03", name: "MATERIAL" },
    { id: "04", name: "LIGHT" },
    { id: "05", name: "FUNCTION" },
];

function useInView(threshold = 0.08) {
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

export default function About() {
    const { ref: sectionRef, inView } = useInView(0.08);

    return (
        <section
            id="about"
            ref={sectionRef}
            style={{
                position: "relative",
                padding: "clamp(4.5rem, 8vw, 9rem) 1.5rem",
                backgroundColor: "#FAF8F5",
                overflow: "hidden",
            }}
        >
            {/* Subtle Architectural Background Accents */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "45vw",
                    height: "45vw",
                    maxWidth: "600px",
                    maxHeight: "600px",
                    background: "radial-gradient(circle, rgba(197, 160, 89, 0.06) 0%, rgba(250, 248, 245, 0) 70%)",
                    pointerEvents: "none",
                }}
            />

            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
                    gap: "clamp(3rem, 6vw, 5.5rem)",
                    alignItems: "center",
                }}
            >
                {/* Left Side: Dual-Layer Architectural Visual Frame */}
                <div
                    style={{
                        position: "relative",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "none" : "translateX(-30px)",
                        transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                >
                    {/* Primary Image Container */}
                    <div
                        style={{
                            position: "relative",
                            aspectRatio: "4 / 4.8",
                            borderRadius: "1.75rem",
                            overflow: "hidden",
                            boxShadow: "0 30px 60px -15px rgba(28, 27, 26, 0.18), 0 0 0 1px rgba(197, 160, 89, 0.25)",
                            backgroundColor: "#141312",
                        }}
                    >
                        <Image
                            src={getCdnUrl("/work/living_room/living_room_01.jpeg")}
                            alt="Nuspace Creations Interior Design Studio Lounge Bengaluru"
                            fill
                            sizes="(max-width: 768px) 100vw, 600px"
                            style={{ objectFit: "cover" }}
                            priority
                        />

                        {/* Subtle Vignette Gradient Overlay */}
                        <div
                            style={{
                                position: "absolute",
                                inset: 0,
                                background: "linear-gradient(to top, rgba(20, 19, 18, 0.85) 0%, rgba(20, 19, 18, 0.1) 40%, rgba(0,0,0,0) 100%)",
                            }}
                        />

                        {/* Top-Right Est. Badge */}
                        <div
                            style={{
                                position: "absolute",
                                top: "1.25rem",
                                right: "1.25rem",
                                backgroundColor: "rgba(20, 19, 18, 0.75)",
                                backdropFilter: "blur(12px)",
                                padding: "0.5rem 0.9rem",
                                borderRadius: "2rem",
                                border: "1px solid rgba(197, 160, 89, 0.4)",
                                display: "flex",
                                alignItems: "center",
                                gap: "0.4rem",
                            }}
                        >
                            <Sparkles size={13} color="#C5A059" />
                            <span
                                style={{
                                    fontSize: "0.68rem",
                                    fontWeight: 700,
                                    letterSpacing: "0.14em",
                                    color: "#FAF8F5",
                                    textTransform: "uppercase",
                                }}
                            >
                                EST. 2015
                            </span>
                        </div>

                        {/* Bottom Glassmorphic Studio Badge */}
                        <div
                            style={{
                                position: "absolute",
                                bottom: "1.25rem",
                                left: "1.25rem",
                                right: "1.25rem",
                                backgroundColor: "rgba(20, 19, 18, 0.88)",
                                backdropFilter: "blur(16px)",
                                padding: "1.1rem 1.35rem",
                                borderRadius: "1.25rem",
                                color: "#ffffff",
                                border: "1px solid rgba(197, 160, 89, 0.3)",
                                boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                            }}
                        >
                            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                                <span style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#C5A059", fontWeight: 700 }}>
                                    NUSPACE CREATIONS STUDIO
                                </span>
                                <span style={{ fontSize: "0.65rem", color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
                                    BENGALURU, INDIA
                                </span>
                            </div>
                            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.15rem", fontStyle: "italic", fontWeight: 400, color: "#FAF8F5" }}>
                                Craftsmanship & Spatial Architecture
                            </h3>
                        </div>
                    </div>

                    {/* Floating Overlapping Badge - Mobile Friendly */}
                    <div
                        className="about-floating-badge"
                        style={{
                            position: "absolute",
                            bottom: "-1.5rem",
                            right: "-1rem",
                            backgroundColor: "#1C1B1A",
                            color: "#FAF8F5",
                            padding: "1rem 1.4rem",
                            borderRadius: "1.25rem",
                            border: "1px solid rgba(197, 160, 89, 0.4)",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.25)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.85rem",
                            zIndex: 2,
                        }}
                    >
                        <div
                            style={{
                                width: "2.5rem",
                                height: "2.5rem",
                                borderRadius: "50%",
                                backgroundColor: "rgba(139, 38, 62, 0.15)",
                                border: "1px solid #8B263E",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                flexShrink: 0,
                            }}
                        >
                            <CheckCircle2 size={18} color="#C5A059" />
                        </div>
                        <div>
                            <div style={{ fontSize: "1.1rem", fontWeight: 700, fontFamily: "var(--font-serif)", color: "#C5A059", lineHeight: 1.1 }}>
                                10+ Years
                            </div>
                            <div style={{ fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginTop: "0.15rem" }}>
                                Architectural Mastery
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Brand Story & Luxury Philosophy */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "none" : "translateY(30px)",
                        transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.15s",
                    }}
                >
                    {/* Header Pill / Eyebrow */}
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                        <span style={{ width: "2.5rem", height: "1px", backgroundColor: "#C5A059" }} />
                        <span
                            style={{
                                fontFamily: "var(--font-sans)",
                                color: "#8B263E",
                                letterSpacing: "0.26em",
                                fontSize: "0.72rem",
                                fontWeight: 700,
                                textTransform: "uppercase",
                            }}
                        >
                            ABOUT NUSPACE CREATIONS
                        </span>
                    </div>

                    {/* Headline */}
                    <h2
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                            lineHeight: "1.1",
                            color: "#1C1B1A",
                            marginBottom: "1.5rem",
                            fontWeight: 500,
                            letterSpacing: "-0.01em",
                        }}
                    >
                        Spaces That <br />
                        <span style={{ fontStyle: "italic", color: "#8B263E", fontWeight: 400 }}>Feel Like You.</span>
                    </h2>

                    {/* Lead Paragraph */}
                    <p
                        style={{
                            fontSize: "clamp(1.02rem, 1.8vw, 1.12rem)",
                            color: "#1C1B1A",
                            lineHeight: "1.8",
                            marginBottom: "1.5rem",
                            opacity: 0.88,
                            fontWeight: 400,
                        }}
                    >
                        Nuspace Creations is a Bengaluru-based boutique interior practice founded in 2015.
                        We craft bespoke residential and commercial environments that seamlessly balance architectural functionality, luxury aesthetics, and client identity.
                    </p>

                    {/* Architectural Formula / Philosophy Card */}
                    <div
                        style={{
                            backgroundColor: "#1C1B1A",
                            borderRadius: "1.35rem",
                            padding: "1.5rem 1.6rem",
                            marginBottom: "2.2rem",
                            border: "1px solid rgba(197, 160, 89, 0.3)",
                            boxShadow: "0 15px 35px rgba(28, 27, 26, 0.08)",
                        }}
                    >
                        <span
                            style={{
                                display: "block",
                                fontSize: "0.72rem",
                                fontWeight: 600,
                                letterSpacing: "0.14em",
                                textTransform: "uppercase",
                                color: "#C5A059",
                                marginBottom: "0.85rem",
                            }}
                        >
                            OUR DESIGN JOURNEY COLLABORATION
                        </span>

                        <p style={{ fontSize: "0.92rem", color: "rgba(255, 255, 255, 0.78)", lineHeight: "1.6", marginBottom: "1.1rem" }}>
                            Every space we create is sculpted through a harmony of five foundational pillars:
                        </p>

                        {/* Interactive Design Formula Pills */}
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "wrap",
                                gap: "0.5rem 0.65rem",
                                alignItems: "center",
                            }}
                        >
                            {designPillars.map((pillar, idx) => (
                                <div key={pillar.id} style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}>
                                    <div
                                        className="pillar-badge"
                                        style={{
                                            backgroundColor: "rgba(255, 255, 255, 0.06)",
                                            border: "1px solid rgba(197, 160, 89, 0.35)",
                                            padding: "0.45rem 0.85rem",
                                            borderRadius: "0.75rem",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.4rem",
                                            transition: "all 0.3s ease",
                                        }}
                                    >
                                        <span style={{ fontSize: "0.62rem", color: "#8B263E", fontWeight: 700 }}>
                                            {pillar.id}
                                        </span>
                                        <span style={{ fontSize: "0.74rem", color: "#FAF8F5", fontWeight: 600, letterSpacing: "0.12em" }}>
                                            {pillar.name}
                                        </span>
                                    </div>
                                    {idx < designPillars.length - 1 && (
                                        <span style={{ color: "#C5A059", fontSize: "0.8rem", fontWeight: 600, opacity: 0.8 }}>
                                            +
                                        </span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stat Cards Grid */}
                    <div
                        className="about-stats-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "1rem",
                            borderTop: "1px solid rgba(28, 27, 26, 0.12)",
                            paddingTop: "1.75rem",
                        }}
                    >
                        {stats.map((stat, idx) => {
                            const IconComponent = stat.icon;
                            return (
                                <div
                                    key={idx}
                                    className="about-stat-card"
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: "0.35rem",
                                        backgroundColor: "#FAF6F0",
                                        padding: "1rem 0.85rem",
                                        borderRadius: "1rem",
                                        border: "1px solid rgba(197, 160, 89, 0.2)",
                                        transition: "transform 0.3s ease, border-color 0.3s ease",
                                    }}
                                >
                                    <div
                                        style={{
                                            width: "2.35rem",
                                            height: "2.35rem",
                                            borderRadius: "0.65rem",
                                            backgroundColor: "#1C1B1A",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "0.25rem",
                                        }}
                                    >
                                        <IconComponent size={16} color="#C5A059" strokeWidth={1.75} />
                                    </div>
                                    <span
                                        style={{
                                            fontFamily: "var(--font-serif)",
                                            fontSize: "clamp(1.4rem, 2.2vw, 1.85rem)",
                                            fontWeight: 600,
                                            color: "#8B263E",
                                            lineHeight: 1,
                                        }}
                                    >
                                        {stat.value}
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: "var(--font-sans)",
                                            fontSize: "0.64rem",
                                            fontWeight: 700,
                                            color: "#1C1B1A",
                                            letterSpacing: "0.12em",
                                            textTransform: "uppercase",
                                            opacity: 0.85,
                                        }}
                                    >
                                        {stat.label}
                                    </span>
                                    <span
                                        style={{
                                            fontSize: "0.64rem",
                                            color: "#1C1B1A",
                                            opacity: 0.6,
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {stat.sub}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .about-stat-card:hover {
                    transform: translateY(-4px);
                    border-color: rgba(139, 38, 62, 0.4) !important;
                }
                .pillar-badge:hover {
                    background-color: rgba(139, 38, 62, 0.2) !important;
                    border-color: #C5A059 !important;
                }
                @media (max-width: 768px) {
                    .about-floating-badge {
                        position: relative !important;
                        bottom: auto !important;
                        right: auto !important;
                        margin-top: 1.25rem !important;
                    }
                    .about-stats-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 1rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
