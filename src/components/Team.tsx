"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Award, Sparkles } from "lucide-react";
import { getCdnUrl } from "@/lib/cdn";

const teamMembers = [
  {
    name: "Mr. Prashanth",
    role: "Founder & CEO",
    bio: "Guiding Nuspace Decor with a vision for operational excellence, precision execution, and seamless client experiences across Bengaluru since 2017.",
    image: getCdnUrl("/founder.png"),
  },
  {
    name: "Mr. Shanmukha",
    role: "Principal Designer",
    bio: "Leading creative direction, spatial harmony, and bespoke material aesthetics to transform living and working environments into timeless works of art.",
    image: getCdnUrl("/shanmukha.png"),
  },
];

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Team() {
  const { ref: containerRef, inView } = useInView(0.1);

  return (
    <section
      id="team"
      ref={containerRef}
      style={{
        padding: "6rem 1.5rem",
        backgroundColor: "#1C1B1A",
        color: "#ffffff",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>

        {/* Section Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "4.5rem",
            opacity: inView ? 1 : 0,
            transform: inView ? "none" : "translateY(30px)",
            transition: "opacity 0.8s ease, transform 0.8s ease",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1rem",
            }}
          >
            <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }}></span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.72rem",
                fontWeight: 600,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#8B263E",
              }}
            >
              STUDIO LEADERSHIP
            </span>
            <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }}></span>
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              color: "#FAF8F5",
              fontWeight: 500,
              marginBottom: "1rem",
              lineHeight: 1.1,
            }}
          >
            The Minds Behind Nuspace
          </h2>
          <p
            style={{
              color: "rgba(255,255,255,0.65)",
              fontSize: "1rem",
              maxWidth: "580px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Collaborative leadership dedicated to bespoke design and meticulous project delivery across Bengaluru.
          </p>
        </div>

        {/* Team Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
            gap: "2.5rem",
            maxWidth: "920px",
            margin: "0 auto",
          }}
        >
          {teamMembers.map((member, idx) => (
            <TeamMemberCard
              key={idx}
              member={member}
              delay={idx * 150}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamMemberCard({
  member,
  delay,
  inView,
}: {
  member: typeof teamMembers[0];
  delay: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#141312",
        borderRadius: "1.5rem",
        overflow: "hidden",
        border: hovered ? "1px solid #8B263E" : "1px solid rgba(255, 255, 255, 0.1)",
        boxShadow: hovered ? "0 25px 50px -12px rgba(139, 38, 62, 0.2)" : "0 15px 35px -10px rgba(0,0,0,0.4)",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: hovered ? "translateY(-6px)" : inView ? "none" : "translateY(40px)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${delay}ms`,
      }}
    >
      {/* Profile Image Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4 / 4.2",
          backgroundColor: "#252321",
          overflow: "hidden",
        }}
      >
        <Image
          src={member.image}
          alt={`${member.name} - ${member.role}`}
          fill
          sizes="(max-width: 768px) 100vw, 450px"
          style={{
            objectFit: "cover",
            objectPosition: "top center",
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
          priority
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(20, 19, 18, 0.9) 0%, transparent 60%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "1rem",
            left: "1.25rem",
            backgroundColor: "rgba(139, 38, 62, 0.9)",
            backdropFilter: "blur(10px)",
            padding: "0.4rem 1rem",
            borderRadius: "9999px",
            fontSize: "0.68rem",
            color: "#ffffff",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
          }}
        >
          <Sparkles size={12} />
          NUSPACE LEADERSHIP
        </div>
      </div>

      {/* Profile Content */}
      <div style={{ padding: "2.25rem 1.75rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        <h3
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "1.9rem",
            fontWeight: 500,
            color: "#ffffff",
            margin: 0,
            lineHeight: 1.1,
          }}
        >
          {member.name}
        </h3>
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "0.78rem",
            fontWeight: 600,
            color: "#8B263E",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
          }}
        >
          {member.role}
        </span>
        <p
          style={{
            fontSize: "0.92rem",
            color: "rgba(255, 255, 255, 0.72)",
            lineHeight: 1.65,
            margin: 0,
          }}
        >
          {member.bio}
        </p>
      </div>
    </div>
  );
}
