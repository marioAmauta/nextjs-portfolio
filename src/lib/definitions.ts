import { usePathname } from "@/navigation";
import { ReactNode } from "react";

type LinkWithLabel = {
  label: string;
  href: string;
};

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  technologies: LinkWithLabel[];
  links: {
    sourceCode: string;
    liveDemo: string;
  };
};

export type LinkButtonProps = {
  href: ReturnType<typeof usePathname>;
  label: string;
  className?: string;
};

export type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
};

export type DescriptionParagraphProps = {
  text: string;
  className?: string;
};

export type DescriptionSectionProps = {
  children: ReactNode;
  className?: string;
};

export type TitleProps = {
  children: ReactNode;
  titleType: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "hero" | "heroSubtitle";
  className?: string;
};

export type isMessageSentType = "not sent yet" | "sent" | "error";

export type ModalProps = {
  message: string;
  buttonLabel: string;
  onClickClose: () => void;
} & useModalProps;

export type useModalProps = {
  isActive: boolean;
};

export type ProjectData = {
  title: string;
  images: {
    desktop: string;
  };
  links: {
    sourceCode: string;
    liveDemo: string;
  };
};
