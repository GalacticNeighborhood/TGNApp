import { useState, useEffect } from 'react';
import { useColorScheme as useNativeColorScheme } from 'react-native';
import { setTheme, getTheme } from '../components/Colors';

const useColorScheme = () => {
  // Get the initial color scheme from the device
  const [hasHydrated, setHasHydrated] = useState(false);

  useEffect(() => {
    setHasHydrated(true);
  }, []);

  const colorScheme = useNativeColorScheme();

  if (hasHydrated) {
    setTheme(colorScheme);
    const theme = getTheme();
    return {
      // Current color scheme ('light' | 'dark')
      colorScheme,
      
      // Current theme object with all colors
      theme,
      
      // Helper to check if current scheme is dark
      isDark: colorScheme === 'dark',
      
      // Helper to check if current scheme is light
      isLight: colorScheme === 'light',
    };
  } else {
    setTheme('light');
    return {
      colorScheme: 'light',
      theme: getTheme(),
      isDark: false,
      isLight: true,
    };
  }
};

export default useColorScheme; 