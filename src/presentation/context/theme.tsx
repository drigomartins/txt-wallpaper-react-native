import { createContext, useContext, useState } from 'react';
import { Category, WallpaperItem } from '@/domain';

type ThemeContextType = 'light' | 'dark';

const ThemeContext = createContext<any>('light');

interface Props extends React.PropsWithChildren {}

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeContextType>('dark');
  const [wallpaper, setWallpaper] = useState<WallpaperItem>();
  const [category, setCategory] = useState<Category>();

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        wallpaper,
        setWallpaper,
        category,
        setCategory,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  const data = useContext(ThemeContext);
  const { theme, setTheme, wallpaper, setWallpaper, category, setCategory } =
    data;
  return {
    theme,
    setTheme,
    wallpaper,
    setWallpaper,
    category,
    setCategory,
  };
}
