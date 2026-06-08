export interface Profile {
  name: string;
  role: string;
  roles: string[]; // for the typing animation in HeroSection
  featuredSkills: string[]; // key skills to show in HeroSection
  tagline: string;
  email: string;
  phone: string;
  location: string;
  avatar: string;
  resumeUrl: string;
  greeting: string;
}

export interface AboutStat {
  value: string;
  label: string;
}

export interface Service {
  title: string;
  description: string;
  iconKey: "mobile" | "frontend" | "backend" | "devops";
}

export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
  featured?: boolean;
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  summary: string;
  points?: string[];
}

export interface Project {
  title: string;
  description: string;
  thumbnail: string;
  techStack: string[];
  demoUrl: string;
  githubUrl: string;
}

export interface SocialLink {
  label: string;
  href: string;
  iconKey: "email" | "github" | "linkedin" | "whatsapp";
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  ogImage: string;
  twitterUsername: string;
  siteUrl: string;
  googleSiteVerification?: string;
  author: string;
  jobTitle: string;
  sameAs: string[];
}

export interface Education {
  school: string;
  degree: string;
  fieldOfStudy: string;
  period: string;
  score: string;
}

export interface Certification {
  title: string;
  issuer: string;
  details: string;
}

export const profile: Profile = {
  name: "Lovish Goyal",
  role: "Flutter, AI & Full Stack Developer",
  roles: ["Flutter Developer", "Python & Flask Developer", "AI Integrations Specialist", "Full Stack Developer"],
  featuredSkills: ["Flutter SDK", "Dart", "Python", "Flask", "FastAPI", "React.js", "OpenAI API", "MongoDB", "MySQL", "Supabase", "Firebase"],
  tagline: "I build high-performance cross-platform mobile apps and AI-driven web solutions using standard frameworks (Flask, FastAPI) and LLM integrations.",
  email: "goyallovish1727@gmail.com",
  phone: "+91 8607605196",
  location: "Ambala, India",
  avatar: "/images/portfolio_image.png",
  resumeUrl: "/resume.pdf",
  greeting: "Hello",
};

export interface AboutConfig {
  title: string;
  description1: string;
  description2: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const about: AboutConfig = {
  title: "About me",
  description1: "I'm a computer science graduate from Kurukshetra University (CGPA: 8.06) and a results-driven Application Developer specializing in Flutter, Python, and Full Stack development. Over my professional career, I have designed and deployed 5+ production-ready mobile apps and dynamic web platforms, managing the complete Google Play Store release pipeline. I focus on writing clean, modular code that scales seamlessly across iOS, Android, and web platforms. I am deeply passionate about keeping pace with modern architectural standards, robust state management patterns, and responsive UI/UX principles.",
  description2: "I bring hands-on experience integrating 100+ REST APIs, payment gateways, Google AdMob ads, and real-time Agora calling/chat features into customer-facing products. My expertise spans Python backend frameworks (Flask, FastAPI), frontend libraries (React.js), AI model integrations (OpenAI APIs, Hugging Face), and cloud deployment pipelines (GitHub Actions, AWS, Render, Supabase). I enjoy solving complex engineering problems, troubleshooting support issues, and collaborating with cross-functional teams to deliver pixel-perfect, high-performance solutions. Additionally, I specialize in providing post-deployment application support, diagnosing complex production bugs, and optimizing data caching to maintain high-quality system performance.",
};

export const aboutStats: AboutStat[] = [
  { value: "10+", label: "Projects" },
  { value: "100%", label: "Live App Rate" },
  { value: "2+", label: "Years Exp" }
];

export const services: Service[] = [
  {
    iconKey: "mobile",
    title: "Mobile Development",
    description: "Expert Flutter developer building beautiful, responsive, and high-performance mobile applications for iOS and Android with optimized caching, local DBs (Hive), and Google AdMob monetization."
  },
  {
    iconKey: "frontend",
    title: "Full Stack & Web",
    description: "Proficient with Python (Flask/FastAPI), Node.js (Express), and React.js to create clean RESTful APIs and dynamic web interfaces with local storage persistence."
  },
  {
    iconKey: "backend",
    title: "AI & Integrations",
    description: "Experienced integrating OpenAI APIs and free conversational models to build smart chatbots, automate workflows, and implement SEO best practices for high visibility."
  },
  {
    iconKey: "devops",
    title: "DevOps & Cloud",
    description: "Configuring automated Git integrations, continuous deployment (GitHub Actions), containerization, and hosting solutions on AWS, Render, Firebase, and Supabase."
  }
];

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    icon: "💻",
    skills: ["Dart", "Python", "JavaScript", "TypeScript", "C/C++", "Java", "SQL"],
    featured: true,
  },
  {
    category: "Frameworks & Web",
    icon: "⚙️",
    skills: ["Flutter SDK", "React.js", "Node.js", "Express.js", "Flask", "FastAPI", "HTML5 & CSS3"],
    featured: true,
  },
  {
    category: "AI & API Integrations",
    icon: "🧠",
    skills: ["OpenAI API", "Hugging Face Models", "AI Chatbots / Assistants", "Google AdMob", "SEO Optimization", "REST APIs"],
    featured: true,
  },
  {
    category: "Databases & Tools",
    icon: "💾",
    skills: ["MySQL", "MongoDB", "Firebase Suite", "Supabase", "Git & GitHub", "Linux (Ubuntu)"],
    featured: true,
  },
];

export const experience: Experience[] = [
  {
    period: "Nov 2024 – May 2026",
    role: "Application Developer",
    company: "Codroidhub Pvt Ltd",
    summary: "Developed 5+ Flutter apps (including 3 internal & 2 client projects) integrated with AI bots (OpenAI API), AdMob Ads, payment gateways, and Python/Flask APIs.",
    points: [
      "Developed and deployed 5+ Flutter applications, integrating AdMob, payment gateways, and real-time features, managing the complete Google Play Store release pipeline.",
      "Integrated 100+ REST APIs and AI completions (OpenAI API/free models) for smart customer service bots, utilizing Firebase, MongoDB, Supabase, and MySQL.",
      "Engineered lightweight backend microservices in Python using Flask/FastAPI to serve AI prompts and process media content.",
      "Improved mobile application performance, search query response times, and optimized client platforms for search engines (SEO)."
    ]
  },
  {
    period: "Jul 2024 – Oct 2024",
    role: "Application Developer",
    company: "Altruist Technologies",
    summary: "Worked on Flutter frontend, REST APIs, Linux server environments, and database optimizations.",
    points: [
      "Worked on Flutter mobile app development, integrating complex REST API endpoints and optimizing data structures.",
      "Assisted in Linux server configuration, application deployment checks, and MySQL database query optimizations.",
      "Analyzed production logs to debug critical issues, ensuring high availability and seamless data flow."
    ]
  },
  {
    period: "Jun 2022 – Dec 2022",
    role: "Application Developer",
    company: "Mohesu Enterprises",
    summary: "Developed frontend and backend modules for client projects using Flutter and REST APIs.",
    points: [
      "Developed frontend UI templates and connected backend REST API resources for 2 client projects.",
      "Implemented local storage caching mechanisms (Hive/Shared Preferences) to improve performance and support offline modes."
    ]
  }
];

export const projects: Project[] = [
  {
    title: "SahiPath - Tech Opportunity Platform",
    description: "A deployed cross-platform mobile application on Google Play Store for discovering internships, hackathons, and technical events. Designed a scalable, feature-based architecture with optimized state management and caching layers, reducing startup time by ~40% and minimizing redundant API calls.",
    thumbnail: "/projects/sahipath.svg",
    techStack: ["Flutter", "Dart", "REST APIs", "Caching", "State Management", "Play Store"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.techversoft.sahipath&pcampaignid=web_share",
    githubUrl: "https://github.com/Lovish-Goyal/sahipath",
  },
  {
    title: "CortexKit - Free AI Tools Directory",
    description: "A Flutter-based AI tools discovery platform enabling users to search, explore, and manage curated AI tools with personalized collections. Implemented offline-first support using Hive, Firebase Cloud Messaging (FCM) for push notifications, and high-performance search/filtering for a smooth user experience.",
    thumbnail: "/projects/cortexkit.svg",
    techStack: ["Flutter", "Dart", "Hive DB", "Firebase FCM", "Search/Filter"],
    demoUrl: "https://play.google.com/store/apps/details?id=com.techversoft.cortexkit&pcampaignid=web_share",
    githubUrl: "https://github.com/Lovish-Goyal/cortexkit",
  },
  {
    title: "PrepSprint Website",
    description: "A career preparation web application built to help users craft professional resumes, access simulated AI mock interviewers, upskill in future technologies, and navigate role recommendation workflows based on candidate skillsets.",
    thumbnail: "/projects/prepsprint.svg",
    techStack: ["React.js", "Node.js", "Express", "MongoDB", "Render Hosting", "REST APIs"],
    demoUrl: "https://prepsprint.onrender.com",
    githubUrl: "https://github.com/Lovish-Goyal/prepsprint",
  },
  {
    title: "AI Smart Attendance Tracker",
    description: "An automated attendance tracking system leveraging computer vision for facial recognition. Performs face detection, registers user profiles, and automatically logs timestamps and attendance history into a MySQL database via a lightweight backend API.",
    thumbnail: "/projects/attendance.svg",
    techStack: ["Python", "OpenCV", "Face Recognition", "MySQL", "Flask API"],
    demoUrl: "https://youtu.be/example-attendance-demo",
    githubUrl: "https://github.com/Lovish-Goyal/smart-attendance-system",
  },
  {
    title: "AI Emotion Detection System",
    description: "A deep learning application using a convolutional neural network (CNN) to detect human emotions from live camera feeds. Decodes key facial expressions (happy, neutral, surprised, sad) in real-time with visualizations showing recognition confidence levels.",
    thumbnail: "/projects/emotion.svg",
    techStack: ["Python", "Keras", "TensorFlow", "OpenCV", "Deep Learning"],
    demoUrl: "https://youtu.be/example-emotion-demo",
    githubUrl: "https://github.com/Lovish-Goyal/Emo-Detect",
  }
];

export const education: Education[] = [
  {
    school: "Kurukshetra University",
    degree: "Bachelor of Technology",
    fieldOfStudy: "Computer Science and Engineering",
    period: "July 2021 – June 2025",
    score: "CGPA: 8.06",
  },
  {
    school: "D.A.V. Sr. Sec. School",
    degree: "Class XII (Senior Secondary)",
    fieldOfStudy: "Science (Non-Medical) | HBSE Board, Ambala",
    period: "2020 – 2021",
    score: "Percentage: 92.4%",
  },
  {
    school: "D.A.V. Sr. Sec. School",
    degree: "Class X (Secondary School)",
    fieldOfStudy: "General Subjects | HBSE Board, Ambala",
    period: "2018 – 2019",
    score: "Percentage: 80%",
  }
];

export const certifications: Certification[] = [
  {
    title: "Artificial Intelligence",
    issuer: "NPTEL",
    details: "Completed certification covering search algorithms and problem-solving techniques in AI.",
  },
  {
    title: "Introduction to IoT",
    issuer: "NPTEL",
    details: "Silver Medal recipient for performance in IoT fundamentals and system design concepts.",
  },
  {
    title: "Idea Exploration 3.0",
    issuer: "EPIC",
    details: "Secured 3rd position in innovation and technical idea presentation competition.",
  },
  {
    title: "AWS Cloud Computing",
    issuer: "CodroidHub",
    details: "Completed hands-on training in AWS services, deployment, and cloud architecture fundamentals.",
  }
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: "mailto:goyallovish1727@gmail.com", iconKey: "email" },
  { label: "GitHub", href: "https://github.com/Lovish-Goyal", iconKey: "github" },
  { label: "LinkedIn", href: "https://linkedin.com/in/lovishgoyal-er", iconKey: "linkedin" },
  { label: "WhatsApp", href: "https://wa.me/918607605196", iconKey: "whatsapp" },
];

export const seo: SeoConfig = {
  title: "Lovish Goyal | Flutter, AI & Full Stack Developer Portfolio",
  description: "Lovish Goyal is an experienced Flutter Developer, AI Integrations Specialist, and Python/Flask Developer from Ambala, India. Explore high-performance mobile apps, OpenAI bot integrations, and full-stack solutions.",
  keywords: [
    "Lovish Goyal",
    "Lovish Goyal Ambala",
    "Lovish Goyal Portfolio",
    "Lovish Goyal Flutter",
    "Lovish Goyal Developer",
    "Lovish Goyal Flutter Developer",
    "Flutter Developer Ambala",
    "Python Developer Ambala",
    "Flask Developer Haryana",
    "FastAPI Developer India",
    "OpenAI API Integration Expert",
    "AI Chatbot Developer India",
    "DAV School Ambala Lovish Goyal",
    "Kurukshetra University Lovish Goyal",
    "Lovish Goyal Mobile Developer",
    "Full Stack Developer Haryana",
    "Hire Flutter Developer India",
    "Best mobile app portfolio",
    "HBSE 12th topper Ambala"
  ],
  ogImage: "/images/og-preview.png",
  twitterUsername: "@lovishgoyal",
  siteUrl: "https://lovishgoyal-portfolio.onrender.com",
  googleSiteVerification: "",
  author: "Lovish Goyal",
  jobTitle: "Flutter, AI & Full Stack Developer",
  sameAs: [
    "https://github.com/Lovish-Goyal",
    "https://linkedin.com/in/lovishgoyal-er",
  ],
};

// Legacy exports for backward compatibility of old components
export const BaseInfo = {
  companyName: "Tech Innovators Inc.",
  founded: 2010,
  headquarters: profile.tagline,
  contactEmail: profile.email,
  phone: profile.phone,
  website: seo.siteUrl,
  subheading: profile.name.split(" ")[0],
  position: profile.role,
  name: profile.name,
  profilePic: profile.avatar,
};

export const AboutInfo = {
  title: about.title,
  description: about.description1,
  cliient: aboutStats[0]?.value || "10+",
  experiece: aboutStats[2]?.value || "2+",
  project: aboutStats[0]?.value || "10+",
  website: "100+",
  mission: "To revolutionize the tech industry with innovative solutions.",
  vision: "To be a leader in technology and make an impact on a global scale.",
  values: ["Innovation", "Integrity", "Customer Satisfaction"],
  history: about.description2,
};

export const contactData = {
  phone: profile.phone,
  email: profile.email,
  address: profile.location,
};

export const ServicesData = services.map((s, idx) => ({
  id: idx + 1,
  name: s.title,
  description: s.description,
  priceRange: "$5,000 - $50,000",
  duration: "2-6 months"
}));

export const projectsData = projects.map((p, idx) => ({
  id: idx + 1,
  name: p.title,
  description: p.description,
  priceRange: "",
  duration: "",
  url: p.demoUrl,
}));

export const skillsData = skillCategories.map((sc, idx) => ({
  id: idx + 1,
  name: sc.category,
  description: sc.skills.join(", "),
  priceRange: "",
  duration: "",
  url: "",
}));

export const reviewsData: Record<string, unknown>[] = [];