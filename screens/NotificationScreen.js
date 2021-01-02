import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const NotificationScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Notification Screen!</Text>
      <View style={styles.button}>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  )
}

export default NotificationScreen;

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
