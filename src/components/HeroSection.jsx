export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-[900px] flex items-center">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-surface-container to-surface"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
      </div>
      <div className="max-w-screen-2xl mx-auto px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-2xl">
          <h1 className="text-5xl lg:text-7xl font-black text-primary leading-[1.1] tracking-tighter mb-8">
            <span className="block text-gradient">Ekskalasi Bisnis,</span>
            dan Amankan Masa Depan
          </h1>
          <p className="text-xl text-on-surface-variant mb-10 leading-relaxed max-w-xl">
            Kami adalah ekosistem yang dirancang untuk mempercepat pertumbuhan brand melalui pendanaan strategis, operasional menyeluruh, dan inovasi pemasaran.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-br from-secondary to-primary text-on-primary px-10 py-4 rounded-lg font-bold text-lg hover:scale-105 duration-200 transition-all shadow-[0_20px_40px_-15px_rgba(43,92,207,0.5)]">Investasi Sekarang</button>
            <button className="border border-outline-variant/30 text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-low transition-all">Kemitraan Brand</button>
          </div>
        </div>
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-white">
          <img alt="Grafik pertumbuhan bisnis modern 3D dengan gaya Apple UI" className="w-full h-full object-contain" src="/images/hero-graphic.webp" loading="lazy" decoding="async" />
          <div className="absolute bottom-8 left-8 z-20 glass-nav p-6 rounded-xl border border-white/20">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary">trending_up</span>
              </div>
              <div>
                <p className="text-primary font-bold text-xl leading-none">20M+</p>
                <p className="text-on-surface-variant text-sm font-medium">Pendapatan Tahunan Dikelola</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
