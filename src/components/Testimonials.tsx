"use client";

import { useEffect, useRef, useState } from "react";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import gsap from "gsap";

const testimonials = [
    {
        name: "Priya R.",
        city: "Bangalore",
        text: "Nuspace Decor completely transformed our apartment in Bangalore. From the 3D walkthrough to the final reveal — it was flawless. Our home now feels like a 5-star resort every single day.",
        rating: 5,
    },
    {
        name: "Arjun M.",
        city: "Bengaluru",
        text: "Their attention to detail is unmatched. They perfectly captured the luxurious, serene vibe we wanted for our home. Professional, creative, and highly recommended!",
        rating: 5,
    },
    {
        name: "Sneha Kapoor",
        city: "Mumbai",
        text: "Minimalist, luxury, and calm — that's exactly what they delivered. The team managed everything end-to-end, making the renovation process completely stress-free.",
        rating: 5,
    },
    {
        name: "Vikram S.",
        city: "Goa",
        text: "The best interior design studio for anyone looking for that high-end beachside villa aesthetic. They blend modern trends with traditional Indian soul beautifully.",
        rating: 5,
    },
    {
        name: "Meera Nair",
        city: "Chennai",
        text: "I was impressed by their transparency and timelines. The quality of materials used is premium, and the final look is exactly what we saw in the renders.",
        rating: 5,
    },
];

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    useEffect(() => {
        autoPlayRef.current = setInterval(nextSlide, 5000);
        return () => {
            if (autoPlayRef.current) clearInterval(autoPlayRef.current);
        };
    }, []);

    useEffect(() => {
        if (carouselRef.current) {
            gsap.to(carouselRef.current, {
                x: `-${activeIndex * 100}%`,
                duration: 1.2,
                ease: "power3.inOut",
            });
        }
    }, [activeIndex]);

    return (
        <section
            id="testimonials"
            ref={sectionRef}
            style={{
                padding: "10rem 2rem",
                backgroundColor: "#FDFDFB", // Warm off-white
                overflow: "hidden",
                position: "relative",
            }}
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                {/* Heading */}
                <div style={{ textAlign: "center", marginBottom: "6rem" }}>
                    <h2
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "clamp(3rem, 5vw, 4.5rem)",
                            color: "#2C2C2C",
                            fontStyle: "italic",
                        }}
                    >
                        What Our Clients Say
                    </h2>
                </div>

                {/* Carousel Container */}
                <div
                    style={{
                        position: "relative",
                        maxWidth: "900px",
                        margin: "0 auto",
                        overflow: "hidden",
                    }}
                >
                    <div
                        ref={carouselRef}
                        style={{
                            display: "flex",
                            width: "100%",
                        }}
                    >
                        {testimonials.map((t, idx) => (
                            <div
                                key={idx}
                                style={{
                                    minWidth: "100%",
                                    padding: "4rem",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                }}
                            >
                                <Quote size={60} color="#4A90A4" style={{ opacity: 0.15, marginBottom: "2rem" }} />

                                <p
                                    style={{
                                        fontFamily: "var(--font-cormorant)",
                                        fontSize: "2rem",
                                        lineHeight: "1.5",
                                        color: "#2C2C2C",
                                        marginBottom: "3rem",
                                        fontStyle: "italic",
                                        maxWidth: "800px",
                                    }}
                                >
                                    "{t.text}"
                                </p>

                                <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1.5rem" }}>
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} size={16} fill="#f3cc5e" color="#f3cc5e" />
                                    ))}
                                </div>

                                <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                                    <div
                                        style={{
                                            width: "3rem",
                                            height: "3rem",
                                            borderRadius: "100%",
                                            backgroundColor: "#F5ECD7",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            fontFamily: "var(--font-cormorant)",
                                            fontSize: "1.25rem",
                                            color: "#4A90A4",
                                            fontWeight: 700,
                                        }}
                                    >
                                        {t.name.charAt(0)}
                                    </div>
                                    <div style={{ textAlign: "left" }}>
                                        <h4 style={{ fontSize: "1rem", color: "#2C2C2C", fontWeight: 700, margin: 0 }}>
                                            {t.name}
                                        </h4>
                                        <span style={{ fontSize: "0.85rem", color: "rgba(44,44,44,0.5)", fontWeight: 500 }}>
                                            {t.city}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevSlide}
                        style={{
                            position: "absolute",
                            top: "50%",
                            left: 0,
                            transform: "translateY(-50%)",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "#4A90A4",
                            opacity: 0.5,
                            transition: "opacity 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
                    >
                        <ArrowLeft size={32} />
                    </button>
                    <button
                        onClick={nextSlide}
                        style={{
                            position: "absolute",
                            top: "50%",
                            right: 0,
                            transform: "translateY(-50%)",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "#4A90A4",
                            opacity: 0.5,
                            transition: "opacity 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                        onMouseLeave={(e) => (e.currentTarget.style.opacity = "0.5")}
                    >
                        <ArrowRight size={32} />
                    </button>
                </div>

                {/* Trust Badges */}
                <div
                    style={{
                        marginTop: "6rem",
                        display: "flex",
                        justifyContent: "center",
                        gap: "4rem",
                        alignItems: "center",
                        padding: "2rem",
                        borderTop: "1px solid rgba(0,0,0,0.05)",
                    }}
                >
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                            <span style={{ fontWeight: 800, fontSize: "1.5rem", color: "#2C2C2C" }}>4.9/5</span>
                            <div style={{ display: "flex", gap: "2px" }}>
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={14} fill="#f3cc5e" color="#f3cc5e" />
                                ))}
                            </div>
                        </div>
                        <span style={{ fontSize: "10px", fontWeight: 700, color: "rgba(0,0,0,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                            on Google Reviews
                        </span>
                    </div>
                    <div style={{ width: "1px", height: "40px", backgroundColor: "rgba(0,0,0,0.05)" }}></div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem" }}>
                        <span style={{ fontWeight: 800, fontSize: "1.5rem", color: "#2C2C2C" }}>150+</span>
                        <span style={{ fontSize: "10px", fontWeight: 700, color: "rgba(0,0,0,0.4)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                            Happy Homeowners
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
