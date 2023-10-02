import { useRef } from 'react';

export type useModalProps = {
  isActive: boolean;
};

export function useModal({ isActive }: useModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  if (isActive) {
    dialogRef.current?.showModal();
  } else {
    dialogRef.current?.close();
  }

  return {
    dialogRef
  };
}
