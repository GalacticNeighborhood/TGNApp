import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useColorScheme } from '../hooks';
import Text from './Text';

const DamageTable = ({ columns = 2 }) => {
  const { theme } = useColorScheme();
  
  // Ensure columns is between 2 and 6
  const numColumns = Math.max(2, Math.min(6, columns + 1));
  
  // Create array of column indices (excluding the label column)
  const columnIndices = Array.from({ length: numColumns - 1 }, (_, i) => i + 1);

  // Function to determine if a cell should be dark (for checkerboard pattern)
  const isDarkCell = (rowIndex, colIndex) => {
    return (rowIndex + colIndex) % 2 === 1;
  };

  return (
    <View style={[styles.table, { borderColor: theme.border }]}>
      {/* Header row */}
      <View style={styles.row}>
        <View style={[styles.labelCell, { 
            backgroundColor: isDarkCell(0, 0) ? theme.background : theme.secondaryBackground, 
            borderColor: theme.border }]}>
          <Text style={styles.labelText}>Die Roll</Text>
        </View>
        {columnIndices.map((colIndex) => (
          <View 
            key={colIndex} 
            style={[
              styles.cell, 
              { 
                borderColor: theme.border,
                backgroundColor: isDarkCell(0, colIndex) ? theme.background : theme.secondaryBackground
              }
            ]}
          >
            <Text style={styles.cellText}></Text>
          </View>
        ))}
      </View>
      
      {/* Data row */}
      <View style={styles.row}>
        <View style={[styles.labelCell, { 
            backgroundColor: isDarkCell(1, 0) ? theme.background : theme.secondaryBackground, 
            borderColor: theme.border }]}>
          <Text style={styles.labelText}>Damage</Text>
        </View>
        {columnIndices.map((colIndex) => (
          <View 
            key={colIndex} 
            style={[
              styles.cell, 
              { 
                borderColor: theme.border,
                backgroundColor: isDarkCell(1, colIndex) ? theme.background : theme.secondaryBackground
              }
            ]}
          >
            <Text style={styles.cellText}></Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  table: {
    borderWidth: 3,
    borderRadius: 4,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
  labelCell: {
    flex: 1,
    padding: 8,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cell: {
    flex: 1,
    padding: 8,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 40,
  },
  labelText: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  cellText: {
    fontSize: 14,
  },
});

export default DamageTable;
