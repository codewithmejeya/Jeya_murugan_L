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

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              A comprehensive toolkit of modern technologies and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Frontend Skills */}
            <div className="glass-morphism p-8 rounded-xl border border-neon-cyan/20 hover-lift">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-neon-cyan" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-neon-cyan mb-2">
                  Frontend
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { skill: "React.js", level: 90 },
                  { skill: "JavaScript", level: 85 },
                  { skill: "TypeScript", level: 80 },
                  { skill: "HTML/CSS", level: 95 },
                  { skill: "Tailwind CSS", level: 90 },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/80">{item.skill}</span>
                      <span className="text-neon-cyan">{item.level}%</span>
                    </div>
                    <div className="w-full bg-dark-lighter rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-cyan to-neon-blue rounded-full transition-all duration-1000 animate-glow"
                        style={{
                          width: `${item.level}%`,
                          animationDelay: `${index * 0.2}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Backend Skills */}
            <div className="glass-morphism p-8 rounded-xl border border-neon-purple/20 hover-lift">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="text-neon-purple" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-neon-purple mb-2">
                  Backend
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { skill: "Python", level: 95 },
                  { skill: "Django", level: 85 },
                  { skill: "FastAPI", level: 80 },
                  { skill: "SQL Server", level: 75 },
                  { skill: "REST APIs", level: 90 },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/80">{item.skill}</span>
                      <span className="text-neon-purple">{item.level}%</span>
                    </div>
                    <div className="w-full bg-dark-lighter rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-purple to-neon-pink rounded-full transition-all duration-1000 animate-glow"
                        style={{
                          width: `${item.level}%`,
                          animationDelay: `${index * 0.2}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="glass-morphism p-8 rounded-xl border border-neon-green/20 hover-lift">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-neon-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="text-neon-green" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-neon-green mb-2">
                  Tools & Tech
                </h3>
              </div>
              <div className="space-y-4">
                {[
                  { skill: "Git/GitHub", level: 90 },
                  { skill: "Docker", level: 70 },
                  { skill: "AWS", level: 65 },
                  { skill: "Linux", level: 80 },
                  { skill: "CI/CD", level: 75 },
                ].map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground/80">{item.skill}</span>
                      <span className="text-neon-green">{item.level}%</span>
                    </div>
                    <div className="w-full bg-dark-lighter rounded-full h-2 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-neon-green to-neon-orange rounded-full transition-all duration-1000 animate-glow"
                        style={{
                          width: `${item.level}%`,
                          animationDelay: `${index * 0.2}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technology Stack Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "Python",
              "React",
              "Django",
              "FastAPI",
              "JavaScript",
              "TypeScript",
              "SQL",
              "Git",
              "AWS",
              "Docker",
              "Linux",
              "CSS3",
            ].map((tech, index) => (
              <div
                key={index}
                className="glass-morphism p-4 rounded-lg border border-neon-cyan/10 text-center hover-lift group cursor-pointer"
              >
                <div className="text-lg font-medium text-foreground/80 group-hover:text-neon-cyan transition-colors">
                  {tech}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              My journey in software development and leadership
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-neon-cyan via-neon-purple to-neon-pink"></div>

            {/* Experience Items */}
            <div className="space-y-16">
              {/* Current Role - U&I NGO */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="glass-morphism p-6 rounded-xl border border-neon-cyan/20 hover-lift">
                    <div className="flex items-center justify-end mb-4">
                      <div className="text-right">
                        <h3 className="text-xl font-bold text-neon-cyan">
                          City Leader
                        </h3>
                        <p className="text-foreground/80">U&I NGO</p>
                      </div>
                      <div className="ml-4 w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center">
                        <Globe className="text-neon-cyan" size={24} />
                      </div>
                    </div>
                    <p className="text-sm text-neon-cyan/80 mb-3">
                      June 2023 – Present
                    </p>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Leading community initiatives and social impact programs.
                      Combining technical expertise with social responsibility
                      to drive meaningful change in the community.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-cyan rounded-full animate-pulse"></div>
                <div className="w-1/2 pl-8"></div>
              </div>

              {/* Fullstack Developer Intern */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-purple rounded-full animate-pulse"></div>
                <div className="w-1/2 pl-8">
                  <div className="glass-morphism p-6 rounded-xl border border-neon-purple/20 hover-lift">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center mr-4">
                        <Code className="text-neon-purple" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-neon-purple">
                          Fullstack Developer Intern
                        </h3>
                        <p className="text-foreground/80">
                          Alphabit Technologies
                        </p>
                      </div>
                    </div>
                    <p className="text-sm text-neon-purple/80 mb-3">
                      Jan 2024 – Mar 2024
                    </p>
                    <ul className="text-foreground/70 text-sm space-y-2 leading-relaxed">
                      <li>
                        • Built AI-driven e-commerce platform using ReactJS
                      </li>
                      <li>• Designed user-friendly REST APIs with FastAPI</li>
                      <li>
                        • Integrated SQL Server for backend analytics and data
                        management
                      </li>
                      <li>
                        • Collaborated with cross-functional teams to deliver
                        high-quality solutions
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* SGC Leadership */}
              <div className="relative flex items-center">
                <div className="w-1/2 pr-8 text-right">
                  <div className="glass-morphism p-6 rounded-xl border border-neon-pink/20 hover-lift">
                    <div className="flex items-center justify-end mb-4">
                      <div className="text-right">
                        <h3 className="text-xl font-bold text-neon-pink">
                          SGC Core Member & Vice-President
                        </h3>
                        <p className="text-foreground/80">
                          Student Government Council
                        </p>
                      </div>
                      <div className="ml-4 w-12 h-12 bg-neon-pink/20 rounded-full flex items-center justify-center">
                        <Zap className="text-neon-pink" size={24} />
                      </div>
                    </div>
                    <p className="text-sm text-neon-pink/80 mb-3">
                      2021 – 2024
                    </p>
                    <p className="text-foreground/70 text-sm leading-relaxed">
                      Served as Vice-President and Core Member, leading student
                      initiatives and fostering collaborative environments.
                      Developed leadership and organizational skills while
                      representing student interests.
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-neon-pink rounded-full animate-pulse"></div>
                <div className="w-1/2 pl-8"></div>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="mt-20 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neon-cyan">3+</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground/80 mb-2">
                Years Experience
              </h4>
              <p className="text-sm text-foreground/60">
                In software development and leadership roles
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neon-purple">10+</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground/80 mb-2">
                Projects Completed
              </h4>
              <p className="text-sm text-foreground/60">
                Full-stack applications and web solutions
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neon-pink">∞</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground/80 mb-2">
                Learning Journey
              </h4>
              <p className="text-sm text-foreground/60">
                Continuous growth and skill development
              </p>
            </div>
          </div>
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
