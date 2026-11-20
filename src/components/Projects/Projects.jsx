import { useRef, useState } from "react";
import AccessibleDialog from "../AccessibleDialog/AccessibleDialog";
import { categories, projects } from "../../data/projects";

const heading = "font-display text-[clamp(44px,6vw,80px)] leading-[.92] font-black uppercase [font-stretch:72%]";

function ProjectDialog({ project, onClose, onPrevious, onNext, current, total }) {
  return (
    <AccessibleDialog title={`Projeto: ${project.title}`} onClose={onClose} className="max-md:items-end max-md:p-0">
      <div className="relative flex max-h-[92dvh] w-full max-w-[1100px] flex-col gap-5 overflow-y-auto rounded-t-[22px] border border-line bg-page px-5 pt-12 pb-7 shadow-2xl md:max-h-[90dvh] md:flex-row md:gap-7 md:rounded-2xl md:p-7">
        <button autoFocus type="button" aria-label="Fechar projeto" onClick={onClose}
          className="absolute top-2 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-page md:-top-0 md:right-2">
          <span aria-hidden="true" className="text-xl">×</span>
        </button>
        <div className="relative flex aspect-video min-h-0 w-full items-center justify-center overflow-hidden rounded-xl bg-surface md:flex-[1.7]">
          {project.videoId ? (
            <iframe className="absolute inset-0 h-full w-full border-0" title={`Vídeo do projeto ${project.title}`}
              src={`https://www.youtube.com/embed/${project.videoId}`} allow="accelerometer; autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          ) : <span className="p-4 text-center font-mono text-xs text-muted">[VÍDEO COMPLETO DO PROJETO]</span>}
        </div>
        <div className="flex min-w-0 flex-col gap-4 md:flex-1">
          <p className="font-mono text-xs text-accent">{project.category.toUpperCase()} · {String(current + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}</p>
          <h3 className="font-display text-4xl leading-[.95] font-black uppercase [font-stretch:75%] md:text-[44px]">{project.title}</h3>
          <p className="text-[15px] leading-relaxed text-muted">{project.description}</p>
          <dl className="grid grid-cols-2 gap-4 border-t border-line pt-4 text-sm">
            {[["Cliente", project.client], ["Função", project.role], ["Ano", project.year], ["Ferramenta", "DaVinci Resolve"]].map(([label, value]) => (
              <div key={label}><dt className="font-mono text-[11px] uppercase text-muted">{label}</dt><dd className="mt-1">{value || "A confirmar"}</dd></div>
            ))}
          </dl>
          <div className="mt-auto flex gap-3 pt-3">
            <button type="button" onClick={onPrevious} className="min-h-12 flex-1 rounded-full border border-line-strong px-4 font-semibold">← Anterior</button>
            <button type="button" onClick={onNext} className="min-h-12 flex-1 rounded-full bg-ink px-4 font-semibold text-page">Próximo →</button>
          </div>
        </div>
      </div>
    </AccessibleDialog>
  );
}

export default function Projects() {
  const [category, setCategory] = useState("Todos");
  const [selectedId, setSelectedId] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const gridRef = useRef(null);
  const visible = category === "Todos" ? projects : projects.filter((p) => p.category === category);
  const current = visible.findIndex((p) => p.id === selectedId);
  const activeProject = current >= 0 ? visible[current] : null;
  const mobileCount = Math.min(visible.length, Math.round(scrollProgress * Math.max(visible.length - 1, 0)) + 1);

  const handleFilter = (next) => {
    setCategory(next);
    setSelectedId(null);
    setScrollProgress(0);
    if (gridRef.current) gridRef.current.scrollLeft = 0;
  };
  const updateProgress = (event) => {
    const el = event.currentTarget;
    setScrollProgress(el.scrollWidth <= el.clientWidth ? 0 : el.scrollLeft / (el.scrollWidth - el.clientWidth));
  };
  const changeProject = (offset) => {
    setSelectedId(visible[(current + offset + visible.length) % visible.length].id);
  };

  return (
    <section id="projetos" className="wrap py-16 md:py-24 lg:py-28 max-md:px-0">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-6 md:mb-10 max-md:px-5">
        <div>
          <p className="font-mono text-[13px] text-muted">01 — PROJETOS</p>
          <h2 className={`${heading} mt-3`}>Projetos selecionados</h2>
        </div>
        <div role="group" aria-label="Filtrar projetos" className="flex max-w-full gap-2 overflow-x-auto pb-1 max-md:pr-5 max-md:pl-5">
          {categories.map((c) => (
            <button key={c} type="button" aria-pressed={category === c} onClick={() => handleFilter(c)}
              className={`min-h-11 shrink-0 rounded-full border px-[18px] text-sm transition-colors ${category === c ? "border-accent bg-accent font-semibold text-page" : "border-line-strong hover:border-ink"}`}>{c}</button>
          ))}
        </div>
      </div>
      <div ref={gridRef} onScroll={updateProgress} className="flex snap-x snap-mandatory gap-3.5 overflow-x-auto px-5 pb-3 md:grid md:grid-cols-[repeat(auto-fill,minmax(300px,1fr))] md:gap-x-6 md:gap-y-8 md:overflow-visible md:px-0">
        {visible.map((project) => (
          <button key={project.id} type="button" onClick={() => setSelectedId(project.id)}
            className="group flex w-[300px] shrink-0 snap-start flex-col gap-3.5 text-left md:w-auto">
            <span className="relative block aspect-[4/5] overflow-hidden rounded-xl border border-line transition-colors group-hover:border-accent md:aspect-video" style={{ backgroundColor: project.tone }}>
              {project.thumbnail ? <img src={project.thumbnail} alt="" className="absolute inset-0 h-full w-full object-cover transition-transform group-hover:scale-[1.03]" /> :
                <span className="absolute inset-0 flex items-center justify-center font-mono text-xs text-muted">[THUMB / PREVIEW]</span>}
              <span className="absolute top-3 left-3 rounded-full bg-page px-2.5 py-1 font-mono text-[11px]">{project.category}</span>
              <span className="absolute inset-0 flex items-end justify-end bg-page/55 p-4 opacity-100 transition-opacity md:justify-between md:opacity-0 md:group-hover:opacity-100 md:group-focus-visible:opacity-100">
                <span className="hidden text-sm md:inline">{project.role}</span>
                <span className="rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-page">Ver projeto →</span>
              </span>
            </span>
            <span className="flex items-baseline justify-between gap-3">
              <span className="font-display text-[22px] leading-none font-extrabold uppercase [font-stretch:80%] md:text-[26px]">{project.title}</span>
              <span className="font-mono text-xs text-muted">{project.year || "—"}</span>
            </span>
            <span className="text-sm leading-normal text-muted md:text-[15px]">{project.description}</span>
          </button>
        ))}
      </div>
      <div className="flex items-center gap-3 px-5 pt-4 font-mono text-[11px] text-muted md:hidden">
        <span>{String(mobileCount).padStart(2, "0")} / {String(visible.length).padStart(2, "0")}</span>
        <div className="h-[2px] flex-1 bg-line"><div className="h-full bg-accent transition-[width] duration-200" style={{ width: `${Math.max(100 / visible.length, scrollProgress * 100)}%` }} /></div>
        <span>arraste →</span>
      </div>
      {activeProject && (
        <ProjectDialog project={activeProject} current={current} total={visible.length}
          onClose={() => setSelectedId(null)}
          onPrevious={() => changeProject(-1)} onNext={() => changeProject(1)} />
      )}
    </section>
  );
}
