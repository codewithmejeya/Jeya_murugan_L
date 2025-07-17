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
  Menu,
  X,
} from "lucide-react";

// Animated Role Component
const AnimatedRole = ({
  text,
  color,
  delay,
}: {
  text: string;
  color: string;
  delay: number;
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`text-2xl md:text-3xl lg:text-4xl font-bold transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
      } ${color} text-glow`}
    >
      {text}
    </div>
  );
};

export default function Index() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    setIsMobileMenuOpen(false); // Close mobile menu when navigating
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

            {/* Desktop Navigation */}
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
                onClick={() => scrollToSection("leadership")}
                className="text-foreground/80 hover:text-neon-cyan transition-colors"
              >
                Leadership
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

            {/* Desktop Social Links & Resume */}
            <div className="hidden md:flex items-center space-x-4">
              <a
                href="https://cdn.builder.io/o/assets%2F67acf1404ad7489e8bc3d8c5720ac6e8%2Fb6bf0482c89940cab0e3989db002afd9?alt=media&token=bab73aa1-bb38-4417-b4ec-46fa7758009f&apiKey=67acf1404ad7489e8bc3d8c5720ac6e8"
                download="Jeya_Murugan_L_Resume.pdf"
                className="glass-morphism px-4 py-2 rounded-lg border border-neon-purple/30 text-neon-purple hover:bg-neon-purple hover:text-dark-darker transition-all duration-300 text-sm font-medium"
              >
                Download Resume
              </a>
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

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground/80 hover:text-neon-cyan transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-dark-default/95 backdrop-blur-lg border-b border-neon-cyan/20">
              <div className="px-4 py-6 space-y-4">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="block w-full text-left text-foreground/80 hover:text-neon-cyan transition-colors py-2"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left text-foreground/80 hover:text-neon-cyan transition-colors py-2"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block w-full text-left text-foreground/80 hover:text-neon-cyan transition-colors py-2"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="block w-full text-left text-foreground/80 hover:text-neon-cyan transition-colors py-2"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("leadership")}
                  className="block w-full text-left text-foreground/80 hover:text-neon-cyan transition-colors py-2"
                >
                  Leadership
                </button>
                <button
                  onClick={() => scrollToSection("projects")}
                  className="block w-full text-left text-foreground/80 hover:text-neon-cyan transition-colors py-2"
                >
                  Projects
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left text-foreground/80 hover:text-neon-cyan transition-colors py-2"
                >
                  Contact
                </button>

                {/* Mobile Resume Download */}
                <a
                  href="https://cdn.builder.io/o/assets%2F67acf1404ad7489e8bc3d8c5720ac6e8%2Fb6bf0482c89940cab0e3989db002afd9?alt=media&token=bab73aa1-bb38-4417-b4ec-46fa7758009f&apiKey=67acf1404ad7489e8bc3d8c5720ac6e8"
                  download="Jeya_Murugan_L_Resume.pdf"
                  className="block w-full text-left text-neon-purple hover:text-neon-cyan transition-colors py-2 font-medium"
                >
                  Download Resume
                </a>

                {/* Mobile Social Links */}
                <div className="flex space-x-6 pt-4 border-t border-neon-cyan/20">
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
                  <a
                    href="mailto:lsjeyamurugan@gmail.com"
                    className="text-foreground/80 hover:text-neon-cyan transition-colors"
                  >
                    <Mail size={20} />
                  </a>
                </div>
              </div>
            </div>
          )}
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
          <div className="max-w-4xl mx-auto">
            {/* Name */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="block text-glow text-neon-cyan">JEYA</span>
              <span className="block gradient-text">MURUGAN L</span>
            </h1>

            {/* Animated Roles */}
            <div className="mb-8 space-y-2">
              <AnimatedRole
                text="Full Stack Developer"
                color="text-neon-cyan"
                delay={0}
              />
              <AnimatedRole
                text="Software Engineer"
                color="text-neon-purple"
                delay={500}
              />
              <AnimatedRole
                text="Python Developer"
                color="text-neon-pink"
                delay={1000}
              />
              <AnimatedRole
                text="Frontend Developer"
                color="text-neon-green"
                delay={1500}
              />
              <AnimatedRole
                text="Automation Engineer"
                color="text-neon-orange"
                delay={2000}
              />
            </div>

            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed max-w-3xl mx-auto">
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
              <a
                href="https://cdn.builder.io/o/assets%2F67acf1404ad7489e8bc3d8c5720ac6e8%2Fb6bf0482c89940cab0e3989db002afd9?alt=media&token=bab73aa1-bb38-4417-b4ec-46fa7758009f&apiKey=67acf1404ad7489e8bc3d8c5720ac6e8"
                download="Jeya_Murugan_L_Resume.pdf"
                className="glass-morphism px-8 py-3 rounded-lg border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-darker transition-all duration-300 hover-lift font-medium"
              >
                Download Resume
              </a>
            </div>

            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-neon-cyan hover:text-neon-purple transition-colors"
            >
              <ChevronDown size={32} />
            </button>
          </div>
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

          <div className="max-w-4xl mx-auto text-center">
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
              <div className="flex flex-wrap gap-4 mt-8 justify-center">
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

          {/* Single Container for All Technologies */}
          <div className="glass-morphism p-8 rounded-xl border border-neon-cyan/20">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
              {[
                { name: "Python", icon: "🐍", color: "text-neon-cyan" },
                { name: "React", icon: "⚛️", color: "text-neon-blue" },
                { name: "Django", icon: "🎸", color: "text-neon-green" },
                { name: "JavaScript", icon: "📜", color: "text-neon-orange" },
                { name: "HTML", icon: "🌐", color: "text-neon-pink" },
                { name: "CSS", icon: "🎨", color: "text-neon-purple" },
                { name: "MySQL", icon: "🗄️", color: "text-neon-cyan" },
                { name: "Git", icon: "📦", color: "text-neon-orange" },
                { name: "GitHub", icon: "🐱", color: "text-neon-blue" },
                { name: "VS Code", icon: "💻", color: "text-neon-green" },
                { name: "FastAPI", icon: "⚡", color: "text-neon-purple" },
                { name: "SQL Server", icon: "🗃️", color: "text-neon-pink" },
                { name: "AWS", icon: "��️", color: "text-neon-cyan" },
                { name: "Docker", icon: "🐳", color: "text-neon-blue" },
                { name: "Linux", icon: "🐧", color: "text-neon-green" },
                { name: "Postman", icon: "📮", color: "text-neon-orange" },
                { name: "OpenCV", icon: "👁️", color: "text-neon-purple" },
                { name: "MediaPipe", icon: "🎥", color: "text-neon-pink" },
                { name: "Bootstrap", icon: "🥾", color: "text-neon-cyan" },
                { name: "Tailwind", icon: "💨", color: "text-neon-blue" },
              ].map((tech, index) => (
                <div
                  key={index}
                  className="group relative"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="glass-morphism p-4 rounded-xl border border-neon-cyan/10 text-center hover-lift group cursor-pointer transition-all duration-300 hover:border-neon-cyan/50 animate-fade-in">
                    {/* Technology Icon */}
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                      {tech.icon}
                    </div>

                    {/* Technology Name */}
                    <div
                      className={`text-sm font-medium transition-colors duration-300 ${tech.color} group-hover:text-glow`}
                    >
                      {tech.name}
                    </div>

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/5 to-neon-purple/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Floating Animation */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div
                      className={`w-2 h-2 ${tech.color.replace("text-", "bg-")} rounded-full absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 animate-pulse`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Additional Skills Text */}
            <div className="mt-8 text-center">
              <p className="text-foreground/60 text-sm">
                <span className="text-neon-cyan">Languages:</span> HTML, CSS,
                JavaScript, Python, SQL •
                <span className="text-neon-purple"> Frameworks:</span> React.js,
                Django, FastAPI •<span className="text-neon-pink"> Tools:</span>{" "}
                Git, GitHub, VS Code, Postman, AWS
              </p>
            </div>
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

          <div className="flex justify-center">
            {/* Single Experience Item - Fullstack Developer Intern */}
            <div className="max-w-2xl">
              <div className="glass-morphism p-8 rounded-xl border border-neon-purple/20 hover-lift">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mr-6">
                    <Code className="text-neon-purple" size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-neon-purple">
                      Fullstack Developer Intern
                    </h3>
                    <p className="text-foreground/80 text-lg">
                      Alphabit Technologies
                    </p>
                    <p className="text-neon-purple/80 text-sm">
                      Jan 2024 – Mar 2024 | Chennai, Tamil Nadu
                    </p>
                  </div>
                </div>
                <ul className="text-foreground/70 space-y-3 leading-relaxed">
                  <li className="flex items-start">
                    <span className="text-neon-purple mr-3 mt-1">•</span>
                    Designed and developed responsive web applications using
                    ReactJS and Tailwind CSS, ensuring a seamless user
                    experience across various devices and browsers
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-purple mr-3 mt-1">•</span>
                    Collaborated closely with designers and back-end developers
                    to implement interactive UI components based on mockups and
                    wireframes
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-purple mr-3 mt-1">•</span>
                    Debugged and optimized front-end code, resolving issues to
                    enhance application performance, usability, and overall user
                    experience
                  </li>
                  <li className="flex items-start">
                    <span className="text-neon-purple mr-3 mt-1">•</span>
                    Built AI-driven e-commerce platform features and designed
                    RESTful APIs with FastAPI
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Social Works Section */}
      <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Leadership & Social Works
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Driving positive change through leadership and community
              engagement
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* U&I NGO */}
            <div className="glass-morphism p-8 rounded-xl border border-neon-cyan/20 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mr-6">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F67acf1404ad7489e8bc3d8c5720ac6e8%2F8578c135fbb048a6bdd996263cafc135?format=webp&width=800"
                    alt="U&I NGO Logo"
                    className="w-12 h-12 object-contain rounded-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (
                        e.target as HTMLImageElement
                      ).nextElementSibling!.style.display = "block";
                    }}
                  />
                  <Globe className="text-neon-cyan hidden" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neon-cyan mb-2">
                    City Leader & English Teacher
                  </h3>
                  <p className="text-foreground/80 text-lg">U&I NGO</p>
                  <p className="text-neon-cyan/80 text-sm">
                    June 2023 – Present
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-foreground/70 leading-relaxed">
                <p className="flex items-start">
                  <span className="text-neon-cyan mr-3 mt-1">•</span>
                  Leading community initiatives and educational programs as City
                  Leader, coordinating with local teams to maximize impact
                </p>
                <p className="flex items-start">
                  <span className="text-neon-cyan mr-3 mt-1">•</span>
                  Teaching English to underprivileged children, focusing on
                  improving literacy and communication skills
                </p>
                <p className="flex items-start">
                  <span className="text-neon-cyan mr-3 mt-1">•</span>
                  Organizing volunteer drives and community outreach programs to
                  address local social issues
                </p>
                <p className="flex items-start">
                  <span className="text-neon-cyan mr-3 mt-1">•</span>
                  Combining technical expertise with social responsibility to
                  drive meaningful change in the community
                </p>
              </div>
            </div>

            {/* SGC */}
            <div className="glass-morphism p-8 rounded-xl border border-neon-pink/20 hover-lift">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-neon-pink/20 rounded-full flex items-center justify-center mr-6">
                  <img
                    src="https://cdn.builder.io/o/assets%2F67acf1404ad7489e8bc3d8c5720ac6e8%2Fb6bf0482c89940cab0e3989db002afd9?alt=media&token=bab73aa1-bb38-4417-b4ec-46fa7758009f&apiKey=67acf1404ad7489e8bc3d8c5720ac6e8"
                    alt="SGC Logo"
                    className="w-12 h-12 object-contain rounded-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                      (
                        e.target as HTMLImageElement
                      ).nextElementSibling!.style.display = "block";
                    }}
                  />
                  <Zap className="text-neon-pink hidden" size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neon-pink mb-2">
                    Board Member & Technical Head
                  </h3>
                  <p className="text-foreground/80 text-lg">
                    Student Government Council
                  </p>
                  <p className="text-neon-pink/80 text-sm">2021 – 2024</p>
                </div>
              </div>
              <div className="space-y-3 text-foreground/70 leading-relaxed">
                <p className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1">•</span>
                  Served as Vice-President and Core Board Member, leading
                  student initiatives and fostering collaborative environments
                </p>
                <p className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1">•</span>
                  Headed technical operations and digital initiatives for
                  student body programs and events
                </p>
                <p className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1">•</span>
                  Developed leadership and organizational skills while
                  representing student interests and concerns
                </p>
                <p className="flex items-start">
                  <span className="text-neon-pink mr-3 mt-1">•</span>
                  Coordinated with faculty and administration to implement
                  student-centric policies and improvements
                </p>
              </div>
            </div>
          </div>

          {/* Impact Statistics */}
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neon-cyan">500+</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground/80 mb-2">
                Students Impacted
              </h4>
              <p className="text-sm text-foreground/60">
                Through educational programs and leadership initiatives
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neon-pink">3+</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground/80 mb-2">
                Years of Leadership
              </h4>
              <p className="text-sm text-foreground/60">
                Continuous commitment to community service and development
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-neon-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-neon-purple">∞</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground/80 mb-2">
                Social Impact
              </h4>
              <p className="text-sm text-foreground/60">
                Creating lasting positive change in communities
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Showcasing innovative solutions and technical expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Virtual Mouse for Physically Challenged Persons */}
            <div className="glass-morphism rounded-xl overflow-hidden border border-neon-cyan/20 hover-lift group">
              <div className="relative h-48 bg-gradient-to-br from-neon-cyan/20 to-neon-blue/20 flex items-center justify-center">
                <div className="text-6xl opacity-20">👁️</div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-default/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs bg-neon-cyan/20 text-neon-cyan px-2 py-1 rounded">
                    Accessibility
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neon-cyan mb-2 group-hover:text-glow transition-all">
                  Virtual Mouse for Physically Challenged
                </h3>
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  Innovative accessibility tool that enables computer mouse
                  control through eye movement tracking and hand gesture
                  recognition, designed specifically for individuals with
                  physical disabilities.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-neon-purple/10 text-neon-purple px-2 py-1 rounded">
                    Python
                  </span>
                  <span className="text-xs bg-neon-cyan/10 text-neon-cyan px-2 py-1 rounded">
                    OpenCV
                  </span>
                  <span className="text-xs bg-neon-green/10 text-neon-green px-2 py-1 rounded">
                    MediaPipe
                  </span>
                  <span className="text-xs bg-neon-orange/10 text-neon-orange px-2 py-1 rounded">
                    PyAutoGUI
                  </span>
                </div>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/codewithmejeya/VirtualMouseForPhysicallyChallengedPerson"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-cyan hover:text-neon-purple transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Online Blood Bank Management System */}
            <div className="glass-morphism rounded-xl overflow-hidden border border-neon-purple/20 hover-lift group">
              <div className="relative h-48 bg-gradient-to-br from-neon-purple/20 to-neon-pink/20 flex items-center justify-center">
                <div className="text-6xl opacity-20">🩸</div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-default/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs bg-neon-purple/20 text-neon-purple px-2 py-1 rounded">
                    Healthcare
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neon-purple mb-2 group-hover:text-glow transition-all">
                  Online Blood Bank Management
                </h3>
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  Comprehensive web-based blood bank and donation management
                  system with separate admin and user interfaces for efficient
                  blood donation, request management, and donor-recipient
                  matching.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-neon-cyan/10 text-neon-cyan px-2 py-1 rounded">
                    HTML/CSS
                  </span>
                  <span className="text-xs bg-neon-orange/10 text-neon-orange px-2 py-1 rounded">
                    JavaScript
                  </span>
                  <span className="text-xs bg-neon-purple/10 text-neon-purple px-2 py-1 rounded">
                    PHP
                  </span>
                  <span className="text-xs bg-neon-pink/10 text-neon-pink px-2 py-1 rounded">
                    MySQL
                  </span>
                  <span className="text-xs bg-neon-green/10 text-neon-green px-2 py-1 rounded">
                    Bootstrap
                  </span>
                </div>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/codewithmejeya/OnlineBloodBank"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-purple hover:text-neon-cyan transition-colors"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>

            {/* Automation Tool */}
            <div className="glass-morphism rounded-xl overflow-hidden border border-neon-green/20 hover-lift group">
              <div className="relative h-48 bg-gradient-to-br from-neon-green/20 to-neon-orange/20 flex items-center justify-center">
                <div className="text-6xl opacity-20">🤖</div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-default/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs bg-neon-green/20 text-neon-green px-2 py-1 rounded">
                    Automation
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neon-green mb-2 group-hover:text-glow transition-all">
                  Process Automation Suite
                </h3>
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  Developed automation tools using Python to streamline
                  repetitive tasks and improve workflow efficiency. Features
                  include data processing and report generation.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-neon-purple/10 text-neon-purple px-2 py-1 rounded">
                    Python
                  </span>
                  <span className="text-xs bg-neon-green/10 text-neon-green px-2 py-1 rounded">
                    Automation
                  </span>
                  <span className="text-xs bg-neon-orange/10 text-neon-orange px-2 py-1 rounded">
                    APIs
                  </span>
                </div>
                <div className="flex space-x-3">
                  <button className="text-neon-green hover:text-neon-purple transition-colors">
                    <Github size={16} />
                  </button>
                  <button className="text-neon-green hover:text-neon-purple transition-colors">
                    <Globe size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Web Application */}
            <div className="glass-morphism rounded-xl overflow-hidden border border-neon-orange/20 hover-lift group">
              <div className="relative h-48 bg-gradient-to-br from-neon-orange/20 to-neon-cyan/20 flex items-center justify-center">
                <div className="text-6xl opacity-20">🌐</div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-default/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs bg-neon-orange/20 text-neon-orange px-2 py-1 rounded">
                    Full-Stack
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neon-orange mb-2 group-hover:text-glow transition-all">
                  Social Impact Platform
                </h3>
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  Community platform connecting volunteers with NGOs. Built with
                  Django backend and modern frontend, featuring real-time
                  messaging and event management.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-neon-purple/10 text-neon-purple px-2 py-1 rounded">
                    Django
                  </span>
                  <span className="text-xs bg-neon-cyan/10 text-neon-cyan px-2 py-1 rounded">
                    JavaScript
                  </span>
                  <span className="text-xs bg-neon-green/10 text-neon-green px-2 py-1 rounded">
                    SQL
                  </span>
                </div>
                <div className="flex space-x-3">
                  <button className="text-neon-orange hover:text-neon-purple transition-colors">
                    <Github size={16} />
                  </button>
                  <button className="text-neon-orange hover:text-neon-purple transition-colors">
                    <Globe size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Data Analytics Dashboard */}
            <div className="glass-morphism rounded-xl overflow-hidden border border-neon-blue/20 hover-lift group">
              <div className="relative h-48 bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center">
                <div className="text-6xl opacity-20">📊</div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-default/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded">
                    Analytics
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neon-blue mb-2 group-hover:text-glow transition-all">
                  Analytics Dashboard
                </h3>
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  Interactive data visualization dashboard with real-time
                  analytics. Features dynamic charts, filtering options, and
                  export capabilities for business intelligence.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-neon-cyan/10 text-neon-cyan px-2 py-1 rounded">
                    React
                  </span>
                  <span className="text-xs bg-neon-blue/10 text-neon-blue px-2 py-1 rounded">
                    D3.js
                  </span>
                  <span className="text-xs bg-neon-purple/10 text-neon-purple px-2 py-1 rounded">
                    Python
                  </span>
                </div>
                <div className="flex space-x-3">
                  <button className="text-neon-blue hover:text-neon-purple transition-colors">
                    <Github size={16} />
                  </button>
                  <button className="text-neon-blue hover:text-neon-purple transition-colors">
                    <Globe size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Open Source Contribution */}
            <div className="glass-morphism rounded-xl overflow-hidden border border-neon-pink/20 hover-lift group">
              <div className="relative h-48 bg-gradient-to-br from-neon-pink/20 to-neon-cyan/20 flex items-center justify-center">
                <div className="text-6xl opacity-20">🔧</div>
                <div className="absolute inset-0 bg-gradient-to-t from-dark-default/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs bg-neon-pink/20 text-neon-pink px-2 py-1 rounded">
                    Open Source
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-neon-pink mb-2 group-hover:text-glow transition-all">
                  Development Tools
                </h3>
                <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                  Collection of developer tools and utilities for improved
                  productivity. Includes code generators, API testing tools, and
                  development environment setup scripts.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-neon-purple/10 text-neon-purple px-2 py-1 rounded">
                    Python
                  </span>
                  <span className="text-xs bg-neon-cyan/10 text-neon-cyan px-2 py-1 rounded">
                    CLI
                  </span>
                  <span className="text-xs bg-neon-pink/10 text-neon-pink px-2 py-1 rounded">
                    Tools
                  </span>
                </div>
                <div className="flex space-x-3">
                  <button className="text-neon-pink hover:text-neon-purple transition-colors">
                    <Github size={16} />
                  </button>
                  <button className="text-neon-pink hover:text-neon-purple transition-colors">
                    <Globe size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <p className="text-lg text-foreground/70 mb-6">
              Want to see more projects or collaborate?
            </p>
            <button
              onClick={() => scrollToSection("contact")}
              className="glass-morphism px-8 py-3 rounded-lg border border-neon-cyan text-neon-cyan hover:bg-neon-cyan hover:text-dark-darker transition-all duration-300 hover-lift"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Get In Touch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-neon-cyan to-neon-purple mx-auto mb-8"></div>
            <p className="text-lg text-foreground/70 max-w-3xl mx-auto">
              Ready to bring your ideas to life? Let's collaborate on your next
              project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="glass-morphism p-8 rounded-xl border border-neon-cyan/20">
                <h3 className="text-2xl font-bold text-neon-cyan mb-6">
                  Let's Connect
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-cyan/20 rounded-full flex items-center justify-center">
                      <Mail className="text-neon-cyan" size={20} />
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm">Email</p>
                      <a
                        href="mailto:lsjeyamurugan@gmail.com"
                        className="text-foreground hover:text-neon-cyan transition-colors"
                      >
                        lsjeyamurugan@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-purple/20 rounded-full flex items-center justify-center">
                      <span className="text-neon-purple text-sm">📱</span>
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm">Phone</p>
                      <a
                        href="tel:+916374398086"
                        className="text-foreground hover:text-neon-purple transition-colors"
                      >
                        +91 6374398086
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-pink/20 rounded-full flex items-center justify-center">
                      <Linkedin className="text-neon-pink" size={20} />
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm">LinkedIn</p>
                      <a
                        href="https://linkedin.com/in/jeyamuruganl"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-neon-pink transition-colors"
                      >
                        linkedin.com/in/jeyamuruganl
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-neon-green/20 rounded-full flex items-center justify-center">
                      <Github className="text-neon-green" size={20} />
                    </div>
                    <div>
                      <p className="text-foreground/60 text-sm">GitHub</p>
                      <a
                        href="https://github.com/codewithmejeya"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-neon-green transition-colors"
                      >
                        github.com/codewithmejeya
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-6">
                <a
                  href="https://github.com/codewithmejeya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass-morphism rounded-full flex items-center justify-center border border-neon-green/20 text-neon-green hover:bg-neon-green hover:text-dark-darker transition-all duration-300 hover-lift"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/jeyamuruganl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 glass-morphism rounded-full flex items-center justify-center border border-neon-blue/20 text-neon-blue hover:bg-neon-blue hover:text-dark-darker transition-all duration-300 hover-lift"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:lsjeyamurugan@gmail.com"
                  className="w-14 h-14 glass-morphism rounded-full flex items-center justify-center border border-neon-cyan/20 text-neon-cyan hover:bg-neon-cyan hover:text-dark-darker transition-all duration-300 hover-lift"
                >
                  <Mail size={24} />
                </a>
                <a
                  href="tel:+916374398086"
                  className="w-14 h-14 glass-morphism rounded-full flex items-center justify-center border border-neon-purple/20 text-neon-purple hover:bg-neon-purple hover:text-dark-darker transition-all duration-300 hover-lift"
                >
                  <span className="text-xl">📱</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="glass-morphism p-8 rounded-xl border border-neon-purple/20">
              <h3 className="text-2xl font-bold text-neon-purple mb-6">
                Send Message
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-foreground/80 text-sm mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark-lighter border border-neon-purple/30 rounded-lg px-4 py-3 text-foreground focus:border-neon-purple focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-foreground/80 text-sm mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-dark-lighter border border-neon-purple/30 rounded-lg px-4 py-3 text-foreground focus:border-neon-purple focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-foreground/80 text-sm mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    className="w-full bg-dark-lighter border border-neon-purple/30 rounded-lg px-4 py-3 text-foreground focus:border-neon-purple focus:outline-none transition-colors"
                    placeholder="Project collaboration"
                  />
                </div>
                <div>
                  <label className="block text-foreground/80 text-sm mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-dark-lighter border border-neon-purple/30 rounded-lg px-4 py-3 text-foreground focus:border-neon-purple focus:outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-neon-purple text-dark-darker py-3 rounded-lg hover:bg-neon-cyan transition-all duration-300 hover-lift font-medium"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="glass-morphism p-8 rounded-xl border border-neon-cyan/20">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Ready to Build Something Amazing?
              </h3>
              <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
                Whether you need a full-stack web application, automation
                solution, or want to discuss innovative ideas, I'm here to help
                bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:lsjeyamurugan@gmail.com"
                  className="bg-neon-cyan text-dark-darker px-8 py-3 rounded-lg hover:bg-neon-purple transition-all duration-300 hover-lift font-medium"
                >
                  Start a Project
                </a>
                <a
                  href="https://linkedin.com/in/jeyamuruganl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-morphism px-8 py-3 rounded-lg border border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-dark-darker transition-all duration-300 hover-lift"
                >
                  View LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neon-cyan/20 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold gradient-text mb-2">
                Jeya Murugan L
              </h3>
              <p className="text-foreground/60 text-sm">
                Full Stack Developer & Software Engineer
              </p>
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="https://github.com/codewithmejeya"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-neon-cyan transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/jeyamuruganl"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-neon-blue transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:lsjeyamurugan@gmail.com"
                className="text-foreground/60 hover:text-neon-purple transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-neon-cyan/10 mt-6 pt-6 text-center">
            <p className="text-foreground/50 text-sm">
              © 2024 Jeya Murugan L. Crafted with passion and cutting-edge
              technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
