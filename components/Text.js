import React from 'react';
import { Text as RNText } from 'react-native';
import { useColorScheme } from '../hooks';

const Text = ({ 
  children, 
  color,
  size = 16,
  style,
  ...props 
}) => {
  const { theme } = useColorScheme();
  
  const textStyles = [
    {
      color: color || theme.text,
      fontSize: size,
      lineHeight: size * 1.5,
    },
    style,
  ];

  return (
    <RNText style={textStyles} {...props}>
      {children}
    </RNText>
  );
};

export default Text; 