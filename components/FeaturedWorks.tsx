import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Minion Barbershop",
    category: "Company Profile",
    image: "/webminion.png",
    bg: "bg-purple-100",
    accent: "#7C5CFC",
  },
  {
    id: 2,
    title: "BivaScan",
    category: "Classification",
    image: "/bivascan.png",
    bg: "bg-pink-100",
    accent: "#FF5FA0",
  },
  {
    id: 3,
    title: "NgijangYuk",
    category: "Dashboard",
    image: "/NgijangYuk.png",
    bg: "bg-green-100",
    accent: "#22C55E",
  },
];

export default function FeaturedWorks() {
  return (
    <section id="works" className="py-20">
      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="inline-block bg-purple-100 text-purple-600 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Featured Works
          </span>
          <h2 className="text-4xl font-bold leading-tight">
            Some of my
            <br />
            favorite <span className="text-purple-500">projects</span> ✎
          </h2>
        </div>
        <Link
          href="/works"
          className="hidden md:flex items-center gap-2 font-semibold hover:text-purple-500 transition-colors"
        >
          View All Projects <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="group">
            <Link href="/works">
              <div className={`${project.bg} rounded-2xl aspect-[4/3] relative overflow-hidden mb-4`}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            </Link>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-bold">{project.title}</p>
                <p className="text-sm text-gray-500">{project.category}</p>
              </div>
              <Link href="/works">
                <button
                  aria-label={`View ${project.title}`}
                  className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors shrink-0"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}