import { useState } from "react";
import styles from "./Hero.module.css";
import ShowreelModal from "../ShowreelModal/ShowreelModal";

function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={`wrap ${styles.hero}`}>
      <p className={styles.brandDescriptor}>Audiovisual em São Paulo</p>
      <div className={styles.heroTop}>
        <h1 className={styles.title}>
          EDIÇÃO QUE SEGURA O OLHAR ATÉ O{" "}
          <span className={styles.highlight}>ÚLTIMO FRAME.</span>
        </h1>

        <div className={styles.descriptionContainer}>
          <p className={styles.description}>
            Sou Isabela, editora de vídeo. Vlogs de marca, talk shows,
            aftermovies e conteúdo para redes — da decupagem ao color.
          </p>
          <div className={styles.actions}>
            <a href="#projetos" className={styles.primaryAction}>
              Ver projetos
            </a>
            <button
              type="button"
              className={styles.secondaryAction}
              onClick={() => setIsModalOpen(true)}
            >
              Assistir showreel
            </button>
          </div>
        </div>
      </div>
      <figure className={styles.reel}>
        <div className={styles.reelTag}>
          <span className={styles.dot} aria-hidden="true"></span>REC · SHOWREEL
          2026
        </div>
        <div className={styles.timecode}>00:00:00:00</div>

        <div className={styles.frame} aria-hidden="true"></div>
        <button
          type="button"
          className={styles.playButton}
          aria-label="Assistir showreel"
          onClick={() => setIsModalOpen(true)}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 4.5v15l12-7.5z" fill="currentColor"></path>
          </svg>
        </button>
        <div className={styles.reelDescription}>
          [VÍDEO DO SHOWREEL — loop mudo, 30–60s]
        </div>
      </figure>

      {isModalOpen && <ShowreelModal onClose={() => setIsModalOpen(false)} />}
    </section>
  );
}

export default Hero;

/*
      ********ANIMAÇÃO DE CAMERA PARA UTILIZAR??******
      <div>
        <iframe
          className={styles.iframe}
          src="https://lottie.host/embed/f655364c-a336-4f34-ba59-9a9742c02eb2/9X1nTKIz9r.lottie"
        ></iframe>
      </div> */
