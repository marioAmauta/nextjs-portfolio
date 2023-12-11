import { ELEMENT_IDS } from '@/lib/constants';

export function BlurredBackground() {
  return (
    <div
      id={ELEMENT_IDS.bgBlurredId}
      className='fixed inset-0 min-h-screen w-0 bg-[--bg-blurred-color] backdrop-blur-sm transition duration-100 md:hidden'
    />
  );
}
