import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageCircle, Menu, X } from 'lucide-react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const closeMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen">
      <header className="header">
        <nav className="site-container h-24 flex items-center justify-between gap-5 relative" aria-label="Navegação Principal">
          <Link to="/" className="flex items-end gap-3.5 group" onClick={closeMenu} aria-label="Página inicial - Dra. Joyce Radis">
            <span className="font-serif text-4xl leading-none text-[var(--deep)] tracking-wider" aria-hidden="true">JR</span>
            <div className="hidden sm:block">
              <strong className="block text-sm font-semibold tracking-wider uppercase text-[var(--deep)]">Dra. Joyce Radis</strong>
              <span className="block text-[11px] text-[var(--muted)] mt-1 uppercase tracking-widest leading-none">Medicina clínica e documental</span>
            </div>
          </Link>
          
          <div className="nav-links hidden lg:flex items-center gap-2" role="menubar">
            <Link to="/" className={isActive('/') ? 'active' : ''} role="menuitem" aria-current={isActive('/') ? 'page' : undefined}>Início</Link>
            <Link to="/pacientes" className={isActive('/pacientes') ? 'active' : ''} role="menuitem" aria-current={isActive('/pacientes') ? 'page' : undefined}>Pacientes</Link>
            <Link to="/assistencial" className={isActive('/assistencial') ? 'active' : ''} role="menuitem" aria-current={isActive('/assistencial') ? 'page' : undefined}>Atuação Assistencial</Link>
            <Link to="/sobre" className={isActive('/sobre') ? 'active' : ''} role="menuitem" aria-current={isActive('/sobre') ? 'page' : undefined}>Sobre</Link>
            <Link to="/contato" className={isActive('/contato') ? 'active' : ''} role="menuitem" aria-current={isActive('/contato') ? 'page' : undefined}>Contato</Link>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/contato" className="btn btn-primary h-12 px-6 text-xs scale-90 sm:scale-100 hidden sm:inline-flex" aria-label="Agendar consulta">Agendar</Link>
            <button 
              className="lg:hidden p-2 text-[var(--deep)] cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMobileMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden absolute top-[96px] left-0 w-full bg-[var(--surface)] border-b border-[var(--line)] shadow-lg z-50 p-6 flex flex-col gap-4" role="menu">
            <Link to="/" className={`block py-2 ${isActive('/') ? 'font-bold text-[var(--deep)]' : 'text-[var(--muted)]'}`} onClick={closeMenu} role="menuitem" aria-current={isActive('/') ? 'page' : undefined}>Início</Link>
            <Link to="/pacientes" className={`block py-2 ${isActive('/pacientes') ? 'font-bold text-[var(--deep)]' : 'text-[var(--muted)]'}`} onClick={closeMenu} role="menuitem" aria-current={isActive('/pacientes') ? 'page' : undefined}>Pacientes</Link>
            <Link to="/assistencial" className={`block py-2 ${isActive('/assistencial') ? 'font-bold text-[var(--deep)]' : 'text-[var(--muted)]'}`} onClick={closeMenu} role="menuitem" aria-current={isActive('/assistencial') ? 'page' : undefined}>Atuação Assistencial</Link>
            <Link to="/sobre" className={`block py-2 ${isActive('/sobre') ? 'font-bold text-[var(--deep)]' : 'text-[var(--muted)]'}`} onClick={closeMenu} role="menuitem" aria-current={isActive('/sobre') ? 'page' : undefined}>Sobre</Link>
            <Link to="/contato" className={`block py-2 ${isActive('/contato') ? 'font-bold text-[var(--deep)]' : 'text-[var(--muted)]'}`} onClick={closeMenu} role="menuitem" aria-current={isActive('/contato') ? 'page' : undefined}>Contato / Agendar</Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[var(--deep)] text-[var(--accent)] pt-20 pb-10" aria-label="Rodapé do site">
        <div className="site-container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 border-b border-white/10 pb-20">
            <div>
              <div className="font-serif text-8xl text-white/10 mb-8 select-none" aria-hidden="true">JR</div>
              <h2 className="text-white text-3xl mb-6">Medicina com presença <br/>e rigor técnico</h2>
              <p className="text-white/60 max-w-sm">
                Atendimento clínico individualizado e análise documental criteriosa para demandas assistenciais e jurídicas.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <nav aria-label="Links rápidos do rodapé">
                <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-6" id="footer-nav">Navegação</h4>
                <ul className="space-y-4 text-sm" aria-labelledby="footer-nav">
                  <li><Link to="/pacientes" className="hover:text-white transition-colors">Pacientes</Link></li>
                  <li><Link to="/assistencial" className="hover:text-white transition-colors">Atuação Assistencial</Link></li>
                  <li><Link to="/sobre" className="hover:text-white transition-colors">Sobre mim</Link></li>
                  <li><Link to="/contato" className="hover:text-white transition-colors">Fale conosco</Link></li>
                </ul>
              </nav>
              <address className="not-italic">
                <h4 className="text-white text-sm font-semibold uppercase tracking-widest mb-6" id="footer-contact">Contato</h4>
                <ul className="space-y-4 text-sm" aria-labelledby="footer-contact">
                  <li>CRM-ES 21188</li>
                  <li><a href="https://wa.me/5527998134032" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="WhatsApp: (27) 99813-4032">(27) 99813-4032</a></li>
                  <li><a href="mailto:contato@drajoyceradis.com" className="hover:text-white transition-colors">contato@drajoyceradis.com</a></li>
                </ul>
              </address>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] uppercase tracking-widest text-white/30">
            <p>© {new Date().getFullYear()} Dra. Joyce Radis. Todos os direitos reservados.</p>
            <p>Brasília, DF & Espírito Santo</p>
          </div>
        </div>
      </footer>

      <a 
        href="https://wa.me/5527998134032" 
        target="_blank" 
        rel="noreferrer" 
        className="fixed bottom-8 right-8 w-16 h-16 bg-[#25d366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform z-[150]"
        aria-label="Falar pelo WhatsApp com a Dra. Joyce Radis"
      >
        <MessageCircle size={32} aria-hidden="true" />
      </a>
    </div>
  );
}
