import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
// https://reactnavigation.org/blog/2020/01/29/using-react-navigation-5-with-react-native-paper/
// import { Feed } from './feed';
// import { Messages } from './messages';
// import { Notifications } from './notifications';
import DemoScreen from '../screens/DemoScreen';
import BottomNav from './BottomNav';
const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      // initialRouteName="Feed"
      shifting={true}
      sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Feed"
        component={DemoScreen}
        options={{
          tabBarIcon: 'home-account',
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DemoScreen}
        options={{
          tabBarIcon: 'bell-outline',
        }}
      />
      <Tab.Screen
        name="Messages"
        component={DemoScreen}
        options={{
          tabBarIcon: 'message-text-outline',
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
