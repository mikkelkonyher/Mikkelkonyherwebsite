import React, { useState, useEffect } from 'react';
import { Github, Mail, MapPin, Calendar, ExternalLink, Code, Database, Monitor } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import Aurora from './Aurora/Aurora';

const CyberpunkPortfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const personalInfo = {
    name: "Mikkel Konyher",
    title: "Aspiring Full Stack Developer",
    email: "Mikkelkonyher@gmail.com",
    location: "Tåsinge, Funen, Denmark",
    dateOfBirth: "6. April 1989",
    github: "https://github.com/mikkelkonyher"
  };

    const projects = [
        {
            name: "Lassen Music Academy",
            description: "A Danish online music education platform where students browse courses, meet the instructors, and buy individual courses for lifetime access to their video lessons. Built as a working prototype with a production-grade payment and video pipeline.",
            technologies: [
                "React 19",
                "TypeScript",
                "Vite",
                "Tailwind CSS 4",
                "Supabase (Auth, PostgreSQL, Storage, Edge Functions)",
                "Stripe (Checkout & webhooks)",
                "Mux (signed video playback)",
                "Sentry (error monitoring)",
                "Vitest & Testing Library",
                "Bruno (API testing)",
                "GitHub Actions",
                "Vercel (hosting & analytics)",
                "Claude Code via MCP"
            ],
            features: [
                "Course catalogue with instructor profiles and free-preview lessons",
                "One-off course purchases via Stripe Checkout, confirmed through a webhook",
                "Signed Mux playback: paid lessons only stream against a short-lived token",
                "Community forum, news section and podcast feed",
                "Contact form, profile management and self-service account deletion",
                "Rebuildable from Git alone: the full schema lives in version-controlled Supabase migrations",
                "13 Vitest suites plus an end-to-end workflow running in GitHub Actions",
                "AI-assisted development: Supabase and Mux managed through Claude Code via MCP, with reads open and every write gated behind explicit approval"
            ],
            githubUrl: "https://github.com/mikkelkonyher/lassenacademyproto",
            projectUrl: "https://lassenacademyproto.vercel.app",
            stats: { stars: 0, forks: 0, commits: "146+" }
        },
        {
            name: "Vårø Contemporary",
            description: "The website for Vårø Contemporary, an artist-run exhibition space, project room and artist residency on Tåsinge in southern Denmark, focused on sound and moving images. A static, fully bilingual site where all text and images live in the repository, so publishing a change means committing it and letting Vercel rebuild.",
            technologies: [
                "Next.js 16 (App Router)",
                "React 19",
                "TypeScript",
                "Tailwind CSS",
                "EmailJS (contact form)",
                "MailerLite (newsletter)",
                "Vercel"
            ],
            features: [
                "Fully bilingual in Danish and English, with every translation enforced at build time",
                "Content as code: exhibitions, residencies and photographs are typed entries in the repository",
                "Contact form that degrades gracefully to a plain email address if delivery fails",
                "Newsletter signup handled by a server route that holds the credentials",
                "Static generation, deployed continuously from Git"
            ],
            privateRepo: true,
            projectUrl: "https://varocontemporary.com",
            stats: { stars: 0, forks: 0, commits: "41+" }
        },

        {
            name: "Catasstrophies DSP",
            description: "A hobby project that grew out of my own mixing work: a compressor I wanted in my own toolkit. Birma is an optical dynamics processor written in C++ with JUCE, built around a T4-cell envelope follower with multi-stage release and program-dependent ratio, and released free for macOS in AU and VST3 formats. The code was written agent-assisted, while the analysis, listening tests and voicing came from my own ears as a mix engineer. The site around it is a React single-page app styled as a CRT terminal.",
            technologies: [
                "C++",
                "JUCE",
                "Audio Unit (AU)",
                "VST3",
                "React",
                "Vite",
                "Tailwind CSS",
                "React Router",
                "Vercel"
            ],
            features: [
                "Birma: an optical dynamics processor built around a T4-cell envelope follower",
                "Multi-stage release with a program-dependent ratio",
                "Ships for macOS as both Audio Unit and VST3",
                "Signal-path controls named after the cat the plugin is modelled on",
                "Single-page site covering the label, the plugin and the download",
                "Installer with step-by-step first-run guidance for macOS"
            ],
            projectUrl: "https://catasstrophies-dsp.com",
            stats: null
        },

        {
            name: "GearNinja.dk",
            description: "A Danish non-profit marketplace and community built by musicians, for musicians. Buy, sell and rent music gear and rehearsal spaces on a platform built on transparency and trust.",
            technologies: [
                "React 19",
                "TypeScript",
                "Vite",
                "Tailwind CSS",
                "Supabase (Auth, Database, Storage)",
                "PostgreSQL",
                "Deno Edge Functions",
                "Framer Motion",
                "React Router",
                "Vercel (hosting & analytics)",
                "Claude Code via MCP"
            ],
            features: [
                "Buy and sell instruments and studio equipment",
                "Rehearsal space rentals",
                "Community forum and chat",
                "User reviews and ratings",
                "Notifications and favorites",
                "AI-assisted development: Supabase schema and SQL managed through Claude Code via the Supabase MCP server, with read access open and every write gated behind explicit approval"
            ],
            githubUrl: "https://github.com/mikkelkonyher/gearninja",
            projectUrl: "https://gearninja.dk",
            stats: { stars: 1, forks: 0, commits: "178+" }
        },

        {
            name: "IoT-Project-Guldgruppen",
            description: "A full-stack IoT system developed as part of my programming studies at Mercantec, built by a Scrum team to monitor indoor climate and security conditions using Arduino sensors and a modern web platform.",
            technologies: [
                "C++ (Arduino)",
                "C# / .NET Core",
                "Entity Framework Core",
                "PostgreSQL",
                "React",
                "JavaScript",
                "CSS"
            ],
            features: [
                "Sensor integration: Arduino-based firmware captures environmental data and transmits it to the backend.",
                "Backend API: C# /.NET Core service handling data ingestion, validation, and storage.",
                "Database layer: Entity Framework Core ORM backed by a PostgreSQL database for reliable persistence.",
                "Web frontend: React-based interface for real-time data visualization and system management.",
                "Modular architecture: Clear separation between hardware, backend, and frontend for scalability and maintainability.",
                "End-to-end IoT pipeline: From sensor readings to interactive dashboards.",
                "Scrum workflow: daily standups, sprint planning and a shared GitHub Projects board."
            ],
            githubUrl: "https://github.com/Mercantec-GHC/iot-project-guldgruppen",
            projectUrl: "https://github.com/Mercantec-GHC/iot-project-guldgruppen",
            stats: { stars: 0, forks: 0, commits: "0+" }
        },

        {
            name: "Minapaasche.com",
            description: "A clean, minimalistic artist portfolio for Mina Paasche, built with modern React tooling and deployed on Mercantec’s Linux servers, showcasing both frontend design and deployment capabilities.",
            technologies: [
                "React 18",
                "Tailwind CSS",
                "shadcn/ui",
                "Lucide React",
                "React Router DOM",
                "EmailJS (contact form integration)",
                "Custom deployment: Hosted and maintained on institutional Linux servers using standard web deployment pipelines.",
                "Craco (build config)"
            ],
            features: [
                "Minimalist responsive UI: Designed with Tailwind CSS",
                "Contact form integration (EmailJS)",
                "Responsive design",
                "Originally scaffolded using emergent.sh"
            ],
            githubUrl: "https://github.com/mikkelkonyher/minapaasche",
            projectUrl: "https://minapaasche.com",
            stats: { stars: 0, forks: 0, commits: "0+" }
        },

    ];

  const skills = {
    programming: ["JavaScript", "TypeScript", "C#", "C++"],
    frameworks: ["React", "Next.js", "Tailwind CSS", "Bootstrap", "jQuery", "Blazor"],
    backend: [".NET Core", "Entity Framework", "Supabase (BaaS)", "Deno (Edge Functions)"],
    database: ["PostgreSQL"],
    tools: ["Git", "GitHub", "GitLab", "Docker", "Vite", "VS Code", "WebStorm", "Rider", "Azure", "Dokploy", "Bruno", "Claude Code"],
    collaboration: ["Scrum", "GitHub Projects", "Asana", "Slack"],
    systems: ["macOS", "Linux"]
  };

  const experience = [
    {
      title: "Student Assistant",
      company: "Digidi",
      period: "2026-present",
      description: "Frontend development in React. Day-to-day coordination in Asana and Slack, with weekly standups."
    },
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
    <div className="relative z-0 min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Aurora Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <Aurora
          colorStops={["#5227FF", "#7C3AED", "#5227FF"]}
          amplitude={1}
          blend={0.5}
        />
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
              {'> '}<span className="text-cyan-400">Aspiring Full Stack Developer</span>
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Currently studying at Mercantec to become a Full Stack Developer. 
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
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="featured-heading text-4xl font-bold text-center mb-16 text-cyan-400">
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
                    <span className="text-white">{personalInfo.dateOfBirth}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-cyan-400" />
                    <a 
                      href={`mailto:${personalInfo.email}`}
                      className="text-white hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-cyan-400" />
                    <span className="text-white">{personalInfo.location}</span>
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
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">BACKEND</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-cyan-500/50 text-cyan-400">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">DATABASE</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.database.map((skill, i) => (
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
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">COLLABORATION</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.collaboration.map((skill, i) => (
                        <Badge key={i} variant="outline" className="border-cyan-500/50 text-cyan-400">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">SYSTEMS</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.systems.map((skill, i) => (
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
                <h2 className="featured-heading text-4xl font-bold text-center mb-16 text-cyan-400 sm:text-2xl">
                    {'< FEATURED_PROJECTS />'}
                </h2>
                <div className="space-y-12">
                    {projects.map((project, idx) => (
                        <Card
                            key={idx}
                            className="bg-black/50 border-cyan-500/30 backdrop-blur overflow-hidden group hover:border-cyan-400/50 transition-all duration-300"
                        >
                            <CardContent className="p-8">
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                    {/* Project Image/Visual */}
                                    <div className="relative">
                                        <div className="bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg p-8 h-64 flex items-center justify-center">
                                            <Code className="w-20 h-20 text-cyan-400" />
                                        </div>
                                        {project.stats && (
                                            <div className="absolute top-4 right-4 flex gap-2">
                                                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
                                                    {project.stats.stars}★
                                                </Badge>
                                                <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/50">
                                                    {project.stats.forks} forks
                                                </Badge>
                                            </div>
                                        )}
                                    </div>
                                    {/* Project Details */}
                                    <div>
                                        <h3 className="text-xl sm:text-3xl font-bold text-white mb-4 break-words">
                                            <a
                                                href={project.projectUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-cyan-400 underline transition-colors"
                                            >
                                                {project.name}
                                            </a>
                                        </h3>
                                        <p className="text-gray-300 mb-6 leading-relaxed">
                                            {project.description}
                                        </p>
                                        <div className="mb-6">
                                            <h4 className="text-lg font-semibold text-cyan-400 mb-3">Key Features:</h4>
                                            <ul className="space-y-2">
                                                {project.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-gray-300">
                                                        <div className="w-1 h-1 mt-2.5 shrink-0 bg-cyan-400 rounded-full"></div>
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
                                            {project.privateRepo ? (
                                                <span className="inline-flex items-center rounded-md border border-cyan-500/50 px-4 py-2 text-sm font-medium text-cyan-400/70">
                                                    <Github className="w-4 h-4 mr-2" />
                                                    Private repository
                                                </span>
                                            ) : project.githubUrl ? (
                                                <Button asChild className="bg-cyan-500 hover:bg-cyan-400 text-black">
                                                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                                        <Github className="w-4 h-4 mr-2" />
                                                        View on GitHub
                                                    </a>
                                                </Button>
                                            ) : (
                                                <Button asChild className="bg-cyan-500 hover:bg-cyan-400 text-black">
                                                    <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                                                        <ExternalLink className="w-4 h-4 mr-2" />
                                                        Visit site
                                                    </a>
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>

      {/* Contact Section - Footer */}
      <footer id="contact" className="py-12 px-6 bg-black border-t border-cyan-500/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="featured-heading text-3xl font-bold text-cyan-400 mb-4 sm:text-xl">
              {'< GET_IN_TOUCH />'}
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Open to exciting opportunities and eager to collaborate.
              As a current student, I’m always curious and ready to take on challenges that help me grow, whether it’s freelance work, internships, or creative collaborations. Let’s connect and see where it leads.
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
            <p>
              &copy; {new Date().getFullYear()} Mikkel Konyher. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CyberpunkPortfolio;