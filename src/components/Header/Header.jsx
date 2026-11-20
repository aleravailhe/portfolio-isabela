import { useState, useRef } from "react";
import styles from "./Header.module.css";
import MobileMenu from "../MobileMenu/MobileMenu";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const triggerButtonRef = useRef(null);

  return (
    <header className={`${styles.header} wrap`}>
      <a href="#topo" className={styles.brand}>
        <span className={styles.dot} aria-hidden="true"></span>
        <span className={styles.brandName}>ISABELA</span>
        <span className={styles.brandDescriptor}>/ audiovisual</span>
      </a>
      <nav className={styles.desktopNav}>
        <a href="#projetos">Projetos</a>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#contato" className={styles.contactButton}>
          Vamos conversar
        </a>
      </nav>

      <button
        type="button"
        className={styles.menuButton}
        aria-label="Abrir menu"
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((previousState) => !previousState)}
      >
        ☰
      </button>
      {isMenuOpen && <MobileMenu onClose={() => setIsMenuOpen(false)} />}
    </header>
  );
}

export default Header;
