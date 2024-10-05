import { LinkWithLabel, ProjectData } from "./definitions";
import { createSlug } from "./utils";

export class ProjectDataDTO implements ProjectData {
  slug: string;
  title: string;
  longDescriptionKey: string;
  shortDescriptionKey: string;
  longDescriptionParagraphs: string[];
  imageSrc: { desktop: string[]; mobile: string[] };
  technologies: LinkWithLabel[];
  liveUrl: string;
  repoUrl: string;

  constructor(project: ProjectData) {
    this.slug = createSlug(project.title);
    this.title = project.title;
    this.longDescriptionKey = project.longDescriptionKey;
    this.shortDescriptionKey = project.shortDescriptionKey;
    this.longDescriptionParagraphs = project.longDescriptionParagraphs;
    this.imageSrc = project.imageSrc;
    this.technologies = project.technologies;
    this.liveUrl = project.liveUrl;
    this.repoUrl = project.repoUrl;
  }
}

export class ProjectCardDTO implements Pick<ProjectDataDTO, "slug" | "imageSrc" | "title" | "shortDescriptionKey"> {
  slug: string;
  imageSrc: { desktop: string[]; mobile: string[] };
  title: string;
  shortDescriptionKey: string;

  constructor(project: ProjectDataDTO) {
    this.slug = project.slug;
    this.imageSrc = project.imageSrc;
    this.title = project.title;
    this.shortDescriptionKey = project.shortDescriptionKey;
  }
}
