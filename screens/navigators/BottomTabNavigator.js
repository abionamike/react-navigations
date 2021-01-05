import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { DetailsStackNavigator, ExploreStackNavigator, HomeStackNavigator, ProfileStackNavigator } from './StackNavigator';

const BottomTabNavigator = () => {
  const Tab = createMaterialBottomTabNavigator();

  return(
    <Tab.Navigator 
      initialRouteName="Home"
      barStyle={{ backgroundColor: '#009387' }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeStackNavigator} 
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileStackNavigator} 
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Ionicons name="person" size={24} color={color} />
          ),
        }}
      />
      <Tab.Screen 
        name="Details" 
        component={DetailsStackNavigator} 
        options={{
          tabBarLabel: 'Details',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen 
        name="Explore" 
        component={ExploreStackNavigator} 
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color }) => (
            <Ionicons name="aperture" size={24} color={color} />
          ),
        }}
        />
    </Tab.Navigator>
  )
}

export default BottomTabNavigator;