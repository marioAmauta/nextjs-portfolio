export const ELEMENT_IDS = {
  themeSelectId: 'theme-select',
  toggleButtonId: 'toggle-button',
  mobileMenuId: 'mobile-menu',
  bgBlurredId: 'bg-blurred',
  mainHeaderId: 'main-header',
  languageSelectId: 'language-select'
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

export const THEME_SELECT_DATA = {
  themeId: ELEMENT_IDS.themeSelectId,
  themeLabel: 'Theme',
  themeOptions: [
    {
      value: 'system',
      label: 'System'
    },
    {
      value: 'light',
      label: 'Light'
    },
    {
      value: 'dark',
      label: 'Dark'
    }
  ]
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
