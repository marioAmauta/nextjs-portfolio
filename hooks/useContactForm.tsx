import { isMessageSentType } from '@/lib/definitions';
import { FormEvent, useId, useRef, useState } from 'react';

export function useContactForm() {
  const nameInputId = useId();
  const emailInputId = useId();
  const messageTextareaId = useId();

  const [isMessageSent, setIsMessageSent] = useState<isMessageSentType>('not sent yet');
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

    const formData = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsMessageSent('sent');
        formRef.current?.reset();
      } else {
        setIsMessageSent('error');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return {
    nameInputId,
    emailInputId,
    messageTextareaId,
    isMessageSent,
    setIsMessageSent,
    isLoading,
    handleFormSubmit,
    formRef
  };
}
