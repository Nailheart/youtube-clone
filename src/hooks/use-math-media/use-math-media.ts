import { useState, useLayoutEffect } from 'hooks/hooks';

type MatchMedia = {
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
}

const queries = [
  '(min-width: 320px) and (max-width: 767px)',
  '(min-width: 768px) and (max-width: 991px)',
  '(min-width: 992px) and (max-width: 1439px)',
  '(min-width: 1440px)',
];

const useMatchMedia = () => {
  const mediaQueryLists = queries.map((query) => matchMedia(query));
  const getValues = () => mediaQueryLists.map((list) => list.matches);
  const [values, setValues] = useState(getValues);

  useLayoutEffect(() => {
    const handler = () => setValues(getValues);

    mediaQueryLists.forEach((list) => list.addEventListener('change', handler));

    return () =>
      mediaQueryLists.forEach((list) =>
        list.removeEventListener('change', handler)
      );
  }, []);

  return ['sm', 'md', 'lg', 'xl'].reduce(
    (acc, screen, index) => ({
      ...acc,
      [screen]: values[index]
    }),
    {}
  ) as MatchMedia;
};


export { useMatchMedia };