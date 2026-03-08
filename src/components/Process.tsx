"use client";

import { useEffect, useRef } from "react";
import { MessageSquare, Palette, Hammer, CheckCircle2, ShoppingBag } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: "01",
        title: "Discovery Call",
        description: "We listen to your vision, lifestyle, and budget.",
        icon: MessageSquare,
    },
    {
        number: "02",
        title: "Concept Design",
        description: "Mood boards, 3D renders, and layout plans created.",
        icon: Palette,
    },
    {
        number: "03",
        title: "Material Selection",
        description: "Curated materials, finishes & furniture sourced.",
        icon: ShoppingBag,
    },
    {
        number: "04",
        title: "Execution & Build",
        description: "Our team manages every detail on-site.",
        icon: Hammer,
    },
    {
        number: "05",
        title: "Final Handover",
        description: "Walk-through, styling, and you move into your dream home.",
        icon: CheckCircle2,
    },
];

export default function Process() {
    const sectionRef = useRef(null);
    const headingRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.from(headingRef.current, {
                scrollTrigger: {
                    trigger: headingRef.current,
                    start: "top 85%",
                },
                y: 30,
                duration: 1,
                ease: "power3.out",
            });

            // Steps stagger animation
            gsap.from(".process-step", {
                scrollTrigger: {
                    trigger: ".process-steps-container",
                    start: "top 80%",
                },
                y: 60,
                duration: 1.2,
                stagger: 0.2,
                ease: "power4.out",
            });

            // Timeline line drawing
            gsap.from(".process-line", {
                scrollTrigger: {
                    trigger: ".process-steps-container",
                    start: "top 80%",
                },
                width: 0,
                duration: 2,
                ease: "power2.inOut",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="process"
            ref={sectionRef}
            style={{
                padding: "10rem 2rem",
                backgroundColor: "#F5ECD7", // Light beige
                position: "relative",
                overflow: "hidden",
            }}
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                {/* Heading */}
                <div ref={headingRef} style={{ textAlign: "center", marginBottom: "8rem" }}>
                    <span
                        style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "10px",
                            fontWeight: 600,
                            color: "#4A90A4",
                            letterSpacing: "0.4em",
                            textTransform: "uppercase",
                            display: "block",
                            marginBottom: "1.5rem",
                        }}
                    >
                        How We Work
                    </span>
                    <h2
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "clamp(3rem, 5vw, 4.5rem)",
                            color: "#2C2C2C",
                            fontStyle: "italic",
                        }}
                    >
                        Our Design Process
                    </h2>
                </div>

                {/* Steps Container */}
                <div
                    className="process-steps-container"
                    style={{
                        position: "relative",
                        display: "grid",
                        gridTemplateColumns: "repeat(5, 1fr)",
                        gap: "2rem",
                    }}
                >
                    {/* Connecting Line (Desktop) */}
                    <div
                        className="process-line"
                        style={{
                            position: "absolute",
                            top: "2.5rem",
                            left: "10%",
                            width: "80%",
                            height: "1px",
                            borderTop: "2px dashed rgba(74, 144, 164, 0.2)",
                            zIndex: 0,
                        }}
                    ></div>

                    {steps.map((step, index) => (
                        <div
                            key={index}
                            className="process-step"
                            style={{
                                position: "relative",
                                zIndex: 1,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            {/* Step Number Background */}
                            <span
                                style={{
                                    position: "absolute",
                                    top: "-2rem",
                                    left: "50%",
                                    transform: "translateX(-50%)",
                                    fontFamily: "var(--font-cormorant)",
                                    fontSize: "8rem",
                                    fontWeight: 600,
                                    color: "rgba(74, 144, 164, 0.05)",
                                    zIndex: -1,
                                    lineHeight: 1,
                                }}
                            >
                                {step.number}
                            </span>

                            {/* Icon Circle */}
                            <div
                                style={{
                                    width: "5rem",
                                    height: "5rem",
                                    borderRadius: "100%",
                                    backgroundColor: "#ffffff",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    marginBottom: "2.5rem",
                                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                                    border: "1px solid rgba(74, 144, 164, 0.1)",
                                }}
                            >
                                <step.icon size={24} color="#4A90A4" strokeWidth={1.5} />
                            </div>

                            {/* Text */}
                            <h3
                                style={{
                                    fontFamily: "var(--font-cormorant)",
                                    fontSize: "1.75rem",
                                    color: "#2C2C2C",
                                    marginBottom: "1rem",
                                }}
                            >
                                {step.title}
                            </h3>
                            <p
                                style={{
                                    fontFamily: "var(--font-dm-sans)",
                                    fontSize: "0.95rem",
                                    color: "rgba(44, 44, 44, 0.6)",
                                    lineHeight: "1.6",
                                    maxWidth: "200px",
                                }}
                            >
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 1024px) {
          .process-steps-container {
            grid-template-columns: 1fr !important;
            gap: 5rem !important;
          }
          .process-line {
            display: none;
          }
          .process-step {
            flex-direction: row !important;
            text-align: left !important;
            align-items: flex-start !important;
            gap: 2rem;
          }
          .process-step h3 {
            margin-bottom: 0.5rem !important;
          }
          .process-step p {
            max-width: 100% !important;
          }
        }
      `}</style>
        </section>
    );
}
