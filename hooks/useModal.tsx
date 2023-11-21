import { useRef } from 'react'
import { useModalProps } from '@/lib/definitions'

export function useModal({ isActive }: useModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)

  if (isActive) {
    dialogRef.current?.showModal()
  } else {
    dialogRef.current?.close()
  }

  return {
    dialogRef
  }
}
