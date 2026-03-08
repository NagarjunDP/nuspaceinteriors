"use client";

import { useEffect, useRef } from "react";
import { CheckCircle, Paintbrush, Layers, Award, Clock, PiggyBank } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const trustFeatures = [
    {
        title: "End-to-End Turnkey Service",
        description: "We handle everything from civil work to final styling decor.",
        icon: CheckCircle,
    },
    {
        title: "100% Customised Designs",
        description: "No templates. Every space is uniquely tailored to your personality.",
        icon: Paintbrush,
    },
    {
        title: "Free 3D Visualisation",
        description: "See your dream home in high fidelity before we even start building.",
        icon: Layers,
    },
    {
        title: "Award-Winning Team",
        description: "Recognized for excellence in coastal and contemporary design.",
        icon: Award,
    },
    {
        title: "On-Time Project Delivery",
        description: "We respect your time. Guaranteed handover within agreed timelines.",
        icon: Clock,
    },
    {
        title: "Transparent Pricing",
        description: "No hidden costs. Detailed breakdowns for complete peace of mind.",
        icon: PiggyBank,
    },
];

const pressLogos = [
    "Elle Decor",
    "Architectural Digest India",
    "Housing.com",
    "The Better India",
    "Better Interiors",
];

export default function Trust() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".trust-heading", {
                scrollTrigger: {
                    trigger: ".trust-heading",
                    start: "top 85%",
                },
                y: 30,
                duration: 1.2,
                ease: "power3.out",
            });

            gsap.from(".trust-box", {
                scrollTrigger: {
                    trigger: ".trust-grid",
                    start: "top 80%",
                },
                y: 40,
                duration: 0.8,
                stagger: 0.1,
                ease: "power2.out",
            });

            gsap.from(".press-row", {
                scrollTrigger: {
                    trigger: ".press-row",
                    start: "top 90%",
                },
                y: 20,
                duration: 1.5,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="trust"
            ref={sectionRef}
            style={{
                padding: "10rem 2rem",
                backgroundColor: "#1A1A2E", // Dark navy/teal
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                {/* Heading */}
                <div className="trust-heading" style={{ textAlign: "center", marginBottom: "7rem" }}>
                    <span
                        style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "10px",
                            fontWeight: 700,
                            color: "#4A90A4",
                            letterSpacing: "0.4em",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "1.5rem",
                        }}
                    >
                        Why Choose Us
                    </span>
                    <h2
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "clamp(3rem, 5vw, 4.5rem)",
                            color: "#ffffff",
                            fontStyle: "italic",
                            lineHeight: "1.1",
                        }}
                    >
                        Why Homeowners Choose <br /> Coastal Interio
                    </h2>
                </div>

                {/* Features Grid */}
                <div
                    className="trust-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                        gap: "2.5rem",
                        marginBottom: "10rem",
                    }}
                >
                    {trustFeatures.map((feature, idx) => (
                        <div
                            key={idx}
                            className="trust-box"
                            style={{
                                backgroundColor: "rgba(255,255,255,0.03)",
                                padding: "4rem 3.5rem",
                                borderRadius: "2rem",
                                border: "1px solid rgba(255,255,255,0.05)",
                                transition: "all 0.4s ease",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.05)";
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(74, 144, 164, 0.2)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(255,255,255,0.03)";
                                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.05)";
                            }}
                        >
                            <div
                                style={{
                                    width: "3.5rem",
                                    height: "3.5rem",
                                    borderRadius: "1rem",
                                    backgroundColor: "rgba(74, 144, 164, 0.1)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "2.5rem",
                                }}
                            >
                                <feature.icon size={22} color="#4A90A4" strokeWidth={1.5} />
                            </div>
                            <h3
                                style={{
                                    fontFamily: "var(--font-cormorant)",
                                    fontSize: "1.75rem",
                                    color: "#ffffff",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                {feature.title}
                            </h3>
                            <p
                                style={{
                                    fontFamily: "var(--font-dm-sans)",
                                    fontSize: "1rem",
                                    color: "rgba(255,255,255,0.5)",
                                    lineHeight: "1.7",
                                }}
                            >
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Press Section */}
                <div className="press-row" style={{ textAlign: "center" }}>
                    <span
                        style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "9px",
                            fontWeight: 600,
                            color: "rgba(255,255,255,0.3)",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "3.5rem",
                        }}
                    >
                        As Featured In
                    </span>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                            flexWrap: "wrap",
                            gap: "5rem",
                            alignItems: "center",
                            opacity: 0.4,
                            filter: "grayscale(1) invert(1)",
                        }}
                    >
                        {pressLogos.map((logo, idx) => (
                            <span
                                key={idx}
                                style={{
                                    fontFamily: "var(--font-playfair)",
                                    fontSize: "1.5rem",
                                    fontWeight: 700,
                                    color: "#ffffff",
                                }}
                            >
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
