import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useColorScheme } from '../hooks';

const Card = ({ 
  children, 
  style,
  ...props 
}) => {
  const { theme } = useColorScheme();
  
  const cardStyles = [
    styles.card,
    {
      backgroundColor: theme.cardBackground,
      borderColor: theme.cardBorder,
      shadowColor: theme.cardBorder,
    },
    style,
  ];

  return (
    <View style={cardStyles} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 12,
    borderWidth: 5,
    padding: 16,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
});

export default Card; 