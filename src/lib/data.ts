import { ProjectCardProps } from "@/components/project-card";

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
  randomQuoteMachine: {
    title: "Random Quote Machine",
    descriptionKey: "randomQuoteMachineDescription",
    imageSrc: "/images/random-quote-machine-desktop.png",
    technologies: [TECHNOLOGIES.html, TECHNOLOGIES.css, TECHNOLOGIES.javascript, TECHNOLOGIES.react, TECHNOLOGIES.vite],
    links: {
      sourceCode: "https://github.com/marioAmauta/random-quote-machine",
      liveDemo: "https://random-quote-machine-marioamauta.vercel.app/"
    }
  },
  markdownPreviewer: {
    title: "Markdown Previewer",
    descriptionKey: "markdownPreviewerDescription",
    imageSrc: "/images/markdown-previewer-desktop.png",
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
  githubDevfinder: {
    title: "Github Devfinder",
    descriptionKey: "githubDevfinderDescription",
    imageSrc: "/images/github-devfinder-desktop.png",
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
      liveDemo: "https://githubdevfinder.vercel.app/?user=marioAmauta"
    }
  }
};
