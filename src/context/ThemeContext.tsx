import React, { createContext, useContext, useState, useEffect } from 'react';
import themesData from '../data/themes.json';

type Theme = {
  id: string;
  name: string;
};

type ThemeContextType = {
  currentTheme: string;
  setTheme: (id: string) => void;
  themes: Theme[];
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    return localStorage.getItem('reven-theme') || 'reven';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', currentTheme);
    localStorage.setItem('reven-theme', currentTheme);
  }, [currentTheme]);

  const setTheme = (id: string) => {
    setCurrentTheme(id);
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme, themes: themesData.themes }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
