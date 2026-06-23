import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 flex items-center justify-between border-t border-gray-100 flex-wrap gap-4">
      <div className="flex items-center gap-1 text-lg font-bold">
        melvi.
        <span className="text-purple-500">*</span>
      </div>
      <p className="text-sm text-gray-400">
        © 2026 Melvi. All rights reserved.
      </p>
      <div className="flex items-center gap-4 text-gray-700">
        <a href="https://instagram.com/melpiiiee" aria-label="Instagram">
          <FaInstagram className="w-5 h-5" />
        </a>
        <a href="https://www.linkedin.com/in/melvi-najiha-azzahroh-886544294?utm_source=share_via&utm_content=profile&utm_medium=member_ios" aria-label="LinkedIn">
          <FaLinkedin className="w-5 h-5" />
        </a>
        <a href="https://github.com/melpiiiee" aria-label="Github">
          <FaGithub className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}