import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 glass-nav shadow-[0_40px_60px_-15px_rgba(8,23,45,0.06)]">
      <nav className="flex justify-between items-center px-6 lg:px-12 py-4 lg:py-6 max-w-screen-2xl mx-auto relative">
        
        {/* Left: Logo */}
        <div className="flex items-center gap-3 shrink-0">
          <img src="/logo.png" alt="ARTA Partners" className="h-5 lg:h-6 w-auto object-contain shrink-0" />
        </div>

        {/* Center: Desktop Links */}
        <div className="hidden lg:flex items-center space-x-8 font-medium tracking-tight">
          <a className="text-blue-600 dark:text-blue-400 font-bold border-b-2 border-blue-600 pb-1" href="#">360 Management</a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Untuk Investor</a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Untuk Pemilik Brand</a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Skema Investasi</a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Portofolio</a>
          <a className="text-slate-600 dark:text-slate-400 hover:text-blue-900 transition-colors" href="#">Tim</a>
        </div>

        {/* Right: Desktop Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <button className="px-6 py-2 rounded-lg font-bold bg-gradient-to-br from-secondary to-primary text-on-primary hover:scale-95 duration-200 transition-all">Mulai</button>
          <button className="px-6 py-2 rounded-lg font-bold border border-outline-variant/20 hover:bg-surface-container-high transition-all">Hubungi Kami</button>
        </div>

        {/* Right: Mobile 3-Dot Menu Button */}
        <div className="flex lg:hidden items-center">
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors flex items-center justify-center"
          >
            <span className="material-symbols-outlined text-2xl">
              {isMobileMenuOpen ? 'close' : 'more_vert'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-2xl border-t border-slate-100 dark:border-slate-800 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col p-6 space-y-6">
            <div className="flex flex-col space-y-4">
              <a className="text-blue-600 dark:text-blue-400 font-bold text-lg" href="#">360 Management</a>
              <a className="text-slate-600 dark:text-slate-300 font-medium text-lg" href="#">Untuk Investor</a>
              <a className="text-slate-600 dark:text-slate-300 font-medium text-lg" href="#">Untuk Pemilik Brand</a>
              <a className="text-slate-600 dark:text-slate-300 font-medium text-lg" href="#">Skema Investasi</a>
              <a className="text-slate-600 dark:text-slate-300 font-medium text-lg" href="#">Portofolio</a>
              <a className="text-slate-600 dark:text-slate-300 font-medium text-lg" href="#">Tim</a>
            </div>
            
            <div className="h-px w-full bg-slate-200 dark:bg-slate-700"></div>
            
            <div className="flex flex-col space-y-3">
              <button className="w-full px-6 py-3 rounded-lg font-bold bg-gradient-to-br from-secondary to-primary text-on-primary text-lg">Mulai</button>
              <button className="w-full px-6 py-3 rounded-lg font-bold border border-outline-variant/30 text-primary text-lg">Hubungi Kami</button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
