import { LANGUAGE_SELECT_DATA } from '@/lib/constants';
import { useLanguage } from '@/hooks/useLanguage';

export function LanguageSwitcher() {
  const { locale, translations, changeLanguage } = useLanguage();

  return (
    <>
      <select
        id={LANGUAGE_SELECT_DATA.languageId}
        onChange={changeLanguage}
        value={locale}
        className='
          rounded-md  
          p-1
          text-center
          outline-0
          focus:ring-1 focus:ring-[--select-text-color]
        '
      >
        {LANGUAGE_SELECT_DATA.languageOptions.map(option => (
          <option
            key={option.value}
            value={option.value}
          >
            {translations[LANGUAGE_SELECT_DATA.languageId][option.value]}
          </option>
        ))}
      </select>
      <span>{translations.languageLabel}</span>
    </>
  );
}
