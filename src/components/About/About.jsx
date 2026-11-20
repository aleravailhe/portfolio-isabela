const services = [
  ["A", "Edição e montagem", "Vlogs, talk shows e conteúdo de marca."],
  ["B", "Color grading", "Correção e look no DaVinci Resolve."],
  ["C", "Cortes para redes", "Reels, TikTok e teasers verticais."],
  ["D", "Aftermovies", "Shows e eventos em poucos minutos."]
];

export default function About() {
  return (
    <section id="sobre" className="border-t border-line">
      <div className="wrap flex flex-col gap-6 py-16 md:flex-row md:flex-wrap md:gap-16 md:py-28">
        <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-2xl border border-line bg-surface md:max-w-[460px] md:flex-[1_1_360px]">
          <span className="p-5 text-center font-mono text-xs text-muted">[FOTO DA ISABELA — de preferência editando]</span>
        </div>
        <div className="flex min-w-0 flex-1 flex-col gap-6 md:basis-[480px] md:gap-7">
          <p className="font-mono text-[13px] text-muted">02 — SOBRE MIM</p>
          <h2 className="font-display text-[clamp(40px,5vw,68px)] leading-[.92] font-black uppercase [font-stretch:72%]">Ritmo, corte e cor contando a história certa.</h2>
          <p className="max-w-[620px] text-base leading-relaxed text-muted md:text-lg">
            Edito na ESTRUTURA, estúdio criativo e produtora, e também atendo projetos como freelancer. Já montei bastidores de shows, talk shows, vlogs patrocinados e teasers para redes.
          </p>
          <p className="font-mono text-xs text-muted">[COMPLETAR: apresentação pessoal, experiência e especialidade]</p>
          <div id="servicos" className="grid grid-cols-1 border-t border-line sm:grid-cols-2">
            {services.map(([letter, name, description], index) => (
              <div key={letter} className={`flex flex-col gap-1.5 border-b border-line py-[18px] sm:py-[22px] ${index % 2 === 1 ? "sm:border-l sm:pl-5" : "sm:pr-5"}`}>
                <span className="font-mono text-xs text-accent">{letter}</span>
                <strong className="text-lg font-semibold">{name}</strong>
                <span className="text-[15px] leading-normal text-muted">{description}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="mr-1 font-mono text-xs text-muted">FERRAMENTAS</span>
            <span className="rounded-full border border-line px-3.5 py-2 text-sm">DaVinci Resolve</span>
            <span className="rounded-full border border-line px-3.5 py-2 text-sm text-muted">[OUTRA FERRAMENTA]</span>
          </div>
        </div>
      </div>
    </section>
  );
}
