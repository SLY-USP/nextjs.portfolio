export default function Contact() {
  return (
    <section className="bg-[#E5E5E5] py-20 px-4 flex flex-col items-center">
      <div className="mb-12 text-center">
        <h2 className="inline-block text-2xl font-black border-[5px] border-black px-12 py-3 uppercase tracking-[0.3em] mb-8">
          Contact
        </h2>
        <p className="text-[11px] text-gray-600 max-w-md mx-auto leading-relaxed">
          Bog'lanish Uchun
        </p>
        <div className="mt-6 flex justify-center items-center gap-2">
          <div className="h-[2px] w-8 bg-black"></div>
          <span className="text-xs font-bold tracking-tighter">\\\\\</span>
          <div className="h-[2px] w-8 bg-black"></div>
        </div>
      </div>

      <form className="w-full max-w-xl space-y-8 mt-8">
        <input
          type="text"
          placeholder="Ismingizni Kiriting*"
          className="w-full bg-transparent border-l-4 border-b-4 border-black p-3 text-xs font-bold tracking-widest placeholder:text-gray-400 outline-none focus:bg-white/50 transition-all"
        />
        <input
          type="email"
          placeholder="Emailngizni Kiriting*"
          className="w-full bg-transparent border-l-4 border-b-4 border-black p-3 text-xs font-bold tracking-widest placeholder:text-gray-400 outline-none focus:bg-white/50 transition-all"
        />
        <input
          type="text"
          placeholder="Telefon Raqamingizni Kiriting"
          className="w-full bg-transparent border-l-4 border-b-4 border-black p-3 text-xs font-bold tracking-widest placeholder:text-gray-400 outline-none focus:bg-white/50 transition-all"
        />
        <textarea
          rows="4"
          placeholder="Sizning So'rovingiz*"
          className="w-full bg-transparent border-l-4 border-b-4 border-black p-3 text-xs font-bold tracking-widest placeholder:text-gray-400 outline-none focus:bg-white/50 transition-all"
        />

        <div className="flex justify-center mt-12">
          <button className="border-l-4 border-r-4 border-black px-12 py-2 text-xs font-black tracking-[0.3em] hover:bg-black hover:text-white transition-all uppercase">
            Yuborish
          </button>
        </div>
      </form>
    </section>
  );
}
