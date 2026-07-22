"use client";

import Image from "next/image";
import { Instagram } from "lucide-react";

const instagramImages = [
    "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600",

    "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&q=80&w=600",
    "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=600",

    "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80&w=600",

];

export default function InstagramGallery() {
    return (
        <section
            id="instagram"
            style={{
                padding: "10rem 2rem",
                backgroundColor: "#FDFDFB",
            }}
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto", textAlign: "center" }}>
                {/* Heading */}
                <div style={{ marginBottom: "5rem" }}>
                    <h2
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                            color: "#2C2C2C",
                            marginBottom: "1rem",
                            fontStyle: "italic",
                        }}
                    >
                        Follow Our Journey
                    </h2>
                    <span
                        style={{
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "11px",
                            fontWeight: 700,
                            color: "#4A90A4",
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                        }}
                    >
                        @nuspacedecor
                    </span>
                </div>

                {/* Grid */}
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gap: "1rem",
                        marginBottom: "5rem",
                    }}
                >
                    {instagramImages.map((src, idx) => (
                        <div
                            key={idx}
                            className="insta-card"
                            style={{
                                position: "relative",
                                aspectRatio: "1/1",
                                overflow: "hidden",
                                cursor: "pointer",
                                borderRadius: "1rem",
                            }}
                        >
                            <Image
                                src={src}
                                alt={`Instagram post ${idx + 1}`}
                                fill
                                style={{
                                    objectFit: "cover",
                                    transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                                }}
                            />
                            <div
                                className="insta-overlay"
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    backgroundColor: "rgba(0,0,0,0.4)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    opacity: 0,
                                    transition: "opacity 0.4s ease",
                                }}
                            >
                                <Instagram size={30} color="#ffffff" />
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <button
                    style={{
                        padding: "1.25rem 3.5rem",
                        borderRadius: "100px",
                        background: "linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)",
                        color: "#ffffff",
                        border: "none",
                        fontFamily: "var(--font-montserrat)",
                        fontSize: "10px",
                        fontWeight: 700,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        cursor: "pointer",
                        transition: "transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "1rem",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                    <Instagram size={16} />
                    Follow Us on Instagram
                </button>
            </div>

            <style jsx>{`
        .insta-card:hover img {
          transform: scale(1.1);
        }
        .insta-card:hover .insta-overlay {
          opacity: 1;
        }
        @media (max-width: 1024px) {
          section {
            padding: 8rem 1rem !important;
          }
        }
        @media (max-width: 768px) {
          div[style*="gridTemplateColumns"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
        </section>
    );
}
