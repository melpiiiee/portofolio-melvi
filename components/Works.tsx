"use client";

import { useState } from "react";
import Image from "next/image"; 
import { ArrowUpRight, Plus, ChevronDown } from "lucide-react";

interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  tags: string[];
  accent: string;
  link?: string;
  image: string; 
}

const categories = [
  "All Works",
  "Company Profile",
  "Classification",
  "Dashboard",
];

const projects: Project[] = [
  {
    id: 1,
    category: "Company Profile",
    title: "Minion Barbershop",
    description: "A professional company profile website for Minion Barbershop built with Next.js and Tailwind CSS to showcase modern haircuts and services.",
    tags: ["React/Next.js", "Tailwind CSS"],
    accent: "#7C5CFC",
    link: "https://minionbarbershop.com",
    image: "/webminion.png", 
  },
  {
    id: 2,
    category: "Classification",
    title: "BivaScan",
    description: "An intelligent mobile image classification system utilizing MobileNetV2 architecture built with pure HTML, CSS, and Python backend infrastructure.",
    tags: ["HTML", "CSS", "Python", "MobileNetV2"],
    accent: "#FF5FA0",
    link: "https://huggingface.co/spaces/gamamou/klasifikasi-bivalvia",
    image: "/bivascan.png", 
  },
  {
    id: 3,
    category: "Tourist Platform",
    title: "Urban Store",
    description: "A comprehensive digital travel companion dedicated to promoting the hidden gems and local culinary delights of Kijang, offering curated recommendations for an enhanced user experience.",
    tags: ["Web Design", "HTML", "CSS"],
    accent: "#FF5FA0",
    image: "/NgijangYuk.png", 
  },
  {
    id: 4,
    category: "Dashboard",
    title: "Dashboard Monitoring Server Kominfo",
    description: "A comprehensive backend service monitoring infrastructure and responsive dashboard agent built to track CPU, memory, and disk.",
    tags: ["Monitoring", "Python"],
    accent: "#22C55E",
    image: "/dashboard-kominfo.png",
  },
];

export default function Works() {
  const [activeCategory, setActiveCategory] = useState("All Works");

  const filtered =
    activeCategory === "All Works"
      ? projects
      : projects.filter((p) => p.category === activeCategory || p.tags.includes(activeCategory));

  return (
    <div className="bg-white font-sans max-w-6xl mx-auto px-4 sm:px-6">
      {/* Hero Section */}
      <section className="pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-10 md:pb-12 grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4 sm:space-y-6">
          <button className="flex items-center gap-2 border border-gray-200 text-xs sm:text-sm font-semibold px-3.5 sm:px-4 py-1.5 rounded-full text-gray-700 hover:border-[#7C5CFC] transition-colors">
            My Works <Plus size={14} className="text-[#7C5CFC]" />
          </button>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight text-gray-900">
            Works that <span className="text-[#7C5CFC]">speak impact</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base leading-relaxed max-w-sm">
            Here are some of the digital experiences I've designed and developed.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-4 -mx-4 sm:mx-0 px-4 sm:px-0">
        <div className="flex gap-2 overflow-x-auto sm:flex-wrap sm:overflow-visible pb-1 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`shrink-0 text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full border transition-all whitespace-nowrap ${
                activeCategory === cat
                  ? "bg-[#7C5CFC] text-white border-[#7C5CFC]"
                  : "bg-white text-gray-600 border-gray-200 hover:border-[#7C5CFC] hover:text-[#7C5CFC]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project Cards List */}
      <section className="py-6 sm:py-8 space-y-6 sm:space-y-8">
        {filtered.map((project) => (
          <div key={project.id} className="flex flex-col md:flex-row gap-4 sm:gap-6 p-4 sm:p-6 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full md:w-[40%] h-[180px] sm:h-[220px] md:h-[200px] rounded-xl overflow-hidden relative bg-gray-100 shrink-0">
              <Image src={project.image} alt={project.title} fill className="object-cover" />
            </div>
            <div className="md:w-[60%] flex flex-col justify-center gap-2.5 sm:gap-3">
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: project.accent }}>{project.category}</span>
              <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
              <p className="text-gray-500 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => <span key={t} className="text-xs bg-gray-100 px-2 py-1 rounded">{t}</span>)}
              </div>
              {project.link && (
                <a href={project.link} className="flex items-center gap-2 font-semibold text-sm mt-1 sm:mt-2 hover:underline">
                  Live Preview <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}