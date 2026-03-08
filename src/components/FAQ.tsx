"use client";

import { useState } from "react";
import { ChevronDown, Plus, Minus } from "lucide-react";

const faqs = [
    {
        question: "How long does a full home interior project take?",
        answer: "Typically, a full home project takes between 45 to 90 days, depending on the scope of work, material selections, and site conditions. We provide a detailed project timeline during the design phase.",
    },
    {
        question: "Do you offer 3D design before starting work?",
        answer: "Yes! High-fidelity 3D visualisations are a core part of our design process. You'll be able to walk through your future home virtually before we even start the execution on-site.",
    },
    {
        question: "What areas do you serve in India?",
        answer: "Our primary design studio is in Bangalore, but we handle luxury residential and commercial projects across major Indian cities including Kochi, Goa, Mumbai, and Hyderabad.",
    },
    {
        question: "Can I customise materials and finishes?",
        answer: "Absolutely. We pride ourselves on offering 100% customisation. From the type of wood to the specific fabric of your upholstery, every detail is chosen by you with our expert guidance.",
    },
    {
        question: "What is your pricing structure?",
        answer: "Our pricing is transparent and depends on the scope of work, quality of materials, and complexity of the design. We offer both design-only and turnkey execution packages.",
    },
    {
        question: "Do you handle government approvals and permits?",
        answer: "Yes, for commercial projects or significant structural changes in residential villas, our team manages the necessary approvals from local municipal authorities.",
    },
    {
        question: "Can I see your previous work before hiring you?",
        answer: "We would love to show you! You can explore our digital portfolio here, or schedule a visit to one of our ongoing sites or completed projects to see our quality firsthand.",
    },
    {
        question: "Do you offer post-completion support?",
        answer: "Yes, Coastal Interio offers a comprehensive warranty on all our work. We also provide maintenance services and post-completion support to ensure your space stays perfect.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section
            id="faq"
            style={{
                padding: "10rem 2rem",
                backgroundColor: "#FDFDFB",
            }}
        >
            <div style={{ maxWidth: "800px", margin: "0 auto" }}>
                {/* Heading */}
                <div style={{ textAlign: "center", marginBottom: "6rem" }}>
                    <h2
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                            color: "#2C2C2C",
                            marginBottom: "1rem",
                            fontStyle: "italic",
                        }}
                    >
                        Got Questions? We've Got Answers.
                    </h2>
                </div>

                {/* Accordion */}
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            style={{
                                borderBottom: "1px solid rgba(0,0,0,0.05)",
                                paddingBottom: "1rem",
                            }}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                style={{
                                    width: "100%",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "1.5rem 0",
                                    background: "none",
                                    border: "none",
                                    cursor: "pointer",
                                    textAlign: "left",
                                }}
                            >
                                <span
                                    style={{
                                        fontFamily: "var(--font-cormorant)",
                                        fontSize: "1.5rem",
                                        fontWeight: 500,
                                        color: openIndex === idx ? "#4A90A4" : "#2C2C2C",
                                        transition: "color 0.3s ease",
                                    }}
                                >
                                    {faq.question}
                                </span>
                                <div
                                    style={{
                                        transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                                        transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                                        color: openIndex === idx ? "#4A90A4" : "#2C2C2C",
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
                                        fontFamily: "var(--font-dm-sans)",
                                        fontSize: "1rem",
                                        color: "rgba(44,44,44,0.6)",
                                        lineHeight: "1.7",
                                        paddingBottom: "2rem",
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
