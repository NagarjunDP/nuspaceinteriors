"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Compass, Eye, Layers, ShieldCheck, Quote } from "lucide-react";
import { getCdnUrl } from "@/lib/cdn";

const principles = [
    {
        icon: Compass,
        number: "01",
        title: "Timeless",
        description: "We design for longevity — not trend cycles. Every material, proportion, and palette choice is made to endure beautifully across decades.",
        color: "#8B263E",
    },
    {
        icon: Eye,
        number: "02",
        title: "Personal",
        description: "Every space is a portrait of its owner. We listen deeply to your lifestyle, identity, and aspirations before a single line is drawn.",
        color: "#6b4226",
    },
    {
        icon: Layers,
        number: "03",
        title: "Functional",
        description: "True luxury is space that works beautifully. Form always follows function — flow, storage, light, and scale are choreographed precisely.",
        color: "#1c4f6b",
    },
    {
        icon: ShieldCheck,
        number: "04",
        title: "Precise",
        description: "Material selections, joinery tolerances, lighting angles — every detail passes our rigorous quality standard before it reaches your space.",
        color: "#3a6b3a",
    },
];

function useInView(threshold = 0.12) {
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

export default function Philosophy() {
    const { ref, inView } = useInView(0.1);

    return (
        <section
            id="philosophy"
            ref={ref}
            style={{
                padding: "7rem 1.5rem",
                backgroundColor: "#141312",
                color: "#ffffff",
                position: "relative",
                overflow: "hidden",
            }}
        >
            {/* Background Moody Interior Image */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 0,
                    opacity: 0.22,
                    filter: "contrast(110%) brightness(85%)",
                }}
            >
                <Image
                    src={getCdnUrl("/work/living_room/living_room_01.jpeg")}
                    alt="Moody Interior Atmosphere"
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                />
            </div>

            {/* Dark gradient overlay for high contrast */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 1,
                    background: "linear-gradient(180deg, rgba(20,19,18,0.92) 0%, rgba(20,19,18,0.78) 50%, rgba(20,19,18,0.95) 100%)",
                    pointerEvents: "none",
                }}
            />

            <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 2 }}>

                {/* ── Header ── */}
                <div style={{ textAlign: "center", marginBottom: "3rem", opacity: inView ? 1 : 0, transform: inView ? "none" : "translateY(32px)", transition: "opacity 0.9s ease, transform 0.9s ease" }}>
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                        <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#8B263E" }}>
                            DESIGN PHILOSOPHY
                        </span>
                        <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
                    </div>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 5vw, 4.2rem)", fontWeight: 500, lineHeight: 1.1, color: "#FAF8F5", marginBottom: "1rem" }}>
                        Designed for Living.{" "}
                        <em style={{ fontStyle: "italic", color: "rgba(250,248,245,0.7)" }}>Crafted for Life.</em>
                    </h2>
                    
                    {/* Emotional Pull-Quote */}
                    <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", color: "#FAF8F5", fontSize: "clamp(1.1rem, 2vw, 1.4rem)", maxWidth: "680px", margin: "0 auto 1rem", opacity: 0.9, lineHeight: 1.5 }}>
                        &ldquo;We don&apos;t design rooms. We design the way you&apos;ll remember them.&rdquo;
                    </p>

                    <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.95rem", maxWidth: "560px", margin: "0 auto", lineHeight: 1.7 }}>
                        Our four founding principles guide every decision — from your first conversation to the final handover.
                    </p>
                </div>

                {/* ── Principles Grid ── */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 260px), 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {principles.map((p, idx) => {
                        const Icon = p.icon;
                        return (
                            <PhilosophyCard key={p.number} p={p} Icon={Icon} delay={idx * 200} inView={inView} />
                        );
                    })}
                </div>

                {/* ── Quote Strip ── */}
                <div
                    style={{
                        marginTop: "4rem",
                        borderTop: "1px solid rgba(255,255,255,0.1)",
                        paddingTop: "3rem",
                        textAlign: "center",
                        opacity: inView ? 1 : 0,
                        transition: "opacity 1s ease 0.7s",
                    }}
                >
                    <blockquote style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", color: "rgba(255,255,255,0.85)", maxWidth: "780px", margin: "0 auto", lineHeight: 1.5 }}>
                        &ldquo;A Nuspace Creations project is not a renovation — it is an orchestration of light, material, and lived experience.&rdquo;
                    </blockquote>
                    <p style={{ marginTop: "1.25rem", color: "#8B263E", fontSize: "0.78rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase" }}>
                        — Nuspace Creations, Est. 2015
                    </p>
                </div>
            </div>
        </section>
    );
}

function PhilosophyCard({
    p,
    Icon,
    delay,
    inView,
}: {
    p: typeof principles[0];
    Icon: React.ElementType;
    delay: number;
    inView: boolean;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: hovered ? "rgba(20, 19, 18, 0.85)" : "rgba(255,255,255,0.06)",
                backdropFilter: "blur(16px)",
                border: hovered ? `1px solid ${p.color}` : "1px solid rgba(255,255,255,0.12)",
                boxShadow: hovered ? `0 20px 40px -10px ${p.color}40` : "0 15px 30px -10px rgba(0,0,0,0.5)",
                borderRadius: "1.25rem",
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                transition: "all 0.45s cubic-bezier(0.16,1,0.3,1)",
                transform: hovered ? "translateY(-8px)" : inView ? "none" : "translateY(35px)",
                opacity: inView ? 1 : 0,
                transitionDelay: `${delay}ms`,
                cursor: "default",
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ width: "3rem", height: "3rem", borderRadius: "12px", backgroundColor: `${p.color}35`, display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", transition: "background 0.3s" }}>
                    <Icon size={22} strokeWidth={1.75} />
                </div>
                <span style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", fontWeight: 700, color: hovered ? p.color : "rgba(255,255,255,0.22)", transition: "color 0.3s" }}>
                    {p.number}
                </span>
            </div>

            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.85rem", fontWeight: 500, color: "#ffffff", margin: 0, lineHeight: 1.1 }}>
                {p.title}
            </h3>

            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                {p.description}
            </p>

            {/* Accent bottom bar */}
            <div style={{ height: "2px", backgroundColor: p.color, borderRadius: "9999px", width: hovered ? "100%" : "2.5rem", transition: "width 0.4s ease", marginTop: "auto" }} />
        </div>
    );
}
