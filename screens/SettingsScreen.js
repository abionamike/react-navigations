import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

const SettingsScreen = () => {
  const { colors } = useTheme(); 
  
  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Settings Screen!</Text>
    </View>
  )
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
