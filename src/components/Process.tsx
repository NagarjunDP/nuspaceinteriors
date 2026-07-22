"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, PenTool, Layers, Factory, HardHat, Sparkles, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Consultation & Site Visit",
        description: "Initial client meeting, in-depth site measurements, requirement gathering, and budget discussion.",
        icon: MessageSquare,
        items: ["Client Meeting", "Site Measurements", "Requirement Gathering", "Budget Discussion"],
        accent: "#8B263E",
    },
    {
        number: "02",
        title: "Concept & Design Development",
        description: "Architectural space planning, mood boards, 2D floor plans, 3D visualizations, and design approval.",
        icon: PenTool,
        items: ["Space Planning", "Mood Boards", "2D Layouts", "3D Visualizations", "Design Approval"],
        accent: "#a03d52",
    },
    {
        number: "03",
        title: "Material Selection & Costing",
        description: "Selecting premium veneers, marbles, finishes, transparent BOQ breakdown, final quotation, and project scheduling.",
        icon: Layers,
        items: ["Material Selection", "Transparent BOQ", "Final Quotation", "Project Scheduling"],
        accent: "#b54e63",
    },
    {
        number: "04",
        title: "Production & Procurement",
        description: "Precision custom furniture manufacturing, raw material procurement, and strict workshop quality inspections.",
        icon: Factory,
        items: ["Custom Manufacturing", "Material Procurement", "Quality Inspections", "Factory Checks"],
        accent: "#a85d38",
    },
    {
        number: "05",
        title: "Site Execution",
        description: "On-site civil work, electrical, plumbing, false ceiling, flooring, painting, and modular installations.",
        icon: HardHat,
        items: ["Civil & Plumbing", "Electrical & False Ceiling", "Flooring & Painting", "Modular Installations"],
        accent: "#3a7a6b",
    },
    {
        number: "06",
        title: "Finishing & Styling",
        description: "Architectural lighting, décor placement, accessories, final touch-ups, and thorough deep cleaning.",
        icon: Sparkles,
        items: ["Architectural Lighting", "Décor & Accessories", "Final Touch-ups", "Deep Cleaning"],
        accent: "#3a6b8b",
    },
    {
        number: "07",
        title: "Quality Check & Handover",
        description: "Comprehensive 100-point inspection, snag rectification, guided client walkthrough, and formal project handover.",
        icon: ShieldCheck,
        items: ["Final Inspection", "Snag Rectification", "Client Walkthrough", "Project Handover"],
        accent: "#5a4b8b",
    },
];

function useInView(threshold = 0.08) {
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

export default function Process() {
    const { ref: sectionRef, inView } = useInView(0.08);
    const [activeMobileStep, setActiveMobileStep] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const scrollToStep = (index: number) => {
        setActiveMobileStep(index);
        if (sliderRef.current) {
            const cardWidth = sliderRef.current.clientWidth;
            sliderRef.current.scrollTo({
                left: cardWidth * index,
                behavior: "smooth",
            });
        }
    };

    const handleScroll = () => {
        if (sliderRef.current) {
            const scrollLeft = sliderRef.current.scrollLeft;
            const cardWidth = sliderRef.current.clientWidth;
            const newIndex = Math.round(scrollLeft / cardWidth);
            if (newIndex !== activeMobileStep && newIndex >= 0 && newIndex < steps.length) {
                setActiveMobileStep(newIndex);
            }
        }
    };

    return (
        <section
            id="process"
            ref={sectionRef}
            style={{
                padding: "5rem 1.25rem",
                backgroundColor: "#FAF8F5",
                color: "#1C1B1A",
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div style={{ maxWidth: "1350px", margin: "0 auto", position: "relative" }}>

                {/* ── Section Header ── */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "3.5rem",
                        opacity: inView ? 1 : 0,
                        transform: inView ? "none" : "translateY(30px)",
                        transition: "opacity 0.8s ease, transform 0.8s ease",
                    }}
                >
                    <div style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.85rem" }}>
                        <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
                        <span style={{ fontFamily: "var(--font-sans)", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.28em", textTransform: "uppercase", color: "#8B263E" }}>
                            THE 7-STEP WORKFLOW
                        </span>
                        <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
                    </div>

                    <h2
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(2rem, 5vw, 4.2rem)",
                            color: "#1C1B1A",
                            fontWeight: 500,
                            marginBottom: "0.85rem",
                            lineHeight: 1.12,
                        }}
                    >
                        From First Conversation to Final Handover.
                    </h2>

                    <p
                        style={{
                            color: "rgba(28, 27, 26, 0.72)",
                            fontSize: "0.98rem",
                            maxWidth: "640px",
                            margin: "0 auto",
                            lineHeight: 1.65,
                        }}
                    >
                        Our transparent 7-stage project execution framework matches architectural precision, timeline discipline, and zero surprises.
                    </p>
                </div>

                {/* ── Desktop Stepper Track (Visible >= 1024px) ── */}
                <div
                    className="desktop-stepper"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "3rem",
                        position: "relative",
                        padding: "0 1rem",
                    }}
                >
                    <div
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: "3rem",
                            right: "3rem",
                            height: "2px",
                            backgroundColor: "rgba(139, 38, 62, 0.15)",
                            zIndex: 0,
                            transform: "translateY(-50%)",
                        }}
                    />
                    {steps.map((s, idx) => (
                        <div
                            key={s.number}
                            onClick={() => scrollToStep(idx)}
                            style={{
                                zIndex: 1,
                                backgroundColor: "#FAF8F5",
                                padding: "0 0.4rem",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "0.4rem",
                                cursor: "pointer",
                            }}
                        >
                            <div
                                style={{
                                    width: "2.4rem",
                                    height: "2.4rem",
                                    borderRadius: "50%",
                                    backgroundColor: s.accent,
                                    color: "#ffffff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontSize: "0.75rem",
                                    fontWeight: 700,
                                    fontFamily: "var(--font-sans)",
                                    boxShadow: `0 4px 12px ${s.accent}40`,
                                }}
                            >
                                {s.number}
                            </div>
                            <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "#1C1B1A", letterSpacing: "0.05em", textAlign: "center", maxWidth: "90px" }}>
                                {s.title.split("&")[0]}
                            </span>
                        </div>
                    ))}
                </div>

                {/* ── Mobile Sliding Carousel (Visible < 1024px) ── */}
                <div className="mobile-slider-container">

                    {/* Step indicator header */}
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}>
                        <span style={{ fontSize: "0.78rem", fontWeight: 600, color: "#8B263E", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                            Step {activeMobileStep + 1} of {steps.length}
                        </span>

                        <div style={{ display: "flex", gap: "0.5rem" }}>
                            <button
                                onClick={() => scrollToStep(Math.max(0, activeMobileStep - 1))}
                                disabled={activeMobileStep === 0}
                                aria-label="Previous step"
                                style={{
                                    width: "2.2rem",
                                    height: "2.2rem",
                                    borderRadius: "50%",
                                    border: "1px solid rgba(28, 27, 26, 0.2)",
                                    backgroundColor: activeMobileStep === 0 ? "rgba(0,0,0,0.03)" : "#ffffff",
                                    color: activeMobileStep === 0 ? "#ccc" : "#1C1B1A",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: activeMobileStep === 0 ? "default" : "pointer",
                                }}
                            >
                                <ChevronLeft size={18} />
                            </button>

                            <button
                                onClick={() => scrollToStep(Math.min(steps.length - 1, activeMobileStep + 1))}
                                disabled={activeMobileStep === steps.length - 1}
                                aria-label="Next step"
                                style={{
                                    width: "2.2rem",
                                    height: "2.2rem",
                                    borderRadius: "50%",
                                    border: "1px solid rgba(28, 27, 26, 0.2)",
                                    backgroundColor: activeMobileStep === steps.length - 1 ? "rgba(0,0,0,0.03)" : "#ffffff",
                                    color: activeMobileStep === steps.length - 1 ? "#ccc" : "#1C1B1A",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: activeMobileStep === steps.length - 1 ? "default" : "pointer",
                                }}
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>

                    {/* Sliding Track */}
                    <div
                        ref={sliderRef}
                        onScroll={handleScroll}
                        style={{
                            display: "flex",
                            overflowX: "auto",
                            scrollSnapType: "x mandatory",
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                            gap: "1rem",
                            paddingBottom: "0.5rem",
                            WebkitOverflowScrolling: "touch",
                        }}
                    >
                        {steps.map((step, index) => {
                            const Icon = step.icon;
                            return (
                                <div
                                    key={step.number}
                                    style={{
                                        minWidth: "100%",
                                        scrollSnapAlign: "start",
                                        boxSizing: "border-box",
                                    }}
                                >
                                    <ProcessStepCard
                                        step={step}
                                        Icon={Icon}
                                        delay={0}
                                        inView={inView}
                                    />
                                </div>
                            );
                        })}
                    </div>

                    {/* Progress dots */}
                    <div style={{ display: "flex", justifyContent: "center", gap: "0.4rem", marginTop: "1.25rem" }}>
                        {steps.map((s, idx) => (
                            <button
                                key={idx}
                                onClick={() => scrollToStep(idx)}
                                aria-label={`Go to step ${idx + 1}`}
                                style={{
                                    width: idx === activeMobileStep ? "1.5rem" : "0.45rem",
                                    height: "6px",
                                    borderRadius: "9999px",
                                    backgroundColor: idx === activeMobileStep ? s.accent : "rgba(28, 27, 26, 0.2)",
                                    border: "none",
                                    padding: 0,
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                            />
                        ))}
                    </div>
                </div>

                {/* ── Desktop Grid (Visible >= 1024px) ── */}
                <div
                    className="desktop-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: "1.5rem",
                    }}
                >
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <ProcessStepCard
                                key={step.number}
                                step={step}
                                Icon={Icon}
                                delay={index * 80}
                                inView={inView}
                            />
                        );
                    })}
                </div>
            </div>

            <style jsx>{`
                @media (max-width: 1023px) {
                    .desktop-stepper, .desktop-grid {
                        display: none !important;
                    }
                    .mobile-slider-container {
                        display: block !important;
                    }
                }
                @media (min-width: 1024px) {
                    .mobile-slider-container {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
}

function ProcessStepCard({
    step,
    Icon,
    delay,
    inView,
}: {
    step: typeof steps[0];
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
                backgroundColor: "#ffffff",
                borderRadius: "1.25rem",
                padding: "2rem 1.5rem",
                border: hovered ? `1px solid ${step.accent}` : "1px solid rgba(28, 27, 26, 0.1)",
                boxShadow: hovered ? `0 16px 36px -8px ${step.accent}20` : "0 8px 25px -10px rgba(28, 27, 26, 0.05)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
                gap: "1.1rem",
                transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                transform: hovered ? "translateY(-6px)" : inView ? "none" : "translateY(30px)",
                opacity: inView ? 1 : 0,
                transitionDelay: `${delay}ms`,
                minHeight: "360px",
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div
                    style={{
                        width: "2.8rem",
                        height: "2.8rem",
                        borderRadius: "50%",
                        backgroundColor: `${step.accent}15`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: step.accent,
                        transition: "transform 0.3s ease",
                        transform: hovered ? "scale(1.08)" : "scale(1)",
                    }}
                >
                    <Icon size={19} />
                </div>
                <span
                    style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "2.2rem",
                        fontWeight: 700,
                        color: step.accent,
                        opacity: 0.9,
                    }}
                >
                    {step.number}
                </span>
            </div>

            <h3
                style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "1.4rem",
                    fontWeight: 600,
                    color: "#1C1B1A",
                    margin: 0,
                    lineHeight: 1.25,
                }}
            >
                {step.title}
            </h3>

            <p
                style={{
                    fontSize: "0.88rem",
                    color: "rgba(28, 27, 26, 0.72)",
                    lineHeight: 1.6,
                    margin: 0,
                }}
            >
                {step.description}
            </p>

            <div
                style={{
                    borderTop: "1px solid rgba(28, 27, 26, 0.08)",
                    paddingTop: "0.9rem",
                    marginTop: "auto",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.45rem",
                }}
            >
                {step.items.map((item, idx) => (
                    <span key={idx} style={{ fontSize: "0.72rem", color: "#5A5752", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.35rem" }}>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: step.accent, flexShrink: 0 }} />
                        {item}
                    </span>
                ))}
            </div>
        </div>
    );
}
