const words = ["Vlogs de marca", "Talk shows", "Aftermovies", "Reels & TikTok", "Color grading", "DaVinci Resolve"];
const content = words.map((w, i) => <span key={w} className="inline-flex items-center gap-5 pr-6 font-display text-xl font-extrabold uppercase tracking-[.02em] [font-stretch:75%] md:text-[28px]">{w}<b className="text-accent" aria-hidden="true">✶</b></span>);
export default function Marquee() {
  return (
    <div aria-hidden="true" className="overflow-hidden border-y border-line py-3.5 md:py-[18px]">
      <div className="flex w-max whitespace-nowrap motion-safe:animate-[marquee_30s_linear_infinite] hover:[animation-play-state:paused]">
        <div className="flex">{content}</div>
        <div className="flex">{content}</div>
      </div>
    </div>
  );
}
