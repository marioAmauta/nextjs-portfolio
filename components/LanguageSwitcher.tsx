import { LANGUAGE_SELECT_DATA } from '@/lib/constants';
import { useLanguage } from '@/hooks/useLanguage';

export function LanguageSwitcher() {
  const { locale, changeLanguage } = useLanguage();

  return (
    <label htmlFor={LANGUAGE_SELECT_DATA.languageId} className='flex items-center justify-center'>
      <select
        id={LANGUAGE_SELECT_DATA.languageId}
        onChange={changeLanguage}
        value={locale}
        className='h-full cursor-pointer rounded-md bg-[--app-bg-color] p-1 text-center outline-0 focus:ring-1 focus:ring-[--select-text-color]'
      >
        {LANGUAGE_SELECT_DATA.languageOptions.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
}
