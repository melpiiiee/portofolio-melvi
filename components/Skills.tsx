"use client";

import {
  Sparkle,
  Heart,
  Settings,
  Code2,
  Star,
  Layout,
  Gem,
  Square,
  Layers,
  User,
  Lightbulb,
  MessageCircle,
  Clock,
  Waves,
  Users,
  Cpu,
  BookOpen,
} from "lucide-react";
import { FaFigma, FaReact, FaHtml5 } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiGithub, SiCisco, SiTypescript, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { TbApi } from "react-icons/tb";

const designSkills = [
  {
    icon: Layout,
    title: "Responsive Design",
    desc: "Building interfaces that look flawless on mobile, tablet, and desktop screens.",
  },
  {
    icon: Gem,
    title: "Component Arch",
    desc: "Creating modular, reusable, and clean React or Next.js UI components.",
  },
  {
    icon: Square,
    title: "Interactive UI",
    desc: "Implementing smooth transitions, animations, and highly interactive layouts.",
  },
  {
    icon: Layers,
    title: "Design System Translation",
    desc: "Translating complex Figma tokens and design utilities perfectly into Tailwind CSS.",
  },
  {
    icon: User,
    title: "Performance & SEO",
    desc: "Optimizing web performance, page load times, and semantic HTML accessibility.",
  },
];

const tools = [
  { name: "Figma", icon: FaFigma, percent: 90, bg: "bg-purple-100", color: "text-[#F24E1E]" },
  { name: "Notion", icon: BookOpen, percent: 85, bg: "bg-gray-100", color: "text-gray-800" },
  { name: "VS Code", icon: VscVscode, percent: 80, bg: "bg-pink-100", color: "text-[#007ACC]" },
  { name: "Github", icon: SiGithub, percent: 75, bg: "bg-purple-100", color: "text-[#181717]" },
  { name: "Cisco Packet Tracer", icon: SiCisco, percent: 70, bg: "bg-gray-100", color: "text-[#1BA0D7]" },
  { name: "Wokwi", icon: Cpu, percent: 80, bg: "bg-pink-100", color: "text-[#00C16F]" },
];

const devSkillsLeft = [
  { name: "React / Next.js", percent: 85, icon: FaReact, bg: "bg-blue-50", color: "text-[#61DAFB]" },
  { name: "TypeScript", percent: 75, icon: SiTypescript, bg: "bg-blue-100", color: "text-[#3178C6]" },
  { name: "JavaScript (ES6+)", percent: 80, icon: IoLogoJavascript, bg: "bg-yellow-50", color: "text-[#F7DF1E]" },
];

const devSkillsRight = [
  { name: "Tailwind CSS", percent: 90, icon: SiTailwindcss, bg: "bg-sky-50", color: "text-[#06B6D4]" },
  { name: "HTML & CSS", percent: 90, icon: FaHtml5, bg: "bg-orange-50", color: "text-[#E34F26]" },
];

const softSkills = [
  {
    icon: MessageCircle,
    title: "Communication",
    desc: "Conveying ideas clearly and listening effectively.",
    bg: "bg-purple-100",
  },
  {
    icon: Users,
    title: "Collaboration",
    desc: "Working smoothly with cross-functional teams.",
    bg: "bg-lime-100",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    desc: "Approaching challenges with logic and creativity.",
    bg: "bg-pink-100",
  },
  {
    icon: Clock,
    title: "Time Management",
    desc: "Staying organized and delivering on time.",
    bg: "bg-yellow-50",
  },
  {
    icon: Waves,
    title: "Adaptability",
    desc: "Learning fast and adapting to new challenges.",
    bg: "bg-pink-100",
  },
  {
    icon: Users,
    title: "Teamwork",
    desc: "Collaborating and growing together with the team.",
    bg: "bg-gray-100",
  },
];

export default function Skills() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="relative pt-8 sm:pt-12 pb-12 sm:pb-16 md:pb-20">
        <div className="flex flex-col gap-12 items-start">
          <div className="relative">
            <div className="inline-flex items-center gap-2 border border-gray-300 text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full mb-5 sm:mb-6">
              My Skills <Sparkle className="w-4 h-4" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-5 sm:mb-6">
              Skills that
              <br />
              bring{" "}
              <span className="relative inline-block text-purple-500">
                ideas
                <svg
                  className="absolute left-0 -bottom-2 w-full"
                  height="10"
                  viewBox="0 0 200 10"
                  fill="none"
                >
                  <path
                    d="M2 8C40 2 120 2 198 8"
                    stroke="#D4F537"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              to life
            </h1>

            <p className="text-gray-500 max-w-md mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              I bridge the gap between design and code, turning creative visions into functional, high-performance, and pixel-perfect web applications.{" "}
              <Heart className="inline w-4 h-4 text-purple-400" />
            </p>
          </div>
        </div>
      </section>

      {/* ── 1. Developer Skills ── */}
      <section className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-8 items-start border border-gray-100 rounded-3xl p-5 sm:p-6 md:p-8 mb-6 md:mb-8">
        <div>
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-pink-200 flex items-center justify-center mb-4">
            <Code2 className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-3">Developer Skills</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Front-end development skills that help me bring designs to life
            on the web.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          <div className="space-y-6">
            {devSkillsLeft.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percent={skill.percent} icon={skill.icon} bg={skill.bg} color={skill.color} />
            ))}
          </div>
          <div className="space-y-6">
            {devSkillsRight.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} percent={skill.percent} icon={skill.icon} bg={skill.bg} color={skill.color} />
            ))}
          </div>
        </div>
      </section>

      {/* ── 2. Tools I Use ── */}
      <section className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-8 items-start border border-gray-100 rounded-3xl p-5 sm:p-6 md:p-8 mb-6 md:mb-8">
        <div>
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-lime-200 flex items-center justify-center mb-4">
            <Settings className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-3">Tools I Use</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            The tools I use to design, prototype, and collaborate
            efficiently.
          </p>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4">
          {tools.map((tool) => {
            const ToolIcon = tool.icon;
            return (
              <div key={tool.name} className="flex flex-col items-center gap-2">
                <div
                  className={`${tool.bg} w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center text-base`}
                >
                  <ToolIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${tool.color || ""}`} />
                </div>
                <span className="text-[11px] sm:text-xs text-gray-500 text-center leading-tight">
                  {tool.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 3. Design Skills ── */}
      <section className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-8 items-start border border-gray-100 rounded-3xl p-5 sm:p-6 md:p-8 mb-6 md:mb-8">
        <div>
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-purple-200 flex items-center justify-center mb-4">
            <Layout className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-3">Design Skills</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            I design clean, modern, and user-centered interfaces that focus
            on both aesthetics and usability.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {designSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.title}
                className="border border-gray-200 rounded-2xl p-4 sm:p-5"
              >
                <Icon className="w-6 h-6 mb-3 sm:mb-4" />
                <p className="font-bold text-sm mb-2">{skill.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── 4. Soft Skills ── */}
      <section className="grid md:grid-cols-[1fr_3fr] gap-6 md:gap-8 items-start border border-gray-100 rounded-3xl p-5 sm:p-6 md:p-8 mb-14 sm:mb-16 md:mb-20">
        <div>
          <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-purple-200 flex items-center justify-center mb-4">
            <Star className="w-5 h-5" />
          </div>
          <h2 className="text-lg sm:text-xl font-bold mb-3">Soft Skills</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Beyond technical skills, these abilities help me work and grow in
            every project.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {softSkills.map((skill) => {
            const Icon = skill.icon;
            return (
              <div key={skill.title} className="text-center">
                <div
                  className={`${skill.bg} w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <p className="font-bold text-sm mb-1">{skill.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

function SkillBar({
  name,
  percent,
  icon: IconComponent,
  bg,
  color,
}: {
  name: string;
  percent: number;
  icon: React.ComponentType<any>;
  bg: string;
  color?: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between mb-2 gap-2">
        <div className="flex items-center gap-2 min-w-0">
          <div
            className={`${bg} w-7 h-7 rounded-md flex items-center justify-center shrink-0`}
          >
            <IconComponent className={`w-4 h-4 ${color || "text-gray-800"}`} />
          </div>
          <span className="text-sm font-medium truncate">{name}</span>
        </div>
        <span className="text-sm text-gray-500 shrink-0">{percent}%</span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-pink-400 rounded-full"
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
}