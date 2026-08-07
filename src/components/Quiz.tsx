"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Check } from "lucide-react";
import gsap from "gsap";

const steps = [
    {
        question: "What vibe do you love?",
        key: "vibe",
        options: [
            { label: "Contemporary", image: "https://images.unsplash.com/photo-1544450547-2434c4423759?auto=format&fit=crop&q=80&w=400" },
            { label: "Modern", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400" },
            { label: "Classic", image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=400" },
            { label: "Bohemian", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=400" },
        ],
    },
    {
        question: "Which space are you designing?",
        key: "space",
        options: [
            { label: "Living Room" },
            { label: "Bedroom" },
            { label: "Kitchen" },
            { label: "Full Home" },
        ],
    },
    {
        question: "What is your budget range?",
        key: "budget",
        options: [
            { label: "Under ₹5L" },
            { label: "₹5–10L" },
            { label: "₹10–25L" },
            { label: "₹25L+" },
        ],
    },
];

export default function Quiz() {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [showForm, setShowForm] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [whatsappLink, setWhatsappLink] = useState("");
    const [leadData, setLeadData] = useState({ name: "", email: "", phone: "" });
    const quizRef = useRef(null);

    const handleOptionSelect = (option: string) => {
        const newAnswers = { ...answers, [steps[currentStep].key]: option };
        setAnswers(newAnswers);

        if (currentStep < steps.length - 1) {
            gsap.to(quizRef.current, {
                opacity: 0,
                x: -20,
                duration: 0.3,
                onComplete: () => {
                    setCurrentStep(currentStep + 1);
                    gsap.fromTo(quizRef.current, { opacity: 0, x: 20 }, { opacity: 1, x: 0, duration: 0.5 });
                },
            });
        } else {
            setShowForm(true);
        }
    };

    const handleQuizSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const messageText = `Hi Nuspace Creations,\n\nI completed the Style Quiz on your website! Here are my preferences:\n\n✨ *Style Vibe:* ${answers.vibe || "Contemporary"}\n🏠 *Space:* ${answers.space || "Full Home"}\n💰 *Budget:* ${answers.budget || "N/A"}\n\n📌 *Name:* ${leadData.name}\n📞 *Phone:* ${leadData.phone}\n✉️ *Email:* ${leadData.email}`;
        const waUrl = `https://wa.me/919886527878?text=${encodeURIComponent(messageText)}`;
        setWhatsappLink(waUrl);

        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    name: leadData.name,
                    phone: leadData.phone,
                    email: leadData.email,
                    projectType: answers.space || "Quiz Lead",
                    budget: answers.budget || "N/A",
                    source: "Interactive Style Quiz",
                    quizAnswers: answers,
                }),
            });
        } catch (err) {
            console.error("Quiz submit error:", err);
        } finally {
            setIsSubmitting(false);
            setIsSubmitted(true);
            if (typeof window !== "undefined") {
                window.open(waUrl, "_blank", "noopener,noreferrer");
            }
        }
    };

    return (
        <section
            id="quiz"
            style={{
                padding: "10rem 2rem",
                background: "linear-gradient(135deg, #F5ECD7 0%, #FDFDFB 100%)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <div style={{ maxWidth: "1000px", width: "100%", margin: "0 auto", textAlign: "center" }}>
                {!showForm ? (
                    <>
                        <div style={{ marginBottom: "5rem" }}>
                            <span
                                style={{
                                    fontFamily: "var(--font-montserrat)",
                                    fontSize: "10px",
                                    fontWeight: 700,
                                    color: "#4A90A4",
                                    letterSpacing: "0.3em",
                                    textTransform: "uppercase",
                                    display: "block",
                                    marginBottom: "1.5rem",
                                }}
                            >
                                Interactive Quiz
                            </span>
                            <h2
                                style={{
                                    fontFamily: "var(--font-cormorant)",
                                    fontSize: "3.5rem",
                                    color: "#2C2C2C",
                                    marginBottom: "1rem",
                                }}
                            >
                                What's Your Interior Style?
                            </h2>
                            <p
                                style={{
                                    fontFamily: "var(--font-dm-sans)",
                                    fontSize: "1.1rem",
                                    color: "rgba(44,44,44,0.6)",
                                }}
                            >
                                Take our 60-second quiz and get a FREE personalised mood board.
                            </p>
                        </div>

                        <div
                            ref={quizRef}
                            style={{
                                backgroundColor: "#ffffff",
                                padding: "4rem",
                                borderRadius: "2.5rem",
                                boxShadow: "0 40px 100px -20px rgba(0,0,0,0.05)",
                                border: "1px solid rgba(0,0,0,0.02)",
                            }}
                        >
                            <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "3rem" }}>
                                {steps.map((_, idx) => (
                                    <div
                                        key={idx}
                                        style={{
                                            width: "3rem",
                                            height: "4px",
                                            borderRadius: "2px",
                                            backgroundColor: idx <= currentStep ? "#4A90A4" : "rgba(0,0,0,0.05)",
                                            transition: "background-color 0.4s ease",
                                        }}
                                    ></div>
                                ))}
                            </div>

                            <h3
                                style={{
                                    fontFamily: "var(--font-cormorant)",
                                    fontSize: "2.25rem",
                                    color: "#2C2C2C",
                                    marginBottom: "3.5rem",
                                }}
                            >
                                {steps[currentStep].question}
                            </h3>

                            <div
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: currentStep === 0 ? "repeat(auto-fit, minmax(200px, 1fr))" : "repeat(auto-fit, minmax(150px, 1fr))",
                                    gap: "1.5rem",
                                }}
                            >
                                {steps[currentStep].options.map((option, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => handleOptionSelect(option.label)}
                                        style={{
                                            position: "relative",
                                            cursor: "pointer",
                                            borderRadius: "1.5rem",
                                            overflow: "hidden",
                                            border: currentStep > 0 ? "1px solid rgba(0,0,0,0.05)" : "none",
                                            padding: currentStep > 0 ? "2rem" : "0",
                                            backgroundColor: answers[steps[currentStep].key] === option.label ? "#4A90A4" : "#ffffff",
                                            transition: "all 0.3s ease",
                                        }}
                                        onMouseEnter={(e) => {
                                            if (currentStep === 0) (e.currentTarget.querySelector(".quiz-img-overlay") as HTMLElement).style.opacity = "0.2";
                                            else (e.currentTarget as HTMLElement).style.borderColor = "#4A90A4";
                                        }}
                                        onMouseLeave={(e) => {
                                            if (currentStep === 0) (e.currentTarget.querySelector(".quiz-img-overlay") as HTMLElement).style.opacity = "0";
                                            else (e.currentTarget as HTMLElement).style.borderColor = "rgba(0,0,0,0.05)";
                                        }}
                                    >
                                        {currentStep === 0 && (
                                            <div style={{ position: "relative", height: "180px", width: "100%" }}>
                                                <Image
                                                    src={(option as any).image || ""}
                                                    alt={option.label}
                                                    fill
                                                    style={{ objectFit: "cover" }}
                                                />
                                                <div
                                                    className="quiz-img-overlay"
                                                    style={{
                                                        position: "absolute",
                                                        inset: 0,
                                                        backgroundColor: "#000000",
                                                        opacity: 0,
                                                        transition: "opacity 0.3s ease",
                                                    }}
                                                ></div>
                                            </div>
                                        )}
                                        <div style={{ padding: currentStep === 0 ? "1.5rem" : "0" }}>
                                            <span
                                                style={{
                                                    fontFamily: "var(--font-montserrat)",
                                                    fontSize: "11px",
                                                    fontWeight: 700,
                                                    color: answers[steps[currentStep].key] === option.label && currentStep > 0 ? "#ffffff" : "#2C2C2C",
                                                    letterSpacing: "0.1em",
                                                    textTransform: "uppercase",
                                                }}
                                            >
                                                {option.label}
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <div
                        style={{
                            backgroundColor: "#ffffff",
                            padding: "5rem",
                            borderRadius: "2.5rem",
                            boxShadow: "0 40px 100px -20px rgba(0,0,0,0.05)",
                            textAlign: "center",
                            animation: "fadeIn 0.8s ease-out",
                        }}
                    >
                        <div
                            style={{
                                width: "4rem",
                                height: "4rem",
                                borderRadius: "100%",
                                backgroundColor: "#A8B5A0",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                margin: "0 auto 3rem",
                            }}
                        >
                            <Check size={24} color="#ffffff" />
                        </div>
                        <h2
                            style={{
                                fontFamily: "var(--font-cormorant)",
                                fontSize: "3rem",
                                color: "#2C2C2C",
                                marginBottom: "1.5rem",
                            }}
                        >
                            Your Style is Luxury Contemporary!
                        </h2>
                        <p
                            style={{
                                fontFamily: "var(--font-dm-sans)",
                                fontSize: "1.1rem",
                                color: "rgba(44,44,44,0.6)",
                                marginBottom: "4rem",
                            }}
                        >
                            We've created a custom mood board for you. Enter your details to receive it.
                        </p>

                        {isSubmitted ? (
                            <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem" }}>
                                <p style={{ fontFamily: "var(--font-dm-sans)", fontSize: "1.1rem", color: "#2C2C2C" }}>
                                    Thank you <strong>{leadData.name}</strong>! Your mood board & quiz details have been emailed to <strong>nuspacebangalore@gmail.com</strong> and <strong>nuspacedecor@gmail.com</strong>.
                                </p>
                                {whatsappLink && (
                                    <a
                                        href={whatsappLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                            padding: "1.2rem 2.5rem",
                                            borderRadius: "100px",
                                            backgroundColor: "#25D366",
                                            color: "#ffffff",
                                            textDecoration: "none",
                                            fontFamily: "var(--font-montserrat)",
                                            fontSize: "11px",
                                            fontWeight: 700,
                                            letterSpacing: "0.15em",
                                            textTransform: "uppercase",
                                            display: "inline-flex",
                                            alignItems: "center",
                                            gap: "0.75rem",
                                            boxShadow: "0 10px 30px rgba(37,211,102,0.3)",
                                        }}
                                    >
                                        <span>Continue on WhatsApp (+91 98865 27878)</span>
                                        <ArrowRight size={16} />
                                    </a>
                                )}
                            </div>
                        ) : (
                            <form
                                onSubmit={handleQuizSubmit}
                                style={{
                                    display: "grid",
                                    gridTemplateColumns: "repeat(2, 1fr)",
                                    gap: "1.5rem",
                                    maxWidth: "600px",
                                    margin: "0 auto",
                                }}
                            >
                                <input
                                    type="text"
                                    required
                                    placeholder="Full Name"
                                    value={leadData.name}
                                    onChange={(e) => setLeadData({ ...leadData, name: e.target.value })}
                                    style={{
                                        gridColumn: "span 2",
                                        padding: "1.25rem 2rem",
                                        borderRadius: "100px",
                                        border: "1px solid rgba(0,0,0,0.1)",
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                />
                                <input
                                    type="email"
                                    required
                                    placeholder="Email Address"
                                    value={leadData.email}
                                    onChange={(e) => setLeadData({ ...leadData, email: e.target.value })}
                                    style={{
                                        padding: "1.25rem 2rem",
                                        borderRadius: "100px",
                                        border: "1px solid rgba(0,0,0,0.1)",
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                />
                                <input
                                    type="tel"
                                    required
                                    placeholder="Phone Number"
                                    value={leadData.phone}
                                    onChange={(e) => setLeadData({ ...leadData, phone: e.target.value })}
                                    style={{
                                        padding: "1.25rem 2rem",
                                        borderRadius: "100px",
                                        border: "1px solid rgba(0,0,0,0.1)",
                                        fontFamily: "var(--font-dm-sans)",
                                    }}
                                />
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    style={{
                                        gridColumn: "span 2",
                                        padding: "1.5rem",
                                        borderRadius: "100px",
                                        backgroundColor: "#4A90A4",
                                        color: "#ffffff",
                                        border: "none",
                                        fontFamily: "var(--font-montserrat)",
                                        fontSize: "11px",
                                        fontWeight: 700,
                                        letterSpacing: "0.2em",
                                        textTransform: "uppercase",
                                        cursor: isSubmitting ? "not-allowed" : "pointer",
                                        opacity: isSubmitting ? 0.7 : 1,
                                        marginTop: "1rem",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "1rem",
                                    }}
                                >
                                    <span>{isSubmitting ? "Sending..." : "Get My Free Mood Board"}</span>
                                    <ArrowRight size={16} />
                                </button>
                            </form>
                        )}
                    </div>
                )}
            </div>

            <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
        </section>
    );
}
