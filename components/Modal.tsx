import { useModal, useModalProps } from '@/hooks/useModal';

type ModalProps = {
  message: string;
  buttonLabel: string;
  onClickClose: () => void;
} & useModalProps;

export function Modal({ message, buttonLabel, isActive, onClickClose }: ModalProps) {
  const { dialogRef } = useModal({
    isActive
  });

  return (
    <dialog
      ref={dialogRef}
      className={`
        ${isActive ? 'flex ' : ''}flex-col gap-4
        backdrop:backdrop-blur-sm
        bg-[--project-card-bg-color]
        text-[--modal-text-color]
        px-8 py-10
        rounded-md
        shadow-2xl
      `}
    >
      <p className='text-lg font-semibold'>{message}</p>
      <button
        onClick={onClickClose}
        className='
          bg-[--modal-btn-bg-color]
          text-[--modal-btn-text-color] text-lg font-semibold
          rounded-lg
          py-2 px-4 mt-4 mx-auto
          w-full max-w-xs
        '
      >
        {buttonLabel}
      </button>
    </dialog>
  );
}
