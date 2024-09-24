"use server";

import "server-only";

import sgMail, { MailDataRequired } from "@sendgrid/mail";
import { getTranslations } from "next-intl/server";

import { ActionReturnType } from "@/lib/definitions";
import { contactFormSchema } from "@/lib/schemas";

export async function sendEmail(data: unknown): Promise<ActionReturnType> {
  sgMail.setApiKey(String(process.env.SENDGRID_API_KEY));

  const t = await getTranslations("ContactForm");

  const parsedContactData = contactFormSchema(t).safeParse(data);

  if (!parsedContactData.success) {
    return {
      success: false,
      errors: parsedContactData.error.flatten().fieldErrors,
      message: t("invalidData")
    };
  }

  const { name, email, message } = parsedContactData.data;

  const msg: MailDataRequired = {
    to: String(process.env.SENDGRID_TO),
    from: String(process.env.SENDGRID_FROM),
    subject: "Client message from Portfolio",
    html: `
      <h1>Message from ${name}</h1>
      <p>${message}</p>
      <p>Reply to: ${email}</p>
    `
  };

  try {
    await sgMail.send(msg);

    return {
      success: true,
      message: t("success")
    };
  } catch {
    return {
      success: false,
      message: t("error")
    };
  }
}
