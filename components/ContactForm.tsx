import { useContactForm } from '@/hooks/useContactForm';
import { Title } from './Titles';

export function ContactForm({ translations }: { translations: Record<string, any> }) {
  const { nameInputId, emailInputId, messageTextareaId, isMessageSent, handleFormSubmit } =
    useContactForm();

  return (
    <>
      <Title
        titleType='h3'
        padding='pt-8'
      >
        {translations.title}
      </Title>
      {isMessageSent === 'sent' && (
        <div
          className='
          flex flex-col gap-4
          bg-[--project-card-bg-color] text-[--app-text-color]
          px-6 py-8 my-8 mx-auto rounded-md
          max-w-xl
        '
        >
          <p>{translations.success}</p>
        </div>
      )}
      {isMessageSent === 'error' && (
        <div
          className='
            flex flex-col gap-4
            bg-[--project-card-bg-color] text-[--app-text-color]
            px-6 py-8 my-8 mx-auto rounded-md
            max-w-xl
          '
        >
          <p>{translations.error}</p>
        </div>
      )}
      <form
        onSubmit={handleFormSubmit}
        className='
          flex flex-col gap-4
          my-16 mx-auto
          max-w-xl
        '
      >
        <label
          htmlFor={nameInputId}
          className='text-lg'
        >
          {translations.name}
        </label>
        <input
          id={nameInputId}
          type='text'
          name='name'
          placeholder={translations.namePlaceholder}
          className='
            rounded
            h-10
            px-4
            bg-[--input-bg-color] placeholder-[--placeholder-text-color]
          '
        />
        <label
          htmlFor={emailInputId}
          className='text-lg'
        >
          {translations.email}
        </label>
        <input
          id={emailInputId}
          type='email'
          name='email'
          placeholder={translations.emailPlaceholder}
          className='
            rounded
            h-10
            px-4
            bg-[--input-bg-color] placeholder-[--placeholder-text-color]
          '
        />
        <label
          htmlFor={messageTextareaId}
          className='text-lg'
        >
          {translations.message}
        </label>
        <textarea
          id={messageTextareaId}
          name='message'
          placeholder={translations.messagePlaceholder}
          className='
            h-32
            py-2 px-4
            resize-none
            rounded
            text-[--app-text-color]
            bg-[--input-bg-color] placeholder-[--placeholder-text-color]
          '
        />
        <button
          className='
            rounded
            bg-gray-500
            py-2 px-4 mt-4
            text-white text-lg font-semibold
          '
        >
          {translations.submit}
        </button>
      </form>
    </>
  );
}
