export default function AboutMe() {
  return (
    <section className="bg-[#E5E5E5] py-20 px-4 flex flex-col items-center border-t border-black/10">
      <div className="mb-12">
        <h2 className="text-2xl font-black border-[5px] border-black px-12 py-3 uppercase tracking-[0.3em]">
          About Me
        </h2>
      </div>
      
      <div className="max-w-3xl text-center space-y-6 mb-16">
        <p className="text-sm leading-relaxed text-black font-medium">
           gw-72 senior o'quvchisi Front-end Developer man. Yoshim 16 da 10 sinf o'quvchisi man, Inglis va Rus tillarini bilaman.

        </p>
        <div className="w-24 h-1 bg-black mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full px-6">
        <div className="space-y-4">
          <h3 className="font-black uppercase tracking-widest flex items-center gap-2">
            <span className="text-xl">›</span> Design
          </h3>
          <p className="text-xs leading-loose text-gray-600">
           Dizaynni jonlantiraman! React, Next.js va Tailwind CSS kabi zamonaviy texnologiyalar yordamida tezkor, 
            moslashuvchan (responsive) va barcha qurilmalarda mukammal ishlaydigan veb-saytlarni ishlab chiqaman.
          
          </p>
        </div>
        <div className="space-y-4">
          <h3 className="font-black uppercase tracking-widest flex items-center gap-2">
            <span className="text-xl">›</span> Development
          </h3>
          <p className="text-xs leading-loose text-gray-600">
           Men React, Next.js va Tailwind CSS kabi zamonaviy texnologiyalardan foydalangan holda, barcha qurilmalarda tez va mukammal ishlaydigan veb-saytlarni yaratib beraman.
          </p>
        </div>
      </div>
    </section>
  );
}