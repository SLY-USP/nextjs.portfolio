"use client";
import { Mail, Github, Instagram, Send } from "lucide-react";
import Skills from "./components/Skills";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Link from "next/link";
export default function Home() {
  return (
    <main className="min-h-screen bg-[#E5E5E5] overflow-x-hidden font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative h-[85vh] flex items-center">
        {/* Chap tomon - Matnlar (z-20 qora blok ustida ko'rinishi uchun) */}
        <div className="container mx-auto px-12 lg:px-24 relative z-20">
          <div className="max-w-2xl">
            {/* Logo */}
            <div className="mb-12">
              <div className="w-12 h-12 border-[4px] border-black flex items-center justify-center text-xl font-black italic">
                TG
              </div>
            </div>

            <div className="space-y-0 text-black">
              <p className="text-xl font-bold tracking-tight">Hi, I am</p>
              <h1 className="text-[75px] lg:text-[95px] font-[900] uppercase leading-[0.85] tracking-tighter">
                Asadbek <br /> Azizjonov
              </h1>
              <p className="text-[#828282] font-bold text-lg mt-4">
                Front-end Developer / UI Designer
              </p>
            </div>

            {/* IKONKALAR - To'g'rilangan joylashuv */}
            <div className="flex gap-4 mt-12">
              <a
                href="https://asadbekzizjonov01@gmail.com"
                className="bg-[#D1D1D1] p-3 shadow-md hover:bg-black hover:text-white transition-all duration-300 text-black"
              >
                <Mail size={24} strokeWidth={2.5} />
              </a>
              <Link  href="https://github.com/SLY-USP"
               className="bg-[#D1D1D1] p-3 shadow-md hover:bg-black hover:text-white transition-all duration-300 text-black">
                
                
              
                <Github size={24} strokeWidth={2.5} />
              </Link>
              
              <Link
                href="https://t.me/Jasur6007"
                className="bg-[#D1D1D1] p-3 shadow-md hover:bg-black hover:text-white transition-all duration-300 text-black"
              >
                <Send size={24} strokeWidth={2.5} />
              </Link>
              <Link href="https://www.instagram.com/azizjonov_909?igsh=OXB6Y3FnZmlxeTRz"
              className="bg-[#D1D1D1] p-3 shadow-md hover:bg-black hover:text-white transition-all duration-300 text-black">
              <Instagram />
              </Link>
            </div>
          </div>
        </div>

        {/* O'NG TOMON - QORA BLOK VA RASM */}
        <div
          className="absolute right-0 top-0 h-full w-[55%] bg-black z-10"
          style={{
            clipPath: "polygon(22% 0%, 100% 0%, 100% 100%, 0% 100%)",
          }}
        >
          <div className="relative h-full w-full flex flex-col items-center justify-end overflow-hidden">
            {/* Navigatsiya */}
            <nav className="absolute top-10 right-10 z-30 flex items-center gap-8 text-gray-600 text-[11px] font-bold uppercase tracking-widest">
              
            </nav>

            {/* RASMNI OQ-QORA QILISH VA TO'G'RI JOYLASHTIRISH */}
            <div className="relative w-full h-[95%] flex items-end justify-center">
              <img
                src="/photo.jpg"
                alt="Profile"
                className="h-full w-auto object-contain filter  contrast-125 brightness-110"
              />
              {/* filter grayscale: rasmni oq-qora qiladi */}
            </div>

            <p className="absolute bottom-6 text-[9px] text-[#4F4F4F] text-center max-w-[150px] leading-tight z-20">
              this is not my photo, but I dearly hope to get one just like this
            </p>
          </div>
        </div>
      </section>

      {/* 2. IT BERRIES SECTION (Pastki qora bo'lim) */}
      <section className="bg-[#1A1A1A] text-white py-20 px-12 lg:px-24">
        <h2 className="text-2xl font-black tracking-[0.2em] mb-6 uppercase">
          IT BERRIES
        </h2>
        <p className="text-[#909090] max-w-2xl text-sm leading-relaxed mb-10">
          Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
          varius finibus. Sed ornare sit amet lorem sed viverra.
        </p>
        <div className="border-l-2 border-white pl-4 text-[10px] font-black tracking-[0.2em] uppercase">
          READ MORE
        </div>
      </section>
      <Skills />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </main>
  );
}
