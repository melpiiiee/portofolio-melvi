import Link from "next/link";
import { Smile, Folder, Heart, Coffee, Gamepad2, Headphones, Sparkles } from "lucide-react";

const stats = [
  { value: "2+", label: "Years\nExperience", bg: "bg-lime-100", icon: Smile },
  { value: "5+", label: "Projects\nCompleted", bg: "bg-purple-100", icon: Folder },
];

const facts = [
  { icon: Coffee, text: "Coffee is my productivity fuel" },
  { icon: Gamepad2, text: "I love k-drama" },
  { icon: Headphones, text: "Lo-fi music helps me focus" },
];

export default function AboutMe() {
  return (
    <section
      id="about"
      className="py-10 px-5 sm:py-12 sm:px-8 md:py-16 md:px-12 border border-gray-100 rounded-3xl mt-8"
    >
      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Left */}
        <div>
          <span className="inline-block bg-pink-100 text-pink-600 text-sm font-medium px-4 py-1.5 rounded-full mb-5 md:mb-6">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Get to know
            <br />
            the real <span className="text-purple-500">me</span> ✌️
          </h2>
          <p className="text-gray-500 mb-6 md:mb-8 leading-relaxed max-w-sm text-sm sm:text-base">
            I'm a Design-Minded Frontend Developer who loves turning complex ideas into clean, pixel-perfect, and functional web applications.
          </p>
          <Link
            href="/about"
            className="border border-gray-300 rounded-full px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-semibold flex items-center gap-2 hover:bg-gray-50 transition-colors">
            More About Me <span>→</span>
          </Link>
        </div>

        {/* Right */}
        <div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-5 sm:mb-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.value}
                  className={`${stat.bg} rounded-2xl p-4 sm:p-5 flex flex-col gap-4 sm:gap-6`}
                >
                  <Icon className="w-5 h-5" />
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold">{stat.value}</p>
                    <p className="text-xs sm:text-sm text-gray-600 whitespace-pre-line">
                      {stat.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="border border-gray-200 rounded-2xl p-5 sm:p-6 flex items-center justify-between gap-4">
            <div>
              <p className="font-bold mb-3 sm:mb-4">Fun facts about me!</p>
              <ul className="space-y-2.5 sm:space-y-3">
                {facts.map((fact) => {
                  const Icon = fact.icon;
                  return (
                    <li
                      key={fact.text}
                      className="flex items-center gap-3 text-xs sm:text-sm text-gray-600"
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      {fact.text}
                    </li>
                  );
                })}
              </ul>
            </div>
            <Sparkles className="w-10 h-10 sm:w-12 sm:h-12 text-lime-400 shrink-0 hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
}