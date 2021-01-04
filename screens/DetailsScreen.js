import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native'

const DetailsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Details Screen!</Text>
      <View style={styles.button}>
        <Button title="Go to Profile Screen" onPress={() => navigation.navigate('Profile')} />
      </View>
    </View>
  )
}

export default DetailsScreen;

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
