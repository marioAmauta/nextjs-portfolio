import { ProjectData } from "./definitions";

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

export const NAVBAR_LINKS = [
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
    type: "radio",
    name: "theme-options",
    id: "light-theme",
    value: "light"
  },
  system: {
    type: "radio",
    name: "theme-options",
    id: "system-theme",
    value: "system"
  },
  dark: {
    type: "radio",
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
  }
};

export const PROJECTS_DATA: Record<string, ProjectData> = {
  pomodoroTimer: {
    title: "25 + 5 Clock",
    images: {
      desktop: "/images/react-25-plus-5-clock-desktop.png"
    },
    links: {
      sourceCode: "https://github.com/marioAmauta/react-25-plus-5-clock",
      liveDemo: "https://react-25-plus-5-clock.vercel.app/"
    }
  },
  calculator: {
    title: "Calculator",
    images: {
      desktop: "/images/calculator-desktop.png"
    },
    links: {
      sourceCode: "https://github.com/marioAmauta/react-calculator",
      liveDemo: "https://calculator-marioamauta.vercel.app/"
    }
  },
  markdownPreviewer: {
    title: "Markdown Previewer",
    images: {
      desktop: "/images/markdown-previewer-desktop.png"
    },
    links: {
      sourceCode: "https://github.com/marioAmauta/markdown-previewer",
      liveDemo: "https://markdown-previewer-marioprogramador.vercel.app/"
    }
  },
  randomQuoteMachine: {
    title: "Random Quote Machine",
    images: {
      desktop: "/images/random-quote-machine-desktop.png"
    },
    links: {
      sourceCode: "https://github.com/marioAmauta/random-quote-machine",
      liveDemo: "https://random-quote-machine-marioamauta.vercel.app/"
    }
  },
  javaScriptDocumentation: {
    title: "JavaScript Documentation",
    images: {
      desktop: "/images/javascript-documentation-desktop.png"
    },
    links: {
      sourceCode: "https://github.com/marioAmauta/javascript-documentation",
      liveDemo: "https://marioamauta.github.io/javascript-documentation/"
    }
  },
  theSaxophoneCorner: {
    title: "The Saxophone Corner",
    images: {
      desktop: "/images/saxophone-landing-page-desktop.png"
    },
    links: {
      sourceCode: "https://github.com/marioAmauta/saxophone-landing-page",
      liveDemo: "https://marioamauta.github.io/saxophone-landing-page/"
    }
  },
  surveyForm: {
    title: "Survey Form",
    images: {
      desktop: "/images/survey-form-desktop.png"
    },
    links: {
      sourceCode: "https://github.com/marioAmauta/survey-form",
      liveDemo: "https://marioamauta.github.io/survey-form/"
    }
  }
};
