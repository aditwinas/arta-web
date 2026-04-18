export default function InvestorSection() {
  return (
    <section className="py-32 px-12 overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-secondary-container opacity-20 blur-[100px] -z-10"></div>
            <div className="p-12 bg-primary-container rounded-3xl text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-20">
                <span className="material-symbols-outlined text-[120px]" style={{ fontVariationSettings: "'FILL' 1" }}>security</span>
              </div>
              <h4 className="text-on-primary-container font-bold uppercase tracking-widest text-sm mb-4">Tolok Ukur Investasi</h4>
              <div className="flex flex-col gap-1 mb-10 mt-6">
                <span className="text-7xl lg:text-8xl font-black">18%</span>
                <span className="text-xl text-on-primary-container">Imbal Hasil Tahunan Tetap</span>
              </div>
              <div className="space-y-6 mb-10">
                <div className="flex items-center justify-between p-5 bg-white/5 rounded-lg border border-white/10">
                  <span className="font-medium text-slate-300 text-sm sm:text-base">Pembayaran Bulanan</span>
                  <span className="font-bold text-secondary-container">1.5% Tetap</span>
                </div>
                <div className="flex items-center justify-between p-5 bg-white/5 rounded-lg border border-white/10">
                  <span className="font-medium text-slate-300 text-sm sm:text-base">Modal Minimum</span>
                  <span className="font-bold text-white">Rp 500 Juta / Lot</span>
                </div>
                <div className="flex items-center justify-between p-5 bg-white/5 rounded-lg border border-white/10">
                  <span className="font-medium text-slate-300 text-sm sm:text-base">Tenor Kontrak</span>
                  <span className="font-bold text-white">3 Tahun</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-secondary-container">
                <span className="material-symbols-outlined">verified</span>
                <span className="font-semibold text-sm">Transparansi &amp; Keamanan Terjamin</span>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl font-extrabold text-primary mb-8">Mengungguli Aset Tradisional</h2>
            <p className="text-on-surface-variant text-lg mb-10 leading-relaxed">
              Meskipun deposito bank tradisional dan SBN menawarkan stabilitas, ARTA Partners menyediakan profil imbal hasil yang lebih unggul dengan berinvestasi langsung pada aset riil yang menghasilkan arus kas dan terkelola. Ekosistem kami memastikan modal Anda tidak hanya diam, tetapi aktif mendorong pertumbuhan brand.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="p-8 bg-surface-container-low rounded-2xl">
                <p className="text-sm font-bold text-on-surface-variant mb-2">Deposito</p>
                <p className="text-3xl font-bold text-primary">~3-5%</p>
              </div>
              <div className="p-8 bg-surface-container-low rounded-2xl">
                <p className="text-sm font-bold text-on-surface-variant mb-2">SBN</p>
                <p className="text-3xl font-bold text-primary">~6%</p>
              </div>
              <div className="p-8 bg-secondary-container/20 rounded-2xl border border-secondary/20 shadow-sm">
                <p className="text-sm font-bold text-secondary mb-2">Yield ARTA</p>
                <p className="text-4xl font-black text-secondary">18%</p>
              </div>
            </div>
            <button className="flex items-center gap-3 font-bold text-secondary hover:translate-x-2 transition-all">
              Unduh Prospektus <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
