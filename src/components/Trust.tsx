"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle, Paintbrush, Layers, Award, Clock, PiggyBank } from "lucide-react";

const trustFeatures = [
    {
        title: "End-to-End Turnkey Execution",
        description: "We manage every stage from initial civil work to final styling, furniture placement, and key delivery.",
        icon: CheckCircle,
        color: "#8B263E",
    },
    {
        title: "100% Bespoke Interiors",
        description: "No templated layouts or cookie-cutter designs. Every single space is uniquely tailored to your individual lifestyle.",
        icon: Paintbrush,
        color: "#a03d52",
    },
    {
        title: "Photorealistic 3D Visuals",
        description: "Experience your future space in high-definition 3D before a single hammer is raised or materials are cut.",
        icon: Layers,
        color: "#1c4f6b",
    },
    {
        title: "Precision Workshop Quality",
        description: "Custom modular joinery and teak/veneer furniture crafted with zero compromise on tolerances or material purity.",
        icon: Award,
        color: "#6b4226",
    },
    {
        title: "Guaranteed Timely Delivery",
        description: "Disciplined scheduling with clear milestone tracking and on-time handover guaranteed across Bengaluru.",
        icon: Clock,
        color: "#3a6b3a",
    },
    {
        title: "Transparent BOQ Costing",
        description: "No hidden fees or unexpected costs mid-way. Detailed itemized estimates for complete financial peace of mind.",
        icon: PiggyBank,
        color: "#5a4b8b",
    },
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

export default function Trust() {
    const { ref: sectionRef, inView } = useInView(0.1);

    return (
        <section
            id="trust"
            ref={sectionRef}
            style={{
                padding: "6rem 1.5rem",
                backgroundColor: "#141312",
                color: "#ffffff",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative" }}>

                {/* ── Section Header ── */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "4.5rem",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "none" : "translateY(30px)",
                        transition: "opacity 0.8s ease, transform 0.8s ease",
                    }}
                >
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
                        <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
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
                            THE NUSPACE GUARANTEE
                        </span>
                        <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
                    </div>

                    <h2
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
                            color: "#FAF8F5",
                            fontWeight: 500,
                            lineHeight: "1.15",
                        }}
                    >
                        Why Clients Choose <br /> Nuspace Creations
                    </h2>
                </div>

                {/* ── Features Grid ── */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {trustFeatures.map((feature, idx) => (
                        <TrustFeatureBox
                            key={idx}
                            feature={feature}
                            delay={idx * 100}
                            inView={inView}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function TrustFeatureBox({
    feature,
    delay,
    inView,
}: {
    feature: typeof trustFeatures[0];
    delay: number;
    inView: boolean;
}) {
    const [hovered, setHovered] = useState(false);
    const Icon = feature.icon;

    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                backgroundColor: hovered ? `${feature.color}15` : "rgba(255,255,255,0.03)",
                padding: "2.5rem 2rem",
                borderRadius: "1.25rem",
                border: hovered ? `1px solid ${feature.color}50` : "1px solid rgba(255,255,255,0.08)",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: hovered ? "translateY(-6px)" : inView ? "none" : "translateY(35px)",
                opacity: inView ? 1 : 0,
                transitionDelay: `${delay}ms`,
            }}
        >
            <div
                style={{
                    width: "3rem",
                    height: "3rem",
                    borderRadius: "50%",
                    backgroundColor: `${feature.color}25`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "1.5rem",
                    color: feature.color,
                    transition: "transform 0.3s ease",
                    transform: hovered ? "scale(1.1)" : "scale(1)",
                }}
            >
                <Icon size={22} strokeWidth={1.8} />
            </div>

            <h3
                style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.5rem",
                    color: "#ffffff",
                    marginBottom: "0.85rem",
                    fontWeight: 500,
                    lineHeight: 1.25,
                }}
            >
                {feature.title}
            </h3>

            <p
                style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "0.9rem",
                    color: "rgba(255,255,255,0.68)",
                    lineHeight: "1.65",
                    margin: 0,
                }}
            >
                {feature.description}
            </p>
        </div>
    );
}
