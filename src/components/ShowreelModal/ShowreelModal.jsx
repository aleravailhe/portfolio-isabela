import AccessibleDialog from "../AccessibleDialog/AccessibleDialog";

// Substitua pelo ID do vídeo quando Isabela entregar o showreel.
const SHOWREEL_VIDEO_ID = "";

export default function ShowreelModal({ onClose }) {
  return (
    <AccessibleDialog title="Showreel da Isabela" onClose={onClose}>
      <div className="relative aspect-video w-full max-w-[1200px] overflow-hidden rounded-[14px] border border-line bg-surface shadow-2xl">
        {SHOWREEL_VIDEO_ID ? (
          <iframe
            className="absolute inset-0 h-full w-full border-0"
            src={`https://www.youtube.com/embed/${SHOWREEL_VIDEO_ID}?rel=0`}
            title="Showreel da Isabela"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <div className="flex h-full items-center justify-center p-6 text-center font-mono text-xs text-muted">
            [SHOWREEL COM SOM — adicionar vídeo do YouTube]
          </div>
        )}
        <button type="button" autoFocus onClick={onClose} aria-label="Fechar showreel"
          className="absolute top-3 right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-ink text-page hover:bg-white focus-visible:outline-accent">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" /></svg>
        </button>
      </div>
    </AccessibleDialog>
  );
}
