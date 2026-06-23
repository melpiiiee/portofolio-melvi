import { Sparkles, ArrowRight, Rocket } from "lucide-react";

export default function CTA() {
  return (
    <section id="contact" className="py-12">
      {/* Container utama: flex-col (tumpuk) di mobile, flex-row (samping) di md ke atas */}
      <div className="bg-gray-50 rounded-3xl px-6 py-10 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
        
        {/* Bagian Teks & Icon */}
        <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <Sparkles className="w-12 h-12 text-pink-400 fill-pink-400 shrink-0" />
          <h2 className="text-2xl md:text-3xl font-bold">
            Let&apos;s create something
            <br />
            <span className="text-purple-500">awesome</span> together!{" "}
            <Rocket className="inline w-6 h-6" />
          </h2>
        </div>

        {/* Tombol Kontak */}
        <a
          href="mailto:melvinazzahroh@gmail.com"
          className="flex items-center gap-2 bg-lime-400 text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform shrink-0"
        >
          Let&apos;s Talk! <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
}