"use client";

import { useState, useRef, useEffect } from "react";
import { Home, Building2, ChefHat, Bed, Lightbulb, Key, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        title: "Residential Interior Design",
        description: "Bespoke living spaces that reflect your personality and lifestyle.",
        icon: Home,
        image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Commercial & Office Spaces",
        description: "Productive and inspiring environments for modern businesses.",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Modular Kitchen Design",
        description: "Functionality meets elegance in the heart of your home.",
        icon: ChefHat,
        image: "https://images.unsplash.com/photo-1556911220-e150213ff167?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Bedroom & Wardrobe Design",
        description: "Serene sanctuaries crafted for rest and organization.",
        icon: Bed,
        image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "False Ceiling & Lighting",
        description: "Ambiance and architectural depth through light and structure.",
        icon: Lightbulb,
        image: "https://images.unsplash.com/photo-1507473885765-e6ed657ad446?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Turnkey Interior Solutions",
        description: "Seamless concept-to-completion management for peace of mind.",
        icon: Key,
        image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=800",
    },
];

export default function Services() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const sectionRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                },
                y: 40,
                opacity: 0,
                duration: 1.2,
                ease: "power3.out",
            });

            gsap.from(".service-card", {
                scrollTrigger: {
                    trigger: ".services-grid",
                    start: "top 80%",
                },
                y: 60,
                opacity: 0,
                duration: 1,
                stagger: 0.15,
                ease: "power3.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="services"
            ref={sectionRef}
            style={{
                position: "relative",
                padding: "10rem 2rem",
                backgroundColor: "#1A1A2E", // Deep teal/navy for contrast
                overflow: "hidden",
            }}
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                {/* Section Heading */}
                <div ref={headingRef} style={{ textAlign: "center", marginBottom: "6rem" }}>
                    <h2
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "clamp(3rem, 5vw, 4.5rem)",
                            color: "#ffffff",
                            marginBottom: "1.5rem",
                            fontStyle: "italic",
                        }}
                    >
                        Our Design Services
                    </h2>
                    <p
                        style={{
                            fontFamily: "var(--font-dm-sans)",
                            fontSize: "1.1rem",
                            color: "rgba(255,255,255,0.6)",
                            maxWidth: "600px",
                            margin: "0 auto",
                        }}
                    >
                        From concept to completion — every detail, designed with purpose.
                    </p>
                </div>

                {/* Services Grid */}
                <div
                    className="services-grid"
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
                        gap: "2.5rem",
                        marginBottom: "6rem",
                    }}
                >
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="service-card"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                            style={{
                                position: "relative",
                                height: "450px",
                                borderRadius: "2rem",
                                overflow: "hidden",
                                cursor: "pointer",
                                backgroundColor: "#2C2C2C",
                                transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                                transform: hoveredIndex === index ? "translateY(-10px)" : "translateY(0)",
                            }}
                        >
                            {/* Card Background Image (Always Visible) */}
                            <div
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundImage: `url(${service.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    opacity: 1,
                                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                                    transform: hoveredIndex === index ? "scale(1.1)" : "scale(1)",
                                    zIndex: 0,
                                }}
                            ></div>

                            {/* Card Content */}
                            <div
                                style={{
                                    position: "relative",
                                    zIndex: 1,
                                    height: "100%",
                                    padding: "3rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "space-between",
                                    background: "linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.9))",
                                    transition: "background 0.6s ease",
                                }}
                            >
                                <div>
                                    <div
                                        style={{
                                            width: "4rem",
                                            height: "4rem",
                                            borderRadius: "1rem",
                                            backgroundColor: "rgba(255,255,255,0.05)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginBottom: "2.5rem",
                                            transition: "background 0.3s ease",
                                        }}
                                    >
                                        <service.icon size={24} color="#4A90A4" strokeWidth={1.5} />
                                    </div>
                                    <h3
                                        style={{
                                            fontFamily: "var(--font-cormorant)",
                                            fontSize: "2rem",
                                            color: "#ffffff",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        {service.title}
                                    </h3>
                                    <p
                                        style={{
                                            fontFamily: "var(--font-dm-sans)",
                                            fontSize: "1rem",
                                            color: "rgba(255,255,255,0.8)",
                                            lineHeight: "1.6",
                                        }}
                                    >
                                        {service.description}
                                    </p>
                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                        color: "#4A90A4",
                                        opacity: 1,
                                        transform: hoveredIndex === index ? "translateX(5px)" : "translateX(0)",
                                        transition: "all 0.4s ease",
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: "var(--font-montserrat)",
                                            fontSize: "10px",
                                            fontWeight: 600,
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                        }}
                                    >
                                        Learn More
                                    </span>
                                    <ArrowRight size={14} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div style={{ textAlign: "center" }}>
                    <button
                        style={{
                            padding: "1.5rem 4rem",
                            borderRadius: "100px",
                            backgroundColor: "#4A90A4",
                            color: "#ffffff",
                            border: "none",
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "11px",
                            fontWeight: 600,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                            boxShadow: "0 20px 40px -10px rgba(74, 144, 164, 0.4)",
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "1rem",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1.05)";
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#3d7a8b";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.transform = "scale(1)";
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#4A90A4";
                        }}
                    >
                        Book a Free Consultation
                        <ArrowRight size={16} />
                    </button>
                </div>
            </div>
        </section>
    );
}
