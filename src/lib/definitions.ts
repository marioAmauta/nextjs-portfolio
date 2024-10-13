export type LinkWithLabel = { label: string; href: string };

export type ProjectData = {
  title: string;
  descriptionKey: TranslationKey;
  imageSrc: { desktop: string[]; mobile: string[] };
  technologies: LinkWithLabel[];
  liveUrl: string;
  repoUrl: string;
};
