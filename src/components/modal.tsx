import { ModalProps } from "@/lib/definitions";
import { useRef } from "react";

export function Modal({ message, buttonLabel, isActive, onClickClose }: ModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  if (isActive) {
    dialogRef.current?.showModal();
  } else {
    dialogRef.current?.close();
  }

  return (
    <dialog
      ref={dialogRef}
      className={`
        flex-col gap-4 rounded-md bg-[--project-card-bg-color] px-8 py-10 text-[--modal-text-color] shadow-2xl backdrop:backdrop-blur-sm
        ${isActive ? "flex " : ""}
      `}
    >
      <p className="text-lg font-semibold">{message}</p>
      <button
        onClick={onClickClose}
        className="mx-auto mt-4 w-full max-w-xs rounded-lg bg-[--modal-btn-bg-color] px-4 py-2 text-lg font-semibold text-[--modal-btn-text-color]"
      >
        {buttonLabel}
      </button>
    </dialog>
  );
}
