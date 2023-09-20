import { LANGUAGE_SELECT_DATA } from '@/lib/constants';
import { useLanguage } from '@/hooks/useLanguage';

export function LanguageSwitcher() {
  const { locale, changeLanguage } = useLanguage();

  return (
    <label
      htmlFor={LANGUAGE_SELECT_DATA.languageId}
      className='flex justify-center items-center'
    >
      <select
        id={LANGUAGE_SELECT_DATA.languageId}
        onChange={changeLanguage}
        value={locale}
        className='
          bg-[--app-bg-color]
          text-center
          outline-0
          focus:ring-1 focus:ring-[--select-text-color]
          rounded-md
          p-1
          h-full
        '
      >
        {LANGUAGE_SELECT_DATA.languageOptions.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
