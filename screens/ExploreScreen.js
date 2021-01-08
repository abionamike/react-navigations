import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';

const ExploreScreen = ({ navigation }) => {
  const { colors } = useTheme(); 

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Explore Screen!</Text>
      <View style={styles.button}>
        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  )
}

export default ExploreScreen;

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
