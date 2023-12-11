import { ELEMENT_IDS, THEME_INPUT_DATA } from '@/lib/constants';
import { useTheme } from '@/hooks/useTheme';
import { ThemeIcons } from './Icons';

export function ThemeSwitcher() {
  const { theme, onThemeChange } = useTheme();

  return (
    <form id={ELEMENT_IDS.themePalette} onChange={onThemeChange} className='mx-auto flex w-min gap-1'>
      {Object.values(THEME_INPUT_DATA).map(({ id, name, type, value }) => (
        <label
          key={id}
          htmlFor={id}
          className={`
            flex h-8 w-8 cursor-pointer items-center justify-center transition-all duration-300
            ${theme === value ? 'active' : ''}
          `}
        >
          <input id={id} name={name} type={type} value={value} />
          <ThemeIcons theme={value} />
        </label>
      ))}
    </form>
  );
}
