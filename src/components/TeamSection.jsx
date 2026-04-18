export default function TeamSection() {
  return (
    <section className="py-32 px-12 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-end mb-20">
          <div>
            <h2 className="text-4xl font-extrabold text-primary mb-4">Dewan Mitra</h2>
            <p className="text-on-surface-variant">Para pemikir yang menggerakkan mesin agregator.</p>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 grayscale hover:grayscale-0 transition-all duration-500">
              <img alt="Potret Sultoni Akbar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/team-sultoni.webp" loading="lazy" decoding="async" />
            </div>
            <h3 className="text-lg font-bold text-primary">Sultoni Akbar</h3>
            <p className="text-secondary text-sm font-bold uppercase tracking-widest">Chief Executive Officer</p>
          </div>
          <div className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 grayscale hover:grayscale-0 transition-all duration-500">
              <img alt="Potret Agyl Lintar" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/team-agyl.webp" loading="lazy" decoding="async" />
            </div>
            <h3 className="text-lg font-bold text-primary">Agyl Lintar</h3>
            <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-widest">Finance Director</p>
          </div>
          <div className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 grayscale hover:grayscale-0 transition-all duration-500">
              <img alt="Potret Safora &amp; Debora" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/team-safora.webp" loading="lazy" decoding="async" />
            </div>
            <h3 className="text-lg font-bold text-primary">Safora &amp; Debora</h3>
            <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-widest">Operational Lead</p>
          </div>
          <div className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 grayscale hover:grayscale-0 transition-all duration-500">
              <img alt="Potret Ricky Pratama" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/team-ricky.webp" loading="lazy" decoding="async" />
            </div>
            <h3 className="text-lg font-bold text-primary">Ricky Pratama</h3>
            <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-widest">Creative Director</p>
          </div>
          <div className="group">
            <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 grayscale hover:grayscale-0 transition-all duration-500">
              <img alt="Potret Adit Winas" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="/images/team-adit.webp" loading="lazy" decoding="async" />
            </div>
            <h3 className="text-lg font-bold text-primary">Adit Winas</h3>
            <p className="text-on-surface-variant text-sm font-semibold uppercase tracking-widest">Marketing Head</p>
          </div>
        </div>
      </div>
    </section>
  );
}
