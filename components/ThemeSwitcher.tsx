import { useTheme } from '@/hooks/useTheme';

export function ThemeSwitcher() {
  const theme = useTheme();

  return (
    <select
      className='
        bg-[--select-bg-color] text-[--select-text-color]
        rounded-md  
        p-1
        appearance-none
        text-center
        outline-0
      '
      id={theme.themeId}
      onChange={theme.handleThemeChange}
      value={theme.themeStatus}
    >
      {theme.themeOptions.map(optionElement => (
        <option
          key={optionElement.value}
          value={optionElement.value}
        >
          {optionElement.label}
        </option>
      ))}
    </select>
  );
}
