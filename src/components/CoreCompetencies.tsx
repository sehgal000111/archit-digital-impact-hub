
import { useEffect, useRef } from "react";
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
    
    if (title && skills) {
      gsap.fromTo(title,
        { y: 40, opacity: 0 },
        {
          scrollTrigger: {
            trigger: title,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out"
        }
      );
      
      if (skills.childNodes.length > 0) {
        gsap.fromTo(Array.from(skills.childNodes),
          { y: 20, opacity: 0 },
          {
            scrollTrigger: {
              trigger: skills,
              start: "top 75%",
              toggleActions: "play none none none"
            },
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 0.6,
            ease: "power3.out"
          }
        );
      }
    }

    return () => {
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 px-4 relative"
      id="skills"
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-accent/40 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl -z-10">
        <div className="absolute top-0 right-10 w-[28rem] h-[28rem] bg-secondary/20 rounded-full filter blur-[100px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-[32rem] h-[32rem] bg-purple-400/10 rounded-full filter blur-[100px] animate-pulse-slow"></div>
      </div>
      
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-5xl font-bold text-center mb-20 bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent"
        >
          Core Competencies
        </h2>
        
        <div 
          ref={skillsRef}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4"
        >
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden rounded-xl backdrop-blur-md bg-white/10 border border-white/20 p-8 hover:bg-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div className="flex flex-col items-center gap-6">
                <span className="text-5xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">{skill.icon}</span>
                <h3 className="text-xl font-semibold text-center bg-gradient-to-r from-white to-white/80 bg-clip-text">
                  {skill.name}
                </h3>
              </div>
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-secondary/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
