export const ELEMENT_IDS = {
  themeSelectId: 'themeSelect',
  toggleButtonId: 'toggle-button',
  mobileMenuId: 'mobile-menu',
  bgBlurredId: 'bg-blurred',
  mainHeaderId: 'main-header',
  languageSelectId: 'languageSelect'
};

export const PAGE_LINKS = {
  NAVBAR_LINKS: [
    {
      name: 'home',
      path: '/'
    },
    {
      name: 'myProjects',
      path: '/projects'
    },
    {
      name: 'about',
      path: '/about'
    },
    {
      name: 'contact',
      path: '/contact'
    }
  ]
};

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
      label: 'En'
    },
    {
      value: 'es',
      label: 'Es'
    }
  ]
};
