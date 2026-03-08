"use client";

import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingElements() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 800);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <>
            {/* WhatsApp Button */}
            <a
                href="https://wa.me/9198XXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                    position: "fixed",
                    bottom: "2.5rem",
                    right: "2.5rem",
                    width: "4rem",
                    height: "4rem",
                    backgroundColor: "#25D366",
                    borderRadius: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 20px 40px rgba(37, 211, 102, 0.4)",
                    zIndex: 999,
                    cursor: "pointer",
                    transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1) rotate(5deg)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1) rotate(0deg)")}
            >
                <MessageCircle size={28} color="#ffffff" />
                <div
                    style={{
                        position: "absolute",
                        right: "110%",
                        backgroundColor: "#ffffff",
                        padding: "0.75rem 1.25rem",
                        borderRadius: "0.75rem",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-dm-sans)",
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        color: "#2C2C2C",
                        pointerEvents: "none",
                        animation: "pulse 2s infinite",
                    }}
                >
                    Chat with us
                </div>
            </a>

            {/* Scroll to Top */}
            <div
                onClick={scrollToTop}
                style={{
                    position: "fixed",
                    bottom: "8rem",
                    right: "2.5rem",
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#ffffff",
                    borderRadius: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
                    zIndex: 998,
                    cursor: "pointer",
                    opacity: showScrollToTop ? 1 : 0,
                    transform: showScrollToTop ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    border: "1px solid rgba(0,0,0,0.05)",
                }}
            >
                <ArrowUp size={20} color="#2C2C2C" />
            </div>

            {/* Mobile Sticky CTA Bar */}
            <div
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "#4A90A4",
                    padding: "1rem 2rem",
                    display: "none", // Managed by CSS
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1001,
                    boxShadow: "0 -10px 30px rgba(0,0,0,0.1)",
                }}
                className="mobile-cta-bar"
            >
                <button
                    style={{
                        backgroundColor: "transparent",
                        border: "none",
                        color: "#ffffff",
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "11px",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                    }}
                >
                    Book Free Consultation
                </button>
            </div>

            <style jsx>{`
        @keyframes pulse {
          0% { transform: translateX(0); }
          50% { transform: translateX(-5px); }
          100% { transform: translateX(0); }
        }
        @media (max-width: 768px) {
          .mobile-cta-bar {
            display: flex !important;
          }
        }
      `}</style>
        </>
    );
}
