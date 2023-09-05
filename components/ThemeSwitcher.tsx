import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faDesktop, faMoon } from '@fortawesome/free-solid-svg-icons';
import { THEME_INPUT_DATA } from '@/lib/constants';
import { useLanguage } from '@/hooks/useLanguage';
import { useTheme } from '@/hooks/useTheme';

export function ThemeSwitcher() {
  const { translations } = useLanguage();
  const { theme, onThemeChange } = useTheme();

  return (
    <>
      <form
        id='theme-palette'
        className='
        flex justify-center items-center gap-2
        target:ring-1 target:ring-[--select-text-color]
      '
        onChange={onThemeChange}
      >
        {Object.values(THEME_INPUT_DATA).map(({ id, name, type, value }) => (
          <label
            key={id}
            htmlFor={id}
            className={`
              flex justify-center items-center
              ${theme === value ? 'active' : ''}
              p-1
              w-8 h-8
              transition duration-300
            `}
          >
            <input
              id={id}
              name={name}
              type={type}
              value={value}
            />
            <FontAwesomeIcon
              icon={value === 'light' ? faSun : value === 'system' ? faDesktop : faMoon}
            />
          </label>
        ))}
      </form>
      <span>{translations.themeLabel}</span>
    </>
  );
}
