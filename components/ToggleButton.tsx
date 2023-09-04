import { useToggleButton } from '@/hooks/useToggleButton';
import { ELEMENT_IDS } from '@/lib/constants';

export function ToggleButton() {
  useToggleButton();

  return (
    <div
      id={ELEMENT_IDS.toggleButtonId}
      className='
        flex justify-center items-center
        w-8 h-8
        cursor-pointer
        z-10
      '
    />
  );
}
