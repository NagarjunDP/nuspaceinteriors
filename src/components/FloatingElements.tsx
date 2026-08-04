"use client";

import { ArrowUp, PhoneCall } from "lucide-react";
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
    const phoneUrl = "tel:+919886527878";

    return (
        <>
            {/* Floating WhatsApp Button */}
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp with Nuspace Creations"
                className="whatsapp-float-btn whatsapp-pulse"
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
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="#ffffff"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.99c-.002 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c-.001 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662a11.87 11.87 0 005.707 1.456h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" />
                </svg>
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

            {/* Floating Direct Call Button (Positioned Directly Above WhatsApp) */}
            <a
                href={phoneUrl}
                aria-label="Call Nuspace Creations directly at +91 98865 27878"
                className="call-float-btn"
                style={{
                    position: "fixed",
                    bottom: "7rem",
                    right: "2.5rem",
                    width: "3.75rem",
                    height: "3.75rem",
                    backgroundColor: "#8B263E",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: "0 15px 35px rgba(139, 38, 62, 0.45)",
                    zIndex: 999,
                    cursor: "pointer",
                    transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
                <PhoneCall size={24} color="#ffffff" strokeWidth={1.75} />
                <div
                    className="call-float-label"
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
                    Call +91 98865 27878
                </div>
            </a>

            {/* Scroll to Top Button */}
            <div
                onClick={scrollToTop}
                className="scroll-top-btn"
                style={{
                    position: "fixed",
                    bottom: "11.5rem",
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
                <ArrowUp size={18} color="#ffffff" strokeWidth={1.75} />
            </div>

            {/* Mobile Sticky Action Bar */}
            <div
                style={{
                    position: "fixed",
                    bottom: 0,
                    left: 0,
                    width: "100%",
                    backgroundColor: "#8B263E",
                    padding: "0.85rem 1.5rem calc(0.85rem + env(safe-area-inset-bottom))",
                    display: "none",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1001,
                    boxShadow: "0 -10px 30px rgba(0,0,0,0.3)",
                }}
                className="mobile-cta-bar"
            >
                <a
                    href="tel:+919886527878"
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
                    <PhoneCall size={16} />
                    Call Us Now: +91 98865 27878
                </a>
            </div>

            <style jsx>{`
        @media (max-width: 768px) {
          .mobile-cta-bar {
            display: flex !important;
          }
          .whatsapp-float-btn {
            bottom: calc(4.5rem + env(safe-area-inset-bottom)) !important;
            right: 1.25rem !important;
            width: 3.25rem !important;
            height: 3.25rem !important;
          }
          .call-float-btn {
            bottom: calc(8.5rem + env(safe-area-inset-bottom)) !important;
            right: 1.25rem !important;
            width: 3.25rem !important;
            height: 3.25rem !important;
          }
          .whatsapp-float-label,
          .call-float-label {
            display: none !important;
          }
          .scroll-top-btn {
            bottom: calc(12.25rem + env(safe-area-inset-bottom)) !important;
            right: 1.25rem !important;
            width: 2.75rem !important;
            height: 2.75rem !important;
          }
        }
      `}</style>
        </>
    );
}
