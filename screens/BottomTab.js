import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const BottomTab = () => {
  const Stack = createStackNavigator();
  const Tab = createMaterialBottomTabNavigator();

  const StackNavigator = ({ children, navigation }) => (
    <Stack.Navigator screenOptions={{
      headerTintColor: '#fff',
      headerStyle: {
        backgroundColor: '#009387',
      },
      headerTitleAlign: 'center',
      headerLeft: () => <MaterialIcons name="menu" size={28} color="#fff" style={{ marginLeft: 8 }} onPress={() => navigation.openDrawer()} />,
    }}
    >
      {children}
    </Stack.Navigator>
  )

  const HomeStackScreen = ({ navigation }) => (
    <StackNavigator navigation={navigation}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </StackNavigator>
  )

  const DetailsStackScreen = ({ navigation }) => (
    <StackNavigator navigation={navigation}>
      <Stack.Screen name="Details" component={DetailsScreen} />
    </StackNavigator>
  )

  const ExploreStackScreen = ({ navigation }) => (
    <StackNavigator navigation={navigation}>
      <Stack.Screen name="Explore" component={ExploreScreen} />
    </StackNavigator>
  )

  const ProfileStackScreen = ({ navigation }) => (
    <StackNavigator navigation={navigation}>
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </StackNavigator>
  )

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreStackScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: "#009387",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;