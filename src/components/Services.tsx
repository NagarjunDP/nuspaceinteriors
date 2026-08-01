"use client";

import { useState, useEffect, useRef } from "react";
import { Home, RefreshCw, Key, Sparkles, ArrowUpRight } from "lucide-react";
import { getCdnUrl } from "@/lib/cdn";

const services = [
    {
        number: "01",
        title: "Residential & Commercial Design",
        description: "Bespoke, end-to-end interior design and execution for luxury homes, private villas, corporate offices, retail spaces, and boutique commercial environments.",
        icon: Home,
        accent: "#8B263E",
        highlights: ["Bespoke Villa Interiors", "Corporate Executive Offices", "Retail & Hospitality Design"],
        src: getCdnUrl("/work/residential/residential_01.jpeg"),
    },
    {
        number: "02",
        title: "Renovation & Remodeling",
        description: "Transform existing spaces with innovative design thinking, optimised floor layouts, modern architectural aesthetics, and high-end surface finishes.",
        icon: RefreshCw,
        accent: "#6b4f3a",
        highlights: ["Structural Layout Overhaul", "Modern Facelift & Finishes", "Space Optimisation"],
        src: getCdnUrl("/work/renovation/renovation_01.jpeg"),
    },
    {
        number: "03",
        title: "Turnkey Project Management",
        description: "Complete hands-off project management — Concept → Planning → Procurement → Execution → Quality Control → Timely Handover. One team, zero chaos.",
        icon: Key,
        accent: "#3a5e6b",
        highlights: ["Single Point of Accountability", "Transparent BOQ & Costing", "On-time Delivery Tracking"],
        src: getCdnUrl("/work/turnkey/turnkey_01.jpeg"),
    },
    {
        number: "04",
        title: "End-to-End Interior Solutions",
        description: "Comprehensive solutions including space planning, custom furniture manufacturing, modular kitchens, wardrobes, lighting design, and full décor styling.",
        icon: Sparkles,
        accent: "#4a6b3a",
        highlights: ["Custom Modular Furniture", "Bespoke Teak & Veneer Joinery", "Lighting & Styling"],
        src: getCdnUrl("/work/living_room/living_room_01.jpeg"),
    },
];

function useInView(threshold = 0.15) {
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

export default function Services() {
    const { ref: sectionRef, inView } = useInView(0.1);

    return (
        <section
            id="services"
            ref={sectionRef}
            style={{
                position: "relative",
                padding: "6rem 1.5rem",
                backgroundColor: "#1C1B1A",
                color: "#ffffff",
            }}
        >
            {/* Subtle bg grain */}
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(139,38,62,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

            <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>

                {/* ── Header ── */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "4rem",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "none" : "translateY(30px)",
                        transition: "opacity 0.8s ease, transform 0.8s ease",
                    }}
                >
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                        <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#8B263E" }}>
                            WHAT WE DO
                        </span>
                        <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
                    </div>
                    <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2.2rem, 5vw, 4.2rem)", color: "#FAF8F5", marginBottom: "1rem", fontWeight: 500, lineHeight: 1.1 }}>
                        Interior Solutions, Engineered for Living
                    </h2>
                    <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1rem", maxWidth: "600px", margin: "0 auto", lineHeight: 1.7 }}>
                        From initial spatial planning to custom furniture craftsmanship and turnkey site delivery.
                    </p>
                </div>

                {/* ── Cards Grid ── */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 280px), 1fr))",
                        gap: "1.5rem",
                        marginBottom: "3.5rem",
                    }}
                >
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <ServiceCard
                                key={idx}
                                service={service}
                                Icon={Icon}
                                delay={idx * 120}
                                inView={inView}
                            />
                        );
                    })}
                </div>

                {/* ── CTA ── */}
                <div style={{ textAlign: "center", opacity: inView ? 1 : 0, transition: "opacity 1s ease 0.6s" }}>
                    <a href="#contact" className="btn-primary" style={{ borderRadius: "9999px", padding: "0.9rem 2.25rem" }}>
                        <span>Discuss Your Project Requirements</span>
                        <ArrowUpRight size={16} />
                    </a>
                </div>
            </div>
        </section>
    );
}

function ServiceCard({
    service,
    Icon,
    delay,
    inView,
}: {
    service: typeof services[0];
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
                position: "relative",
                borderRadius: "1.25rem",
                overflow: "hidden",
                backgroundColor: "#141312",
                border: hovered ? `1px solid ${service.accent}` : "1px solid rgba(255,255,255,0.09)",
                transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: hovered ? "translateY(-6px)" : inView ? "none" : "translateY(40px)",
                opacity: inView ? 1 : 0,
                transitionDelay: `${delay}ms`,
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                minHeight: "400px",
            }}
        >
            {/* Real photo background */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage: `url(${service.src})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: hovered ? 0.28 : 0.06,
                    transform: hovered ? "scale(1.07)" : "scale(1)",
                    transition: "opacity 0.55s ease, transform 0.55s ease",
                }}
            />
            {/* Gradient overlay */}
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(20,19,18,0.6) 0%, transparent 100%)" }} />

            {/* Content */}
            <div style={{ position: "relative", zIndex: 1, padding: "2.25rem 1.75rem", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                <div>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.75rem" }}>
                        <span style={{ fontFamily: "var(--font-serif)", fontSize: "2.2rem", fontWeight: 700, color: hovered ? service.accent : "rgba(255,255,255,0.18)", transition: "color 0.3s" }}>
                            {service.number}
                        </span>
                        <div style={{ width: "2.75rem", height: "2.75rem", borderRadius: "50%", backgroundColor: hovered ? service.accent : "rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", transition: "background 0.3s" }}>
                            <Icon size={18} />
                        </div>
                    </div>

                    <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.55rem", color: "#ffffff", marginBottom: "0.9rem", lineHeight: 1.25, fontWeight: 500 }}>
                        {service.title}
                    </h3>
                    <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.65, marginBottom: "1.25rem" }}>
                        {service.description}
                    </p>

                    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
                        {service.highlights.map((h, i) => (
                            <li key={i} style={{ fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                                <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: service.accent, flexShrink: 0 }} />
                                {h}
                            </li>
                        ))}
                    </ul>
                </div>

                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginTop: "2rem", color: hovered ? service.accent : "rgba(255,255,255,0.5)", transition: "color 0.3s" }}>
                    <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                        Explore Service
                    </span>
                    <ArrowUpRight size={15} />
                </div>
            </div>
        </div>
    );
}
