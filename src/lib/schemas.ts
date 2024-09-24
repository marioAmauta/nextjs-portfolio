import { z } from "zod";

const stringTrim = z.string().trim();

export const contactFormSchema = (t: (key: IntlPath) => string) =>
  z.object({
    name: stringTrim.min(3, { message: t("nameError") }),
    email: stringTrim.email({ message: t("emailError") }),
    message: stringTrim.min(1, { message: t("messageError") })
  });
