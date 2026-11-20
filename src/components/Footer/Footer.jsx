const socials = [
  { name: "Instagram", href: "" },
  { name: "YouTube / Vimeo", href: "" },
  { name: "LinkedIn", href: "" }
];
const menu = [["Projetos", "#projetos"], ["Sobre", "#sobre"], ["Contato", "#contato"]];

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="wrap flex flex-col gap-9 pt-12 pb-8 md:gap-12 md:pt-16 md:pb-10">
        <div className="flex flex-wrap justify-between gap-10">
          <div className="flex max-w-[360px] flex-col gap-3">
            <span className="font-display text-[40px] font-extrabold tracking-[.02em] [font-stretch:75%]">ISABELA</span>
            <p className="text-[15px] leading-normal text-muted">Editora de vídeo em São Paulo. Disponível para projetos freelance.</p>
          </div>
          <div className="flex flex-wrap gap-9 md:gap-16">
            <nav aria-label="Navegação do rodapé" className="flex flex-col gap-2.5 text-[15px]">
              <span className="font-mono text-xs text-muted">NAVEGAR</span>
              {menu.map(([name, href]) => <a key={href} href={href} className="text-muted hover:text-ink">{name}</a>)}
            </nav>
            <div className="flex flex-col gap-2.5">
              <span className="font-mono text-xs text-muted">REDES</span>
              <div className="flex flex-wrap gap-2.5">
                {socials.map(({ name, href }) => href ? (
                  <a key={name} href={href} target="_blank" rel="noopener noreferrer" aria-label={name} className="flex min-h-11 items-center rounded-full border border-line px-4 text-sm text-muted hover:border-accent hover:text-accent">{name}</a>
                ) : (
                  <span key={name} className="flex min-h-11 items-center rounded-full border border-line px-4 text-sm text-muted">{name}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="font-mono text-xs text-muted">PARCERIAS E CLIENTES</p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-[repeat(auto-fill,minmax(160px,1fr))]">
            {Array.from({ length: 5 }, (_, i) => <div key={i} className="flex h-[60px] items-center justify-center rounded-[10px] border border-line opacity-70 md:h-[72px]"><span className="font-mono text-xs text-muted">[LOGO]</span></div>)}
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 border-t border-line pt-6 font-mono text-xs text-muted">
          <span>© {new Date().getFullYear()} Isabela · Todos os direitos reservados</span>
          <a href="#topo" className="hover:text-ink">Voltar ao topo ↑</a>
        </div>
      </div>
    </footer>
  );
}
