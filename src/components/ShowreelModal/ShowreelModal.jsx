import styles from "./ShowreelModal.module.css";
import { useEffect, useRef } from "react";

const showreelVideoId = "";

function ShowreelModal({ onClose }) {
  const closeButtonRef = useRef(null);
  
  useEffect(() => {
    function handleKeyDown(event) {
      closeButtonRef.current?.focus();

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
          {showreelVideoId ? (
            <iframe
              src={`https://www.youtube.com/embed/${showreelVideoId}`}
              title="Showreel da Isabela"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <span className={styles.noVideoText}>
              [SHOWREEL COM SOM — player em tela cheia]
            </span>
          )}
        </div>
        <button
          ref={closeButtonRef}
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
