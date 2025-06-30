import React from 'react';
import { View, StyleSheet } from 'react-native';

const Container = ({ 
  children, 
  style,
  ...props 
}) => {
  
  const containerStyles = [
    styles.container,
    style,
  ];

  return (
    <View style={containerStyles} {...props}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default Container; 