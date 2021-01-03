import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTab from './screens/BottomTab';

const App = () => {
  const Drawer = createDrawerNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={BottomTab} />
          {/* <Drawer.Screen name="Details" component={DetailsStackScreen} /> */}
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  }
});