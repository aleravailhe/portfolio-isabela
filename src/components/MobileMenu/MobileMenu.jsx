import { useEffect, useRef } from "react";

const links = [["Projetos", "#projetos", "01"], ["Sobre", "#sobre", "02"], ["Contato", "#contato", "03"]];

function MobileMenu({ open, onClose, returnFocusRef }) {
  const closeButtonRef = useRef(null);
  const panelRef = useRef(null);
  const closeRef = useRef(onClose);

  useEffect(() => { closeRef.current = onClose; }, [onClose]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeRef.current();
      if (event.key !== "Tab") return;
      const focusables = Array.from(panelRef.current?.querySelectorAll('a[href], button:not([disabled])') ?? []);
      const first = focusables[0], last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusRef?.current?.focus();
    };
  }, [open, returnFocusRef]);

  return (
    <div id="mobile-menu" ref={panelRef} role="dialog" aria-modal={open ? "true" : undefined} aria-label="Menu de navegação" aria-hidden={!open} inert={!open}
      className={`fixed inset-0 z-[100] flex flex-col bg-accent text-page transition-[transform,visibility] duration-400 ease-[cubic-bezier(.7,0,.2,1)] md:hidden ${open ? "visible translate-y-0" : "invisible -translate-y-full"}`}>
      <div className="flex h-16 shrink-0 items-center justify-between px-5">
        <a href="#topo" onClick={onClose} className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-page" aria-hidden="true" />
          <span className="font-display text-xl font-extrabold tracking-[.04em]">ISABELA</span>
        </a>
        <button type="button" ref={closeButtonRef} onClick={onClose} aria-label="Fechar menu" className="flex h-11 w-11 items-center justify-center rounded-full border border-page">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
      <nav aria-label="Menu mobile" className="flex flex-1 flex-col justify-center px-5">
        {links.map(([name, href, n]) => (
          <a key={href} href={href} onClick={onClose} className="flex items-baseline justify-between border-t-[1.5px] border-page py-4 last:border-b-[1.5px]">
            <span className="font-display text-[clamp(44px,11vw,64px)] leading-[.9] font-black uppercase [font-stretch:70%]">{name}</span>
            <span className="font-mono text-xs">{n}</span>
          </a>
        ))}
      </nav>
      <div className="flex flex-col gap-4 px-5 pb-9">
        <a href="#topo" onClick={onClose} className="flex min-h-14 items-center justify-center rounded-full bg-page font-semibold text-ink">Ver showreel</a>
        <p className="text-center text-sm">Portfólio audiovisual · São Paulo</p>
      </div>
    </div>
  );
}

export default MobileMenu;
