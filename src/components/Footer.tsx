"use client";

import { ArrowRight, Instagram, Facebook, Youtube, Share2 } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#1C1C1C", // Dark charcoal
                color: "#ffffff",
                position: "relative",
                padding: "10rem 2rem 4rem",
            }}
        >
            {/* Decorative Wave at Top */}
            <div
                style={{
                    position: "absolute",
                    top: "-1px",
                    left: 0,
                    width: "100%",
                    lineHeight: 0,
                    transform: "rotate(180deg)",
                }}
            >
                <svg
                    viewBox="0 0 1440 120"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ width: "100%", height: "auto" }}
                >
                    <path
                        d="M0 120L60 110C120 100 240 80 360 73.3C480 66.7 600 73.3 720 80C840 86.7 960 93.3 1080 86.7C1200 80 1320 60 1380 50L1440 40V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                        fill="#ffffff"
                    />
                </svg>
            </div>

            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                        gap: "5rem",
                        marginBottom: "8rem",
                    }}
                >
                    {/* Column 1: Logo & Tagline */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                            <div style={{ position: "relative", width: "50px", height: "50px" }}>
                                <Image
                                    src="/assets/images/logo.png"
                                    alt="Coastal Interio Logo"
                                    fill
                                    style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                                />
                            </div>
                            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "2rem", fontWeight: 700, fontStyle: "italic" }}>
                                Coastal Interio.
                            </h2>
                        </div>
                        <p style={{ opacity: 0.5, lineHeight: "1.8", maxWidth: "300px" }}>
                            Crafting premium coastal and contemporary living spaces across India. Est. 2012.
                        </p>
                        <div style={{ display: "flex", gap: "1.5rem" }}>
                            {[Instagram, Facebook, Youtube, Share2].map((Icon, idx) => (
                                <Icon key={idx} size={18} style={{ opacity: 0.4, cursor: "pointer" }} />
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <h4 style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#4A90A4" }}>Quick Links</h4>
                        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase()}`} style={{ color: "#ffffff", opacity: 0.5, textDecoration: "none", fontSize: "0.95rem", transition: "opacity 0.3s ease" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <h4 style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#4A90A4" }}>Our Services</h4>
                        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
                            {["Residential", "Commercial", "Turnkey", "Modular Kitchen", "Bedroom"].map((link) => (
                                <li key={link}>
                                    <a href="#services" style={{ color: "#ffffff", opacity: 0.5, textDecoration: "none", fontSize: "0.95rem", transition: "opacity 0.3s ease" }} onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")} onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: CTA */}
                    <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
                        <h4 style={{ fontFamily: "var(--font-montserrat)", fontSize: "11px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: "#4A90A4" }}>Newsletter</h4>
                        <p style={{ opacity: 0.5, fontSize: "0.9rem" }}>Get the latest interior design trends & inspiration.</p>
                        <div style={{ display: "flex", borderBottom: "1px solid rgba(255,255,255,0.1)", paddingBottom: "0.75rem" }}>
                            <input type="email" placeholder="Email address" style={{ background: "none", border: "none", color: "#ffffff", fontFamily: "var(--font-dm-sans)", width: "100%", outline: "none" }} />
                            <button style={{ background: "none", border: "none", color: "#4A90A4", cursor: "pointer" }}>
                                <ArrowRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div
                    style={{
                        borderTop: "1px solid rgba(255,255,255,0.05)",
                        paddingTop: "2.5rem",
                        display: "flex",
                        flexWrap: "wrap",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "2rem",
                    }}
                >
                    <span style={{ fontSize: "12px", opacity: 0.3 }}>
                        © {new Date().getFullYear()} Coastal Interio. All Rights Reserved.
                    </span>
                    <div style={{ display: "flex", gap: "2rem" }}>
                        <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.3 }}>Privacy Policy</span>
                        <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.3 }}>Terms of Service</span>
                        <span style={{ fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.3 }}>Crafted with ❤️ in India</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
