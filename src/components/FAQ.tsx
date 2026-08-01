"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "How long does a full home interior project take?",
        answer: "Typically, a full residential or commercial project takes between 45 to 90 days, depending on spatial scope, material selection, and custom modular workshop fabrication timelines.",
    },
    {
        question: "Do you offer 3D design visualizations before execution?",
        answer: "Yes! Photorealistic 3D visualisations and 2D floor plans are a core part of our design workflow at Nuspace Creations. You approve every material texture and lighting detail before site execution.",
    },
    {
        question: "What location does Nuspace Creations serve?",
        answer: "Nuspace Creations is based in Bengaluru, Karnataka (Abbigere studio). We execute luxury residential, villa, penthouse, and commercial turnkey interiors across all prime areas in Bengaluru.",
    },
    {
        question: "Can I customize furniture, wardrobes, and kitchens?",
        answer: "Absoluty. We specialize in 100% bespoke craftsmanship. From custom teak joinery to modular kitchen cabinets and custom upholstered headboards, every element is made for your space.",
    },
    {
        question: "What is your pricing and BOQ structure?",
        answer: "Our pricing is 100% transparent. We provide an itemized Bill of Quantities (BOQ) covering materials, civil work, electricals, and finishing with zero hidden charges.",
    },
    {
        question: "What services are included in your turnkey management?",
        answer: "Our turnkey management covers initial consultation, 3D designs, material selection, off-site workshop manufacturing, site civil work, false ceiling, lighting, painting, and final deep cleaning with handover.",
    },
    {
        question: "Do you offer post-completion support and warranty?",
        answer: "Yes, Nuspace Creations offers comprehensive warranties on custom joinery and hardware. We also provide post-completion walkthroughs and maintenance support for complete client peace of mind.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            style={{
                padding: "8rem 2rem",
                backgroundColor: "#FAF8F5",
            }}
        >
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                {/* Heading */}
                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            marginBottom: "1rem",
                        }}
                    >
                        <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }}></span>
                        <span
                            style={{
                                fontFamily: "var(--font-sans)",
                                fontSize: "0.75rem",
                                fontWeight: 600,
                                letterSpacing: "0.25em",
                                textTransform: "uppercase",
                                color: "#8B263E",
                            }}
                        >
                            FREQUENTLY ASKED QUESTIONS
                        </span>
                        <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }}></span>
                    </div>

                    <h2
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
                            color: "#1C1B1A",
                            fontWeight: 500,
                        }}
                    >
                        Everything You Need to Know
                    </h2>
                </div>

                {/* Accordion */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            style={{
                                borderBottom: "1px solid rgba(28, 27, 26, 0.1)",
                                paddingBottom: "0.5rem",
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "1.25rem 0",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    textAlign: "left",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "var(--font-serif)",
                                        fontSize: "1.35rem",
                                        fontWeight: 500,
                                        color: openIndex === idx ? "#8B263E" : "#1C1B1A",
                                        transition: "color 0.3s ease",
                                    }}
                                >
                                    {faq.question}
                                </span>
                                <div
                                    style={{
                                        transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "transform 0.3s ease",
                                        color: openIndex === idx ? "#8B263E" : "#1C1B1A",
                                    }}
                                >
                                    <ChevronDown size={20} />
                                </div>
                            </button>

                            <div
                                style={{
                                    maxHeight: openIndex === idx ? "200px" : "0",
                                    opacity: openIndex === idx ? 1 : 0,
                                    overflow: "hidden",
                                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                }}
                            >
                                <p
                                    style={{
                                        fontFamily: "var(--font-sans)",
                                        fontSize: "0.95rem",
                                        color: "rgba(28, 27, 26, 0.75)",
                                        lineHeight: "1.7",
                                        paddingBottom: "1.5rem",
                                        margin: 0,
                                    }}
                                >
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

