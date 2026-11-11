import styles from "./MobileMenu.module.css";
import closeIcon from "../../assets/close.png";

function MobileMenu({ onClose }) {
  return (
    <nav className={styles.mobileMenu}>
      <div className={styles.menuHeader}>
        <a href="#topo" className={styles.brand} onClick={onClose}>
          <span className={styles.dot} aria-hidden="true"></span>
          <span className={styles.brandName}>ISABELA</span>
        </a>
        <button
          type="button"
          className={styles.closeButton}
          aria-label="Fechar menu"
          onClick={onClose}
        >
          <img src={closeIcon} alt="" aria-hidden="true" />
        </button>
      </div>

      <div className={styles.menuLinks}>
        <a href="#projetos" className={styles.menuLink} onClick={onClose}>
          Projetos
        </a>
        <a href="#sobre" className={styles.menuLink} onClick={onClose}>
          Sobre
        </a>
        <a href="#contato" className={styles.menuLink} onClick={onClose}>
          Contato
        </a>
      </div>
    </nav>
  );
}

export default MobileMenu;
