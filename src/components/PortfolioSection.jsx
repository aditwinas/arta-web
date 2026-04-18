export default function PortfolioSection() {
  return (
    <section className="py-32 px-12 bg-surface">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center mb-20">
          <div className="mb-4 inline-block px-4 py-1.5 rounded-full bg-secondary/10 text-secondary text-sm font-bold tracking-widest uppercase">Pencapaian Utama</div>
          <h2 className="text-5xl md:text-6xl font-black text-primary mb-6">Kelola Pendapatan Tahunan <br /><span className="text-gradient">Lebih dari 20 Miliar</span></h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Portofolio agregasi kami berfokus pada industri ritel dan jasa dengan imbal hasil tinggi serta pertumbuhan yang berkelanjutan.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-3 gap-4 h-auto md:h-[1200px]">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-2xl">
            <img alt="Interior restoran mewah" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/portfolio-fb.webp" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
            <div className="absolute bottom-8 left-8">
              <p className="text-white/70 text-sm font-bold uppercase tracking-widest mb-2">Sektor Utama</p>
              <h3 className="text-white text-3xl font-black">F&amp;B Hospitality</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img alt="Studio photobox modern" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/portfolio-photobox.webp" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl font-bold">Photobox Retail</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img alt="Klinik gigi modern" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/portfolio-dental.webp" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl font-bold">Dental Retail</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img alt="Pusat kebugaran modern" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/portfolio-wellness.webp" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl font-bold">Wellness</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl">
            <img alt="Ruang kreatif komunal" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/portfolio-compound.webp" loading="lazy" decoding="async" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl font-bold">Compound Space</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl bg-slate-900">
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="material-symbols-outlined text-white text-[100px]">minor_crash</span>
            </div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl font-bold">Automotive Aftermarket</h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-2xl bg-slate-800">
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="material-symbols-outlined text-white text-[100px]">shopping_cart_checkout</span>
            </div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl font-bold">E-commerce Enabler</h3>
            </div>
          </div>
          <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-slate-700">
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-80"></div>
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <span className="material-symbols-outlined text-white text-[100px]">palette</span>
            </div>
            <div className="absolute bottom-6 left-6">
              <h3 className="text-white text-xl font-bold">Creative Agency</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
