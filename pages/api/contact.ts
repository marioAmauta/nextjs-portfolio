import sgMail, { MailDataRequired } from '@sendgrid/mail';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function contactHandler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

  const msg: MailDataRequired = {
    to: String(process.env.SENDGRID_TO),
    from: String(process.env.SENDGRID_FROM),
    subject: 'Client message from Portfolio',
    html: `<h1>Message from ${name}</h1><p>${message}</p><p>Reply to: ${email}</p>`
  };

  await sgMail
    .send(msg)
    .then(() => {
      res.status(200).json({ message: 'Message sent successfully' });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Error sending message' });
    });
}
