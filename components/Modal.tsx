type ModalProps = {
  isActive: boolean;
  buttonLabel: string;
  message: string;
  setIsActive: () => void;
};

export function Modal({ message, isActive, setIsActive, buttonLabel }: ModalProps) {
  if (!isActive) return null;

  return (
    <div
      className='
        fixed inset-0 z-50
        flex items-center justify-center
        bg-[--bg-blurred-color] backdrop-blur
        p-4
      '
    >
      <div
        className='
          flex flex-col gap-4
          bg-[--project-card-bg-color]
          text-[--modal-text-color]
          px-8 py-10
          rounded-md
        '
      >
        <p className='text-lg font-semibold'>{message}</p>
        <button
          onClick={setIsActive}
          className='
              bg-[--modal-btn-bg-color]
              text-[--modal-btn-text-color] text-lg font-semibold
              rounded-lg
              py-2 px-4 mt-4
            '
        >
          {buttonLabel}
        </button>
      </div>
    </div>
  );
}
