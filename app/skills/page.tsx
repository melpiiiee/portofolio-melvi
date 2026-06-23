import Navbar from "@/components/Navbar";
import Skills from "@/components/Skills";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function SkillsPage() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <Navbar />
      <Skills />
      <CTA />
      <Footer />
    </main>
  );
}