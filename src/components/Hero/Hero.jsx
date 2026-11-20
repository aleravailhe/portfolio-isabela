import { useState } from "react";
import ShowreelModal from "../ShowreelModal/ShowreelModal";

const ctaBase = "inline-flex min-h-12 items-center justify-center rounded-full border px-[22px] font-mono text-[17px] font-semibold transition-colors";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="topo" className="wrap flex flex-col gap-6 pt-10 pb-9 md:gap-10 md:pt-[72px] md:pb-14">
      <p className="font-mono text-xs text-muted md:hidden">Audiovisual em São Paulo</p>
      <div className="flex flex-wrap items-end justify-between gap-8">
        <h1 className="my-5 max-w-[900px] font-display text-[clamp(56px,9vw,132px)] leading-[.97] font-black tracking-[-.01em] text-white [font-variation-settings:'wdth'_70,'wght'_900]">
          EDIÇÃO QUE SEGURA O OLHAR ATÉ O <span className="text-accent">ÚLTIMO FRAME.</span>
        </h1>
        <div className="flex max-w-[410px] flex-col gap-5">
          <p className="font-display text-[22px] text-muted md:text-lg">Sou Isabela, editora de vídeo. Vlogs de marca, talk shows, aftermovies e conteúdo para redes — da decupagem ao color.</p>
          <div className="flex flex-col gap-3 md:flex-row">
            <a href="#projetos" className={`${ctaBase} border-transparent bg-ink text-black hover:bg-muted`}>Ver projetos</a>
            <button type="button" className={`${ctaBase} border-white bg-black text-white hover:bg-line`} onClick={() => setIsModalOpen(true)}>Assistir showreel</button>
          </div>
        </div>
      </div>
      <figure className="relative m-0 flex aspect-[3/4] items-center justify-center overflow-hidden rounded-[14px] border border-line bg-surface md:aspect-video">
        <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-[11px] text-white md:top-5 md:left-6 md:text-[13px]">
          <span aria-hidden="true" className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#b60000] motion-reduce:animate-none" />REC · SHOWREEL 2026
        </div>
        <span className="absolute top-3.5 right-4 font-mono text-[11px] text-muted md:top-5 md:right-6 md:text-[13px]">00:00:00:00</span>
        <div aria-hidden="true" className="absolute inset-[18%_12%] hidden rounded border border-dashed border-line-strong md:block" />
        <button type="button" aria-label="Assistir showreel" onClick={() => setIsModalOpen(true)}
          className="relative z-10 flex h-[76px] w-[76px] items-center justify-center rounded-full bg-accent text-page transition-transform hover:scale-[1.07] motion-reduce:transform-none motion-reduce:transition-none md:h-24 md:w-24">
          <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 4.5v15l12-7.5z" fill="currentColor" /></svg>
        </button>
        <span className="absolute right-4 bottom-4 left-4 font-mono text-[11px] text-muted md:right-6 md:bottom-5 md:left-6 md:text-[13px]">[VÍDEO DO SHOWREEL — loop mudo, 30–60s]</span>
      </figure>
      {isModalOpen && <ShowreelModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}

/*
  ANIMAÇÃO LOTTIE RESERVADA PARA AVALIAÇÃO FUTURA:
  <iframe src="https://lottie.host/embed/f655364c-a336-4f34-ba59-9a9742c02eb2/9X1nTKIz9r.lottie" />
*/
