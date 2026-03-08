"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                zIndex: 1000,
                padding: isScrolled ? "1rem 1.5rem" : "1.5rem 1.5rem",
                backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.9)" : "transparent",
                backdropFilter: isScrolled ? "blur(20px)" : "none",
                borderBottom: isScrolled ? "1px solid rgba(0,0,0,0.05)" : "none",
                transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
            }}
            className="navbar-main"
        >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <div
                    className="logo-container"
                    style={{
                        position: "relative",
                        width: "80px",
                        height: "80px",
                        filter: isScrolled
                            ? "drop-shadow(0 0 15px rgba(74, 144, 164, 0.3))"
                            : "drop-shadow(0 0 20px rgba(255, 255, 255, 0.4))",
                        transition: "all 0.6s ease"
                    }}
                >
                    <Image
                        src="/assets/images/logo.png"
                        alt="Coastal Interio Logo"
                        fill
                        style={{ objectFit: "contain" }}
                    />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <h1
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "1.75rem",
                            fontWeight: 700,
                            color: isScrolled ? "#2C2C2C" : "#ffffff",
                            margin: 0,
                            lineHeight: 1,
                            transition: "color 0.4s ease",
                        }}
                    >
                        Coastal Interio.
                    </h1>
                    <span
                        style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "8px",
                            fontWeight: 600,
                            letterSpacing: "0.4em",
                            textTransform: "uppercase",
                            color: isScrolled ? "rgba(44,44,44,0.4)" : "rgba(255,255,255,0.4)",
                            marginTop: "0.25rem",
                            transition: "color 0.4s ease",
                        }}
                    >
                        Luxury Design Studio
                    </span>
                </div>
            </div>

            {/* Desktop Links */}
            <div
                style={{
                    display: "flex",
                    gap: "3rem",
                    alignItems: "center",
                }}
                className="desktop-links"
            >
                {["Home", "About", "Services", "Portfolio", "Process", "Contact"].map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "10px",
                            fontWeight: 700,
                            color: isScrolled ? "#2C2C2C" : "#ffffff",
                            textDecoration: "none",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            opacity: 0.8,
                            transition: "all 0.4s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.8")}
                    >
                        {link}
                    </a>
                ))}

                <button
                    style={{
                        padding: "1rem 2rem",
                        borderRadius: "100px",
                        backgroundColor: isScrolled ? "#4A90A4" : "rgba(255,255,255,0.1)",
                        backdropFilter: isScrolled ? "none" : "blur(10px)",
                        color: "#ffffff",
                        border: isScrolled ? "none" : "1px solid rgba(255,255,255,0.2)",
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        transition: "all 0.4s ease",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = isScrolled ? "#3d7a8b" : "rgba(255,255,255,0.2)")}
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = isScrolled ? "#4A90A4" : "rgba(255,255,255,0.1)")}
                >
                    Book Consultation
                </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div
                className="mobile-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                style={{
                    cursor: "pointer",
                    display: "none",
                    position: "relative",
                    zIndex: 1000,
                }}
            >
                {isMenuOpen ? (
                    <X size={28} color="#ffffff" />
                ) : (
                    <Menu size={28} color={isScrolled ? "#2C2C2C" : "#ffffff"} />
                )}
            </div>

            {/* Mobile Menu Overlay */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100vh",
                    backgroundColor: "#1A1A2E",
                    zIndex: 999,
                    display: isMenuOpen ? "flex" : "none",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "2.5rem",
                    transition: "all 0.5s ease",
                    opacity: isMenuOpen ? 1 : 0,
                    pointerEvents: isMenuOpen ? "auto" : "none",
                }}
            >
                {["Home", "About", "Services", "Portfolio", "Process", "Contact"].map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "2.5rem",
                            fontWeight: 500,
                            color: "#ffffff",
                            textDecoration: "none",
                            fontStyle: "italic",
                        }}
                    >
                        {link}
                    </a>
                ))}
                <button
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                        marginTop: "2rem",
                        padding: "1.25rem 3rem",
                        borderRadius: "100px",
                        backgroundColor: "#4A90A4",
                        color: "#ffffff",
                        border: "none",
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                    }}
                >
                    Book Now
                </button>
            </div>

            <style jsx>{`
        @media (max-width: 1024px) {
          .desktop-links {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
          .navbar-main {
            padding: 0.5rem 1rem !important;
          }
          .logo-container {
            width: 50px !important;
            height: 50px !important;
          }
          h1 {
            font-size: 1.25rem !important;
          }
        }
      `}</style>
        </nav>
    );
}
