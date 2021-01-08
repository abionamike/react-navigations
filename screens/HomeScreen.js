import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useTheme } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Home Screen!</Text>
      <View style={styles.button}>
        <Button title="Go to Profile Screen" onPress={() => navigation.navigate('Profile')} />
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
