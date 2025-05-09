
import { useEffect, useRef } from "react";
import { Mail, Linkedin, ArrowRight, Heart } from "lucide-react";
import gsap from "gsap";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    gsap.from(footerRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
      },
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);
  
  return (
    <footer 
      ref={footerRef}
      className="py-12 px-4 relative"
    >
      {/* Background blur */}
      <div className="absolute inset-0 -z-10 backdrop-blur-md bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="max-w-6xl mx-auto">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-8 shadow-xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                Looking for a digital marketing specialist that can drive real results? 
                Let's chat about how I can help your business grow.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="group">
                  <a href="mailto:architsehgal19@gmail.com" className="flex items-center gap-2">
                    <Mail size={20} />
                    Email Me
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
            
            <div className="flex flex-col justify-between">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3">Navigation</h4>
                  <ul className="space-y-2">
                    {["About", "Skills", "Projects", "Experience"].map((item) => (
                      <li key={item}>
                        <a 
                          href={`#${item.toLowerCase()}`}
                          className="text-muted-foreground hover:text-secondary transition-colors"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold mb-3">Contact</h4>
                  <ul className="space-y-2">
                    <li className="text-muted-foreground">New Delhi, India</li>
                    <li>
                      <a 
                        href="tel:+919149958270"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        +91 91499 58270
                      </a>
                    </li>
                    <li>
                      <a 
                        href="mailto:architsehgal19@gmail.com"
                        className="text-muted-foreground hover:text-secondary transition-colors"
                      >
                        architsehgal19@gmail.com
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
            <a href="https://medium.com/@architsehgal19" target="_blank">Read My Blogs on Medium</a> 
            </p>
            
            <p className="flex items-center gap-1 text-sm text-muted-foreground">
              Made with <Heart size={14} className="text-red-500 animate-pulse" /> by Archit Sehgal
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
