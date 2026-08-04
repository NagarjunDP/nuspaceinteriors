"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { getCdnUrl } from "@/lib/cdn";

import { Calendar, Award, MapPin, Compass } from "lucide-react";

const stats = [
    { label: "Founded", value: "2015", icon: Calendar },
    { label: "Projects Delivered", value: "350+", icon: Award },
    { label: "Based in", value: "Bengaluru", icon: MapPin },
    { label: "Execution", value: "End-to-End", icon: Compass },
];

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

export default function About() {
    const { ref: sectionRef, inView } = useInView(0.08);

    return (
        <section
            id="about"
            ref={sectionRef}
            style={{
                position: "relative",
                padding: "clamp(4rem, 8vw, 8rem) 1.5rem",
                backgroundColor: "#FAF8F5",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
                    gap: "3.5rem",
                    alignItems: "center",
                }}
            >
                {/* Left Side: Real Studio/Work Image */}
                <div
                    style={{
                        position: "relative",
                        aspectRatio: "4 / 4.8",
                        maxHeight: "600px",
                        borderRadius: "1.5rem",
                        overflow: "hidden",
                        boxShadow: "0 25px 50px -15px rgba(28, 27, 26, 0.15)",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "none" : "translateX(-40px)",
                        transition: "opacity 0.9s ease, transform 0.9s ease",
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
                    <div
                        style={{
                            position: "absolute",
                            bottom: "1.25rem",
                            left: "1.25rem",
                            right: "1.25rem",
                            backgroundColor: "rgba(20, 19, 18, 0.88)",
                            backdropFilter: "blur(12px)",
                            padding: "0.85rem 1.25rem",
                            borderRadius: "1rem",
                            color: "#ffffff",
                            border: "1px solid rgba(255,255,255,0.15)",
                        }}
                    >
                        <span style={{ fontSize: "0.68rem", letterSpacing: "0.22em", textTransform: "uppercase", color: "#8B263E", fontWeight: 600, display: "block" }}>
                            NUSPACE CREATIONS STUDIO BENGALURU
                        </span>
                        <span style={{ fontFamily: "var(--font-serif)", fontSize: "1.1rem", fontStyle: "italic" }}>
                            Craftsmanship & Spatial Harmony
                        </span>
                    </div>
                </div>

                {/* Right Side: Brand Story */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "none" : "translateY(30px)",
                        transition: "opacity 0.9s ease 0.2s, transform 0.9s ease 0.2s",
                    }}
                >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                        <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
                        <span
                            style={{
                                fontFamily: "var(--font-sans)",
                                color: "#8B263E",
                                letterSpacing: "0.25em",
                                fontSize: "0.72rem",
                                fontWeight: 600,
                                textTransform: "uppercase",
                            }}
                        >
                            ABOUT NUSPACE CREATIONS
                        </span>
                    </div>

                    <h2
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
                            lineHeight: "1.12",
                            color: "#1C1B1A",
                            marginBottom: "1.5rem",
                            fontWeight: 500,
                        }}
                    >
                        Spaces That <br /> Feel Like You.
                    </h2>

                    <p
                        style={{
                            fontSize: "1.05rem",
                            color: "#1C1B1A",
                            lineHeight: "1.75",
                            marginBottom: "1.25rem",
                            opacity: 0.82,
                        }}
                    >
                        Nuspace Creations is a Bengaluru-based boutique interior practice founded in 2015.
                        We craft bespoke residential and commercial environments that seamlessly balance architectural functionality, luxury aesthetics, and client identity.
                    </p>

                    <p
                        style={{
                            fontSize: "0.95rem",
                            color: "#1C1B1A",
                            lineHeight: "1.75",
                            marginBottom: "2rem",
                            opacity: 0.72,
                        }}
                    >
                        We approach each design journey as a thoughtful collaboration between:
                        <strong style={{ display: "block", color: "#8B263E", marginTop: "0.5rem", fontWeight: 600, letterSpacing: "0.05em" }}>
                            People + Space + Material + Light + Function
                        </strong>
                    </p>

                    {/* Stat Cards with Charcoal Badge Icons */}
                    <div
                        className="about-stats-grid"
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(4, 1fr)",
                            gap: "1rem",
                            borderTop: "1px solid rgba(28, 27, 26, 0.12)",
                            paddingTop: "1.5rem",
                        }}
                    >
                        {stats.map((stat, idx) => {
                            const IconComponent = stat.icon;
                            return (
                                <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                                    <div
                                        style={{
                                            width: "2.75rem",
                                            height: "2.75rem",
                                            borderRadius: "50%",
                                            backgroundColor: "#1C1B1A",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "0.35rem",
                                        }}
                                    >
                                        <IconComponent size={18} color="#8B263E" strokeWidth={1.5} />
                                    </div>
                                    <span
                                        style={{
                                            fontFamily: "var(--font-serif)",
                                            fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)",
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
                                            fontSize: "0.66rem",
                                            fontWeight: 600,
                                            color: "#1C1B1A",
                                            letterSpacing: "0.1em",
                                            textTransform: "uppercase",
                                            opacity: 0.6,
                                        }}
                                    >
                                        {stat.label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 640px) {
                    .about-stats-grid {
                        grid-template-columns: repeat(2, 1fr) !important;
                        gap: 1.25rem 1rem !important;
                    }
                }
            `}</style>
        </section>
    );
}
