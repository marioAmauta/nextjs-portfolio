import { THEME_INPUT_DATA } from '@/lib/constants'
import { useTheme } from '@/hooks/useTheme'
import { ThemeIcons } from './Icons'

export function ThemeSwitcher() {
  const { theme, onThemeChange } = useTheme()

  return (
    <form
      id='theme-palette'
      className='
        flex gap-1
        w-min
        mx-auto
      '
      onChange={onThemeChange}
    >
      {Object.values(THEME_INPUT_DATA).map(({ id, name, type, value }) => (
        <label
          key={id}
          htmlFor={id}
          className={`
              ${theme === value ? 'active' : ''}
              flex justify-center items-center
              w-8 h-8
              transition-all duration-300
              cursor-pointer
            `}
        >
          <input
            id={id}
            name={name}
            type={type}
            value={value}
          />
          <ThemeIcons theme={value} />
        </label>
      ))}
    </form>
  )
}
