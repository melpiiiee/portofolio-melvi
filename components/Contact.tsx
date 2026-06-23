"use client";

import { useState } from "react";
import {
  Hand,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Heart,
} from "lucide-react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "melvinazzahroh@gmail.com",
    bg: "bg-purple-100",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+62 895 6294 83289",
    bg: "bg-lime-100",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tanjung Pinang, Kepulauan Riau, Indonesia",
    bg: "bg-pink-100",
  },
];

const socials = [
  { 
    icon: FaInstagram, 
    label: "Instagram",
    href: "https://instagram.com/melpiiiee" 
  },
  { 
    icon: FaLinkedin, 
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/melvi-najiha-azzahroh-886544294?utm_source=share_via&utm_content=profile&utm_medium=member_ios" 
  },
  { 
    icon: FaGithub, 
    label: "Github",
    href: "https://github.com/melpiiiee" 
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData();
    // Taruh Access Key asli Web3Forms milikmu di sini:
    formData.append("access_key", "42ded39b-c331-4a55-9a34-d5723b881fce"); 
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("subject", form.subject);
    formData.append("message", form.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        alert("Gagal mengirim: " + (result.message || "Periksa kembali Access Key Anda."));
      }
    } catch (error) {
      console.error("Submit error:", error);
      alert("Terjadi kesalahan jaringan.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="py-8 sm:py-10 md:py-12 px-1">
      <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12 md:mb-14">
        <span className="inline-flex items-center gap-2 border border-gray-300 text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full mb-5 sm:mb-6">
          Get In Touch <Hand className="w-4 h-4" />
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
          Let&apos;s create something
          <br />
          <span className="text-purple-500">awesome</span> together
        </h1>
        <p className="text-gray-500 leading-relaxed text-sm sm:text-base">
          Have a project in mind or just want to say hi? I&apos;d love to
          hear from you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {/* KIRI - Contact Info & Socials */}
        <div className="relative">
          {/* Sticker dipindah ke atas konten di mobile supaya nggak nutupin */}
          <div className="md:hidden mb-6 bg-yellow-100 border-l-4 border-purple-300 rounded-sm px-4 py-3 max-w-[220px] mx-auto shadow-md">
            <p className="font-semibold text-xs leading-snug text-center">
              Let&apos;s build something great.{" "}
              <Heart className="inline w-3 h-3" />
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 sm:gap-4 border border-gray-200 rounded-2xl p-4 sm:p-5"
                >
                  <div className={`${item.bg} w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-gray-500">{item.label}</p>
                    <p className="font-semibold text-sm sm:text-base break-words">{item.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div>
            <p className="font-bold mb-3 sm:mb-4">Follow Me</p>
            <div className="flex items-center gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Sticker desktop - tetap absolute biar nggak ganggu layout */}
          <div className="absolute -top-4 right-4 hidden md:block bg-yellow-100 border-l-4 border-purple-300 rounded-sm px-4 py-3 max-w-[150px] shadow-md rotate-2">
            <p className="font-semibold text-xs leading-snug">
              Let&apos;s build something great.{" "}
              <Heart className="inline w-3 h-3" />
            </p>
          </div>
        </div>

        {/* KANAN - Form Area */}
        <div className="border border-gray-200 rounded-3xl p-5 sm:p-6 md:p-8">
          {submitted && (
            <div className="bg-lime-100 text-sm font-medium px-4 py-3 rounded-xl mb-6">
              Thanks! Your message has been sent. I&apos;ll get back to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full border border-gray-300 rounded-xl px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-purple-400 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="Project inquiry"
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-purple-400 transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                className="w-full border border-gray-300 rounded-xl px-4 py-2.5 sm:py-3 text-sm focus:outline-none focus:border-purple-400 transition-colors resize-none"
              />
            </div>

            {/* Tombol kirim HARUS berada sebelum tag penutup </form> */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 bg-lime-400 text-black font-semibold px-6 py-3 sm:py-3.5 rounded-full hover:scale-[1.02] transition-transform disabled:bg-gray-200 disabled:text-gray-400 disabled:scale-100 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
              {!isSubmitting && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}