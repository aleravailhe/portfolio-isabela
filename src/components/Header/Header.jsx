import { useEffect, useRef, useState } from "react";
import MobileMenu from "../MobileMenu/MobileMenu";

const navLink = "text-[15px] text-muted no-underline transition-colors hover:text-ink focus-visible:text-ink";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 80);
    updateScroll();
    window.addEventListener("scroll", updateScroll, { passive: true });
    return () => window.removeEventListener("scroll", updateScroll);
  }, []);

  return (
    <>
      <header className={`sticky top-0 z-50 border-b transition-[background,border-color] duration-250 ${scrolled ? "border-line bg-page/90 backdrop-blur-xl" : "border-transparent max-md:border-line max-md:bg-page/90"}`}>
        <div className="wrap flex h-16 items-center justify-between gap-4 md:h-[76px]">
          <a href="#topo" className="flex items-center gap-2.5 no-underline" aria-label="Isabela — início">
            <span className="h-2.5 w-2.5 rounded-full bg-[#b60000]" aria-hidden="true" />
            <span className="font-display text-[22px] font-extrabold tracking-[.04em] text-white [font-stretch:75%] max-md:text-xl">ISABELA</span>
            <span className="hidden font-mono text-xs text-muted md:inline">/ audiovisual</span>
          </a>
          <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
            <a href="#projetos" className={navLink}>Projetos</a>
            <a href="#sobre" className={navLink}>Sobre</a>
            <a href="#servicos" className={navLink}>Serviços</a>
            <a href="#contato" className="flex min-h-12 items-center rounded-full bg-accent px-5 font-semibold text-page transition-colors hover:bg-accent-hover">Vamos conversar</a>
          </nav>
          <button ref={menuButtonRef} type="button" aria-label="Abrir menu" aria-controls="mobile-menu" aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-line-strong bg-transparent text-ink md:hidden">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true"><path d="M4 8h16M4 16h16" /></svg>
          </button>
        </div>
      </header>
      <MobileMenu open={isMenuOpen} onClose={() => setIsMenuOpen(false)} returnFocusRef={menuButtonRef} />
    </>
  );
}

export default Header;
