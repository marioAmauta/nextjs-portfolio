"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useTranslations } from "use-intl";

import { sendEmail } from "@/app/actions";

import { ContactFormSchemaType } from "@/lib/definitions";
import { contactFormSchema } from "@/lib/schemas";

import { ButtonLoading } from "@/components/button-loading";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const t = useTranslations("ContactForm");
  const [isPending, startTransition] = useTransition();

  const form = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema(t)),
    defaultValues: {
      name: "",
      email: "",
      message: ""
    }
  });

  async function onSubmit(data: ContactFormSchemaType) {
    startTransition(async () => {
      const response = await sendEmail(data);

      if (response) {
        if (response.success) {
          toast.success(t("success"));
          form.reset();
        } else {
          toast.error(t("error"));
        }
      }
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mx-auto max-w-lg space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("nameLabel")}</FormLabel>
              <FormControl>
                <Input placeholder={t("namePlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("emailLabel")}</FormLabel>
              <FormControl>
                <Input type="email" placeholder={t("emailPlaceholder")} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("messageLabel")}</FormLabel>
              <FormControl>
                <Textarea placeholder={t("messagePlaceholder")} className="resize-none" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ButtonLoading loading={isPending} disabled={isPending} className="w-full">
          {t("submit")}
        </ButtonLoading>
      </form>
    </Form>
  );
}
