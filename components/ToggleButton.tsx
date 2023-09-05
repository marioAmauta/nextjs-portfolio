import { ELEMENT_IDS } from '@/lib/constants';

export function ToggleButton() {
  return (
    <div
      id={ELEMENT_IDS.toggleButtonId}
      className='
        flex justify-center items-center
        w-10 h-10
        cursor-pointer
        z-10
        md:hidden
      '
    />
  );
}
