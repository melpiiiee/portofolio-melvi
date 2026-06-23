// src/data/projects.ts

export interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  link?: string;
  image: string;
  bg?: string; // bg ditambahkan untuk kebutuhan FeaturedWorks
}

export const projects: Project[] = [
  {
    id: 1,
    category: "Company Profile",
    title: "Minion Barbershop",
    description: "A professional company profile website for Minion Barbershop.",
    tags: ["React/Next.js", "Tailwind CSS"],
    accent: "#7C5CFC",
    link: "https://minionbarbershop.com",
    image: "/webminion.png",
    bg: "bg-purple-100",
  },
  {
    id: 2,
    category: "Classification",
    title: "BivaScan",
    description: "An intelligent mobile image classification system.",
    tags: ["HTML", "CSS", "Python", "MobileNetV2"],
    accent: "#FF5FA0",
    link: "https://huggingface.co/spaces/gamamou/klasifikasi-bivalvia",
    image: "/bivascan.png",
    bg: "bg-pink-100",
  },
  {
    id: 3,
    category: "E-commerce",
    title: "Urban Store",
    description: "A clean and trendy e-commerce website for a fashion brand with a smooth shopping experience.",
    tags: ["Web Design", "E-commerce"],
    accent: "#FF5FA0",
    image: "/NgijangYuk.png", 
  },
  {
    id: 4,
    category: "Dashboard",
    title: "Dashboard Monitoring Server Kominfo",
    description: "A comprehensive backend service monitoring infrastructure and responsive dashboard agent built to track CPU, memory, and networking statuses.",
    tags: ["Monitoring", "IoT", "Backend"],
    accent: "#22C55E",
    image: "/dashboard-kominfo.png",
  },
];