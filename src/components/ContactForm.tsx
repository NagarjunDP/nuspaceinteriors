"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, MapPin, ArrowRight, Lock, MessageCircle, FileText, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
    const sectionRef = useRef(null);
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [whatsappLink, setWhatsappLink] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        projectType: "Residential",
        location: "",
        budget: "",
        timeline: "",
        message: "",
    });

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-left", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                x: -40,
                opacity: 0,
                duration: 1.4,
                ease: "power4.out",
            });

            gsap.from(".contact-right", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                x: 40,
                opacity: 0,
                duration: 1.4,
                ease: "power4.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const messageText = `Hi Nuspace Creations,\n\nI would like to enquire about an interior design project.\n\n📌 *Name:* ${formData.name}\n📞 *Phone:* ${formData.phone}\n✉️ *Email:* ${formData.email}\n🏠 *Project Type:* ${formData.projectType}\n📍 *Location:* ${formData.location || "N/A"}\n💰 *Budget:* ${formData.budget || "N/A"}\n📝 *Details:* ${formData.message || "N/A"}`;
        const waUrl = `https://wa.me/919886527878?text=${encodeURIComponent(messageText)}`;
        setWhatsappLink(waUrl);

        try {
            await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ ...formData, source: "Main Contact Form" }),
            });
        } catch (err) {
            console.error("Form submission error:", err);
        } finally {
            setIsSubmitting(false);
            setSubmitted(true);
            if (typeof window !== "undefined") {
                window.open(waUrl, "_blank", "noopener,noreferrer");
            }
        }
    };

    return (
        <section
            id="contact"
            ref={sectionRef}
            style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "#1C1B1A",
                color: "#ffffff",
                position: "relative",
            }}
        >
            {/* Left Side: Brand Info & Direct Contact */}
            <div
                className="contact-left"
                style={{
                    flex: "1 1 450px",
                    backgroundColor: "#141312",
                    padding: "7rem 4rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    borderRight: "1px solid rgba(255, 255, 255, 0.08)",
                }}
            >
                <div style={{ maxWidth: "480px", margin: "0 auto", width: "100%" }}>
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.75rem",
                            marginBottom: "1.5rem",
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
                            CONNECT WITH NUSPACE
                        </span>
                    </div>

                    <h2
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
                            lineHeight: "1.12",
                            marginBottom: "1.5rem",
                            color: "#FAF8F5",
                        }}
                    >
                        Let's Create <br /> Your Space.
                    </h2>

                    <p
                        style={{
                            color: "rgba(255,255,255,0.75)",
                            fontSize: "1.05rem",
                            lineHeight: 1.7,
                            marginBottom: "3rem",
                        }}
                    >
                        Tell us about your project and let's start turning your vision into a space designed for the way you live and experience it.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem", marginBottom: "3rem" }}>
                        {/* Call */}
                        <a
                            href="tel:+919886527878"
                            style={{ textDecoration: "none", color: "#ffffff", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}
                        >
                            <div
                                style={{
                                    width: "3rem",
                                    height: "3rem",
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(139, 38, 62, 0.2)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#8B263E",
                                    flexShrink: 0,
                                }}
                            >
                                <Phone size={20} />
                            </div>
                            <div>
                                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block" }}>Call Us Directly</span>
                                <strong style={{ fontSize: "1.15rem", color: "#ffffff" }}>+91 98865 27878</strong>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/919886527878?text=Hi%20Nuspace%20Decor,%20I%20would%20like%20to%20discuss%20my%20interior%20design%20project."
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ textDecoration: "none", color: "#ffffff", display: "flex", gap: "1.25rem", alignItems: "flex-start" }}
                        >
                            <div
                                style={{
                                    width: "3rem",
                                    height: "3rem",
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(37, 211, 102, 0.2)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#25D366",
                                    flexShrink: 0,
                                }}
                            >
                                <MessageCircle size={20} />
                            </div>
                            <div>
                                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block" }}>WhatsApp Instant Chat</span>
                                <strong style={{ fontSize: "1.15rem", color: "#25D366" }}>+91 98865 27878</strong>
                            </div>
                        </a>

                        {/* Email */}
                        <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                            <div
                                style={{
                                    width: "3rem",
                                    height: "3rem",
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(139, 38, 62, 0.2)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#8B263E",
                                    flexShrink: 0,
                                }}
                            >
                                <Mail size={20} />
                            </div>
                            <div>
                                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block" }}>Email Inquiries</span>
                                <div style={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
                                    <a href="mailto:nuspacebangalore@gmail.com" style={{ fontSize: "1rem", color: "#ffffff", textDecoration: "none" }}>nuspacebangalore@gmail.com</a>
                                    <a href="mailto:nuspacedecor@gmail.com" style={{ fontSize: "1rem", color: "rgba(255,255,255,0.85)", textDecoration: "none" }}>nuspacedecor@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        {/* Studio Location */}
                        <div style={{ display: "flex", gap: "1.25rem", alignItems: "flex-start" }}>
                            <div
                                style={{
                                    width: "3rem",
                                    height: "3rem",
                                    borderRadius: "50%",
                                    backgroundColor: "rgba(255,255,255,0.06)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#ffffff",
                                    flexShrink: 0,
                                }}
                            >
                                <MapPin size={20} />
                            </div>
                            <div>
                                <span style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.15em", display: "block" }}>Studio Location</span>
                                <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.85)", margin: 0, lineHeight: 1.5 }}>
                                    Vinayaka Layout, Abbigere, Bengaluru, Karnataka – 560090
                                </p>
                            </div>
                        </div>

                        {/* Business Registration */}
                        <div style={{ display: "flex", gap: "1.25rem", alignItems: "center", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                            <FileText size={18} color="rgba(255,255,255,0.4)" />
                            <span style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.5)", letterSpacing: "0.05em" }}>
                                GSTIN: <strong style={{ color: "rgba(255,255,255,0.8)" }}>29DVLPP6022C1ZH</strong>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Side: Lead Generation Form */}
            <div
                className="contact-right"
                style={{
                    flex: "1 1 550px",
                    padding: "7rem 4rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    backgroundColor: "#1C1B1A",
                }}
            >
                <div style={{ maxWidth: "600px", margin: "0 auto", width: "100%" }}>
                    {submitted ? (
                        <div
                            style={{
                                backgroundColor: "rgba(139, 38, 62, 0.15)",
                                border: "1px solid #8B263E",
                                borderRadius: "1.5rem",
                                padding: "4rem 3rem",
                                textAlign: "center",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                gap: "1.5rem",
                            }}
                        >
                            <CheckCircle2 size={48} color="#8B263E" />
                            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem", color: "#ffffff", margin: 0 }}>
                                Project Inquiry Received!
                            </h3>
                            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.05rem", lineHeight: 1.6 }}>
                                Thank you for contacting Nuspace Creations. Your enquiry details have been automatically sent to <strong>nuspacebangalore@gmail.com</strong> and <strong>nuspacedecor@gmail.com</strong>.
                            </p>
                            {whatsappLink && (
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary"
                                    style={{
                                        backgroundColor: "#25D366",
                                        borderColor: "#25D366",
                                        color: "#ffffff",
                                        padding: "0.85rem 1.75rem",
                                        fontSize: "0.9rem",
                                        textDecoration: "none",
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "0.5rem",
                                    }}
                                >
                                    <MessageCircle size={18} />
                                    <span>Continue on WhatsApp (+91 98865 27878)</span>
                                </a>
                            )}
                            <button
                                onClick={() => setSubmitted(false)}
                                className="btn-secondary"
                                style={{ color: "#ffffff", borderColor: "rgba(255,255,255,0.3)", marginTop: "0.5rem" }}
                            >
                                Submit Another Inquiry
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
                            <div style={{ gridColumn: "span 1" }}>
                                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.5rem", color: "rgba(255,255,255,0.8)" }}>Full Name *</label>
                                <input
                                    type="text"
                                    required
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    style={{ width: "100%", padding: "1rem 1.25rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff", fontFamily: "var(--font-sans)", outline: "none" }}
                                />
                            </div>

                            <div style={{ gridColumn: "span 1" }}>
                                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.5rem", color: "rgba(255,255,255,0.8)" }}>Phone Number *</label>
                                <input
                                    type="tel"
                                    required
                                    placeholder="+91 98865 27878"
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    style={{ width: "100%", padding: "1rem 1.25rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff", fontFamily: "var(--font-sans)", outline: "none" }}
                                />
                            </div>

                            <div style={{ gridColumn: "span 1" }}>
                                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.5rem", color: "rgba(255,255,255,0.8)" }}>Email Address *</label>
                                <input
                                    type="email"
                                    required
                                    placeholder="name@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    style={{ width: "100%", padding: "1rem 1.25rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff", fontFamily: "var(--font-sans)", outline: "none" }}
                                />
                            </div>

                            <div style={{ gridColumn: "span 1" }}>
                                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.5rem", color: "rgba(255,255,255,0.8)" }}>Project Type</label>
                                <select
                                    value={formData.projectType}
                                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                                    style={{ width: "100%", padding: "1rem 1.25rem", borderRadius: "0.75rem", backgroundColor: "#141312", border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff", fontFamily: "var(--font-sans)", outline: "none" }}
                                >
                                    <option value="Residential">Residential</option>
                                    <option value="Commercial">Commercial</option>
                                    <option value="Renovation">Renovation</option>
                                    <option value="Turnkey Project">Turnkey Project</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div style={{ gridColumn: "span 1" }}>
                                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.5rem", color: "rgba(255,255,255,0.8)" }}>Location / Area in Bengaluru</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Indiranagar, Sadashivanagar"
                                    value={formData.location}
                                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                    style={{ width: "100%", padding: "1rem 1.25rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff", fontFamily: "var(--font-sans)", outline: "none" }}
                                />
                            </div>

                            <div style={{ gridColumn: "span 1" }}>
                                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.5rem", color: "rgba(255,255,255,0.8)" }}>Approximate Budget</label>
                                <input
                                    type="text"
                                    placeholder="e.g. ₹15L - ₹30L+"
                                    value={formData.budget}
                                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                                    style={{ width: "100%", padding: "1rem 1.25rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff", fontFamily: "var(--font-sans)", outline: "none" }}
                                />
                            </div>

                            <div style={{ gridColumn: "span 2" }}>
                                <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: "0.5rem", color: "rgba(255,255,255,0.8)" }}>Project Details / Message</label>
                                <textarea
                                    rows={4}
                                    placeholder="Tell us about your space, timeline, and vision..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    style={{ width: "100%", padding: "1rem 1.25rem", borderRadius: "0.75rem", backgroundColor: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.15)", color: "#ffffff", fontFamily: "var(--font-sans)", resize: "none", outline: "none" }}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="btn-primary"
                                style={{
                                    gridColumn: "span 2",
                                    padding: "1.2rem",
                                    justifyContent: "center",
                                    marginTop: "0.5rem",
                                    opacity: isSubmitting ? 0.7 : 1,
                                    cursor: isSubmitting ? "not-allowed" : "pointer",
                                }}
                            >
                                <span>{isSubmitting ? "Sending Inquiry..." : "Start a Conversation"}</span>
                                <ArrowRight size={18} />
                            </button>

                            <div style={{ gridColumn: "span 2", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", color: "rgba(255,255,255,0.4)" }}>
                                <Lock size={12} />
                                <span style={{ fontSize: "0.75rem" }}>Your privacy is guaranteed. No unsolicited marketing.</span>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}

