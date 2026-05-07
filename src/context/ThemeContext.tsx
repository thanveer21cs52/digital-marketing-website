import React, { createContext, useContext, useState, useEffect } from 'react';
import themesData from '../data/themes.json';

type Theme = {
  id: string;
  name: string;
  colors: Record<string, string | undefined>;
};

type ThemeContextType = {
  currentTheme: string;
  setTheme: (id: string) => void;
  themes: Theme[];
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const CSS_VAR_MAP: Record<string, string> = {
  primary: '--primary',
  primaryContainer: '--primary-container',
  secondary: '--secondary',
  accent: '--accent',
  accentGlow: '--accent-glow',
  surface: '--surface',
  surfaceLow: '--surface-low',
  surfaceLowest: '--surface-lowest',
  textDark: '--text-dark',
  textMuted: '--text-muted',
  background: '--background',
  glass: '--glass-bg',
  glassStrong: '--glass-strong-bg',
  border: '--border-color',
  shadowGlow: '--accent-glow',
  shadowSoft: '--shadow-soft',
};

const DEFAULT_THEME_ID = 'luxury-light';

const applyThemeToDocument = (theme: Theme) => {
  const root = document.documentElement;
  root.setAttribute('data-theme', theme.id);

  const defaultTheme = themesData.themes.find((candidate) => candidate.id === DEFAULT_THEME_ID) ?? themesData.themes[0];
  const fallbackColors = defaultTheme?.colors ?? {};
  const colors: Record<string, string | undefined> = { ...fallbackColors, ...theme.colors };

  Object.entries(CSS_VAR_MAP).forEach(([colorKey, cssVar]) => {
    const value = colors[colorKey];
    if (typeof value === 'string' && value.length > 0) {
      root.style.setProperty(cssVar, value);
    }
  });

  if (colors.background) {
    root.style.setProperty('background-color', colors.background);
  }
};

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('reven-theme') : null;
    const availableThemes = themesData.themes.map((theme) => theme.id);

    if (savedTheme && availableThemes.includes(savedTheme)) {
      return savedTheme;
    }

    return DEFAULT_THEME_ID;
  });

  useEffect(() => {
    const theme = themesData.themes.find((candidate) => candidate.id === currentTheme) as Theme | undefined;
    if (!theme) {
      return;
    }

    applyThemeToDocument(theme);
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
