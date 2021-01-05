import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabNavigator from './BottomTabNavigator';
import CustomDrawerContent from './DrawerContent';
import { BookmarksStackNavigator, SettingsStackNavigator, SupportStackNavigator } from './StackNavigator';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator drawerContent={({ navigation }) => <CustomDrawerContent navigation={navigation} />}>
      <Drawer.Screen name="Main" component={BottomTabNavigator} />
      <Drawer.Screen name="Bookmarks" component={BookmarksStackNavigator} />
      <Drawer.Screen name="Settings" component={SettingsStackNavigator} />
      <Drawer.Screen name="Support" component={SupportStackNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator;