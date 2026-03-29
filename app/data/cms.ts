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
    title: "A Bronx Tale",
    description: "Dir. Billy Surges",
    imageUrl: "/assets/gallery/A Bronx Tale, Dir. Billy Surges.webp",
    category: "Theater",
  },
  {
    id: 2,
    title: "Along the Banks",
    description: "Dir. Brigid Reilly",
    imageUrl: "/assets/gallery/Along the Banks, Dir. Brigid Reilly.webp",
    category: "Theater",
  },
  {
    id: 3,
    title: "Butterflies are Free",
    description: "Dir. Joey Rizzolo, Photo by John Seyfried",
    imageUrl: "/assets/gallery/Butterflies are Free, Dir. Joey Rizzolo, Photo by John Seyfried.webp",
    category: "Theater",
  },
  {
    id: 4,
    title: "Dave, Who is Not Dave",
    description: "Dir. Kylie Gutierrez",
    imageUrl: "/assets/gallery/Dave, Who is Not Dave, Dir. Kylie Gutierrez.webp",
    category: "Theater",
  },
  {
    id: 5,
    title: "La Ronde",
    description: "Dir. Ramona Rotten",
    imageUrl: "/assets/gallery/La Ronde, Dir. Ramona Rotten.webp",
    category: "Theater",
  },
  {
    id: 6,
    title: "Measure for Measure",
    description: "Dir. Paul Moser, Photo by John Seyfried",
    imageUrl: "/assets/gallery/Measure for Measure, Dir. Paul Moser, Photo by John Seyfried.webp",
    category: "Theater",
  },
  {
    id: 7,
    title: "The Distrikt of Lake Michigun",
    description: "Dir. Seth Wilson",
    imageUrl: "/assets/gallery/The Distrikt of Lake Michigun, Dir. Seth Wilson.webp",
    category: "Theater",
  },
  {
    id: 8,
    title: "The Ill-Conceived, Poorly Executed House Warming Party of Amy & Jaime",
    description: "Dir. Ray Morgan",
    imageUrl: "/assets/gallery/The Ill-Conceived, Poorly Executed House Warming Party of Amy & Jaime, Dir. Ray Morgan.webp",
    category: "Theater",
  },
  {
    id: 9,
    title: "Three Sisters",
    description: "Dir. Audrey Napoli, Photo by Joe Mazza",
    imageUrl: "/assets/gallery/Three Sisters, Dir. Audrey Napoli, Photo by Joe Mazza.webp",
    category: "Theater",
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
  email: "Connorolocklin@gmail.com",
  phone: "(860) 990-7996",
  instagram: "Instagram",
};

export const agentData = {
  name: "Actors Talent Group Inc.",
  building: "Fine Arts Building",
  address: "410 South Michigan Av., Suite 733",
  city: "Chicago",
  state: "IL",
  zip: "60605",
  country: "USA",
  phone: "(312) 588-1309",
  fax: "(312) 588-1579",
};

export const profileData = {
  name: "Connor O. Locklin",
  headshotUrl: "/assets/headshot.jpg",
  bio: "Chicago based Actor, Writer, Singer, and Improvisor",
  title: "Software Engineer & Designer",
  resumeUrl: "/assets/connor-o-resume.pdf",
};
