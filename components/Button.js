import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useColorScheme } from '../hooks';

const Button = ({ 
  children, 
  onPress, 
  disabled = false,
  style,
  textStyle,
  ...props 
}) => {
  const { theme } = useColorScheme();
  
  const buttonStyles = [
    styles.button,
    {
      backgroundColor: disabled 
        ? theme.buttonDisabled 
        : theme.buttonBackground,
      borderColor: theme.border,
    },
    style,
  ];
  
  const textStyles = [
    styles.text,
    {
      color: disabled 
        ? theme.buttonTextDisabled 
        : theme.buttonText,
    },
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.8}
      {...props}
    >
      <Text style={textStyles}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    paddingHorizontal: 24,
    paddingVertical: 12,
    minHeight: 44,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  
  text: {
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default Button; 