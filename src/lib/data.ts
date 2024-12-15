import { LinkWithLabel, ProjectData } from "./definitions";

export const TECHNOLOGIES: Record<string, LinkWithLabel> = {
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
  typescript: {
    label: "TypeScript",
    href: "https://www.typescriptlang.org/"
  },
  playwright: {
    href: "https://playwright.dev/",
    label: "Playwright"
  },
  shadcn: {
    href: "https://ui.shadcn.com/",
    label: "shadcn"
  },
  betterAuth: {
    href: "https://www.better-auth.com/",
    label: "Better-Auth"
  },
  prisma: {
    href: "https://www.prisma.io/",
    label: "Prisma"
  },
  reactHookForm: {
    href: "https://react-hook-form.com/",
    label: "React Hook Form"
  },
  zod: {
    href: "https://zod.dev/",
    label: "Zod"
  },
  useDebounce: {
    href: "https://www.npmjs.com/package/use-debounce",
    label: "use-debounce"
  }
};

export const PROJECTS_DATA: Record<string, ProjectData> = {
  randomQuoteMachine: {
    title: "Random Quote Machine",
    descriptionKey: "randomQuoteMachineDescription",
    imageSrc: {
      desktop: ["/images/random-quote-machine-desktop-01.png", "/images/random-quote-machine-desktop-02.png"],
      mobile: ["/images/random-quote-machine-mobile-01.png", "/images/random-quote-machine-mobile-02.png"]
    },
    technologies: [TECHNOLOGIES.javascript, TECHNOLOGIES.react, TECHNOLOGIES.vite],
    liveUrl: "https://random-quote-machine-marioamauta.vercel.app/",
    repoUrl: "https://github.com/marioAmauta/random-quote-machine"
  },
  markdownPreviewer: {
    title: "Markdown Previewer",
    descriptionKey: "markdownPreviewerDescription",
    imageSrc: {
      desktop: [
        "/images/markdown-previewer-desktop-01.png",
        "/images/markdown-previewer-desktop-03.png",
        "/images/markdown-previewer-desktop-03.png"
      ],
      mobile: [
        "/images/markdown-previewer-mobile-01.png",
        "/images/markdown-previewer-mobile-02.png",
        "/images/markdown-previewer-mobile-03.png"
      ]
    },
    technologies: [
      TECHNOLOGIES.javascript,
      TECHNOLOGIES.react,
      TECHNOLOGIES.propTypes,
      TECHNOLOGIES.dompurify,
      TECHNOLOGIES.marked,
      TECHNOLOGIES.vite
    ],
    repoUrl: "https://github.com/marioAmauta/markdown-previewer",
    liveUrl: "https://markdown-previewer-marioprogramador.vercel.app/"
  },
  githubDevfinder: {
    title: "Github Devfinder",
    descriptionKey: "githubDevfinderDescription",
    imageSrc: {
      desktop: [
        "/images/github-devfinder-desktop-01.png",
        "/images/github-devfinder-desktop-02.png",
        "/images/github-devfinder-desktop-03.png"
      ],
      mobile: [
        "/images/github-devfinder-mobile-01.png",
        "/images/github-devfinder-mobile-02.png",
        "/images/github-devfinder-mobile-03.png"
      ]
    },
    technologies: [
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.nextThemes,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.shadcn,
      TECHNOLOGIES.useDebounce
    ],
    repoUrl: "https://github.com/marioAmauta/github-devfinder/",
    liveUrl: "https://githubdevfinder.vercel.app/?q=marioAmauta"
  },
  clientesCarwash: {
    title: "Clientes Carwash",
    descriptionKey: "clientesCarwashDescription",
    imageSrc: {
      desktop: [
        "/images/clientes-carwash-desktop-01.png",
        "/images/clientes-carwash-desktop-02.png",
        "/images/clientes-carwash-desktop-03.png",
        "/images/clientes-carwash-desktop-04.png",
        "/images/clientes-carwash-desktop-05.png",
        "/images/clientes-carwash-desktop-06.png",
        "/images/clientes-carwash-desktop-07.png"
      ],
      mobile: [
        "/images/clientes-carwash-mobile-01.png",
        "/images/clientes-carwash-mobile-02.png",
        "/images/clientes-carwash-mobile-03.png",
        "/images/clientes-carwash-mobile-04.png",
        "/images/clientes-carwash-mobile-05.png",
        "/images/clientes-carwash-mobile-06.png",
        "/images/clientes-carwash-mobile-07.png"
      ]
    },
    technologies: [
      TECHNOLOGIES.prisma,
      TECHNOLOGIES.betterAuth,
      TECHNOLOGIES.react,
      TECHNOLOGIES.nextjs,
      TECHNOLOGIES.tailwindcss,
      TECHNOLOGIES.shadcn,
      TECHNOLOGIES.reactHookForm,
      TECHNOLOGIES.zod,
      TECHNOLOGIES.typescript,
      TECHNOLOGIES.playwright
    ],
    repoUrl: "https://github.com/marioAmauta/clientes-carwash",
    liveUrl: "https://clientes-carwash.vercel.app/iniciar-sesion?email=marioamauta@hello.com&password=hello123"
  }
};

export const projects = Object.values(PROJECTS_DATA).toReversed();
