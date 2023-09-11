export const ELEMENT_IDS = {
  themeSelectId: 'themeSelect',
  toggleButtonId: 'toggle-button',
  mobileMenuId: 'mobile-menu',
  bgBlurredId: 'bg-blurred',
  mainHeaderId: 'main-header',
  languageSelectId: 'languageSelect'
};

export const CONTACT_LINKS = [
  {
    href: 'https://github.com/marioAmauta',
    label: 'Github'
  },
  {
    href: 'https://www.linkedin.com/in/marioamauta/',
    label: 'Linkedin'
  }
];

export const NAVBAR_LINKS = [
  {
    name: 'home',
    path: '/'
  },
  {
    name: 'about',
    path: '/about'
  },
  {
    name: 'myProjects',
    path: '/projects'
  },

  {
    name: 'contact',
    path: '/contact'
  }
];

export const THEME_INPUT_DATA = {
  light: {
    type: 'radio',
    name: 'theme-options',
    id: 'light-theme',
    value: 'light'
  },
  system: {
    type: 'radio',
    name: 'theme-options',
    id: 'system-theme',
    value: 'system'
  },
  dark: {
    type: 'radio',
    name: 'theme-options',
    id: 'dark-palette',
    value: 'dark'
  }
};

export const LANGUAGE_SELECT_DATA = {
  languageId: ELEMENT_IDS.languageSelectId,
  languageLabel: 'Language',
  languageOptions: [
    {
      value: 'en',
      label: 'EN'
    },
    {
      value: 'es',
      label: 'ES'
    }
  ]
};

export const TECHNOLOGIES = {
  html: {
    label: 'HTML',
    href: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
  },
  css: {
    label: 'CSS',
    href: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
  },
  javascript: {
    label: 'JavaScript',
    href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
  },
  react: {
    label: 'React',
    href: 'https://react.dev/'
  },
  propTypes: {
    label: 'Prop-Types',
    href: 'https://www.npmjs.com/package/prop-types'
  },
  dompurify: {
    label: 'Dompurify',
    href: 'https://www.npmjs.com/package/dompurify'
  },
  marked: {
    label: 'Marked',
    href: 'https://www.npmjs.com/package/marked'
  },
  vite: {
    label: 'Vite',
    href: 'https://vitejs.dev/'
  }
};

export const PROJECTS_DATA = {
  markdownPreviewer: {
    title: 'Markdown Previewer',
    images: {
      desktop: '/images/markdown-previewer-desktop.png',
      mobile: '/images/markdown-previewer-mobile.png'
    },
    links: {
      sourceCode: 'https://github.com/marioAmauta/markdown-previewer',
      liveDemo: 'https://markdown-previewer-marioprogramador.vercel.app/'
    }
  },
  randomQuoteMachine: {
    title: 'Random Quote Machine',
    images: {
      desktop: '/images/random-quote-machine-desktop.png',
      mobile: '/images/random-quote-machine-mobile.png'
    },
    links: {
      sourceCode: 'https://github.com/marioAmauta/random-quote-machine',
      liveDemo: 'https://random-quote-machine-marioamauta.vercel.app/'
    }
  }
};
