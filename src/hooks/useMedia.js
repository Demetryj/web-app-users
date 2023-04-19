import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return { isMobile };
};
