import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-gray-100">
      {/* Container utama menggunakan flex-col di mobile, dan flex-row di md ke atas */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-center md:text-left">
        
        {/* Logo/Nama */}
        <div className="flex items-center gap-1 text-lg font-bold">
          melvi.
          <span className="text-purple-500">*</span>
        </div>

        {/* Copyright - diletakkan di tengah atau bawah pada mobile */}
        <p className="text-sm text-gray-400 order-3 md:order-2">
          © 2026 Melvi. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-gray-700 order-2 md:order-3">
          <a href="https://instagram.com/melpiiiee" aria-label="Instagram" className="hover:text-purple-500 transition-colors">
            <FaInstagram className="w-5 h-5" />
          </a>
          <a href="https://www.linkedin.com/in/melvi-najiha-azzahroh-886544294" aria-label="LinkedIn" className="hover:text-purple-500 transition-colors">
            <FaLinkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/melpiiiee" aria-label="Github" className="hover:text-purple-500 transition-colors">
            <FaGithub className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}