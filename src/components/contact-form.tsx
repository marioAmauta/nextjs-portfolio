"use client";

import { Title } from "./titles";
import { Modal } from "./modal";
import { LoadingSpinner } from "./icons";
import { FormEvent, useId, useRef, useState } from "react";
import { isMessageSentType } from "@/lib/definitions";
import { useTranslations } from "use-intl";
import { sendEmail } from "@/app/actions";

export function ContactForm() {
  const t = useTranslations("ContactForm");

  const nameInputId = useId();
  const emailInputId = useId();
  const messageTextareaId = useId();

  const [isMessageSent, setIsMessageSent] = useState<isMessageSentType>("not sent yet");
  const [isLoading, setIsLoading] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  async function handleFormSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsLoading(true);

    const formData = new FormData(event.currentTarget);

    try {
      const res = await sendEmail(formData);

      if (res.ok) {
        setIsMessageSent("sent");
        formRef.current?.reset();
      } else {
        setIsMessageSent("error");
      }
    } catch (error) {
      console.error(error);
      throw new Error("Failed to send email");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      <Title titleType="h3" className="pt-2 md:text-center">
        {t("title")}
      </Title>
      <Modal
        message={isMessageSent === "sent" ? t("success") : t("error")}
        buttonLabel={t("close")}
        isActive={isMessageSent !== "not sent yet"}
        onClickClose={() => setIsMessageSent("not sent yet")}
      />
      <form
        ref={formRef}
        onSubmit={handleFormSubmit}
        className="mx-auto mb-16 mt-10 flex max-w-xl flex-col gap-4 md:my-16"
      >
        <label htmlFor={nameInputId} className="text-lg">
          {t("name")}
        </label>
        <input
          required
          id={nameInputId}
          type="text"
          name="name"
          placeholder={t("namePlaceholder")}
          className="h-10 rounded-lg bg-[--input-bg-color] px-4 placeholder-[--placeholder-text-color] outline-0"
        />
        <label htmlFor={emailInputId} className="text-lg">
          {t("email")}
        </label>
        <input
          required
          id={emailInputId}
          type="email"
          name="email"
          placeholder={t("emailPlaceholder")}
          className="h-10 rounded-lg bg-[--input-bg-color] px-4 placeholder-[--placeholder-text-color] outline-0"
        />
        <label htmlFor={messageTextareaId} className="text-lg">
          {t("message")}
        </label>
        <textarea
          required
          id={messageTextareaId}
          name="message"
          placeholder={t("messagePlaceholder")}
          className="h-32 resize-none rounded-lg bg-[--input-bg-color] px-4 py-2 text-[--app-text-color] placeholder-[--placeholder-text-color] outline-0"
        />
        <button className="relative mt-4 flex items-center justify-center rounded-lg bg-[--contact-form-button-bg-color] px-4 py-2 text-lg font-semibold text-white">
          {t("submit")} {isLoading && <LoadingSpinner />}
        </button>
      </form>
    </>
  );
}
