import Image from "next/image";
import { Heart, ArrowUpRight, Smile, Sparkle, Star } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-8 sm:pt-12 pb-12 sm:pb-16 md:pb-20">
      <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* Left content */}
        <div className="relative text-center md:text-left order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-600 text-xs sm:text-sm font-medium px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-full mb-5 sm:mb-6">
            Hey! I&apos;m Melvi <span>👋</span>
          </div>

          {/* Sticker - heart */}
          <div className="absolute -top-2 left-1/2 translate-x-16 sm:translate-x-24 md:left-64 md:translate-x-0 hidden md:block">
            <div className="bg-pink-200 rotate-12 rounded-2xl p-3 shadow-sm">
              <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-[1.1] mb-5 sm:mb-6">
            i build
            <br />
            interactive
            <br />
            <span className="relative inline-block text-purple-500">
              web experiences
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

          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-8">
            <a
              href="#works"
              className="flex items-center gap-2 bg-lime-400 text-black font-semibold px-6 py-3 rounded-full hover:scale-105 transition-transform text-sm sm:text-base"
            >
              View My Works <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#about"
              className="flex items-center gap-2 font-semibold hover:text-purple-500 transition-colors text-sm sm:text-base"
            >
              About Me <Smile className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right content - photo with blob */}
        <div className="relative flex justify-center items-center order-1 md:order-2 py-6 md:py-0">
          {/* Dotted circle */}
          <div className="absolute w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] md:w-[420px] md:h-[420px] border-2 border-dashed border-purple-300 rounded-full" />

          {/* Purple blob shape */}
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

          {/* Profile image - PLACEHOLDER, replace src with your own photo */}
          <div className="relative w-[200px] h-[230px] sm:w-[260px] sm:h-[300px] md:w-[320px] md:h-[380px] rounded-[40%_60%_55%_45%/55%_45%_60%_40%] overflow-hidden z-10">
            <Image
              src="/melpi.png"
              alt="Melvi"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Sticker - star outline */}
          <Sparkle className="absolute top-4 sm:top-8 left-0 w-6 h-6 sm:w-8 sm:h-8 text-gray-800" />

          {/* Sticker - pink star burst */}
          <Star className="absolute bottom-20 sm:bottom-28 md:bottom-32 left-1 sm:left-2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-pink-400 fill-pink-400 rotate-12" />

          {/* Squiggle line */}
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

          {/* "100" speech bubble */}
          <div className="absolute top-8 sm:top-12 md:top-16 -right-1 sm:-right-2 md:-right-4 bg-white border-2 border-gray-900 rounded-2xl px-3 sm:px-4 py-1.5 sm:py-2 flex items-center gap-1 shadow-sm">
            <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            <span className="font-bold text-xs sm:text-sm">100</span>
          </div>

          {/* "Available for project!" badge */}
          <div className="absolute bottom-8 sm:bottom-12 md:bottom-16 -right-2 sm:-right-4 md:-right-8 bg-lime-400 rounded-2xl px-3.5 sm:px-5 py-2.5 sm:py-3 max-w-[120px] sm:max-w-[140px] md:max-w-[150px] shadow-sm rotate-2">
            <p className="font-bold text-xs sm:text-sm leading-snug">
              Available for project!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}