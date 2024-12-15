import { routing } from "@/i18n/routing";

export const METADATA_DEFAULT = {
  title: "Mario Programador",
  url: new URL("https://marioprogramador.com/"),
  ogImageSrc: {
    [routing.locales[0]]: "/images/marioprogramador-og-image-en.png",
    [routing.locales[1]]: "/images/marioprogramador-og-image-es.png"
  },
  keywords: [
    "mario programador",
    "mario developer",
    "programador web",
    "web programmer",
    "desarrollador web",
    "web developer",
    "desarrollador frontend",
    "frontend developer",
    "typescript",
    "javascript",
    "reactjs",
    "react.js",
    "nextjs",
    "next.js",
    "next-intl",
    "next-themes",
    "css",
    "tailwindcss"
  ]
};
