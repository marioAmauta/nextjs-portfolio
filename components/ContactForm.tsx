import { Title } from "./Titles";
import { Modal } from "./Modal";
import { LoadingSpinner } from "./Icons";
import { FormEvent, useId, useRef, useState } from "react";
import { isMessageSentType } from "@/lib/definitions";

export function ContactForm({
  translations
}: {
  translations: Record<string, any>;
}) {
  const nameInputId = useId();
  const emailInputId = useId();
  const messageTextareaId = useId();

  const [isMessageSent, setIsMessageSent] =
    useState<isMessageSentType>("not sent yet");
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

    const formData = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsMessageSent("sent");
        formRef.current?.reset();
      } else {
        setIsMessageSent("error");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Title titleType="h3" className="pt-2 md:text-center">
        {translations.title}
      </Title>
      <Modal
        message={
          isMessageSent === "sent" ? translations.success : translations.error
        }
        buttonLabel={translations.close}
        isActive={isMessageSent !== "not sent yet"}
        onClickClose={() => setIsMessageSent("not sent yet")}
      />
      <form
        ref={formRef}
        onSubmit={handleFormSubmit}
        className="mx-auto mb-16 mt-10 flex max-w-xl flex-col gap-4 md:my-16"
      >
        <label htmlFor={nameInputId} className="text-lg">
          {translations.name}
        </label>
        <input
          required
          id={nameInputId}
          type="text"
          name="name"
          placeholder={translations.namePlaceholder}
          className="h-10 rounded-lg bg-[--input-bg-color] px-4 placeholder-[--placeholder-text-color] outline-0"
        />
        <label htmlFor={emailInputId} className="text-lg">
          {translations.email}
        </label>
        <input
          required
          id={emailInputId}
          type="email"
          name="email"
          placeholder={translations.emailPlaceholder}
          className="h-10 rounded-lg bg-[--input-bg-color] px-4 placeholder-[--placeholder-text-color] outline-0"
        />
        <label htmlFor={messageTextareaId} className="text-lg">
          {translations.message}
        </label>
        <textarea
          required
          id={messageTextareaId}
          name="message"
          placeholder={translations.messagePlaceholder}
          className="h-32 resize-none rounded-lg bg-[--input-bg-color] px-4 py-2 text-[--app-text-color] placeholder-[--placeholder-text-color] outline-0"
        />
        <button className="relative mt-4 flex items-center justify-center rounded-lg bg-[--contact-form-button-bg-color] px-4 py-2 text-lg font-semibold text-white">
          {translations.submit} {isLoading && <LoadingSpinner />}
        </button>
      </form>
    </>
  );
}
