"use client";

import { useEffect, useRef } from "react";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, Share2, ArrowRight, Lock } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactForm() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".contact-left", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                x: -50,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
            });

            gsap.from(".contact-right", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 70%",
                },
                x: 50,
                opacity: 0,
                duration: 1.5,
                ease: "power4.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="contact"
            ref={sectionRef}
            style={{
                width: "100%",
                display: "flex",
                flexWrap: "wrap",
                backgroundColor: "#ffffff",
            }}
        >
            {/* Left Side: Info */}
            <div
                className="contact-left"
                style={{
                    flex: "1 1 50%",
                    backgroundColor: "#4A90A4", // Ocean Blue
                    padding: "8rem 4rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    color: "#ffffff",
                }}
            >
                <div style={{ maxWidth: "500px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "3.5rem",
                            lineHeight: "1.1",
                            marginBottom: "3rem",
                        }}
                    >
                        Let's Design Your <br /> Dream Space
                    </h2>

                    <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginBottom: "5rem" }}>
                        <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                            <MapPin size={24} color="rgba(255,255,255,0.6)" />
                            <div>
                                <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Our Studio</h4>
                                <p style={{ opacity: 0.8, fontWeight: 400 }}>Coastal Interio Studio, Indiranagar, Bangalore, India</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                            <Phone size={24} color="rgba(255,255,255,0.6)" />
                            <div>
                                <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Call Us</h4>
                                <p style={{ opacity: 0.8, fontWeight: 400 }}>+91 98XXX XXXXX</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", gap: "1.5rem", alignItems: "flex-start" }}>
                            <Mail size={24} color="rgba(255,255,255,0.6)" />
                            <div>
                                <h4 style={{ fontSize: "1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Email Us</h4>
                                <p style={{ opacity: 0.8, fontWeight: 400 }}>hello@coastalinterio.in</p>
                            </div>
                        </div>
                    </div>

                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        {[Instagram, Facebook, Youtube, Share2].map((Icon, idx) => (
                            <div
                                key={idx}
                                style={{
                                    width: "3rem",
                                    height: "3rem",
                                    borderRadius: "100%",
                                    border: "1px solid rgba(255,255,255,0.2)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    cursor: "pointer",
                                    transition: "all 0.3s ease",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)")}
                                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                            >
                                <Icon size={18} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Right Side: Form */}
            <div
                className="contact-right"
                style={{
                    flex: "1 1 50%",
                    padding: "8rem 4rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <div style={{ maxWidth: "600px", margin: "0 auto", width: "100%" }}>
                    <form style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
                        <div style={{ gridColumn: "span 2" }}>
                            <label style={{ display: "block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem", color: "#2C2C2C" }}>Full Name</label>
                            <input type="text" placeholder="John Doe" style={{ width: "100%", padding: "1.25rem", borderRadius: "0.5rem", border: "1px solid rgba(0,0,0,0.1)", fontFamily: "var(--font-dm-sans)" }} />
                        </div>
                        <div>
                            <label style={{ display: "block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem", color: "#2C2C2C" }}>Phone Number</label>
                            <input type="tel" placeholder="+91 XXXXX XXXXX" style={{ width: "100%", padding: "1.25rem", borderRadius: "0.5rem", border: "1px solid rgba(0,0,0,0.1)", fontFamily: "var(--font-dm-sans)" }} />
                        </div>
                        <div>
                            <label style={{ display: "block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem", color: "#2C2C2C" }}>Email Address</label>
                            <input type="email" placeholder="john@example.com" style={{ width: "100%", padding: "1.25rem", borderRadius: "0.5rem", border: "1px solid rgba(0,0,0,0.1)", fontFamily: "var(--font-dm-sans)" }} />
                        </div>
                        <div style={{ gridColumn: "span 2" }}>
                            <label style={{ display: "block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem", color: "#2C2C2C" }}>Type of Space</label>
                            <select style={{ width: "100%", padding: "1.25rem", borderRadius: "0.5rem", border: "1px solid rgba(0,0,0,0.1)", fontFamily: "var(--font-dm-sans)", backgroundColor: "#ffffff" }}>
                                <option>Apartment</option>
                                <option>Villa</option>
                                <option>Office</option>
                                <option>Commercial</option>
                            </select>
                        </div>
                        <div style={{ gridColumn: "span 2" }}>
                            <label style={{ display: "block", fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem", color: "#2C2C2C" }}>Tell us about your project</label>
                            <textarea rows={4} placeholder="Describe your vision..." style={{ width: "100%", padding: "1.25rem", borderRadius: "0.5rem", border: "1px solid rgba(0,0,0,0.1)", fontFamily: "var(--font-dm-sans)", resize: "none" }} />
                        </div>

                        <button
                            style={{
                                gridColumn: "span 2",
                                padding: "1.5rem",
                                borderRadius: "0.5rem",
                                backgroundColor: "#4A90A4",
                                color: "#ffffff",
                                border: "none",
                                fontFamily: "var(--font-montserrat)",
                                fontSize: "11px",
                                fontWeight: 700,
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                cursor: "pointer",
                                marginTop: "1rem",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "1rem",
                                transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#3d7a8b")}
                            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#4A90A4")}
                        >
                            Request Free Consultation
                            <ArrowRight size={16} />
                        </button>
                        <div style={{ gridColumn: "span 2", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem", opacity: 0.4, marginTop: "1rem" }}>
                            <Lock size={12} />
                            <span style={{ fontSize: "10px", fontWeight: 600 }}>Your information is 100% private. No spam, ever.</span>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
