import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const ProfileScreen = ({ navigation }) => {
  const { colors } = useTheme(); 

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Profile Screen!</Text>
      <View style={styles.button}>
        <Button title="Go to Details Screen" onPress={() => navigation.navigate('Details')} />
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
