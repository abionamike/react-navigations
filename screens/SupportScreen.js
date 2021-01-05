import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const SupportScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Support Screen!</Text>
    </View>
  )
}

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
