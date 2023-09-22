import { FormEvent, useEffect, useId, useState } from 'react';

export function useContactForm() {
  const nameInputId = useId();
  const emailInputId = useId();
  const messageTextareaId = useId();

  type isMessageSentType = 'not sent yet' | 'sent' | 'error';

  const [isMessageSent, setIsMessageSent] = useState<isMessageSentType>('not sent yet');

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

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
        event.currentTarget.reset();
      } else {
        setIsMessageSent('error');
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    const message = setTimeout(() => {
      setIsMessageSent('not sent yet');
    }, 5000);

    return () => clearTimeout(message);
  }, [isMessageSent]);

  return {
    nameInputId,
    emailInputId,
    messageTextareaId,
    isMessageSent,
    handleFormSubmit
  };
}
