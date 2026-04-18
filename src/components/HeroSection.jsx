export default function HeroSection() {
  return (
    <section className="relative min-h-[921px] flex items-center px-12 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="z-10">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-container/10 text-secondary text-xs font-bold tracking-[0.1em] uppercase mb-8">Asset Aggregator &amp; Growth Partner</span>
          <h1 className="text-[4rem] leading-[1.1] font-extrabold tracking-tighter text-primary mb-8">
            Eskalasi Brand, <br /><span className="text-gradient">Amankan Masa Depan.</span>
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-10 text-lg">
            ARTA Partners menjembatani kesenjangan antara pemilik brand visioner dan investor yang jeli melalui ekosistem Manajemen 360 kami yang komprehensif.
          </p>
          <div className="flex flex-wrap gap-6">
            <button className="bg-gradient-to-r from-secondary to-primary text-white px-10 py-4 rounded-lg font-bold text-lg shadow-xl shadow-blue-900/10 hover:translate-y-[-2px] transition-all">Eksplorasi Investasi</button>
            <button className="border border-outline-variant/30 text-primary px-10 py-4 rounded-lg font-bold text-lg hover:bg-surface-container-low transition-all">Kemitraan Brand</button>
          </div>
        </div>
        <div className="relative h-[600px] w-full rounded-2xl overflow-hidden shadow-2xl bg-white">
          <img alt="Grafik pertumbuhan bisnis modern 3D dengan gaya Apple UI" className="w-full h-full object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuASARKt5eyauDWufc1L8yPj_1Ap7WGiWrReFeRVSqo-mBeqfiUZSu0ryZkfsq29MPbtjRjXVRCoh-Y7giv37ZEC0vDwECH7QDwMOEiF7St-zjXvzZIE2933onL9vSMi-YFr-NbfwrOV7R46kRL0jkxOxWquW2JCRJiozhWlAZjPKdzsstiqPhIdvF2PKkjAPGeyCisryqXs8iXvgfr_7cIkt-75P_Z2mVa4IObku5G4JkBmV8mOw98Jdq7cgUY0c5nMmaD-RWEYOH9m" />
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
      {/* Background abstraction */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full opacity-10 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 500 500">
          <path className="text-secondary" d="M0,500 L500,0 L500,500 Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
