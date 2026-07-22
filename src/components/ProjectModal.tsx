"use client";

import { X, MapPin, Calendar, Tag, Layers, CheckCircle } from "lucide-react";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNext?: () => void;
  onPrev?: () => void;
}

export default function ProjectModal({ project, onClose, onNext, onPrev }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2000,
        backgroundColor: "rgba(20, 19, 18, 0.88)",
        backdropFilter: "blur(20px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1rem",
        overflowY: "auto",
      }}
      onClick={onClose}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "#FAF8F5",
          borderRadius: "1.5rem",
          maxWidth: "1000px",
          width: "100%",
          maxHeight: "90vh",
          overflowY: "auto",
          boxShadow: "0 40px 100px -20px rgba(0,0,0,0.5)",
          color: "#1C1B1A",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "1.5rem",
            right: "1.5rem",
            zIndex: 10,
            width: "3rem",
            height: "3rem",
            borderRadius: "50%",
            backgroundColor: "rgba(20, 19, 18, 0.8)",
            color: "#ffffff",
            border: "none",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 0.3s ease",
          }}
        >
          <X size={20} />
        </button>

        {/* Modal Hero Image */}
        <div style={{ position: "relative", width: "100%", height: "450px" }}>
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(20,19,18,0.85) 0%, transparent 60%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "2.5rem",
              left: "2.5rem",
              right: "2.5rem",
              color: "#ffffff",
            }}
          >
            <span style={{ fontSize: "0.8rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "#8B263E", fontWeight: 600 }}>
              {project.category} PROJECT
            </span>
            <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem, 4vw, 3.2rem)", margin: "0.25rem 0", color: "#ffffff" }}>
              {project.title}
            </h2>
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem", margin: 0 }}>
              {project.subtitle}
            </p>
          </div>
        </div>

        {/* Modal Content Details */}
        <div style={{ padding: "3rem" }}>
          {/* Metadata bar */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1.5rem",
              paddingBottom: "2rem",
              borderBottom: "1px solid rgba(28, 27, 26, 0.1)",
              marginBottom: "2.5rem",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <MapPin size={18} color="#8B263E" />
              <div>
                <span style={{ display: "block", fontSize: "0.7rem", color: "#8E8A83", textTransform: "uppercase", letterSpacing: "0.1em" }}>Location</span>
                <strong style={{ fontSize: "0.95rem" }}>{project.location}</strong>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Calendar size={18} color="#8B263E" />
              <div>
                <span style={{ display: "block", fontSize: "0.7rem", color: "#8E8A83", textTransform: "uppercase", letterSpacing: "0.1em" }}>Completed</span>
                <strong style={{ fontSize: "0.95rem" }}>{project.year}</strong>
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <Tag size={18} color="#8B263E" />
              <div>
                <span style={{ display: "block", fontSize: "0.7rem", color: "#8E8A83", textTransform: "uppercase", letterSpacing: "0.1em" }}>Category</span>
                <strong style={{ fontSize: "0.95rem" }}>{project.category}</strong>
              </div>
            </div>
          </div>

          {/* Overview & Story */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", marginBottom: "3rem" }}>
            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", marginBottom: "1rem" }}>
                Project Overview
              </h3>
              <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
                {project.overview}
              </p>
            </div>

            <div>
              <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", marginBottom: "1rem" }}>
                Design Narrative
              </h3>
              <p style={{ opacity: 0.8, lineHeight: 1.7 }}>
                {project.designStory}
              </p>
            </div>
          </div>

          {/* Material Palette */}
          <div style={{ marginBottom: "3rem", backgroundColor: "rgba(139, 38, 62, 0.04)", padding: "2rem", borderRadius: "1rem", border: "1px solid rgba(139, 38, 62, 0.15)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
              <Layers size={20} color="#8B263E" />
              <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.3rem", margin: 0, color: "#8B263E" }}>
                Material Palette & Craftsmanship Details
              </h4>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {project.materials.map((m, idx) => (
                <span
                  key={idx}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid rgba(28, 27, 26, 0.12)",
                    padding: "0.5rem 1rem",
                    borderRadius: "9999px",
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "#1C1B1A",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                  }}
                >
                  <CheckCircle size={14} color="#8B263E" />
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Image Gallery */}
          <div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", marginBottom: "1.5rem" }}>
              Project Gallery
            </h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1.5rem" }}>
              {project.gallery.map((imgUrl, i) => (
                <div key={i} style={{ position: "relative", height: "260px", borderRadius: "1rem", overflow: "hidden" }}>
                  <Image
                    src={imgUrl}
                    alt={`${project.title} gallery photo ${i + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Footer in Modal */}
          <div style={{ marginTop: "4rem", textAlign: "center", borderTop: "1px solid rgba(28,27,26,0.1)", paddingTop: "2.5rem" }}>
            <h4 style={{ fontFamily: "var(--font-serif)", fontSize: "1.5rem", marginBottom: "1rem" }}>
              Inspired by this project for your space?
            </h4>
            <a href="#contact" onClick={onClose} className="btn-primary">
              Start Your Custom Design Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
