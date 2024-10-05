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

export type LinkWithLabel = { label: string; href: string };

export type ProjectData = {
  title: string;
  shortDescriptionKey: string;
  longDescriptionKey: string;
  longDescriptionParagraphs: string[];
  imageSrc: { desktop: string[]; mobile: string[] };
  technologies: LinkWithLabel[];
  liveUrl: string;
  repoUrl: string;
};
