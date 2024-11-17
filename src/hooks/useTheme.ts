import { useLayoutEffect, useState } from 'react';

export const useTheme = () => {
  const isDeviceDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const defaultTheme = isDeviceDark ? 'dark' : 'light';
  const [theme, setTheme] = useState(localStorage.getItem('theme') || defaultTheme);

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme, isLight: theme === 'light' };
};
