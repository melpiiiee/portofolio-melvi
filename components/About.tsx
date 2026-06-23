import Image from "next/image";
import {
  Hand,
  Sparkle,
  ArrowLeftRight,
  Heart,
  Smile,
  Folder,
  Coffee,
  Star,
  Pen,
  Wrench,
  Layout,
  Gem,
  Square,
  Layers,
  User,
  Gamepad2,
  Headphones,
  Camera,
  Cpu,
  BookOpen,
} from "lucide-react";
import {
    FaFigma,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { SiGithub, SiCisco } from "react-icons/si";

const stats = [
  { value: "2+", label: "Years\nExperience", bg: "bg-pink-100", icon: Smile },
  { value: "5+", label: "Projects\nCompleted", bg: "bg-purple-100", icon: Folder },
  { value: "∞", label: "Cups of\ncoffee", bg: "bg-pink-100", icon: Coffee },
];

const coreCapabilities = [
  "Responsive Web Development",
  "Design System Integration",
  "Interactive UI & Animation",
  "State Management",
];

const tools = [
  { name: "Figma", icon: FaFigma, bg: "bg-purple-100", color: "text-[#F24E1E]" },
  { name: "Notion", icon: BookOpen, bg: "bg-gray-100", color: "text-black" },
  { name: "VS Code", icon: VscVscode, bg: "bg-pink-100", color: "text-[#007ACC]"},
  { name: "Github", icon: SiGithub, bg: "bg-purple-100", color: "text-[#181717]"},
  { name: "Cisco Packet Tracer", icon: SiCisco, bg: "bg-gray-100", color: "text-[#1BA0D7]"},
  { name: "Wokwi", icon: Cpu, bg: "bg-pink-100", color: "text-[#2B9A47]"},
];

const inspirations = [
  {
    icon: Gamepad2,
    title: "K-drama",
    desc: "Fuel for creativity and imagination.",
    bg: "bg-purple-100",
  },
  {
    icon: Coffee,
    title: "Coffee",
    desc: "My productivity booster!",
    bg: "bg-lime-100",
  },
  {
    icon: Headphones,
    title: "Lo-fi Music",
    desc: "The perfect vibe to focus.",
    bg: "bg-pink-100",
  },
  {
    icon: Camera,
    title: "Photography",
    desc: "Capturing moments, inspiring ideas.",
    bg: "bg-blue-100",
  },
];

export default function About() {
  return (
    <>
      {/* Hero / Intro */}
      <section className="relative pt-8 sm:pt-12 pb-12 sm:pb-16 md:pb-20">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          <div className="relative text-center md:text-left order-2 md:order-1">
            <div className="inline-flex items-center gap-2 border border-gray-300 text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full mb-5 sm:mb-6">
              About Me <Hand className="w-4 h-4" />
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-5 sm:mb-6">
              Hi, I&apos;m
              <br />
              <span className="relative inline-block text-purple-500">
                Melvi!
                <svg
                  className="absolute left-0 -bottom-2 w-full"
                  height="10"
                  viewBox="0 0 300 10"
                  fill="none"
                >
                  <path
                    d="M2 8C50 2 150 2 298 8"
                    stroke="#D4F537"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="text-gray-500 max-w-md mx-auto md:mx-0 mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
              Design-Minded Frontend Developer based in Indonesia. I implement clean component architecture and interactive layouts, bridging the gap between beautiful design and scalable production-ready code.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-3">
              <span className="font-hand text-3xl sm:text-4xl text-gray-800">Melvi</span>
              <Heart className="w-5 h-5 text-purple-400" />
            </div>
          </div>

          {/* Right - photo with blob */}
          <div className="relative flex justify-center items-center order-1 md:order-2 py-6 md:py-0">
            <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] border-2 border-dashed border-purple-300 rounded-full" />

            <svg
              className="absolute w-[240px] h-[260px] sm:w-[310px] sm:h-[340px] md:w-[380px] md:h-[420px]"
              viewBox="0 0 380 420"
              fill="none"
              preserveAspectRatio="xMidYMid meet"
            >
              <path
                d="M190 10C280 10 360 70 365 160C370 250 320 330 230 380C140 420 50 400 20 320C-10 240 10 140 60 80C100 30 140 10 190 10Z"
                fill="#D9C9F9"
              />
            </svg>

            <div className="relative w-[200px] h-[230px] sm:w-[260px] sm:h-[300px] md:w-[320px] md:h-[380px] rounded-[40%_60%_55%_45%/55%_45%_60%_40%] overflow-hidden z-10">
              <Image
                src="/melpi.png"
                alt="melvi"
                fill
                className="object-cover"
                priority
              />
            </div>

            <Sparkle className="absolute top-4 sm:top-8 left-0 sm:left-0 w-6 h-6 sm:w-8 sm:h-8 text-gray-800" />

            <svg
              className="absolute top-1/2 right-0 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16"
              viewBox="0 0 80 80"
              fill="none"
            >
              <path
                d="M5 5C20 25 5 40 25 50C45 60 30 75 50 75"
                stroke="#1a1a1a"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>

            <div className="absolute top-8 sm:top-12 md:top-16 -right-1 sm:-right-2 md:-right-4 bg-white border-2 border-gray-900 rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1 shadow-sm">
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            </div>

            <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 -right-2 sm:-right-4 md:-right-8 bg-yellow-100 border-l-4 border-purple-300 rounded-sm px-3.5 sm:px-5 py-3 sm:py-4 max-w-[120px] sm:max-w-[140px] md:max-w-[160px] shadow-md -rotate-2">
              <p className="font-semibold text-xs sm:text-sm leading-snug">
                Designing with purpose, building with passion.
              </p>
              <Smile className="absolute top-2 right-2 w-4 h-4" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-8 sm:py-10 px-5 sm:px-8 border border-gray-100 rounded-3xl mb-14 sm:mb-16 md:mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="flex items-center gap-4">
                <div
                  className={`${stat.bg} w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center shrink-0`}
                >
                  <Icon className="w-5 h-5 text-gray-800" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-gray-500 whitespace-pre-line">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* My Journey */}
      <section className="grid md:grid-cols-2 gap-8 md:gap-12 mb-14 sm:mb-16 md:mb-20">
        <div>
          <span className="inline-flex items-center gap-2 border border-gray-300 text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-6">
            My Journey <Star className="w-4 h-4" />
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
            How it all
            <br />
            <span className="relative inline-block text-purple-500">
              started
              <svg
                className="absolute left-0 -bottom-1 w-full"
                height="8"
                viewBox="0 0 200 8"
                fill="none"
              >
                <path
                  d="M2 6C40 2 100 2 198 6"
                  stroke="#D4F537"
                  strokeWidth="5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            <Sparkle className="inline w-5 h-5 sm:w-6 sm:h-6" />
          </h2>
        </div>

        <div className="space-y-4 text-gray-500 leading-relaxed text-sm sm:text-base">
          <p>
            I've always been curious about how things work—especially things that live on screens. That curiosity led me into the world of web development.
          </p>
          <p>
            I love turning dynamic ideas into interactive realities through clean component architecture and pixel-perfect implementation.
          </p>
          <p>
            When I'm not coding, I'm probably learning something new, watching k-drama, or enjoying a good coffee.
          </p>
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="mb-14 sm:mb-16 md:mb-20">
        <div className="grid md:grid-cols-[1fr_2fr] gap-8 md:gap-12 mb-8 md:mb-10">
          <div>
            <span className="inline-flex items-center gap-2 border border-gray-300 text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-6">
              Skills &amp; Tools <Wrench className="w-4 h-4" />
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
              What I&apos;m
              <br />
              <span className="text-purple-500">good at</span>{" "}
              <Pen className="inline w-5 h-5 sm:w-6 sm:h-6" />
            </h2>
            <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
              These are the skills and tools I use to bring ideas to life.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            <div className="border border-gray-200 rounded-2xl p-5 sm:p-6">
              <p className="font-bold mb-3 sm:mb-4">Core Capabilities</p>
              <ul className="space-y-2.5 sm:space-y-3">
                {coreCapabilities.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-xs sm:text-sm text-gray-600"
                  >
                    <span className="text-purple-400">✦</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-gray-200 rounded-2xl p-5 sm:p-6">
              <p className="font-bold mb-3 sm:mb-4">Tools I Use</p>
              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {tools.map((tool) => {
                  const ToolIcon = tool.icon;
                  return (
                    <div
                      key={tool.name}
                      className="flex flex-col items-center gap-2"
                    >
                      <div
                        className={`${tool.bg} w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center text-xl`}
                      >
                        <ToolIcon className={`w-5 h-5 sm:w-6 sm:h-6 ${tool.color || "text-gray-800"}`} />
                      </div>
                      <span className="text-[10px] sm:text-[11px] text-gray-500 text-center font-medium leading-tight">
                        {tool.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Love */}
      <section className="mb-14 sm:mb-16 md:mb-20">
        <span className="inline-flex items-center gap-2 border border-gray-300 text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-1.5 rounded-full mb-5 sm:mb-6">
          What I Love <Heart className="w-4 h-4" />
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold leading-tight mb-6 sm:mb-8">
          Things that
          <br />
          <span className="text-purple-500">inspire</span> me{" "}
          <Heart className="inline w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {inspirations.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className={`${item.bg} rounded-2xl p-4 sm:p-6`}>
                <Icon className="w-6 h-6 sm:w-7 sm:h-7 mb-3 sm:mb-4 text-gray-800" />
                <p className="font-bold mb-1 text-sm sm:text-base">{item.title}</p>
                <p className="text-xs sm:text-sm text-gray-600">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}