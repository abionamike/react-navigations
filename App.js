import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import { View, StyleSheet } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'; 
import ProfileScreen from './screens/ProfileScreen';
import NotificationScreen from './screens/NotificationScreen';

const App = () => {
  const Stack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  return (
    <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerTintColor: '#fff',
          headerStyle: {
            backgroundColor: '#009387',
          },
          headerTitleAlign: 'center'
        }}>
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerLeft: () => <MaterialIcons name="menu" size={28} color="#fff" style={{ marginLeft: 8 }} />, }} />
          <Stack.Screen name="About" component={AboutScreen} />
        </Stack.Navigator>
        {/* <Tab.Navigator
          barStyle={{ backgroundColor: '#694fad' }}
          screenOptions={{
            headerShown: true
          }}
        >
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }} 
          />
          <Tab.Screen name="About" component={AboutScreen} options={{
            tabBarLabel: 'About',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account-box" color={color} size={26} />
            ),
          }}  
          />
          <Tab.Screen name="Profile" component={ProfileScreen} options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}  
          />
          <Tab.Screen name="Notification" component={NotificationScreen} options={{
            tabBarLabel: 'Notification',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="bell" color={color} size={26} />
            ),
          }}  
          />
        </Tab.Navigator> */}
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