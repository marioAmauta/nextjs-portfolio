import { ELEMENT_IDS } from '@/lib/constants';

export function ToggleButton() {
  return (
    <div
      id={ELEMENT_IDS.toggleButtonId}
      className='z-50 flex h-10 w-10 cursor-pointer items-center justify-center md:hidden'
    />
  );
}
