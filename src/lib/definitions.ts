export interface LinkWithLabel {
  label: string;
  href: string;
}

export interface ProjectData {
  title: string;
  descriptionKey: TranslationKey;
  imageSrc: { desktop: string[]; mobile: string[] };
  technologies: LinkWithLabel[];
  liveUrl: string;
  repoUrl: string;
}
