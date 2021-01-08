import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { useTheme } from 'react-native-paper';

const DetailsScreen = ({ navigation }) => {
  const { colors } = useTheme(); 

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>Details Screen!</Text>
      <View style={styles.button}>
        <Button title="Go to Explore Screen" onPress={() => navigation.navigate('Explore')} />
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
