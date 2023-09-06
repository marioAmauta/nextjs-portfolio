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
