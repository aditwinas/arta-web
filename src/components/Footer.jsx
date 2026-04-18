export default function Footer() {
  return (
    <footer className="w-full py-20 px-12 bg-slate-50 dark:bg-slate-900 border-t border-slate-200/50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-screen-2xl mx-auto">
        <div>
          <div className="text-xl font-bold text-blue-950 dark:text-white mb-6 uppercase">ARTA Partners</div>
          <p className="text-slate-500 text-sm leading-relaxed mb-8">
            Ekosistem yang dirancang untuk mempercepat brand dan memberikan peluang investasi imbal hasil tinggi melalui pendekatan manajemen 360.
          </p>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-6">Tautan Cepat</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-blue-700 transition-colors" href="#">Manajemen 360</a></li>
            <li><a className="text-slate-500 hover:text-blue-700 transition-colors" href="#">Untuk Investor</a></li>
            <li><a className="text-slate-500 hover:text-blue-700 transition-colors" href="#">Portofolio</a></li>
            <li><a className="text-slate-500 hover:text-blue-700 transition-colors" href="#">Tim Kami</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-6">Dukungan</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 hover:text-blue-700 transition-colors" href="#">Dukungan WhatsApp</a></li>
            <li><a className="text-slate-500 hover:text-blue-700 transition-colors" href="#">Kebijakan Privasi</a></li>
            <li><a className="text-slate-500 hover:text-blue-700 transition-colors" href="#">Syarat Layanan</a></li>
            <li><a className="text-slate-500 hover:text-blue-700 transition-colors" href="#">Sanggahan Investasi</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-primary font-bold mb-6">Kantor Pusat</h4>
          <p className="text-slate-500 text-sm leading-relaxed">
            Gedung Artha Graha, Lantai 18<br />
            Sudirman Central Business District<br />
            Jakarta, Indonesia
          </p>
          <div className="mt-6 flex gap-4">
            <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-secondary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-sm">link</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center hover:bg-secondary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-sm">groups</span>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto mt-20 pt-8 border-t border-slate-200/50 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 text-sm">© 2024 ARTA Partners. Hak cipta dilindungi undang-undang.</p>
        <div className="flex items-center gap-6">
          <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Premium Brand Aggregator</span>
        </div>
      </div>
    </footer>
  );
}
