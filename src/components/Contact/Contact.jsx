import { useState } from "react";

// Preencher estes dados somente após validação com a Isabela.
const CONTACT_EMAIL = "";
const WHATSAPP_NUMBER = ""; // DDI + DDD + número, somente dígitos.

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const copyEmail = async () => {
    if (!CONTACT_EMAIL) return;
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section id="contato" className="bg-accent text-page">
      <div className="wrap flex flex-col gap-6 py-16 md:gap-9 md:py-[104px]">
        <p className="font-mono text-[13px]">03 — CONTATO</p>
        <h2 className="max-w-[1000px] font-display text-[clamp(52px,8vw,120px)] leading-[.9] font-black uppercase [font-stretch:70%]">Tem um projeto em mente? Bora editar.</h2>
        <div className="flex flex-col flex-wrap gap-3 sm:flex-row">
          {CONTACT_EMAIL ? (
            <button type="button" onClick={copyEmail} className="inline-flex min-h-14 items-center justify-center rounded-full bg-page px-7 text-[17px] font-semibold text-ink transition-transform hover:-translate-y-0.5">
              {copied ? "E-mail copiado!" : `${CONTACT_EMAIL} — copiar`}
            </button>
          ) : <span className="inline-flex min-h-14 items-center justify-center rounded-full bg-page px-7 text-[17px] font-semibold text-ink">[E-MAIL DA ISABELA]</span>}
          {WHATSAPP_NUMBER ? (
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-page px-7 text-[17px] font-semibold transition-transform hover:-translate-y-0.5">WhatsApp</a>
          ) : <span className="inline-flex min-h-14 items-center justify-center rounded-full border-2 border-page px-7 text-[17px] font-semibold">[WHATSAPP A DEFINIR]</span>}
        </div>
        <span role="status" aria-live="polite" className="sr-only">{copied ? "E-mail copiado para a área de transferência" : ""}</span>
      </div>
    </section>
  );
}
