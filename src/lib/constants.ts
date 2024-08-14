import { AppPathnames } from "@/config";

import { ProjectCardProps } from "./definitions";

export const ELEMENT_IDS = {
  themeChecker: "theme-checker",
  themeSelectId: "theme-select",
  themePalette: "theme-palette",
  toggleButtonId: "toggle-button",
  mobileMenuId: "mobile-menu",
  bgBlurredId: "bg-blurred",
  mainHeaderId: "main-header",
  languageSelectId: "languageSelect",
  contactSectionId: "contact"
};

export const APP_LINKS = {
  home: "/",
  about: "/about",
  projects: "/projects",
  contact: `/#${ELEMENT_IDS.contactSectionId}`
};

export const NAVBAR_LINKS: {
  name: TranslationKey;
  path: AppPathnames;
}[] = [
  {
    name: "home",
    path: APP_LINKS.home
  },
  {
    name: "about",
    path: APP_LINKS.about
  },
  {
    name: "myProjects",
    path: APP_LINKS.projects
  },
  {
    name: "contact",
    path: APP_LINKS.contact
  }
];

export const METADATA_DEFAULT = {
  title: "Mario Programador",
  siteUrl: "https://marioprogramador.com/",
  ogImagePath: "/images/marioprogramador-desktop.png"
};

export const CONTACT_LINKS = [
  {
    href: "https://github.com/marioAmauta",
    label: "Github"
  },
  {
    href: "https://www.linkedin.com/in/marioamauta/",
    label: "Linkedin"
  }
];

export const THEME_INPUT_DATA = {
  light: {
    name: "theme-options",
    id: "light-theme",
    value: "light"
  },
  system: {
    name: "theme-options",
    id: "system-theme",
    value: "system"
  },
  dark: {
    name: "theme-options",
    id: "dark-palette",
    value: "dark"
  }
};

export const LANGUAGE_SELECT_DATA = {
  languageId: ELEMENT_IDS.languageSelectId,
  languageLabel: "Language",
  languageOptions: [
    {
      value: "en",
      label: "EN"
    },
    {
      value: "es",
      label: "ES"
    }
  ]
};

export const TECHNOLOGIES = {
  html: {
    label: "HTML",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML"
  },
  css: {
    label: "CSS",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS"
  },
  javascript: {
    label: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  react: {
    label: "React",
    href: "https://react.dev/"
  },
  propTypes: {
    label: "Prop-Types",
    href: "https://www.npmjs.com/package/prop-types"
  },
  dompurify: {
    label: "Dompurify",
    href: "https://www.npmjs.com/package/dompurify"
  },
  marked: {
    label: "Marked",
    href: "https://www.npmjs.com/package/marked"
  },
  vite: {
    label: "Vite",
    href: "https://vitejs.dev/"
  },
  mathExpressionEvaluator: {
    label: "Math Expression Evaluator",
    href: "https://www.npmjs.com/package/math-expression-evaluator"
  },
  cypress: {
    label: "Cypress",
    href: "https://www.cypress.io/"
  },
  tailwindcss: {
    label: "Tailwind CSS",
    href: "https://tailwindcss.com/"
  },
  heroicons: {
    label: "Heroicons",
    href: "https://heroicons.com/"
  },
  nextjs: {
    label: "Next.js",
    href: "https://nextjs.org/"
  },
  nextThemes: {
    label: "Next Themes",
    href: "https://github.com/pacocoursey/next-themes"
  },
  daisyui: {
    label: "DaisyUI",
    href: "https://daisyui.com/"
  },
  typescript: {
    label: "TypeScript",
    href: "https://www.typescriptlang.org/"
  }
};

export const PROJECTS_DATA: Record<string, ProjectCardProps> = {
  surveyForm: {
    title: "Survey Form",
    description: "surveyFormDescription",
    image: "/images/survey-form-desktop.png",
    technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css],
    links: {
      sourceCode: "https://github.com/marioAmauta/survey-form",
      liveDemo: "https://marioamauta.github.io/survey-form/"
    }
  },
  theSaxophoneCorner: {
    title: "The Saxophone Corner",
    description: "theSaxophoneCornerDescription",
    image: "/images/saxophone-landing-page-desktop.png",
    technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript],
    links: {
      sourceCode: "https://github.com/marioAmauta/saxophone-landing-page",
      liveDemo: "https://marioamauta.github.io/saxophone-landing-page/"
    }
  },
  javaScriptDocumentation: {
    title: "JavaScript Documentation",
    description: "javaScriptDocumentationDescription",
    image: "/images/javascript-documentation-desktop.png",
    technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript],
    links: {
      sourceCode: "https://github.com/marioAmauta/javascript-documentation",
      liveDemo: "https://marioamauta.github.io/javascript-documentation/"
    }
  },
  randomQuoteMachine: {
    title: "Random Quote Machine",
    description: "randomQuoteMachineDescription",
    image: "/images/random-quote-machine-desktop.png",
    technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript, TECHNOLOGIES.react, TECHNOLOGIES.vite],
    links: {
      sourceCode: "https://github.com/marioAmauta/random-quote-machine",
      liveDemo: "https://random-quote-machine-marioamauta.vercel.app/"
    }
  },
  markdownPreviewer: {
    title: "Markdown Previewer",
    description: "markdownPreviewerDescription",
    image: "/images/markdown-previewer-desktop.png",
    technologies: [
      TECHNOLOGIES.html,
      TECHNOLOGIES.css,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.react,
      TECHNOLOGIES.propTypes,
      TECHNOLOGIES.dompurify,
      TECHNOLOGIES.marked,
      TECHNOLOGIES.vite
    ],
    links: {
      sourceCode: "https://github.com/marioAmauta/markdown-previewer",
      liveDemo: "https://markdown-previewer-marioprogramador.vercel.app/"
    }
  },
  calculator: {
    title: "Calculator",
    description: "calculatorDescription",
    image: "/images/calculator-desktop.png",
    technologies: [
      TECHNOLOGIES.html,
      TECHNOLOGIES.css,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.react,
      TECHNOLOGIES.mathExpressionEvaluator,
      TECHNOLOGIES.propTypes,
      TECHNOLOGIES.vite,
      TECHNOLOGIES.cypress
    ],
    links: {
      sourceCode: "https://github.com/marioAmauta/react-calculator",
      liveDemo: "https://calculator-marioamauta.vercel.app/"
    }
  },
  pomodoroTimer: {
    title: "25 + 5 Clock",
    description: "pomodoroTimerDescription",
    image: "/images/react-25-plus-5-clock-desktop.png",
    technologies: [
      TECHNOLOGIES.html,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.heroicons,
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.react,
      TECHNOLOGIES.propTypes,
      TECHNOLOGIES.vite
    ],
    links: {
      sourceCode: "https://github.com/marioAmauta/react-25-plus-5-clock",
      liveDemo: "https://react-25-plus-5-clock.vercel.app/"
    }
  },
  githubDevfinder: {
    title: "Github Devfinder",
    description: "githubDevfinderDescription",
    image: "/images/github-devfinder-desktop.png",
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.nextThemes,
      TECHNOLOGIES.daisyui,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.typescript
    ],
    links: {
      sourceCode: "https://github.com/marioAmauta/github-devfinder/",
      liveDemo: "https://githubdevfinder.vercel.app/"
    }
  }
};
