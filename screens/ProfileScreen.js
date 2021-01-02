import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Profile Screen!</Text>
      <View style={styles.button}>
        <Button title="Go to Notification Screen" onPress={() => navigation.navigate('Notification')} />
      </View>
    </View>
  )
}

export default ProfileScreen;

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