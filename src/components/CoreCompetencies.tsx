
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "Meta Ads", icon: "📱" },
  { name: "Facebook Ads Manager", icon: "👥" },
  { name: "Meta Business Suite", icon: "📊" },
  { name: "Google Ads", icon: "🔍" },
  { name: "Google Analytics", icon: "📈" },
  { name: "Tag Manager", icon: "🏷️" },
  { name: "Media Planning", icon: "📝" },
  { name: "Ad Creative Development", icon: "🎨" },
  { name: "Web Development", icon: "💻" },
  { name: "Google Sheets", icon: "📊" },
  { name: "MS Excel", icon: "📑" },
  { name: "Reporting & Presenting", icon: "📣" },
];

export const CoreCompetencies = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const skills = skillsRef.current;
    
    gsap.from(title, {
      scrollTrigger: {
        trigger: title,
        start: "top 80%",
        toggleActions: "play none none none"
      },
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out"
    });
    
    gsap.from(skills?.childNodes, {
      scrollTrigger: {
        trigger: skills,
        start: "top 75%",
        toggleActions: "play none none none"
      },
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.6,
      ease: "power3.out"
    });

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-20 px-4 relative"
      id="skills"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl -z-10">
        <div className="absolute top-0 right-10 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-xl">
          <h2 
            ref={titleRef}
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent"
          >
            Core Competencies
          </h2>
          
          <div 
            ref={skillsRef}
            className="flex flex-wrap justify-center gap-4"
          >
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="backdrop-blur-sm bg-white/10 border border-white/20 rounded-xl p-4 transition-all hover:transform hover:scale-105 hover:bg-white/20"
              >
                <Badge
                  variant="secondary"
                  className="text-lg py-2 px-4 flex items-center gap-2 hover:bg-secondary hover:text-white transition-colors"
                >
                  <span>{skill.icon}</span>
                  {skill.name}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
