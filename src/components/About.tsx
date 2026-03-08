"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { label: "Projects Delivered", value: 150, suffix: "+" },
    { label: "Years of Excellence", value: 8, suffix: "+" },
    { label: "Client Satisfaction", value: 100, suffix: "%" },
];

export default function About() {
    const sectionRef = useRef(null);
    const imageRef = useRef(null);
    const textRef = useRef(null);
    const statsRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Fade-in-left animation for the image
            gsap.from(imageRef.current, {
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: "top 80%",
                },
                x: -100,
                duration: 1.5,
                ease: "power4.out",
            });

            // Staggered fade-up for text content
            gsap.from(".about-text-content > *", {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 80%",
                },
                y: 50,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
            });

            // Animated count-up for stats
            const statItems = gsap.utils.toArray(".stat-value");
            statItems.forEach((stat: any) => {
                const value = parseInt(stat.getAttribute("data-value"));
                gsap.to(stat, {
                    scrollTrigger: {
                        trigger: stat,
                        start: "top 90%",
                    },
                    innerText: value,
                    duration: 2,
                    snap: { innerText: 1 },
                    ease: "power1.inOut",
                });
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="about"
            ref={sectionRef}
            style={{
                position: "relative",
                padding: "10rem 2rem",
                backgroundColor: "#FDFDFB",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    maxWidth: "1440px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                    gap: "6rem",
                    alignItems: "center",
                }}
            >
                {/* Left Side: Tall Editorial Photo */}
                <div
                    ref={imageRef}
                    style={{
                        position: "relative",
                        height: "800px",
                        borderRadius: "1rem",
                        overflow: "hidden",
                        boxShadow: "0 40px 80px -20px rgba(0,0,0,0.1)",
                    }}
                >
                    <Image
                        src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000"
                        alt="Minimalist coastal living room"
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>

                {/* Right Side: Brand Story */}
                <div ref={textRef} className="about-text-content" style={{ paddingRight: "4rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", marginBottom: "2rem" }}>
                        <span style={{ width: "2.5rem", height: "1px", backgroundColor: "#4A90A4" }}></span>
                        <span
                            style={{
                                fontFamily: "var(--font-montserrat)",
                                color: "#4A90A4",
                                letterSpacing: "0.5em",
                                fontSize: "10px",
                                fontWeight: 600,
                                textTransform: "uppercase",
                            }}
                        >
                            Our Philosophy
                        </span>
                    </div>

                    <h2
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "clamp(3rem, 5vw, 5rem)",
                            lineHeight: "1.1",
                            color: "#2C2C2C",
                            marginBottom: "3rem",
                            fontStyle: "italic",
                        }}
                    >
                        Where Every Space <br /> Tells a Story.
                    </h2>

                    <p
                        style={{
                            fontSize: "1.25rem",
                            color: "#2C2C2C",
                            lineHeight: "1.8",
                            marginBottom: "4rem",
                            opacity: 0.8,
                        }}
                    >
                        At Coastal Interio, we believe your home is a reflection of your soul.
                        We blend the breezy serenity of coastal living with the warmth of Indian
                        craftsmanship — creating spaces that are timeless, liveable, and deeply personal.
                    </p>

                    {/* Stat Counters */}
                    <div
                        ref={statsRef}
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(3, 1fr)",
                            gap: "2rem",
                            borderTop: "1px solid rgba(0,0,0,0.05)",
                            paddingTop: "3rem",
                        }}
                    >
                        {stats.map((stat, idx) => (
                            <div key={idx} style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                                <div style={{ display: "flex", alignItems: "baseline" }}>
                                    <span
                                        className="stat-value"
                                        data-value={stat.value}
                                        style={{
                                            fontFamily: "var(--font-cormorant)",
                                            fontSize: "3rem",
                                            fontWeight: 500,
                                            color: "#4A90A4",
                                        }}
                                    >
                                        0
                                    </span>
                                    <span
                                        style={{
                                            fontFamily: "var(--font-cormorant)",
                                            fontSize: "1.5rem",
                                            fontWeight: 500,
                                            color: "#4A90A4",
                                        }}
                                    >
                                        {stat.suffix}
                                    </span>
                                </div>
                                <span
                                    style={{
                                        fontFamily: "var(--font-montserrat)",
                                        fontSize: "9px",
                                        fontWeight: 600,
                                        color: "#2C2C2C",
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        opacity: 0.5,
                                    }}
                                >
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Sandy Wave Divider */}
            <div
                style={{
                    position: "absolute",
                    bottom: "-1px",
                    left: 0,
                    width: "100%",
                    lineHeight: 0,
                    zIndex: 1,
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
                        fill="#F5ECD7"
                    />
                </svg>
            </div>
        </section>
    );
}
