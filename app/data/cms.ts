export interface GalleryItem {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
}

export interface BlogPost {
  id: number;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  slug: string;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: 1,
    title: "Project Alpha",
    description: "A web application built with React and Node.js",
    imageUrl: "/assets/gallery/project-1.jpg",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Design System",
    description: "Comprehensive UI component library",
    imageUrl: "/assets/gallery/project-2.jpg",
    category: "Design",
  },
  {
    id: 3,
    title: "Mobile App",
    description: "Cross-platform mobile application",
    imageUrl: "/assets/gallery/project-3.jpg",
    category: "Mobile",
  },
  {
    id: 4,
    title: "Data Visualization",
    description: "Interactive dashboard for analytics",
    imageUrl: "/assets/gallery/project-4.jpg",
    category: "Data",
  },
  {
    id: 5,
    title: "E-commerce Platform",
    description: "Full-stack shopping experience",
    imageUrl: "/assets/gallery/project-5.jpg",
    category: "Web Development",
  },
  {
    id: 6,
    title: "Brand Identity",
    description: "Complete branding package for startup",
    imageUrl: "/assets/gallery/project-6.jpg",
    category: "Design",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building Modern Web Applications",
    date: "March 20, 2024",
    excerpt: "Exploring the latest trends and best practices in web development, from React Server Components to edge computing.",
    content: "Full blog post content here...",
    slug: "building-modern-web-applications",
  },
  {
    id: 2,
    title: "The Art of Clean Code",
    date: "March 15, 2024",
    excerpt: "Thoughts on writing maintainable, readable code that stands the test of time.",
    content: "Full blog post content here...",
    slug: "art-of-clean-code",
  },
  {
    id: 3,
    title: "Design Systems at Scale",
    date: "March 10, 2024",
    excerpt: "How to build and maintain design systems that work across multiple products and teams.",
    content: "Full blog post content here...",
    slug: "design-systems-at-scale",
  },
];

export const experienceData: Experience[] = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "Tech Company Inc.",
    period: "2020 - Present",
    description: "Leading development of scalable web applications using React, Next.js, and Node.js. Mentoring junior developers and driving technical decisions.",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "Startup Co.",
    period: "2018 - 2020",
    description: "Built full-stack features for SaaS platform. Collaborated with design and product teams to deliver user-centric solutions.",
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Digital Agency",
    period: "2016 - 2018",
    description: "Developed responsive websites and web applications for various clients. Gained experience in modern web technologies.",
  },
];

export const educationData: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    year: "2016",
  },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "TailwindCSS",
  "Git",
  "PostgreSQL",
  "MongoDB",
  "AWS",
  "Docker",
  "GraphQL",
];

export const contactInfo = {
  email: "connor.locklin@example.com",
  linkedin: "linkedin.com/in/connor-locklin",
  github: "github.com/connor-locklin",
  twitter: "twitter.com/connor_locklin",
};

export const profileData = {
  name: "Connor O. Locklin",
  headshotUrl: "/assets/headshot.jpg",
  bio: "Chicago based Actor, Writer, Singer, and Improvisor",
  title: "Software Engineer & Designer",
};
