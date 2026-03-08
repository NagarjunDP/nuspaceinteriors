"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = ["All", "Living Room", "Bedroom", "Kitchen", "Commercial", "Full Home"];

const projects = [
    {
        id: 1,
        title: "Seaside Villa, Goa",
        category: "Full Home",
        image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=800",
        size: "large",
    },
    {
        id: 2,
        title: "Skyline Suite",
        category: "Living Room",
        image: "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&q=80&w=800",
        size: "small",
    },
    {
        id: 3,
        title: "Azure Office",
        category: "Commercial",
        image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=800",
        size: "small",
    },
    {
        id: 4,
        title: "The Culinary Hub",
        category: "Kitchen",
        image: "https://images.unsplash.com/photo-1556911220-e150213ff167?auto=format&fit=crop&q=80&w=1000",
        size: "large",
    },
    {
        id: 5,
        title: "Coastal Bedroom",
        category: "Bedroom",
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&q=80&w=800",
        size: "small",
    },
    {
        id: 6,
        title: "Modern Zen Condo",
        category: "Full Home",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800",
        size: "small",
    },
    {
        id: 7,
        title: "Teak & Terrazzo",
        category: "Living Room",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800",
        size: "small",
    },
    {
        id: 8,
        title: "The Oasis",
        category: "Bedroom",
        image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&q=80&w=800",
        size: "large",
    },
];

export default function Portfolio() {
    const [activeCategory, setActiveCategory] = useState("All");
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    const filteredProjects = projects.filter(
        (project) => activeCategory === "All" || project.category === activeCategory
    );

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".portfolio-heading > *", {
                scrollTrigger: {
                    trigger: ".portfolio-heading",
                    start: "top 85%",
                },
                y: 40,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: "power3.out",
            });

            // Animate grid entries
            gsap.from(".project-card", {
                scrollTrigger: {
                    trigger: gridRef.current,
                    start: "top 80%",
                },
                scale: 0.9,
                opacity: 0,
                duration: 1,
                stagger: 0.1,
                ease: "power2.out",
            });
        }, sectionRef);

        return () => ctx.revert();
    }, [activeCategory]);

    return (
        <section
            id="portfolio"
            ref={sectionRef}
            style={{
                padding: "10rem 2rem",
                backgroundColor: "#FDFDFB",
            }}
        >
            <div style={{ maxWidth: "1440px", margin: "0 auto" }}>
                {/* Heading */}
                <div className="portfolio-heading" style={{ textAlign: "center", marginBottom: "6rem" }}>
                    <h2
                        style={{
                            fontFamily: "var(--font-cormorant)",
                            fontSize: "clamp(3rem, 5vw, 4.5rem)",
                            color: "#2C2C2C",
                            marginBottom: "1rem",
                            fontStyle: "italic",
                        }}
                    >
                        Our Work Speaks
                    </h2>
                    <div
                        style={{
                            width: "80px",
                            height: "2px",
                            backgroundColor: "#4A90A4",
                            margin: "0 auto",
                        }}
                    ></div>
                </div>

                {/* Filter Tabs */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        flexWrap: "wrap",
                        gap: "2.5rem",
                        marginBottom: "5rem",
                    }}
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            style={{
                                background: "none",
                                border: "none",
                                fontFamily: "var(--font-montserrat)",
                                fontSize: "11px",
                                fontWeight: activeCategory === cat ? 700 : 500,
                                color: activeCategory === cat ? "#4A90A4" : "#2C2C2C",
                                letterSpacing: "0.2em",
                                textTransform: "uppercase",
                                cursor: "pointer",
                                paddingBottom: "0.5rem",
                                borderBottom: `1px solid ${activeCategory === cat ? "#4A90A4" : "transparent"}`,
                                transition: "all 0.4s ease",
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Bento Grid */}
                <div
                    ref={gridRef}
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gridAutoRows: "300px",
                        gap: "1.5rem",
                        marginBottom: "6rem",
                    }}
                >
                    {filteredProjects.map((project, idx) => (
                        <div
                            key={project.id}
                            className="project-card"
                            style={{
                                position: "relative",
                                borderRadius: "1.5rem",
                                overflow: "hidden",
                                gridColumn: project.size === "large" ? "span 2" : "span 1",
                                gridRow: project.size === "large" ? "span 2" : "span 1",
                                cursor: "pointer",
                            }}
                        >
                            <Image
                                src={project.image}
                                alt={project.title}
                                fill
                                style={{ objectFit: "cover", transition: "transform 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                            />

                            {/* Overlay on Hover (using CSS for easier hover management without multiple states) */}
                            <div
                                className="project-overlay"
                                style={{
                                    position: "absolute",
                                    inset: 0,
                                    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 60%)",
                                    opacity: 0,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end",
                                    padding: "2.5rem",
                                    transition: "opacity 0.6s ease",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
                                onMouseLeave={(e) => (e.currentTarget.style.opacity = "0")}
                            >
                                <div>
                                    <span
                                        style={{
                                            fontFamily: "var(--font-montserrat)",
                                            fontSize: "9px",
                                            color: "rgba(255,255,255,0.6)",
                                            letterSpacing: "0.2em",
                                            textTransform: "uppercase",
                                            display: "block",
                                            marginBottom: "0.5rem",
                                        }}
                                    >
                                        {project.category}
                                    </span>
                                    <h4
                                        style={{
                                            fontFamily: "var(--font-cormorant)",
                                            fontSize: "1.75rem",
                                            color: "#ffffff",
                                            marginBottom: "1rem",
                                        }}
                                    >
                                        {project.title}
                                    </h4>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "0.5rem",
                                            color: "#4A90A4",
                                        }}
                                    >
                                        <span
                                            style={{
                                                fontFamily: "var(--font-montserrat)",
                                                fontSize: "9px",
                                                fontWeight: 600,
                                                letterSpacing: "0.1em",
                                                textTransform: "uppercase",
                                            }}
                                        >
                                            View Project
                                        </span>
                                        <ArrowUpRight size={14} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Load More Button */}
                <div style={{ textAlign: "center" }}>
                    <button
                        style={{
                            padding: "1.25rem 3.5rem",
                            borderRadius: "100px",
                            backgroundColor: "transparent",
                            color: "#2C2C2C",
                            border: "1px solid rgba(0,0,0,0.1)",
                            fontFamily: "var(--font-montserrat)",
                            fontSize: "10px",
                            fontWeight: 600,
                            letterSpacing: "0.2em",
                            textTransform: "uppercase",
                            cursor: "pointer",
                            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                        }}
                        onMouseEnter={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#2C2C2C";
                            (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
                        }}
                        onMouseLeave={(e) => {
                            (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
                            (e.currentTarget as HTMLButtonElement).style.color = "#2C2C2C";
                        }}
                    >
                        Load More Projects
                    </button>
                </div>
            </div>

            <style jsx>{`
        @media (max-width: 1024px) {
          .project-card {
            grid-column: span 2 !important;
            grid-row: span 1 !important;
          }
        }
        @media (max-width: 640px) {
          .project-card {
            grid-column: span 4 !important;
            height: 400px;
          }
        }
      `}</style>
        </section>
    );
}
