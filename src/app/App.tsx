import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ResumeModal } from "./components/ResumeModal";
import { TechStack } from "./components/TechStack";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { FeaturedProjects } from "./components/FeaturedProjects";
import { ContactSection } from "./components/ContactSection";
import { CurrentlyBuilding } from "./components/CurrentlyBuilding";

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  // Set page title and favicon
  useEffect(() => {
    document.title = "Gokhlesh Kumar | Portfolio";

    // Create favicon with "GK" text using canvas
    const createFavicon = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 64;
      canvas.height = 64;
      const ctx = canvas.getContext("2d");

      if (ctx) {
        // Background gradient
        const gradient = ctx.createLinearGradient(0, 0, 64, 64);
        gradient.addColorStop(0, "#14b8a6"); // teal
        gradient.addColorStop(0.5, "#3b82f6"); // blue
        gradient.addColorStop(1, "#a855f7"); // purple

        // Draw background
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 64, 64);

        // Draw text "GK"
        ctx.fillStyle = "#ffffff";
        ctx.font = "bold 32px system-ui, -apple-system, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText("GK", 32, 34);

        // Set favicon
        const link =
          (document.querySelector("link[rel*='icon']") as HTMLLinkElement) ||
          document.createElement("link");
        link.type = "image/x-icon";
        link.rel = "shortcut icon";
        link.href = canvas.toDataURL("image/x-icon");
        document.getElementsByTagName("head")[0].appendChild(link);
      }
    };

    createFavicon();
  }, []);

  const handleOpenResume = () => {
    window.open("https://gokhlesh-kumar.github.io/resume", "_blank");
  };

  const handleOpenResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  const handleContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="min-h-screen transition-colors duration-300 overflow-x-hidden"
      style={{
        background: "var(--bg-primary)",
        color: "var(--text-primary)",
      }}
    >
      {/* Navbar - Appears on scroll */}
      <Navbar onContactClick={handleContact} />

      {/* Resume Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={handleCloseResume} />

      {/* Hero Section */}
      <Hero
        onResumeClick={handleOpenResume}
        onSummaryClick={handleOpenResumeModal}
      />

      {/* Currently Building */}
      <CurrentlyBuilding />

      {/* Tech Stack */}
      <TechStack />

      {/* Experience Timeline */}
      <ExperienceTimeline />

      {/* Featured Projects */}
      <FeaturedProjects />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
