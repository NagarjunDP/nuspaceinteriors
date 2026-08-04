"use client";

import { useEffect, useRef, useState } from "react";
import {
  MessageSquare,
  PenTool,
  Layers,
  Factory,
  HardHat,
  Sparkles,
  ShieldCheck,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Consultation & Site Visit",
    description: "Initial client meeting, in-depth site measurements, requirement gathering, and budget discussion.",
    icon: MessageSquare,
    items: ["Client Meeting", "Site Measurements", "Requirement Gathering", "Budget Discussion"],
    accent: "#8B263E",
  },
  {
    number: "02",
    title: "Concept & Design Development",
    description: "Architectural space planning, mood boards, 2D floor plans, 3D visualizations, and design approval.",
    icon: PenTool,
    items: ["Space Planning", "Mood Boards", "2D Layouts", "3D Visualizations"],
    accent: "#C5A059",
  },
  {
    number: "03",
    title: "Material Selection & Costing",
    description: "Selecting premium veneers, marbles, finishes, transparent BOQ breakdown, final quotation, and project scheduling.",
    icon: Layers,
    items: ["Material Selection", "Transparent BOQ", "Final Quotation", "Project Scheduling"],
    accent: "#8B263E",
  },
  {
    number: "04",
    title: "Production & Procurement",
    description: "Precision custom furniture manufacturing, raw material procurement, and strict workshop quality inspections.",
    icon: Factory,
    items: ["Custom Manufacturing", "Material Procurement", "Quality Inspections", "Factory Checks"],
    accent: "#C5A059",
  },
  {
    number: "05",
    title: "Site Execution",
    description: "On-site civil work, electrical, plumbing, false ceiling, flooring, painting, and modular installations.",
    icon: HardHat,
    items: ["Civil & Plumbing", "Electrical & Ceiling", "Flooring & Painting", "Modular Installations"],
    accent: "#8B263E",
  },
  {
    number: "06",
    title: "Finishing & Styling",
    description: "Architectural lighting, décor placement, accessories, final touch-ups, and thorough deep cleaning.",
    icon: Sparkles,
    items: ["Architectural Lighting", "Décor & Accessories", "Final Touch-ups", "Deep Cleaning"],
    accent: "#C5A059",
  },
  {
    number: "07",
    title: "Quality Check & Handover",
    description: "Comprehensive 100-point inspection, snag rectification, guided client walkthrough, and formal project handover.",
    icon: ShieldCheck,
    items: ["Final Inspection", "Snag Rectification", "Client Walkthrough", "Project Handover"],
    accent: "#8B263E",
  },
];

function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

export default function Process() {
  const { ref: sectionRef, inView } = useInView(0.08);
  const [activeStep, setActiveStep] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollToStep = (index: number) => {
    setActiveStep(index);
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.clientWidth;
      sliderRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = sliderRef.current.clientWidth;
      const newIndex = Math.round(scrollLeft / cardWidth);
      if (newIndex !== activeStep && newIndex >= 0 && newIndex < steps.length) {
        setActiveStep(newIndex);
      }
    }
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      style={{
        padding: "clamp(4.5rem, 8vw, 8.5rem) 1.5rem",
        backgroundColor: "#F7F4EE",
        color: "#141312",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Lighting Radial Gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(197,160,89,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1350px", margin: "0 auto", position: "relative" }}>
        {/* ── Section Header ── */}
        <div
          style={{
            textAlign: "center",
            marginBottom: "3.5rem",
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
              marginBottom: "0.85rem",
            }}
          >
            <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
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
              THE 7-STEP WORKFLOW
            </span>
            <span style={{ width: "2rem", height: "2px", backgroundColor: "#8B263E" }} />
          </div>

          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.2rem, 5vw, 4.2rem)",
              color: "#141312",
              fontWeight: 500,
              marginBottom: "0.85rem",
              lineHeight: 1.12,
            }}
          >
            From First Conversation to Final Handover
          </h2>

          <p
            style={{
              color: "#4A4744",
              fontSize: "0.98rem",
              maxWidth: "640px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            Our transparent 7-stage project execution framework matches architectural precision, timeline discipline, and zero surprises.
          </p>
        </div>

        {/* ── Interactive Gold Timeline Bar (Desktop >= 1024px) ── */}
        <div
          className="desktop-stepper"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "3.5rem",
            position: "relative",
            padding: "0 2rem",
          }}
        >
          {/* Connecting Hairline Gold Track */}
          <div
            style={{
              position: "absolute",
              top: "22px",
              left: "4rem",
              right: "4rem",
              height: "1.5px",
              backgroundColor: "rgba(197, 160, 89, 0.35)",
              zIndex: 0,
            }}
          />

          {/* Progress Gold Active Fill */}
          <div
            style={{
              position: "absolute",
              top: "22px",
              left: "4rem",
              width: `${(activeStep / (steps.length - 1)) * 88}%`,
              height: "2.5px",
              backgroundColor: "#C5A059",
              boxShadow: "0 0 10px rgba(197, 160, 89, 0.5)",
              transition: "width 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
              zIndex: 1,
            }}
          />

          {steps.map((s, idx) => {
            const isActive = idx === activeStep;
            return (
              <div
                key={s.number}
                onClick={() => setActiveStep(idx)}
                style={{
                  zIndex: 2,
                  backgroundColor: "#F7F4EE",
                  padding: "0 0.5rem",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "0.5rem",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "2.75rem",
                    height: "2.75rem",
                    borderRadius: "50%",
                    backgroundColor: isActive ? "#8B263E" : "#FFFFFF",
                    border: isActive ? "1.5px solid #C5A059" : "1px solid rgba(0, 0, 0, 0.15)",
                    color: isActive ? "#FFFFFF" : "#141312",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.8rem",
                    fontWeight: 600,
                    fontFamily: "var(--font-sans)",
                    boxShadow: isActive ? "0 4px 16px rgba(139, 38, 62, 0.35)" : "0 2px 8px rgba(0,0,0,0.06)",
                    transition: "all 0.3s ease",
                    transform: isActive ? "scale(1.12)" : "scale(1)",
                  }}
                >
                  {s.number}
                </div>
                <span
                  style={{
                    fontSize: "0.68rem",
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? "#141312" : "#6B6764",
                    letterSpacing: "0.08em",
                    textAlign: "center",
                    maxWidth: "95px",
                    textTransform: "uppercase",
                    transition: "color 0.3s ease",
                  }}
                >
                  {s.title.split("&")[0]}
                </span>
              </div>
            );
          })}
        </div>

        {/* ── Mobile Sliding Carousel (Visible < 1024px) ── */}
        <div className="mobile-slider-container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <span
              style={{
                fontSize: "0.78rem",
                fontWeight: 600,
                color: "#8B263E",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Step {activeStep + 1} of {steps.length}
            </span>

            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                onClick={() => scrollToStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                aria-label="Previous step"
                style={{
                  width: "2.2rem",
                  height: "2.2rem",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,0,0,0.15)",
                  backgroundColor: activeStep === 0 ? "rgba(0,0,0,0.03)" : "#FFFFFF",
                  color: activeStep === 0 ? "rgba(0,0,0,0.2)" : "#141312",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: activeStep === 0 ? "default" : "pointer",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                }}
              >
                <ChevronLeft size={18} strokeWidth={1.5} />
              </button>

              <button
                onClick={() => scrollToStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                aria-label="Next step"
                style={{
                  width: "2.2rem",
                  height: "2.2rem",
                  borderRadius: "50%",
                  border: "1px solid rgba(0,0,0,0.15)",
                  backgroundColor:
                    activeStep === steps.length - 1 ? "rgba(0,0,0,0.03)" : "#FFFFFF",
                  color: activeStep === steps.length - 1 ? "rgba(0,0,0,0.2)" : "#141312",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: activeStep === steps.length - 1 ? "default" : "pointer",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                }}
              >
                <ChevronRight size={18} strokeWidth={1.5} />
              </button>
            </div>
          </div>

          <div
            ref={sliderRef}
            onScroll={handleScroll}
            style={{
              display: "flex",
              overflowX: "auto",
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              gap: "1rem",
              paddingBottom: "0.5rem",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  style={{
                    minWidth: "100%",
                    scrollSnapAlign: "start",
                    boxSizing: "border-box",
                  }}
                >
                  <ProcessStepCard step={step} Icon={Icon} delay={0} inView={inView} />
                </div>
              );
            })}
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: "0.4rem", marginTop: "1.25rem" }}>
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollToStep(idx)}
                aria-label={`Go to step ${idx + 1}`}
                style={{
                  width: idx === activeStep ? "1.5rem" : "0.45rem",
                  height: "6px",
                  borderRadius: "9999px",
                  backgroundColor: idx === activeStep ? "#8B263E" : "rgba(0, 0, 0, 0.2)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Desktop Grid (Visible >= 1024px) ── */}
        <div
          className="desktop-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <ProcessStepCard
                key={step.number}
                step={step}
                Icon={Icon}
                delay={index * 80}
                inView={inView}
              />
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 1023px) {
          .desktop-stepper,
          .desktop-grid {
            display: none !important;
          }
          .mobile-slider-container {
            display: block !important;
          }
        }
        @media (min-width: 1024px) {
          .mobile-slider-container {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

function ProcessStepCard({
  step,
  Icon,
  delay,
  inView,
}: {
  step: typeof steps[0];
  Icon: React.ElementType;
  delay: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        backgroundColor: "#FFFFFF",
        borderRadius: "1.25rem",
        padding: "2.25rem 1.75rem",
        border: hovered ? "1px solid #C5A059" : "1px solid rgba(0, 0, 0, 0.08)",
        boxShadow: hovered ? "0 20px 45px -10px rgba(197, 160, 89, 0.22)" : "0 10px 30px -10px rgba(0, 0, 0, 0.05)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "1.1rem",
        transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
        transform: hovered ? "translateY(-6px)" : inView ? "none" : "translateY(30px)",
        opacity: inView ? 1 : 0,
        transitionDelay: `${delay}ms`,
        minHeight: "380px",
      }}
    >
      {/* Ghosted Background Line Icon (6% Opacity) */}
      <div
        style={{
          position: "absolute",
          top: "1rem",
          right: "1rem",
          opacity: hovered ? 0.15 : 0.06,
          color: "#141312",
          pointerEvents: "none",
          transition: "opacity 0.4s ease, transform 0.4s ease",
          transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1)",
        }}
      >
        <Icon size={90} strokeWidth={1} />
      </div>

      {/* Header: Serif Outline Index Number */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", position: "relative", zIndex: 1 }}>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "3.2rem",
            fontWeight: 300,
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: hovered ? "1.5px #8B263E" : "1.5px #C5A059",
            transition: "all 0.3s ease",
          }}
        >
          {step.number}
        </div>
        <div
          style={{
            width: "2.5rem",
            height: "2.5rem",
            borderRadius: "50%",
            backgroundColor: "#F7F4EE",
            border: "1px solid rgba(0, 0, 0, 0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#8B263E",
            transition: "transform 0.3s ease",
            transform: hovered ? "scale(1.08)" : "scale(1)",
          }}
        >
          <Icon size={17} strokeWidth={1.5} color="#8B263E" />
        </div>
      </div>

      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: "1.45rem",
          fontWeight: 500,
          color: "#141312",
          margin: 0,
          lineHeight: 1.25,
          position: "relative",
          zIndex: 1,
        }}
      >
        {step.title}
      </h3>

      <p
        style={{
          fontSize: "0.88rem",
          color: "#4A4744",
          lineHeight: 1.65,
          margin: 0,
          position: "relative",
          zIndex: 1,
        }}
      >
        {step.description}
      </p>

      {/* Refined Sand Feature Pill Tags */}
      <div
        style={{
          borderTop: "1px solid rgba(0, 0, 0, 0.07)",
          paddingTop: "1rem",
          marginTop: "auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "0.4rem",
          position: "relative",
          zIndex: 1,
        }}
      >
        {step.items.map((item, idx) => (
          <span
            key={idx}
            style={{
              fontSize: "0.7rem",
              color: "#3A3734",
              fontWeight: 500,
              backgroundColor: "#FDFBF7",
              border: "1px solid rgba(0, 0, 0, 0.08)",
              borderRadius: "9999px",
              padding: "0.25rem 0.65rem",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            <span
              style={{
                width: "4px",
                height: "4px",
                borderRadius: "50%",
                backgroundColor: "#8B263E",
                flexShrink: 0,
              }}
            />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
