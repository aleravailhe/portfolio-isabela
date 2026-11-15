import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className="wrap">
      <p className={styles.brandDescriptor}>Editora de vídeo em São Paulo</p>
      <h1 className={styles.title}>
        EDIÇÃO QUE SEGURA O OLHAR ATÉ O{" "}
        <span className={styles.highlight}>ÚLTIMO FRAME.</span>
      </h1>
      <div className={styles.descriptionContainer}>
        <p className={styles.description}>
          Sou Isabela, editora de vídeo. Vlogs de marca, talk shows, aftermovies
          e conteúdo para redes — da decupagem ao color.
        </p>
      </div>
    </section>
  );
}

export default Hero;
