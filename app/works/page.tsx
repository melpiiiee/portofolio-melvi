import Navbar from "@/components/Navbar";
import Works from "@/components/Works";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function WorksPage() {
  return (
    <main className="max-w-7xl mx-auto px-6">
      <Navbar />
      <Works />
      <CTA />
      <Footer />
    </main>
  );
}