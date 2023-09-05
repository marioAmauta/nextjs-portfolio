import { ELEMENT_IDS } from '@/lib/constants';

export function BlurredBackground() {
  return (
    <div
      id={ELEMENT_IDS.bgBlurredId}
      className='
        md:hidden
        fixed inset-0
        w-0
        transition duration-100
        backdrop-blur-sm bg-[--bg-blurred-color]
      '
    />
  );
}
