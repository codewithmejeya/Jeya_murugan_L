import { useEffect, useState, useRef } from "react";
import {
  ChevronDown,
  Mail,
  Github,
  Linkedin,
  Code,
  Database,
  Globe,
  Zap,
  Cpu,
  Terminal,
} from "lucide-react";

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const elements = document.querySelectorAll(".parallax-element");
      const scrollTop = window.pageYOffset;

      elements.forEach((element) => {
        const rate = scrollTop * -0.5;
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-dark-darker text-foreground overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-darker via-dark-default to-dark-lighter"></div>
        <div
          className="absolute w-[500px] h-[500px] rounded-full bg-neon-cyan opacity-10 blur-3xl"
          style={{
            left: mousePosition.x - 250,
            top: mousePosition.y - 250,
            transition: "all 0.1s ease-out",
          }}
        ></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full bg-neon-purple opacity-5 blur-2xl animate-float"></div>
        <div
          className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-neon-pink opacity-5 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-default/80 backdrop-blur-lg border-b border-neon-cyan/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold gradient-text">JM</div>
            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => scrollToSection("hero")}
                className="text-foreground/80 hover:text-neon-cyan transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground/80 hover:text-neon-cyan transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-foreground/80 hover:text-neon-cyan transition-colors"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-foreground/80 hover:text-neon-cyan transition-colors"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-foreground/80 hover:text-neon-cyan transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground/80 hover:text-neon-cyan transition-colors"
              >
                Contact
              </button>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://github.com/codewithmejeya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-neon-cyan transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jeyamuruganl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-neon-cyan transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="parallax-element absolute inset-0 flex items-center justify-center opacity-10">
          <div className="grid grid-cols-8 gap-4 transform rotate-12">
            {Array.from({ length: 64 }).map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 bg-neon-cyan rounded-full animate-pulse-neon"
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>

        <div
          className={`text-center z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4">
              <span className="block text-glow text-neon-cyan">JEYA</span>
              <span className="block gradient-text">MURUGAN L</span>
            </h1>
            <div className="text-xl md:text-2xl text-foreground/80 mb-8">
              <span className="block">Full Stack Developer</span>
              <span className="block text-neon-purple">Software Engineer</span>
              <span className="block text-neon-pink">Python Developer</span>
            </div>
          </div>

          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto mb-8 leading-relaxed">
            Crafting innovative digital experiences with cutting-edge
            technology. Specialized in full-stack development, AI integration,
            and automation solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="glass-morphism px-8 py-3 rounded-lg border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-darker transition-all duration-300 hover-lift"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="bg-neon-cyan text-dark-darker px-8 py-3 rounded-lg hover:bg-neon-purple transition-all duration-300 hover-lift font-medium"
            >
              Get In Touch
            </button>
          </div>

          <button
            onClick={() => scrollToSection("about")}
            className="animate-bounce text-neon-cyan hover:text-neon-purple transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>

        {/* Floating Icons */}
        <div className="absolute inset-0 pointer-events-none">
          <Code
            className="absolute top-1/4 left-1/4 text-neon-cyan opacity-20 animate-float"
            size={24}
          />
          <Database
            className="absolute top-1/3 right-1/3 text-neon-purple opacity-20 animate-float"
            size={20}
            style={{ animationDelay: "1s" }}
          />
          <Globe
            className="absolute bottom-1/3 left-1/5 text-neon-pink opacity-20 animate-float"
            size={28}
            style={{ animationDelay: "2s" }}
          />
          <Zap
            className="absolute bottom-1/4 right-1/4 text-neon-green opacity-20 animate-float"
            size={22}
            style={{ animationDelay: "3s" }}
          />
          <Cpu
            className="absolute top-1/2 left-1/12 text-neon-orange opacity-20 animate-float"
            size={26}
            style={{ animationDelay: "4s" }}
          />
          <Terminal
            className="absolute top-1/5 right-1/5 text-neon-blue opacity-20 animate-float"
            size={24}
            style={{ animationDelay: "5s" }}
          />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-foreground/80 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern
                web technologies. My journey in software engineering has led me
                to specialize in creating scalable, innovative solutions that
                bridge the gap between cutting-edge technology and real-world
                applications.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                With experience in Python, React, Django, and various modern
                frameworks, I bring ideas to life through clean, efficient code
                and thoughtful design. I'm currently serving as City Leader at
                U&I NGO, where I combine my technical skills with social impact.
              </p>
              <div className="flex flex-wrap gap-4 mt-8">
                <div className="glass-morphism px-4 py-2 rounded-lg border border-neon-cyan/30">
                  <span className="text-neon-cyan font-medium">Email:</span>
                  <span className="ml-2">lsjeyamurugan@gmail.com</span>
                </div>
                <div className="glass-morphism px-4 py-2 rounded-lg border border-neon-purple/30">
                  <span className="text-neon-purple font-medium">Phone:</span>
                  <span className="ml-2">+91 6374398086</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="glass-morphism p-8 rounded-xl border border-neon-cyan/20 hover-lift">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-neon-cyan rounded-full animate-pulse"></div>
                    <span className="text-foreground/80">
                      Software Engineer
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 bg-neon-purple rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <span className="text-foreground/80">
                      Full Stack Developer
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 bg-neon-pink rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <span className="text-foreground/80">Python Developer</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-3 h-3 bg-neon-green rounded-full animate-pulse"
                      style={{ animationDelay: "1.5s" }}
                    ></div>
                    <span className="text-foreground/80">
                      Automation Engineer
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder sections for other content */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
          <p className="text-foreground/60">
            Skills section will be implemented next...
          </p>
        </div>
      </section>

      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
          <p className="text-foreground/60">
            Experience timeline will be implemented next...
          </p>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
          <p className="text-foreground/60">
            Projects showcase will be implemented next...
          </p>
        </div>
      </section>

      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
          <p className="text-foreground/60">
            Contact section will be implemented next...
          </p>
        </div>
      </section>
    </div>
  );
}
