import { Project, Skill, ExperienceItem, EducationItem, CertificationItem, LanguageItem, TechContentCard } from '../types';

export const PERSONAL_INFO = {
  name: "RINAS ABOOTHALIB",
  firstName: "RINAS",
  title: "Aspiring AI Engineer",
  subtitle: "AI & Machine Learning Enthusiast",
  primaryTitle: "Aspiring AI Engineer | AI & Machine Learning Enthusiast",
  bioShort: "Aspiring Artificial Intelligence and Machine Learning practitioner with hands-on experience in academic and personal projects, focused on building intelligent, user-friendly and real-world digital solutions.",
  aboutText: "I am a passionate AI engineering practitioner with a deep focus on Artificial Intelligence, Machine Learning, and modern full-stack web engineering. Currently pursuing an HND in Information Technology at SLIATE, I bridge academic concepts with real-world applications through hands-on development.",
  aboutHighlights: [
    "Dedicated to developing intelligent, user-centered full-stack applications",
    "Active Microsoft Student Ambassador engaging with student communities",
    "Passionate about exploring emerging technologies and sharing knowledge",
    "Experienced in full-stack web engineering with React, TypeScript, Python, & Node.js"
  ],
  location: "Sri Lanka, Trincomalee, Kinniya",
  phone: "+94 75 97 95 422",
  email: "rrrinas44@gmail.com",
  status: "Available for Opportunities",
  socials: {
    github: "https://github.com/RinasAboothalib",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    email: "mailto:rrrinas44@gmail.com"
  },
  stats: [
    { label: "Projects", value: "11+" },
    { label: "Focus", value: "AI / ML" },
    { label: "Microsoft Student Ambassador", value: "2024 – Present" },
    { label: "Languages", value: "3" }
  ]
};

export const SKILLS_DATA: Skill[] = [
  // Programming Languages
  { 
    name: "Java", 
    category: "Programming Languages", 
    percentage: 60,
    icon: "Java", 
    description: "Core OOP, multi-threading, data structures, and backend application logic",
    color: "#f89820",
    level: "Proficient"
  },
  { 
    name: "Python", 
    category: "Programming Languages", 
    percentage: 50,
    icon: "Python", 
    description: "AI/ML data analysis, machine learning scripting, and automation pipelines",
    color: "#3776ab",
    level: "Intermediate"
  },
  { 
    name: "SQL", 
    category: "Programming Languages", 
    percentage: 60,
    icon: "SQL", 
    description: "Relational database queries, schema design, JOINs, and data modeling",
    color: "#00758f",
    level: "Proficient"
  },

  // Web Technologies
  { 
    name: "HTML / HTML5", 
    category: "Web Technologies", 
    percentage: 90,
    icon: "HTML5", 
    description: "Semantic web page structure, modern accessibility, and web standards",
    color: "#e34f26",
    level: "Advanced"
  },
  { 
    name: "CSS", 
    category: "Web Technologies", 
    percentage: 85,
    icon: "CSS", 
    description: "Modern responsive layouts, Flexbox, CSS Grid, and custom UI styling",
    color: "#1572b6",
    level: "Advanced"
  },

  // Frameworks & Libraries
  { 
    name: "React", 
    category: "Frameworks & Libraries", 
    percentage: 45,
    icon: "React", 
    description: "Component architecture, hooks, state management, and modern interactive UIs",
    color: "#61dafb",
    level: "Intermediate"
  },
  { 
    name: "Laravel", 
    category: "Frameworks & Libraries", 
    percentage: 40,
    icon: "Laravel", 
    description: "PHP MVC architecture, Eloquent ORM, RESTful APIs, and web portals",
    color: "#ff2d20",
    level: "Developing"
  },
  { 
    name: "Django", 
    category: "Frameworks & Libraries", 
    percentage: 40,
    icon: "Django", 
    description: "Python web framework for scalable full-stack applications and backend services",
    color: "#092e20",
    level: "Developing"
  },

  // Tools & Design
  { 
    name: "Canva", 
    category: "Tools & Design", 
    percentage: 98,
    icon: "Canva", 
    description: "Visual graphics, UI/UX mockups, presentation design, and brand assets",
    color: "#00c4cc",
    level: "Expert"
  },
  { 
    name: "GitHub", 
    category: "Tools & Design", 
    percentage: 80,
    icon: "GitHub", 
    description: "Git version control, repositories, collaboration workflows, and CI/CD",
    color: "#f0f6fc",
    level: "Advanced"
  },
  { 
    name: "VS Code", 
    category: "Tools & Design", 
    percentage: 85,
    icon: "VSCode", 
    description: "Primary IDE for full-stack, Python development, and custom extensions",
    color: "#007acc",
    level: "Advanced"
  },
  { 
    name: "XAMPP", 
    category: "Tools & Design", 
    percentage: 70,
    icon: "XAMPP", 
    description: "Local development server stack for Apache, MySQL database, and PHP",
    color: "#fb7a24",
    level: "Proficient"
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Web Developer Intern",
    organization: "Visual Studios Plus (Pvt) Ltd.",
    period: "Oct 2026 - Present",
    description: "Working in a professional web development environment to design, build, and improve responsive digital experiences while collaborating with the team on modern frontend solutions.",
    highlights: [
      "Developing and refining web interfaces with responsive design principles",
      "Collaborating with the team on UI implementation and feature development",
      "Supporting modern web development workflows and project delivery"
    ],
    icon: "Award"
  },
  {
    id: "exp-2",
    role: "Founder & CEO",
    organization: "CodeDot Technologies",
    period: "2026",
    description: "Software Company",
    highlights: [
      "Providing IT Services And Ai Intergrated Software Developments"
    ],
    icon: "Code"
  },
  {
    id: "exp-3",
    role: "Microsoft Student Ambassador",
    organization: "Microsoft",
    period: "2024 – Present",
    description: "Hosted and supported technology events, shared learning resources, and engaged with students to promote developer skills, innovation, and emerging technologies.",
    highlights: [
      "Organized student developer sessions and technology learning workshops",
      "Promoted emerging developer tools, cloud skills, and AI platforms",
      "Engaged actively with peer student communities and technology networks"
    ],
    icon: "Award"
  },
  {
    id: "exp-4",
    role: "IT & English Language Tutor",
    organization: "Freelance / Academic Support",
    period: "Ongoing",
    description: "Provided student coaching and mentoring in Information Technology fundamentals, computer literacy, programming basics, and practical English communication.",
    highlights: [
      "Guided students through core IT practicals, basic programming, and web logic",
      "Built strong communication, patience, and technical presentation skills",
      "Created structured learning resources and interactive student exercises"
    ],
    icon: "GraduationCap"
  },
  {
    id: "exp-5",
    role: "Content Creator",
    organization: "Tech & Media Channels",
    period: "Ongoing",
    description: "Create and publish professional content focused on Artificial Intelligence, Machine Learning, programming, and emerging technologies.",
    highlights: [
      "Produced tutorials and insights on AI tools, coding concepts, and web stacks",
      "Shared technical articles and educational infographics across communities",
      "Fostered discussion around software engineering trends and career growth"
    ],
    icon: "Video"
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: "proj-csrp",
    title: "CITIZEN SMART REPORT PORTAL (CSRP)",
    subtitle: "Civic Issue Management & Digital Reporting System",
    category: "Web Applications",
    description: "A full-stack web application designed to improve communication between citizens and local government authorities by enabling users to report and manage civic issues digitally.",
    problem: "Citizens lack a streamlined, transparent digital channel to log public infrastructure complaints, track status updates, and communicate directly with local municipal bodies.",
    solution: "CSRP provides an intuitive digital portal with issue categorization, live status tracking, image upload reporting, and an administrative dashboard for authorities to review and resolve reported items.",
    keyFeatures: [
      "User-friendly civic issue reporting with category selection and photo attachment",
      "Real-time ticket status tracking (Pending, Under Review, Resolved)",
      "Admin portal for municipal officers to assign tickets and post resolution updates",
      "Responsive, accessible web UI optimized for mobile citizens"
    ],
    technologies: ["React", "TypeScript", "Node.js", "HTML5", "CSS", "SQL", "Database"],
    githubUrl: "https://github.com/RinasAboothalib/Citizan-Smart-Report-Portal.git",
    demoUrl: "https://csrp-demo.vercel.app",
    image: "/project-csrp.png",
    featured: true
  },
  {
    id: "proj-resume-ai",
    title: "RESUME AI ANALYZER",
    subtitle: "Smart Skill-Gap Analysis & Feedback System",
    category: "AI / ML",
    description: "An AI-powered Resume Analyzer that enables users to upload resumes, view skill-gap analysis, and receive personalized feedback through an intuitive user interface.",
    problem: "Job seekers often struggle to align their resumes with fast-evolving job descriptions and identify critical skill gaps before applying.",
    solution: "An interactive web analyzer that evaluates uploaded resume content against targeted software engineering roles, highlighting key missing skills and providing actionable resume improvement recommendations.",
    keyFeatures: [
      "Instant resume text parsing and structured skill extraction",
      "Skill-gap comparison against modern AI & Software Engineering role profiles",
      "Visual score breakdown (Impact, Tech Stack Alignment, formatting readability)",
      "Actionable recommendations and customized prompt feedback"
    ],
    technologies: ["React", "Python", "TypeScript", "AI / ML", "CSS"],
    githubUrl: "https://github.com/RinasAboothalib/Resume-Ai-Analyzer.git",
    demoUrl: "https://resume-ai-demo.vercel.app",
    image: "/project-resume.png",
    featured: true
  },
  {
    id: "proj-portfolio",
    title: "PERSONAL PORTFOLIO",
    subtitle: "Futuristic Interactive Developer & AI/ML Brand Site",
    category: "Personal",
    description: "A modern personal portfolio designed to showcase software engineering projects, AI/ML interests, technical skills, experience and professional achievements.",
    problem: "Standard generic portfolio templates fail to convey technical focus, clean visual craftsmanship, and modern interactive experience expected by recruiters.",
    solution: "A bespoke, highly refined developer showcase featuring custom hero silhouette cutouts, glassmorphism UI cards, interactive filtering, and smooth scroll animations.",
    keyFeatures: [
      "Custom profile photo cutout display with realistic lighting glow and HUD accents",
      "Interactive technology stack filterable grid with tooltips and category views",
      "Full responsive layout with dark/light themes, custom cursor, and modal details",
      "Recruiter-friendly layout with direct CV view, contact validation, and social links"
    ],
    technologies: ["React", "TypeScript", "CSS", "Motion"],
    githubUrl: "https://github.com/RinasAboothalib",
    demoUrl: "https://rinas.vercel.app",
    image: "/project-portfolio.png",
    featured: true
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "edu-1",
    degree: "HND in INFORMATION TECHNOLOGY",
    institution: "Sri Lanka Institute of Advanced Technological Education — SLIATE",
    period: "2023 – 2026",
    location: "Trincomalee / Sri Lanka",
    details: "Comprehensive study covering Software Engineering, Object-Oriented Programming, Database Management, Web Application Engineering, Data Structures, Algorithms, and Networking."
  },
  {
    id: "edu-2",
    degree: "ADVANCED LEVEL (A/L)",
    institution: "T/ Kinniya Central College (National School)",
    period: "2021 – 2023",
    location: "Kinniya, Sri Lanka",
    details: "Physical Science / Technology stream background emphasizing mathematics, logical reasoning, and physical fundamentals."
  },
  {
    id: "edu-3",
    degree: "ORDINARY LEVEL (O/L)",
    institution: "T/ Kinniya Central College (National School)",
    period: "2020",
    location: "Kinniya, Sri Lanka",
    details: "Successfully completed secondary education with strong distinctions in Mathematics, English, Science, and Information Technology."
  }
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "cert-1",
    title: "ARTIFICIAL INTELLIGENCE MASTER CLASS",
    issuer: "NoviTech (Pvt) Ltd — India",
    duration: "1 Month Intensive Track",
    icon: "Brain"
  },
  {
    id: "cert-2",
    title: "MICROSOFT STUDENT AMBASSADOR",
    issuer: "Microsoft",
    duration: "2024 – Present",
    icon: "Award"
  },
  {
    id: "cert-3",
    title: "PYTHON FOR BEGINNERS",
    issuer: "University of Moratuwa — Sri Lanka",
    icon: "Python"
  }
];

export const LANGUAGES_DATA: LanguageItem[] = [
  { language: "Tamil", proficiency: "Fluent / Native" },
  { language: "English", proficiency: "Professional Working Proficiency" },
  { language: "Sinhala", proficiency: "Intermediate" }
];

export const TECH_CONTENT_DATA: TechContentCard[] = [
  {
    id: "tc-1",
    title: "Artificial Intelligence",
    category: "AI / ML",
    description: "Insights into neural networks, natural language understanding, generative models, and real-world AI integration.",
    icon: "BrainCircuit"
  },
  {
    id: "tc-2",
    title: "Machine Learning",
    category: "Data Science",
    description: "Supervised & unsupervised learning models, data preprocessing pipelines, evaluation metrics, and practical Python implementations.",
    icon: "Cpu"
  },
  {
    id: "tc-3",
    title: "Programming",
    category: "Software Engineering",
    description: "Full-stack web architecture, React best practices, clean TypeScript code patterns, and modern API construction.",
    icon: "Code"
  },
  {
    id: "tc-4",
    title: "Emerging Technologies",
    category: "Future Tech",
    description: "Exploration of intelligent agents, cloud devops, automated tools, and emerging developer ecosystem innovations.",
    icon: "Sparkles"
  }
];
