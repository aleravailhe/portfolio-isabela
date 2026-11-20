import { useEffect, useRef } from "react";

export default function AccessibleDialog({ title, onClose, children, className = "" }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";

    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus?.();
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      aria-label={title}
      onClose={onClose}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      className={`fixed inset-0 m-0 h-dvh max-h-none w-screen max-w-none items-center justify-center bg-transparent p-4 text-ink backdrop:bg-[#050505]/85 backdrop:backdrop-blur-[5px] open:flex ${className}`}
    >
      {children}
    </dialog>
  );
}
