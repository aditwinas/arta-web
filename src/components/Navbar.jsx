export default function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 glass-nav shadow-[0_40px_60px_-15px_rgba(8,23,45,0.06)]">
      <nav className="flex justify-between items-center px-12 py-6 max-w-screen-2xl mx-auto">
        <div className="text-2xl font-black tracking-tighter text-blue-950 dark:text-white uppercase">ARTA Partners</div>
        <div className="hidden lg:flex items-center space-x-8 font-medium tracking-tight">
          <a className="text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 pb-1" href="#">360 Management</a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Untuk Investor</a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Untuk Pemilik Brand</a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Skema Investasi</a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Portofolio</a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Tim</a>
        </div>
        <div className="flex items-center space-x-4">
          <button className="px-6 py-2 rounded-lg font-bold bg-gradient-to-br from-secondary to-primary text-on-primary hover:scale-95 duration-200 transition-all">Mulai</button>
          <button className="px-6 py-2 rounded-lg font-bold border border-outline-variant/20 hover:bg-surface-container-high transition-all">Hubungi Kami</button>
        </div>
      </nav>
    </header>
  );
}
