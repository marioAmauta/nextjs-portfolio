import { ReactNode } from 'react';

type Title = {
  children: ReactNode;
  titleType: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'hero';
};

export function Title({ children, titleType }: Title) {
  switch (titleType) {
    case 'hero':
      return <h1 className='text-5xl font-bold'>{children}</h1>;
    case 'h1':
      return <h1 className='text-5xl font-bold mb-10'>{children}</h1>;
    case 'h2':
      return <h2 className='text-4xl font-bold mb-10 '>{children}</h2>;
    case 'h3':
      return <h3 className='text-3xl font-bold'>{children}</h3>;
    case 'h4':
      return <h4 className='text-2xl font-bold'>{children}</h4>;
    case 'h5':
      return <h5 className='text-xl font-bold'>{children}</h5>;
    case 'h6':
      return <h6 className='text-lg font-bold'>{children}</h6>;
    default:
      throw new Error('Invalid title type');
  }
}
