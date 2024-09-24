import { z } from "zod";

import { contactFormSchema } from "./schemas";

export type ActionReturnType =
  | {
      success: boolean;
      errors?: Record<string, unknown>;
      message?: string;
    }
  | undefined;

export type ContactFormSchemaType = z.infer<ReturnType<typeof contactFormSchema>>;
