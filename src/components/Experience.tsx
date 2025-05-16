
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: "National IT Coordinator",
    company: "Vishwa Guru Bharat Trust",
    period: "Nov 2024 – Present [Freelance]",
    description: "Oversee IT operations and team coordination for smooth execution. Led digital outreach to boost donation drives.",
  },
  {
    role: "Social Media Management",
    company: "Converge Media",
    period: "Feb 2024 – Present [Full-Time]",
    description: "Experienced in running and optimizing ad campaigns on Facebook Ads Manager and Google Ads.",
  },
  {
    role: "Web Developer Intern",
    company: "Kapahi Properties",
    period: "Apr 2023 - Jun 2023 [Internship] ",
    description: "Developed Landing page, Property listing WebApp & supported initial ad campaigns.",
  },
  {
    role: "Digital Media Specialist & Web Developer",
    company: "DigitalEditz LLP",
    period: "Apr 2023- Feb 2024 [Freelance]",
    description: "Managed ad campaigns across sectors. Built websites aligned with digital marketing goals.",
  },
];

export const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const experiencesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    const experienceItems = experiencesRef.current;
    
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
    
    gsap.from(experienceItems?.children, {
      scrollTrigger: {
        trigger: experienceItems,
        start: "top 75%",
        toggleActions: "play none none none"
      },
      x: -50,
      opacity: 0,
      stagger: 0.3,
      duration: 0.8,
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
      id="experience"
    >
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent to-muted/50"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-10 w-60 h-60 bg-purple-400/10 rounded-full filter blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto">
        <h2 
          ref={titleRef}
          className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent"
        >
          Professional Experience
        </h2>
        
        <div 
          ref={experiencesRef}
          className="space-y-10 relative"
        >
          {/* Timeline line */}
          <div className="absolute top-0 bottom-0 left-16 md:left-1/2 w-0.5 bg-gradient-to-b from-secondary to-purple-400 transform -translate-x-1/2"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={exp.role}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-16 md:left-1/2 transform -translate-x-1/2 top-0 w-10 h-10 rounded-full bg-gradient-to-r from-secondary to-purple-400 flex items-center justify-center shadow-lg z-10">
                <Briefcase className="w-5 h-5 text-white" />
              </div>
              
              <div className={`ml-24 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-16" : "md:pl-16"
              }`}>
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-xl p-6 shadow-xl hover:transform hover:scale-105 transition-all duration-300">
                  <span className="text-muted-foreground block mb-2">{exp.period}</span>
                  <h3 className="text-xl font-bold text-secondary mb-1">{exp.role}</h3>
                  <p className="text-lg font-medium mb-3">{exp.company}</p>
                  <p className="text-muted-foreground">{exp.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
