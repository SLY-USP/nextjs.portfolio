export default function Portfolio() {
  const projects = [1, 2, 3, 4, 5, 6]; // Placeholderlar

  return (
    <section className="relative">
      {/* Yuqori qism - Fon rasmi bilan */}
      <div className="h-64 bg-cover bg-center flex items-center justify-center relative" 
           style={{ backgroundImage: "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <h2 className="relative z-10 text-2xl font-black border-[5px] border-black bg-[#E5E5E5]/80 px-12 py-3 uppercase tracking-[0.3em]">
          Portfolio
        </h2>
      </div>

      {/* Filter Menu */}
      <div className="bg-[#1A1A1A] py-4 flex justify-center gap-8 text-[10px] font-bold text-white uppercase tracking-widest">
        <button className="border-b border-white pb-1">All</button>
        <button className="opacity-50 hover:opacity-100 transition">Coded</button>
        <button className="opacity-50 hover:opacity-100 transition">Designed</button>
      </div>

      {/* Galereya Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3">
        {projects.map((p) => (
          <div key={p} className="relative aspect-video group overflow-hidden bg-gray-800">
            <img 
              src={`https://picsum.photos/seed/${p+10}/600/400`} 
              className="w-full h-full object-cover  group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500" 
              alt="Project"
            />
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-6 text-center">
              <h4 className="font-bold uppercase tracking-widest mb-2">Project Name</h4>
              <p className="text-[10px] mb-4">coded, designed</p>
              <button className="border-2 border-white px-6 py-1 text-[10px] font-bold">MORE</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="bg-[#1A1A1A] py-6 text-center">
        <p className="text-white text-[10px] font-bold tracking-widest uppercase">And many more to come!</p>
      </div>
    </section>
  );
}