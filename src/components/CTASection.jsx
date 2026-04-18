export default function CTASection() {
  return (
    <section className="py-32 px-12">
      <div className="max-w-4xl mx-auto text-center px-8 py-20 rounded-[2rem] bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-transparent"></div>
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8">Siap tumbuh bersama ARTA?</h2>
          <p className="text-lg text-slate-300 mb-12 max-w-xl mx-auto">
            Hubungi administrasi kami untuk mendiskusikan peluang investasi atau kemitraan manajemen brand.
          </p>
          <a className="inline-flex items-center gap-4 bg-white text-primary px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl" href="https://wa.me/yourwhatsappnumber" target="_blank" rel="noreferrer">
            <span className="material-symbols-outlined">forum</span>
            Hubungi via WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
