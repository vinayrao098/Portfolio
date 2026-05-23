// ─────────────────────────────────────────────
//  All portfolio content — edit this file to
//  customise every section of the site.
// ─────────────────────────────────────────────

export const personalInfo = {
  name: "Vinay Kumar",
  title: "Java Developer | Full Stack Vibe Coder",
  taglines: [
    "Building Enterprise-Grade Java Solutions",
    "Crafting Agentic AI Workflows",
    "Full Stack Developer & Innovator",
    "Turning Ideas Into Scalable Products",
  ],
  bio: "I'm a passionate Java developer with expertise in building enterprise-grade applications and modern full-stack solutions. With a deep love for clean architecture, I craft software that scales — from distributed microservices to intelligent agentic AI pipelines.",
  shortBio:
    "Seasoned developer specialising in Java ecosystems and agentic AI workflows — turning complex problems into elegant, scalable solutions.",
  currentRole: "Senior Java Developer",
  location: "India 🇮🇳",
  email: "vinayrao098@gmail.com",
  resumeUrl: "/resume.pdf",
  avatar: "/avatar.jpeg", // set to your image path e.g. "/avatar.jpg"
  yearsOfExperience: "4+",
  projectsDelivered: "3+",
  socials: {
    github: "https://github.com/vinayrao098",
    linkedin: "www.linkedin.com/in/vinay-raoo",
    twitter: "https://twitter.com/vinaykumar",
    email: "mailto:vinayrao098@gmail.com",
  },
};

export const aboutPunchline =
  "From Enterprise Java to Agentic Workflows: A Full Stack Vibe Coder.";

export const funFacts = [
  { emoji: "☕", label: "Coffee-driven developer" },
  { emoji: "🤖", label: "AI & automation enthusiast" },
  { emoji: "🏗️", label: "Clean architecture advocate" },
  { emoji: "🌐", label: "Open-source contributor" },
];

// ─── SKILLS ─────────────────────────────────

export const technicalSkills = [
  { name: "Java / Spring Boot", level: 95 },
  { name: "Microservices & REST APIs", level: 92 },
  { name: "TypeScript / JavaScript", level: 85 },
  { name: "React / Next.js", level: 80 },
  { name: "Python", level: 75 },
  { name: "SQL / PostgreSQL", level: 88 },
  { name: "Docker / Kubernetes", level: 78 },
  { name: "LangChain / LangGraph", level: 72 },
];

export const toolsAndTech = [
  "Spring Boot",
  "Hibernate / JPA",
  "Apache Kafka",
  "Redis",
  "RabbitMQ",
  "Docker",
  "Kubernetes",
  "AWS",
  "Git / GitHub",
  "Jenkins / CI-CD",
  "PostgreSQL",
  "MongoDB",
  "LangChain",
  "LangGraph",
  "OpenAI API",
  "Next.js",
  "React",
  "Tailwind CSS",
  "Elasticsearch",
  "Grafana",
];

// ─── PROJECTS ───────────────────────────────

export const projects = [
  {
    id: 1,
    title: "Connecticut Department of Social Services",
    description:
      "An social services plateform for connecticut state citizens to get various assistance like SNAP, TANF, Husky etc. The plateform is built using Java, Spring REST, JSP, IBM MQ, Corticon, IBM DB2. Using corticon for complex business rule engines.",
    image: "/projects/conn.jpg",
    tags: ["Java", "IBM MQ", "Corticon", "Spring REST", "JSP", "IBM DB2"],
    // liveUrl: "https://demo.example.com/agentic",
    // githubUrl: "https://github.com/vinaykumar/agentic-workflow",
    featured: true,
  },
  {
    id: 2,
    title: "Enterprise Microservices Hub",
    description:
      "A production-grade microservices ecosystem with API gateway, service mesh, distributed tracing, and zero-downtime deployments using Kubernetes and Istio.",
    image: "/projects/microservices.jpg",
    tags: ["Java", "Spring Cloud", "Kubernetes", "Docker", "Kafka"],
    liveUrl: "https://demo.example.com/microservices",
    githubUrl: "https://github.com/vinaykumar/microservices-hub",
    featured: true,
  },
  {
    id: 3,
    title: "AI-Powered Code Reviewer",
    description:
      "A GitHub App that automatically reviews pull requests using OpenAI GPT-4, checks for code quality, security vulnerabilities, and suggests improvements inline.",
    image: "/projects/code-reviewer.jpg",
    tags: ["TypeScript", "OpenAI", "GitHub API", "Next.js", "Redis"],
    liveUrl: "https://demo.example.com/code-review",
    githubUrl: "https://github.com/vinaykumar/ai-code-reviewer",
    featured: true,
  },
  {
    id: 4,
    title: "Real-time Analytics Dashboard",
    description:
      "A high-throughput data analytics platform processing millions of events per second with Apache Kafka, Elasticsearch, and a React-based live dashboard.",
    image: "/projects/analytics.jpg",
    tags: ["Java", "Kafka", "Elasticsearch", "React", "Grafana"],
    liveUrl: "https://demo.example.com/analytics",
    githubUrl: "https://github.com/vinaykumar/analytics-dashboard",
    featured: false,
  },
  {
    id: 5,
    title: "DevOps Automation Toolkit",
    description:
      "A comprehensive CLI toolkit for automating CI/CD pipelines, infrastructure provisioning, and cost optimisation across multi-cloud environments.",
    image: "/projects/devops.jpg",
    tags: ["Python", "Terraform", "AWS", "Docker", "GitHub Actions"],
    liveUrl: "https://demo.example.com/devops",
    githubUrl: "https://github.com/vinaykumar/devops-toolkit",
    featured: false,
  },
  {
    id: 6,
    title: "Intelligent E-Commerce Platform",
    description:
      "A scalable e-commerce backend with AI-powered recommendation engine, inventory management, order processing, and real-time notifications.",
    image: "/projects/ecommerce.jpg",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Redis", "React"],
    liveUrl: "https://demo.example.com/ecommerce",
    githubUrl: "https://github.com/vinaykumar/ecommerce-platform",
    featured: false,
  },
];

// ─── EXPERIENCE ─────────────────────────────

export const experiences = [
  {
    id: 1,
    type: "work",
    role: "Technology Analyst",
    company: "Infosys Limited",
    period: "Sep 2021 – Present",
    location: "Gurugram, India",
    description: [
      "Architected and led development of a high-traffic microservices platform handling 10M+ daily transactions.",
      "Built real-time data pipelines using Apache Kafka reducing processing latency by 65%.",
      "Mentored a team of 6 junior developers and conducted bi-weekly code reviews.",
      "Implemented CI/CD pipelines with Jenkins and Kubernetes, achieving 99.99% uptime.",
    ],
  },
  {
    id: 2,
    type: "education",
    role: "B.Tech in Computer Science",
    company: "GJU Hisar",
    period: "2017 – 2021",
    location: "Hisar, India",
    description: [
      "Graduated with First Class Honours (CGPA: 6.3/10).",
      "Final year project: AI based Image cartoonization using GAN's and OpenCV.",
    ],
  },
];
