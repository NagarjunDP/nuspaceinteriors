"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";
import { getCdnUrl } from "@/lib/cdn";

const NAV_LINKS = ["Home", "About", "Services", "Philosophy", "Process", "Portfolio", "Team", "Contact"];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
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
                padding: isScrolled ? "0.6rem 2rem" : "1.25rem 2.5rem",
                backgroundColor: isScrolled ? "rgba(20, 19, 18, 0.96)" : "transparent",
                backdropFilter: isScrolled ? "blur(20px) saturate(180%)" : "none",
                borderBottom: isScrolled ? "1px solid rgba(255, 255, 255, 0.07)" : "none",
                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                boxSizing: "border-box",
            }}
            className="navbar-main"
        >
            {/* ── Real Logo ── */}
            <a
                href="#"
                style={{
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    flexShrink: 0,
                }}
            >
                <div
                    style={{
                        position: "relative",
                        width: isScrolled ? "52px" : "62px",
                        height: isScrolled ? "52px" : "62px",
                        borderRadius: "10px",
                        overflow: "hidden",
                        flexShrink: 0,
                        transition: "width 0.4s ease, height 0.4s ease",
                    }}
                >
                    <Image
                        src={getCdnUrl("/nuspacelogo.jpeg")}
                        alt="Nuspace Creations"
                        fill
                        sizes="64px"
                        style={{ objectFit: "cover", objectPosition: "center" }}
                        priority
                    />
                </div>
            </a>

            {/* ── Desktop Nav Links ── */}
            <div
                style={{ display: "flex", gap: "2.25rem", alignItems: "center" }}
                className="desktop-links"
            >
                {NAV_LINKS.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "0.72rem",
                            fontWeight: 500,
                            color: "#ffffff",
                            textDecoration: "none",
                            letterSpacing: "0.14em",
                            textTransform: "uppercase",
                            opacity: 0.82,
                            transition: "all 0.25s ease",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.opacity = "1";
                            e.currentTarget.style.color = "#ce3a55";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.opacity = "0.82";
                            e.currentTarget.style.color = "#ffffff";
                        }}
                    >
                        {link}
                    </a>
                ))}

                <a
                    href="#contact"
                    className="btn-primary"
                    style={{
                        padding: "0.7rem 1.4rem",
                        fontSize: "0.72rem",
                        borderRadius: "9999px",
                        letterSpacing: "0.1em",
                        flexShrink: 0,
                    }}
                >
                    <span>Start Your Project</span>
                    <ArrowRight size={13} />
                </a>
            </div>

            {/* ── Mobile Hamburger ── */}
            <button
                className="mobile-toggle"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                style={{
                    cursor: "pointer",
                    display: "none",
                    background: "none",
                    border: "none",
                    padding: "0.5rem",
                    zIndex: 1001,
                }}
            >
                {isMenuOpen ? <X size={26} color="#ffffff" /> : <Menu size={26} color="#ffffff" />}
            </button>

            {/* ── Mobile Full-Screen Drawer ── */}
            <div
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100dvh",
                    backgroundColor: "#141312",
                    zIndex: 999,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1.75rem",
                    transform: isMenuOpen ? "translateX(0)" : "translateX(100%)",
                    transition: "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                    overflowY: "auto",
                    padding: "2rem 1.5rem",
                }}
            >
                {/* Logo in drawer */}
                <div
                    style={{
                        position: "relative",
                        width: "80px",
                        height: "80px",
                        borderRadius: "14px",
                        overflow: "hidden",
                        marginBottom: "0.25rem",
                    }}
                >
                    <Image
                        src={getCdnUrl("/nuspacelogo.jpeg")}
                        alt="Nuspace Creations"
                        fill
                        sizes="80px"
                        style={{ objectFit: "cover" }}
                    />
                </div>

                <span
                    style={{
                        textTransform: "uppercase",
                        letterSpacing: "0.35em",
                        fontSize: "0.6rem",
                        color: "#8B263E",
                        fontWeight: 600,
                    }}
                >
                    NUSPACE CREATIONS — BENGALURU
                </span>

                {NAV_LINKS.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                            fontFamily: "var(--font-serif)",
                            fontSize: "2rem",
                            fontWeight: 500,
                            color: "#FAF8F5",
                            textDecoration: "none",
                            letterSpacing: "0.04em",
                            transition: "color 0.25s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "#8B263E")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "#FAF8F5")}
                    >
                        {link}
                    </a>
                ))}

                <a
                    href="#contact"
                    onClick={() => setIsMenuOpen(false)}
                    className="btn-primary"
                    style={{ marginTop: "0.75rem", padding: "1rem 2.5rem" }}
                >
                    Start Your Project
                </a>

                <div
                    style={{
                        fontSize: "0.7rem",
                        color: "rgba(255,255,255,0.4)",
                        letterSpacing: "0.04em",
                        textAlign: "center",
                    }}
                >
                    +91 98865 27878 · nuspacedecor@gmail.com
                </div>
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
            padding: 0.6rem 1.25rem !important;
          }
        }
      `}</style>
        </nav>
    );
}
