import { useColorScheme } from 'react-native';

// Color schemes for the game rules website
// export const lightTheme = {
//   // Background colors
//   primary: '#ffffff',
//   secondary: '#f8fafc',
  
//   // Surface colors
//   surface: '#ffffff',
//   surfaceVariant: '#f8fafc',
//   surfaceContainer: '#f1f5f9',
  
//   // Text colors
//   onPrimary: '#0f172a',
//   onSecondary: '#334155',
//   onSurface: '#0f172a',
//   onSurfaceVariant: '#475569',
//   onSurfaceDisabled: '#94a3b8',
  
//   // Accent colors
//   primaryAccent: '#3b82f6',
//   secondaryAccent: '#f59e0b',
//   success: '#10b981',
//   warning: '#f59e0b',
//   error: '#ef4444',
  
//   // Border colors
//   border: '#e2e8f0',
//   borderVariant: '#cbd5e1',
  
//   // Shadow colors
//   shadow: 'rgba(0, 0, 0, 0.1)',
//   shadowVariant: 'rgba(0, 0, 0, 0.05)',
  
//   // Gradient colors
//   gradientStart: '#3b82f6',
//   gradientEnd: '#1d4ed8',
// };
export const lightTheme = {
  // Basic colors
  background: '#f0f0f0',
  secondaryBackground: '#e0e0e0',
  text: '#101010',
  colorText: '#ffffff',
  border: '#222222',
  buttonBackground: '#333333',
  buttonDisabled: '#666666',
  buttonText: '#ffffff',
  buttonTextDisabled: '#222222',
  cardBackground: '#222222',
  cardBorder: '#333333',

  // How to play colors
  howToPlayText: '#ffffff',
  howToPlayCardBackground: '#222222',
  howToPlayCardBorder: '#333333',

  // Character colors
  characterText: '#3d0153',
  characterCardBackground: '#b98cdc',
  characterCardBorder: '#220043',

  // Equipment colors
  equipmentText: '#ffffff',
  equipmentCardBackground: '#cee1f2',
  equipmentCardBorder: '#05147d',

  // Magic colors
  magicText: '#ffffff',
  magicCardBackground: '#222222',
  magicCardBorder: '#333333',
};

export const darkTheme = {
  // Basic colors
  background: '#000000',
  secondaryBackground: '#111111',
  text: '#ffffff',
  colorText: '#ffffff',
  border: '#222222',
  buttonBackground: '#333333',
  buttonText: '#ffffff',
  cardBackground: '#222222',
  cardBorder: '#333333',

  // How to play colors
  howToPlayText: '#ffffff',
  howToPlayCardBackground: '#222222',
  howToPlayCardBorder: '#333333',

  // Character colors
  characterText: '#3d0153',
  characterCardBackground: '#220043',
  characterCardBorder: '#b98cdc',

  // Equipment colors
  equipmentText: '#ffffff',
  equipmentCardBackground: '#05147d',
  equipmentCardBorder: '#cee1f2',

  // Magic colors
  magicText: '#ffffff',
  magicCardBackground: '#222222',
  magicCardBorder: '#333333',
};

// Theme management
let currentTheme;

export const getTheme = () => {
  return currentTheme === 'dark' ? darkTheme : lightTheme;
};

export const setTheme = (theme) => {
  currentTheme = theme;
};

// Helper function to get specific colors
export const getColor = (colorKey) => {
  const theme = getTheme();
  return theme[colorKey] || theme.onSurface;
};

// Common color combinations
export const getColorCombinations = () => {
  const theme = getTheme();
  return {
    card: {
      background: theme.surface,
      text: theme.onSurface,
      border: theme.border,
    },
    button: {
      primary: {
        background: theme.primaryAccent,
        text: theme.onPrimary,
      },
      secondary: {
        background: theme.secondaryAccent,
        text: theme.onPrimary,
      },
    },
    hero: {
      background: `linear-gradient(135deg, ${theme.gradientStart} 0%, ${theme.gradientEnd} 100%)`,
      text: theme.onPrimary,
    },
  };
}; 