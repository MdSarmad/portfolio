import { Code2, Server, Database, Palette } from "lucide-react";

export const typingTexts = [
  "Full Stack Developer",
  "React Specialist",
  "UI/UX Designer",
  "Problem Solver",
  "Tech Enthusiast",
];

export const skills = {
  frontend: {
    title: "Frontend",
    icon: <Code2 className="h-5 w-5" />,
    skills: [
      { name: "React/Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 88 },
      { name: "JavaScript", level: 92 },
    ],
  },
  backend: {
    title: "Backend",
    icon: <Server className="h-5 w-5" />,
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 80 },
      { name: "Express.js", level: 82 },
      { name: "REST APIs", level: 88 },
    ],
  },
  database: {
    title: "Database",
    icon: <Database className="h-5 w-5" />,
    skills: [
      { name: "PostgreSQL", level: 85 },
      { name: "MongoDB", level: 78 },
      { name: "Redis", level: 70 },
      { name: "Supabase", level: 88 },
    ],
  },
  tools: {
    title: "Tools & Design",
    icon: <Palette className="h-5 w-5" />,
    skills: [
      { name: "Figma", level: 90 },
      { name: "Git/GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
    ],
  },
};

export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU1MjU0NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Management App",
    description:
      "Collaborative project management tool with real-time updates, team collaboration, and advanced analytics.",
    image:
      "https://images.unsplash.com/photo-1676731820390-a119efe23333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTUzMjM2NTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["Next.js", "TypeScript", "Supabase", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Content Generator",
    description:
      "AI-powered content creation platform with multiple content types, templates, and export options.",
    image:
      "https://images.unsplash.com/photo-1505304451-3b3b85a91afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGNvZGluZyUyMHNldHVwfGVufDF8fHx8MTc1NTMyOTM3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "OpenAI API", "MongoDB", "Express", "Material-UI"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Real Estate Platform",
    description:
      "Modern real estate platform with advanced search, virtual tours, and property management features.",
    image:
      "https://images.unsplash.com/photo-1719400471588-575b23e27bd7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU1MjU0NTI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["Vue.js", "Laravel", "MySQL", "Mapbox", "Bootstrap"],
    liveUrl: "#",
    githubUrl: "#",
  },
];

export const experiences = [
  {
    title: "Senior Full Stack Developer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description:
      "Lead development of scalable web applications, mentor junior developers, and architect cloud solutions.",
  },
  {
    title: "Frontend Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description:
      "Developed responsive web applications using React and modern CSS frameworks, improved performance by 40%.",
  },
  {
    title: "Junior Developer",
    company: "StartUp Ventures",
    period: "2019 - 2020",
    description:
      "Built and maintained web applications, collaborated with design team to implement pixel-perfect interfaces.",
  },
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    company: "TechStart Inc.",
    content:
      "Md Sarmad delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail and technical expertise made our project a huge success.",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b2496d3e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "CTO at InnovateNow",
    company: "InnovateNow Solutions",
    content:
      "Working with Md Sarmad was a game-changer for our startup. He built our entire web application from scratch with incredible efficiency and modern technologies.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "Digital Dynamics",
    content:
      "Md Sarmad's full-stack development skills are outstanding. He transformed our complex requirements into a beautiful, functional web application that our users love.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "Founder",
    company: "GrowthLab",
    content:
      "The quality of code and the innovative solutions Md Sarmad provided were exceptional. Our project was delivered on time and within budget.",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Lisa Thompson",
    role: "Marketing Director",
    company: "CreativeHub",
    content:
      "Md Sarmad created a stunning portfolio website for our agency. The design is modern, responsive, and perfectly captures our brand identity.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    rating: 5,
  },
];
