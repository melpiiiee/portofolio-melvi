import Navbar from "@/components/Navbar";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <Navbar />
      <About />
      <CTA />
      <Footer />
    </main>
  );
}