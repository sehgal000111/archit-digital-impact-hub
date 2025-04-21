
import { useEffect, useRef } from "react";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import gsap from "gsap";

export const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(titleRef.current, { 
      y: 50, 
      opacity: 0, 
      duration: 0.8, 
      ease: "power3.out" 
    })
    .from(subtitleRef.current, { 
      y: 30, 
      opacity: 0, 
      duration: 0.8, 
      ease: "power3.out" 
    }, "-=0.4")
    .from(buttonsRef.current, { 
      y: 30, 
      opacity: 0, 
      duration: 0.8, 
      ease: "power3.out" 
    }, "-=0.4")
    .from(imageRef.current, { 
      scale: 0.8, 
      opacity: 0, 
      duration: 1, 
      ease: "power3.out" 
    }, "-=0.6");

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden"
      id="about"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-40 left-20 w-72 h-72 bg-secondary/30 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-purple-400/20 rounded-full filter blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            <span className="block">Digital Marketing</span>
            <span className="bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent">Specialist</span>
          </h1>
          
          <p 
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-8 leading-relaxed"
          >
            Creating impactful digital campaigns with proven results across political, real estate, and local business sectors.
          </p>
          
          <div ref={buttonsRef} className="flex flex-wrap gap-4 mb-12">
            <Button asChild size="lg" className="group">
              <a href="mailto:architsehgal19@gmail.com" className="flex items-center gap-2">
                <Mail size={20} />
                Contact Me
                <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            
            <Button variant="outline" asChild size="lg" className="backdrop-blur-sm bg-white/10 border border-white/20 hover:bg-white/20">
              <a
                href="https://www.linkedin.com/in/archit-sehgal-78598025a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
        
        <div 
          ref={imageRef}
          className="order-1 md:order-2 max-w-md mx-auto"
        >
          <div className="relative">
            <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-secondary/20 to-purple-400/20 rounded-3xl blur-md"></div>
            <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-3xl p-6 shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000" 
                alt="Digital Marketing Specialist"
                className="rounded-2xl w-full h-auto object-cover shadow-lg"
              />
              <div className="mt-6 p-4 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl">
                <h3 className="font-bold text-xl mb-2">Archit Sehgal</h3>
                <p className="text-muted-foreground">Driving results through strategic digital campaigns and data-driven marketing solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
