import React, { useState, useEffect } from 'react';
import { Github, Mail, MapPin, Calendar, ExternalLink, Code, Database, Monitor } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const CyberpunkPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalInfo = {
    name: "Mikkel Konyher",
    title: "Full Stack Software Developer",
    email: "mikkel@example.com", // Placeholder
    location: "Copenhagen, Denmark",
    dateOfBirth: "6th of April, 1989",
    github: "https://github.com/mikkelkonyher"
  };

  const project = {
    name: "Gearninja",
    description: "A developer-focused platform designed to streamline the development of scalable, maintainable music gear sharing and community applications.",
    technologies: ["React", "C#", ".NET Core", "Entity Framework", "JavaScript", "CSS"],
    features: [
      "JWT Authentication & User Management",
      "Real-time Messaging System", 
      "Media Upload & Management",
      "Modular Architecture",
      "CI/CD Deployment Pipeline"
    ],
    githubUrl: "https://github.com/mikkelkonyher/DRY",
    stats: { stars: 1, forks: 1, commits: "690+" }
  };

  const skills = {
    programming: ["JavaScript", "C#", "C++"],
    frameworks: ["React", "EF Core", "Bootstrap", "jQuery", ".NET", "Blazor"],
    backend: [".NET Core", "Entity Framework"],
    database: ["PostgreSQL"],
    tools: ["Git", "VS Code", "Visual Studio 2022", "WebStorm", "Rider", "Azure"],
    systems: ["macOS", "Linux (Debian)", "Windows"]
  };

  const experience = [
    {
      title: "Mix & Mastering Engineer",
      company: "Hesseldahl Sound, Copenhagen",
      period: "2021-present",
      description: "Mix and mastering engineer at own company. Online teaching in Logic Pro X."
    },
    {
      title: "Cultural Worker", 
      company: "Glimt Recovery Center, Trondheim, Norway",
      period: "2019-2021",
      description: "Teacher of music production, guitar, and songwriting."
    },
    {
      title: "Music Teacher",
      company: "Oure Contemporary Music",
      period: "2016-2019", 
      description: "Teaching, technical support, coordination of courses, workshops, events, and concerts."
    }
  ];

  const education = [
    {
      degree: "Full stack software developer",
      school: "Mercantec",
      period: "2023-present (Expected: 2028)"
    },
    {
      degree: "Cand.Musicae",
      school: "Copenhagen Rhythmic Music Conservatory", 
      period: "2014-2016"
    },
    {
      degree: "Bachelor of Music",
      school: "Copenhagen Rhythmic Music Conservatory",
      period: "2011-2014"
    },
    {
      degree: "High school diploma",
      school: "Oure Boarding School",
      period: "2007-2010"
    }
  ];

  const languages = [
    { language: "Danish", level: "Fluent/Native proficiency" },
    { language: "English", level: "Fluent" },
    { language: "German", level: "Elementary proficiency" }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Enhanced Cyberpunk Background Effects */}
      <div className="fixed inset-0 opacity-20 pointer-events-none z-0">
        {/* Animated Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 border border-cyan-400 rotate-45 animate-spin-slow opacity-30"></div>
        <div className="absolute top-40 right-20 w-24 h-24 border-2 border-pink-500 animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-gradient-to-r from-purple-500 to-transparent rotate-12 animate-bounce-slow"></div>
        
        {/* Glitch Lines */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-glitch-line"></div>
        <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-glitch-line-2"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent animate-glitch-line-3"></div>
        
        {/* Circuit Board Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `
            linear-gradient(90deg, #00d4ff 1px, transparent 1px),
            linear-gradient(180deg, #00d4ff 1px, transparent 1px),
            linear-gradient(90deg, #ff0080 1px, transparent 1px),
            linear-gradient(180deg, #ff0080 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 200px 200px, 200px 200px',
          backgroundPosition: '0 0, 0 0, 50px 50px, 50px 50px'
        }}></div>
        
        {/* Mysterious Fog Effect */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-transparent to-cyan-900/20 animate-fog"></div>
      </div>

      {/* Dynamic Particle System - More Intense */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              i % 3 === 0 ? 'bg-cyan-400' : i % 3 === 1 ? 'bg-pink-500' : 'bg-purple-400'
            }`}
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              boxShadow: i % 3 === 0 ? '0 0 10px #00d4ff' : i % 3 === 1 ? '0 0 10px #ff0080' : '0 0 10px #8000ff'
            }}
          ></div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm border-b border-cyan-500/30">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold text-cyan-400 glitch-text">
              {"<MIKKEL />"}
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'about', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-all duration-300 hover:text-cyan-400 ${
                    activeSection === section ? 'text-cyan-400' : 'text-gray-300'
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className={`text-center transform transition-all duration-1000 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="mb-6">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 cyber-glitch">
              <span className="text-white">MIKKEL</span>
              <br />
              <span className="text-cyan-400">KONYHER</span>
            </h1>
            <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-blue-600 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-mono">
              {'> '}<span className="text-cyan-400">Full Stack Developer</span>
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Crafting scalable web applications with modern technologies. 
              From .NET backends to React frontends, I build digital experiences that matter.
            </p>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button 
              onClick={() => scrollToSection('portfolio')}
              className="bg-cyan-500 hover:bg-cyan-400 text-black font-semibold px-8 py-3 rounded-none border-2 border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
            >
              VIEW PROJECTS
            </Button>
            <Button 
              onClick={() => scrollToSection('about')}
              variant="outline"
              className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-8 py-3 rounded-none transition-all duration-300"
            >
              ABOUT ME
            </Button>
          </div>
        </div>

        {/* Enhanced floating particles effect with more mystery */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Mysterious Energy Orbs */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-gradient-to-r from-cyan-400/20 to-purple-600/20 animate-pulse-slow blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-24 h-24 rounded-full bg-gradient-to-r from-pink-500/20 to-blue-600/20 animate-float blur-lg"></div>
          
          {/* Scanning Lines */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan-horizontal"></div>
          <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-pink-500 to-transparent animate-scan-vertical"></div>
          
          {/* Data Stream Effect */}
          <div className="absolute inset-0 opacity-30">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="absolute text-xs font-mono text-cyan-400 animate-data-stream"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              >
                {Math.random().toString(36).substring(2, 8)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
            {'< CURRICULUM_VITAE />'}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Personal Info */}
            <Card className="bg-black/50 border-cyan-500/30 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Personal Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span>Date of Birth: {personalInfo.dateOfBirth}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <span>Email: [Contact for details]</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span>Address: [Contact for details]</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="bg-black/50 border-cyan-500/30 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Technical Skills</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">PROGRAMMING</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.programming.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-cyan-500/50 text-cyan-400">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">FRAMEWORKS</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.frameworks.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-cyan-500/50 text-cyan-400">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">TOOLS & PLATFORMS</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.tools.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-cyan-500/50 text-cyan-400">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Education & Experience */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
            {/* Education */}
            <Card className="bg-black/50 border-cyan-500/30 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, i) => (
                    <div key={i} className="border-l-2 border-cyan-500/30 pl-4">
                      <h4 className="font-semibold text-white">{edu.degree}</h4>
                      <p className="text-cyan-400 text-sm">{edu.school}</p>
                      <p className="text-gray-400 text-sm">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Work Experience */}
            <Card className="bg-black/50 border-cyan-500/30 backdrop-blur">
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Work Experience</h3>
                <div className="space-y-6">
                  {experience.map((exp, i) => (
                    <div key={i} className="border-l-2 border-cyan-500/30 pl-4">
                      <h4 className="font-semibold text-white">{exp.title}</h4>
                      <p className="text-cyan-400 text-sm">{exp.company}</p>
                      <p className="text-gray-400 text-sm mb-2">{exp.period}</p>
                      <p className="text-gray-300 text-sm">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Languages */}
          <Card className="bg-black/50 border-cyan-500/30 backdrop-blur mt-12">
            <CardContent className="p-6">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Languages</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {languages.map((lang, i) => (
                  <div key={i} className="text-center">
                    <h4 className="text-lg font-semibold text-white">{lang.language}</h4>
                    <p className="text-cyan-400 text-sm">{lang.level}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-6 bg-black/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-cyan-400">
            {'< FEATURED_PROJECT />'}
          </h2>

          <Card className="bg-black/50 border-cyan-500/30 backdrop-blur overflow-hidden group hover:border-cyan-400/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Project Image/Visual */}
                <div className="relative">
                  <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg p-8 h-64 flex items-center justify-center">
                    <Code className="w-20 h-20 text-cyan-400" />
                  </div>
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
                      {project.stats.stars}★
                    </Badge>
                    <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
                      {project.stats.forks} forks
                    </Badge>
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{project.name}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-gray-300">
                          <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <Badge key={i} variant="outline" className="border-cyan-500/50 text-cyan-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button asChild className="bg-cyan-500 hover:bg-cyan-400 text-black">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View on GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section - Footer */}
      <footer id="contact" className="py-12 px-6 bg-black border-t border-cyan-500/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-cyan-400 mb-4">
              {'< GET_IN_TOUCH />'}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to collaborate or discuss opportunities? Let's connect and build something amazing together.
            </p>
          </div>

          <div className="flex justify-center items-center gap-8 mb-8">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-cyan-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <div className="flex items-center gap-2 text-gray-400">
              <MapPin className="w-5 h-5" />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div className="text-center text-gray-500 text-sm">
            <p>&copy; 2024 Mikkel Konyher. Built with React & Cyberpunk Aesthetics.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CyberpunkPortfolio;