
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { CoreCompetencies } from "@/components/CoreCompetencies";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  useEffect(() => {
    // Initialize smooth scrolling
    const smoothScroll = (target: string) => {
      const element = document.querySelector(target);
      if (element) {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 80,
          behavior: "smooth",
        });
      }
    };

    // Handle navigation clicks
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) smoothScroll(href);
      });
    });

    return () => {
      // Clean up event listeners
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', () => {});
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <div className="pt-16"> {/* Add padding for fixed navbar */}
        <HeroSection />
        <CoreCompetencies />
        <ProjectShowcase />
        <Experience />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
