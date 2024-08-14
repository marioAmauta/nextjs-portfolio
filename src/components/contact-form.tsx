"use client";

import { FormEvent, useId, useRef, useState } from "react";
import { useTranslations } from "use-intl";

import { sendEmail } from "@/app/actions";

import { isMessageSentType } from "@/lib/definitions";

import { LoadingSpinner } from "./icons";
import { Modal } from "./modal";
import { Title } from "./titles";

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
        isActive={isMessageSent !== "not sent yet"}
        message={isMessageSent === "sent" ? t("success") : t("error")}
        onClickClose={() => setIsMessageSent("not sent yet")}
        buttonLabel={t("close")}
      />
      <form ref={formRef} onSubmit={handleFormSubmit} className="mx-auto mb-16 mt-10 flex max-w-xl flex-col gap-4 md:my-16">
        <label htmlFor={nameInputId} className="text-lg">
          {t("name")}
        </label>
        <input
          required
          id={nameInputId}
          type="text"
          name="name"
          placeholder={t("namePlaceholder")}
          className="h-10 rounded-lg bg-input-bg-color px-4 outline-0 dark:bg-input-bg-color-dark"
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
          className="h-10 rounded-lg bg-input-bg-color px-4 outline-0 dark:bg-input-bg-color-dark"
        />
        <label htmlFor={messageTextareaId} className="text-lg">
          {t("message")}
        </label>
        <textarea
          required
          id={messageTextareaId}
          name="message"
          placeholder={t("messagePlaceholder")}
          className="h-24 resize-none rounded-lg bg-input-bg-color px-4 py-2 outline-0 dark:bg-input-bg-color-dark"
        />
        <button className="relative mt-4 flex items-center justify-center rounded-lg bg-btn-bg-color px-4 py-2 text-lg font-semibold dark:bg-btn-bg-color-dark">
          {t("submit")} {isLoading && <LoadingSpinner />}
        </button>
      </form>
    </>
  );
}
