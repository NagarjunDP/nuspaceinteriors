"use client";

import { ArrowRight, Phone, Mail, MapPin, Sparkles } from "lucide-react";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#141312",
                color: "#ffffff",
                position: "relative",
                padding: "6rem 2rem 3rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.08)",
            }}
        >
            <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                        gap: "4rem",
                        marginBottom: "6rem",
                    }}
                >
                    {/* Column 1: Logo & Tagline */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                            <div
                                style={{
                                    width: "36px",
                                    height: "36px",
                                    borderRadius: "50%",
                                    backgroundColor: "#8B263E",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "#ffffff",
                                    fontWeight: 700,
                                    fontFamily: "var(--font-cormorant)",
                                    fontSize: "1.1rem",
                                }}
                            >
                                N
                            </div>
                            <div>
                                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.5rem", fontWeight: 700, margin: 0, lineHeight: 1 }}>
                                    NUSPACE DECOR
                                </h2>
                                <span style={{ fontFamily: "var(--font-sans)", fontSize: "7px", fontWeight: 600, letterSpacing: "0.4em", textTransform: "uppercase", color: "#8B263E" }}>
                                    DREAMS TO PERFECTION
                                </span>
                            </div>
                        </div>

                        <p style={{ color: "rgba(255, 255, 255, 0.65)", fontSize: "0.925rem", lineHeight: "1.7", margin: 0 }}>
                            Bespoke interior design studio specializing in luxury residential & commercial spaces across Bengaluru. Est. 2017.
                        </p>
                    </div>

                    {/* Column 2: Navigation Links */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: "#8B263E" }}>
                            Navigation
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            {["Home", "About", "Services", "Philosophy", "Process", "Portfolio", "Team", "Contact"].map((link) => (
                                <li key={link}>
                                    <a
                                        href={`#${link.toLowerCase()}`}
                                        style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.3s ease" }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "#8B263E")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")}
                                    >
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: "#8B263E" }}>
                            Services
                        </h4>
                        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                            {["Residential & Commercial", "Renovation & Remodeling", "Turnkey Project Management", "End-to-End Interiors"].map((service) => (
                                <li key={service}>
                                    <a
                                        href="#services"
                                        style={{ color: "rgba(255, 255, 255, 0.7)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.3s ease" }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = "#8B263E")}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)")}
                                    >
                                        {service}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact & Business Details */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                        <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "0.75rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.2em", color: "#8B263E" }}>
                            Contact Us
                        </h4>
                        <div style={{ display: "flex", flexDirection: "column", gap: "0.85rem", fontSize: "0.875rem", color: "rgba(255,255,255,0.75)" }}>
                            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                                <Phone size={14} color="#8B263E" />
                                <a href="tel:+919886527878" style={{ color: "#ffffff", textDecoration: "none" }}>+91 98865 27878</a>
                            </div>
                            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                                <Mail size={14} color="#8B263E" />
                                <a href="mailto:nuspacedecor@gmail.com" style={{ color: "#ffffff", textDecoration: "none" }}>nuspacedecor@gmail.com</a>
                            </div>
                            <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                                <MapPin size={14} color="#8B263E" style={{ marginTop: "3px", flexShrink: 0 }} />
                                <span>Vinayaka Layout, Abbigere, Bengaluru, Karnataka – 560090</span>
                            </div>
                            <div style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)" }}>
                                GSTIN: 29DVLPP6022C1ZH
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Copyright Bar */}
                <div
                    style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                        paddingTop: "2rem",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "1rem",
                        fontSize: "0.8rem",
                        color: "rgba(255, 255, 255, 0.4)",
                    }}
                >
                    <span>
                        © {new Date().getFullYear()} Nuspace Decor. All Rights Reserved.
                    </span>
                    <div style={{ display: "flex", gap: "1.5rem" }}>
                        <span>Est. 2017 Bengaluru</span>
                        <span>Bespoke Interior Studio</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

