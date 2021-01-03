import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Home Screen!</Text>
      <View style={styles.button}>
        <Button title="Go to Details Screen" onPress={() => navigation.navigate('Details')} />
      </View>
    </View>
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 30
  },
});
