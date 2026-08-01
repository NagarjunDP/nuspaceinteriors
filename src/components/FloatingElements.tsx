"use client";

import { MessageCircle, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingElements() {
    const [showScrollToTop, setShowScrollToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollToTop(window.scrollY > 600);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const whatsappUrl = "https://wa.me/919886527878?text=Hi%20Nuspace%20Creations,%20I%20would%20like%20to%20discuss%20my%20interior%20design%20project.";

    return (
        <>
            {/* Floating WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp with Nuspace Creations"
                className="whatsapp-float-btn"
                style={{
                    position: "fixed",
                    bottom: "2.5rem",
                    right: "2.5rem",
                    width: "3.75rem",
                    height: "3.75rem",
                    backgroundColor: "#25D366",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 15px 35px rgba(37, 211, 102, 0.4)",
                    zIndex: 999,
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                <MessageCircle size={26} color="#ffffff" />
                <div
                    className="whatsapp-float-label"
                    style={{
                        position: "absolute",
                        right: "115%",
                        backgroundColor: "#141312",
                        border: "1px solid rgba(255, 255, 255, 0.15)",
                        padding: "0.6rem 1.1rem",
                        borderRadius: "9999px",
                        boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
                        whiteSpace: "nowrap",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        color: "#ffffff",
                        pointerEvents: "none",
                    }}
                >
                    Chat with Nuspace Creations
                </div>
            </a>

            {/* Scroll to Top Button */}
            <div
                onClick={scrollToTop}
                className="scroll-top-btn"
                style={{
                    position: "fixed",
                    bottom: "7rem",
                    right: "2.5rem",
                    width: "3rem",
                    height: "3rem",
                    backgroundColor: "#1C1B1A",
                    color: "#ffffff",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                    zIndex: 998,
                    cursor: "pointer",
                    opacity: showScrollToTop ? 1 : 0,
                    transform: showScrollToTop ? "translateY(0)" : "translateY(20px)",
                    transition: "all 0.4s ease",
                    border: "1px solid rgba(255,255,255,0.15)",
                }}
            >
                <ArrowUp size={18} color="#ffffff" />
            </div>

            {/* Mobile Sticky Action Bar */}
            <div
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "#8B263E",
                    padding: "0.85rem 1.5rem",
                    display: "none",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1001,
                    boxShadow: "0 -10px 30px rgba(0,0,0,0.3)",
                }}
                className="mobile-cta-bar"
            >
                <a
                    href="#contact"
                    style={{
                        color: "#ffffff",
                        fontFamily: "var(--font-sans)",
                        fontSize: "0.8rem",
                        fontWeight: 600,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                    }}
                >
                    Start Your Project With Nuspace Creations
                </a>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .mobile-cta-bar {
            display: flex !important;
          }
          .whatsapp-float-btn {
            bottom: 4.25rem !important;
            right: 1.25rem !important;
            width: 3.25rem !important;
            height: 3.25rem !important;
          }
          .whatsapp-float-label {
            display: none !important;
          }
          .scroll-top-btn {
            bottom: 8.25rem !important;
            right: 1.25rem !important;
            width: 2.75rem !important;
            height: 2.75rem !important;
          }
        }
      `}</style>
        </>
    );
}

