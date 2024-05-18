"use server";

import sgMail, { MailDataRequired } from "@sendgrid/mail";

export async function sendEmail(formData: FormData): Promise<{ ok: boolean }> {
  sgMail.setApiKey(String(process.env.SENDGRID_API_KEY));

  const { name, email, message } = Object.fromEntries(formData);

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

    return { ok: true };
  } catch (error) {
    console.error(error);

    return { ok: false };
  }
}
