import { Facebook, Linkedin, Instagram, Mail } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-16 flex flex-col items-center text-white">
      <button className="mb-12 group flex flex-col items-center gap-2">
        <span className="text-lg">^</span>
        <span className="text-[10px] font-bold tracking-[0.3em] uppercase group-hover:mb-2 transition-all">Teapaga qaytish</span>
      </button>

      <div className="flex gap-8 mb-12">
        <Facebook size={20} className="cursor-pointer hover:text-gray-400 transition" />
        <Linkedin size={20} className="cursor-pointer hover:text-gray-400 transition" />
        <Instagram size={20}  className="cursor-pointer hover:text-gray-400 transition" />
        <Mail size={20} className="cursor-pointer hover:text-gray-400 transition" />
      </div>

      <p className="text-[10px] tracking-widest opacity-60 uppercase font-bold">
        2026 Senior Portfolio Asadbek Azizjonov
      </p>
    </footer>
  );
}