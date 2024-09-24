import { useTranslations } from "next-intl";

import { cn } from "@/lib/utils";

import { ButtonLinkExternal } from "./link-button";
import { TypographyP } from "./ui/typography";

const CONTACT_LINKS = [
  {
    href: "https://github.com/marioAmauta",
    label: "Github"
  },
  {
    href: "https://www.linkedin.com/in/marioamauta/",
    label: "Linkedin"
  }
];

type ContactButtonsProps = {
  className?: string;
};

export function ContactButtons({ className }: ContactButtonsProps) {
  const t = useTranslations("ContactButtons");

  return (
    <div className={cn("space-y-6", className)}>
      <TypographyP className="text-center font-semibold">{t("description")}</TypographyP>
      <div className="flex justify-center gap-10">
        {CONTACT_LINKS.map(({ href, label }) => (
          <ButtonLinkExternal key={href} href={href} size="lg">
            {label}
          </ButtonLinkExternal>
        ))}
      </div>
    </div>
  );
}
