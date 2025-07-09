// src/app/page.tsx
'use client'

import { useEffect, useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const fullText = "Hi, I'm Tejas Deshkulkarni and I am a Data Engineer.";
  const titles = ["Data Engineer", "Cloud Architect", "ETL Specialist", "Analytics Expert"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, index++));
      if (index > fullText.length) clearInterval(timer);
    }, 80);
    
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(timer);
      clearInterval(cursorTimer);
    };
  }, []);

  useEffect(() => {
    const titleTimer = setInterval(() => {
      setCurrentTitleIndex(prev => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(titleTimer);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const skills = [
    { name: "Python", level: 95, color: "from-blue-500 to-cyan-500" },
    { name: "Snowflake", level: 90, color: "from-cyan-500 to-blue-500" },
    { name: "Azure", level: 85, color: "from-blue-600 to-purple-600" },
    { name: "PySpark", level: 88, color: "from-orange-500 to-red-500" },
    { name: "SQL", level: 92, color: "from-green-500 to-emerald-500" },
    { name: "ETL/ELT", level: 90, color: "from-purple-500 to-pink-500" }
  ];

  const experiences = [
    {
      title: "Data Engineer",
      company: "Cognizant",
      period: "Jun 2022 - Jun 2024",
      description: "Built scalable ETL pipelines processing 5M+ records, optimized PySpark workloads achieving 60% performance gains",
      skills: ["Python", "Azure Data Factory", "PySpark", "Snowflake"]
    },
    {
      title: "Database Intern", 
      company: "Cognizant",
      period: "Feb 2022 - May 2022",
      description: "Designed database schemas and optimized query performance for enterprise applications",
      skills: ["SQL", "Database Design", "Performance Tuning"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">


      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${scrollY > 100 ? 1.5 : 1})`
        }}
      />

      {/* Glassmorphism Navigation */}
      <nav className="fixed top-0 w-full z-40 backdrop-blur-md bg-white/10 border-b border-white/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-center items-center">
          <div className="flex gap-8">
            {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white/80 hover:text-cyan-400 transition-all duration-300 hover:scale-110 hover:drop-shadow-lg"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent drop-shadow-2xl">
                {text}
              </span>
              {showCursor && <span className="animate-pulse">|</span>}
            </h1>
            
            <div className="text-xl md:text-2xl font-semibold text-white/90 mb-8 h-10">
              <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
                {titles[currentTitleIndex]}
              </span>
            </div>
          </div>

          <div className="flex gap-6 justify-center flex-wrap">
            {[
              { text: "View Resume", href: "/resume.pdf", icon: "📄", primary: true },
              { text: "GitHub", href: "https://github.com/yourusername", icon: "💻" },
              { text: "LinkedIn", href: "https://linkedin.com/in/tejas-deshkulkarni", icon: "💼" },
              { text: "Contact Me", href: "mailto:tejasdeshus11@gmail.com", icon: "✉️" }
            ].map((button) => (
              <a
                key={button.text}
                href={button.href}
                target="_blank"
                className={`group px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:rotate-1 ${
                  button.primary 
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/50' 
                    : 'backdrop-blur-md bg-white/10 text-white border border-white/30'
                } hover:shadow-2xl hover:shadow-cyan-500/30`}
              >
                <span className="mr-2 group-hover:animate-bounce inline-block">{button.icon}</span>
                {button.text}
              </a>
            ))}
          </div>

          <div className="mt-16 animate-bounce">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
            </div>
            <p className="text-white/70 mt-2">Scroll to explore</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Professional Overview
            </h2>
            <div className="w-24 h-1 bg-white/30 mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="backdrop-blur-md bg-white/5 p-8 rounded-2xl border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-4">Data Engineering Professional</h3>
                <p className="text-lg leading-relaxed text-white/90 mb-4">
                  Experienced data engineer specializing in cloud-native data architecture, ETL pipeline development, 
                  and performance optimization. Proven track record of designing and implementing scalable data solutions 
                  that drive business intelligence and operational efficiency.
                </p>
                <p className="text-lg leading-relaxed text-white/90">
                  Currently pursuing Master of Science in Business Analytics & AI at UT Dallas while leveraging 
                  2+ years of enterprise experience at Cognizant, where I delivered high-impact data engineering 
                  solutions across healthcare, finance, and supply chain domains.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Enterprise Projects", value: "4+", metric: "Delivered" },
                  { label: "Industry Experience", value: "2+", metric: "Years" },
                  { label: "Data Volume Handled", value: "5M+", metric: "Records" },
                  { label: "Performance Optimization", value: "60%", metric: "Improvement" }
                ].map((stat) => (
                  <div key={stat.label} className="backdrop-blur-md bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-white/60 mb-1">{stat.metric}</div>
                    <div className="text-xs text-white/50">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="backdrop-blur-md bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-lg font-semibold text-white mb-3">Core Competencies</h4>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Cloud Data Architecture",
                    "ETL/ELT Pipeline Design", 
                    "Performance Optimization",
                    "Data Warehouse Solutions",
                    "Business Intelligence",
                    "Cross-functional Collaboration"
                  ].map((competency) => (
                    <div key={competency} className="text-sm text-white/80 flex items-center">
                      <div className="w-2 h-2 bg-white/40 rounded-full mr-3"></div>
                      {competency}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent mb-4">
              Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                <div className="relative backdrop-blur-md bg-white/10 p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                      <p className="text-xl text-emerald-400">{exp.company}</p>
                    </div>
                    <div className="text-cyan-400 font-semibold">{exp.period}</div>
                  </div>
                  <p className="text-white/80 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 rounded-full border border-emerald-400/30 text-emerald-300 text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-4">
              Skills & Expertise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="group">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-xl font-semibold text-white">{skill.name}</span>
                  <span className="text-cyan-400 font-bold">{skill.level}%</span>
                </div>
                <div className="h-4 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                  <div 
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out transform origin-left scale-x-0 group-hover:scale-x-100`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-red-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Big Data ETL Pipeline",
                description: "Scalable healthcare data processing with Azure Data Factory and Snowflake",
                tech: ["Azure", "Snowflake", "Python", "PySpark"],
                gradient: "from-blue-500 to-cyan-500",
                icon: "🏥"
              },
              {
                title: "Warehouse Cost Analyzer", 
                description: "Performance optimization and cost analysis for Snowflake warehouses",
                tech: ["Snowflake", "SQL", "Python", "Analytics"],
                gradient: "from-emerald-500 to-teal-500",
                icon: "💰"
              },
              {
                title: "Real-time Analytics Dashboard",
                description: "Live data visualization with streaming ETL pipelines",
                tech: ["Kafka", "Spark", "React", "D3.js"],
                gradient: "from-purple-500 to-pink-500",
                icon: "📊"
              }
            ].map((project, index) => (
              <div key={index} className="group relative">
                <div className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000`}></div>
                <div className="relative backdrop-blur-md bg-white/10 p-8 rounded-3xl border border-white/20 hover:bg-white/20 transition-all duration-500 transform group-hover:scale-105 group-hover:-rotate-1">
                  <div className="text-4xl mb-4 group-hover:animate-bounce">{project.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{project.title}</h3>
                  <p className="text-white/80 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className={`px-3 py-1 bg-gradient-to-r ${project.gradient} bg-opacity-20 rounded-full border border-white/30 text-white text-sm`}>
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a 
                    href="https://github.com/yourusername"
                    className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${project.gradient} rounded-2xl text-white font-semibold hover:scale-105 transition-all duration-300`}
                  >
                    <span>View Project</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-8">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl text-white/80 mb-12">
            Ready to transform your data challenges into scalable solutions? Let's connect!
          </p>
          
          <div className="flex gap-6 justify-center flex-wrap">
            {[
              { text: "Send Email", href: "mailto:tejasdeshus11@gmail.com", icon: "✉️", color: "from-red-500 to-pink-500" },
              { text: "LinkedIn", href: "https://linkedin.com/in/tejas-deshkulkarni", icon: "💼", color: "from-blue-500 to-cyan-500" },
              { text: "GitHub", href: "https://github.com/yourusername", icon: "💻", color: "from-gray-500 to-slate-600" }
            ].map((contact) => (
              <a
                key={contact.text}
                href={contact.href}
                target="_blank"
                className={`group px-8 py-4 bg-gradient-to-r ${contact.color} rounded-2xl text-white font-semibold transition-all duration-300 transform hover:scale-110 hover:rotate-2 shadow-lg hover:shadow-2xl`}
              >
                <span className="mr-2 group-hover:animate-pulse">{contact.icon}</span>
                {contact.text}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 backdrop-blur-md bg-white/5 border-t border-white/20 text-center">
        <p className="text-white/60">
          © {new Date().getFullYear()} Tejas Deshkulkarni. Crafted with ❤️ and lots of ☕
        </p>
      </footer>

      <style jsx>{`
        html {
          scroll-behavior: smooth;
        }
        body {
          cursor: none;
        }
      `}</style>
    </div>
  );
}
