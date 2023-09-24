import { useContactForm } from '@/hooks/useContactForm';
import { Title } from './Titles';
import { Modal } from './Modal';
import { LoadingSpinner } from './Icons';

export function ContactForm({ translations }: { translations: Record<string, any> }) {
  const {
    nameInputId,
    emailInputId,
    messageTextareaId,
    isMessageSent,
    setIsMessageSent,
    isLoading,
    handleFormSubmit
  } = useContactForm();

  return (
    <>
      <Title
        titleType='h3'
        padding='pt-8 md:pl-10'
      >
        {translations.title}
      </Title>
      <Modal
        isActive={isMessageSent === 'sent'}
        setIsActive={() => setIsMessageSent('not sent yet')}
        message={translations.success}
        buttonLabel={translations.close}
      />

      <Modal
        isActive={isMessageSent === 'error'}
        setIsActive={() => setIsMessageSent('not sent yet')}
        message={translations.error}
        buttonLabel={translations.close}
      />
      <form
        key={isMessageSent}
        onSubmit={handleFormSubmit}
        className='
          flex flex-col gap-4
          mt-10 mb-16 md:my-16 mx-auto
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
          required
          id={nameInputId}
          type='text'
          name='name'
          placeholder={translations.namePlaceholder}
          className='
            rounded-lg
            h-10
            px-4
            bg-[--input-bg-color] placeholder-[--placeholder-text-color]
            outline-0
          '
        />
        <label
          htmlFor={emailInputId}
          className='text-lg'
        >
          {translations.email}
        </label>
        <input
          required
          id={emailInputId}
          type='email'
          name='email'
          placeholder={translations.emailPlaceholder}
          className='
            rounded-lg
            h-10
            px-4
            bg-[--input-bg-color] placeholder-[--placeholder-text-color]
            outline-0
          '
        />
        <label
          htmlFor={messageTextareaId}
          className='text-lg'
        >
          {translations.message}
        </label>
        <textarea
          required
          id={messageTextareaId}
          name='message'
          placeholder={translations.messagePlaceholder}
          className='
            h-32
            py-2 px-4
            resize-none
            rounded-lg
            text-[--app-text-color]
            bg-[--input-bg-color] placeholder-[--placeholder-text-color]
            outline-0
          '
        />
        <button
          className='
            rounded-lg
            bg-[--contact-form-button-bg-color]
            py-2 px-4 mt-4
            text-white text-lg font-semibold
            flex justify-center items-center
            relative
          '
        >
          {translations.submit} {isLoading && <LoadingSpinner />}
        </button>
      </form>
    </>
  );
}
