import styles from "./ShowreelModal.module.css";
import { useEffect } from "react";

function ShowreelModal({ onClose }) {
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        className={styles.modalContainer}
        role="dialog"
        aria-modal="true"
        aria-label="Showreel"
      >
        <div className={styles.videoPlayerContainer}>
          <iframe
            src="https://www.youtube.com/embed/ID_DO_VIDEO"
            title="Showreel Isabela"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <button
          type="button"
          aria-label="Fechar showreel"
          className={styles.closeModal}
          onClick={onClose}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M6 6l12 12M18 6L6 18"></path>
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ShowreelModal;
