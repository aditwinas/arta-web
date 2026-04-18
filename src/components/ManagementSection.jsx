export default function ManagementSection() {
  return (
    <section className="py-32 px-12 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5">
            <h2 className="text-4xl font-extrabold tracking-tight text-primary mb-8">Manajemen <br />Bisnis 360</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed mb-12">
              Perombakan operasional total dan sistem manajemen strategis yang dirancang untuk menghilangkan hambatan dan memaksimalkan profitabilitas bagi brand yang sedang berkembang.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-primary font-bold">Penguasaan operasional end-to-end</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-primary font-bold">Arsitektur keuangan strategis</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2"></div>
                <p className="text-primary font-bold">Ekspansi pasar yang agresif</p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-8 bg-surface-container-lowest rounded-xl hover:shadow-lg transition-all border border-transparent hover:border-secondary/10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">account_balance</span>
              <h3 className="text-xl font-bold text-primary mb-3">Keuangan</h3>
              <p className="text-on-surface-variant">Alokasi modal yang bijak, manajemen risiko, dan sistem pelaporan yang transparan.</p>
            </div>
            <div className="p-8 bg-surface-container-lowest rounded-xl hover:shadow-lg transition-all border border-transparent hover:border-secondary/10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">settings_suggest</span>
              <h3 className="text-xl font-bold text-primary mb-3">Operasional</h3>
              <p className="text-on-surface-variant">Merampingkan alur kerja dan rantai pasokan untuk mencapai efisiensi operasional puncak.</p>
            </div>
            <div className="p-8 bg-surface-container-lowest rounded-xl hover:shadow-lg transition-all border border-transparent hover:border-secondary/10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">rocket_launch</span>
              <h3 className="text-xl font-bold text-primary mb-3">Pengembangan</h3>
              <p className="text-on-surface-variant">Waralaba, pencarian lokasi, dan penskalaan infrastruktur untuk dominasi regional.</p>
            </div>
            <div className="p-8 bg-surface-container-lowest rounded-xl hover:shadow-lg transition-all border border-transparent hover:border-secondary/10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-6">campaign</span>
              <h3 className="text-xl font-bold text-primary mb-3">Pemasaran</h3>
              <p className="text-on-surface-variant">Kesadaran brand omnichannel dan strategi digital yang berorientasi pada konversi.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
