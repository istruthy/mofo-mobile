import React from 'react';
import { StyleSheet, Button, Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// https://github.com/hmajid2301/articles/blob/master/11.%20React%20Navigation%20with%20React%20Native/source_code/src/MainApp.js
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import LayoutScreen from './src/screens/LayoutScreen';
import EditScreen from './src/screens/EditScreen';
import HomeScreen from './src/screens/HomeScreen';
import InsightsScreen from './src/screens/InsightsScreen';
import BlogsScreen from './src/screens/BlogsScreen';
import PodcastsScreen from './src/screens/PodcastsScreen';
import EventsScreen from './src/screens/EventsScreen';
import { Ionicons } from '@expo/vector-icons';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => {
  function LogoTitle() {
    return (
      <Image
        style={{ width: 38, height: 38, marginHorizontal: 10 }}
        source={require('./assets/MOFO_Icon_500x500px.png')}
      />
    );
  }

  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen
        name="Morrison &amp; Foerster"
        component={HomeScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.goBack()}
            />
          ),
          headerLeft: (props) => <LogoTitle {...props} />,
          headerStyle: {
            backgroundColor: '#184492',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <Ionicons
              name="md-menu"
              size={28}
              color="#FFF"
              style={{ marginHorizontal: 10 }}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
    </HomeStack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const AppTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: ({ tintColor }) => (
            <Ionicons name="ios-home" color={tintColor} size={25} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const InsightDetailStack = createStackNavigator();
const InsightsDetail = () => {
  return (
    <InsightDetailStack.Navigator>
      <InsightDetailStack.Screen
        name="Insights"
        component={InsightsScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.goBack()}
            />
          ),

          headerStyle: {
            backgroundColor: '#184492',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <Ionicons
              name="md-menu"
              size={28}
              color="#FFF"
              style={{ marginHorizontal: 10 }}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <InsightDetailStack.Screen
        name="Show"
        component={ShowScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.goBack()}
            />
          ),
          title: 'Insights',
          headerStyle: {
            backgroundColor: '#184492',
          },
          headerTintColor: '#fff',
        })}
      />
    </InsightDetailStack.Navigator>
  );
};

const NewsDetailStack = createStackNavigator();
const NewsDetail = () => {
  return (
    <NewsDetailStack.Navigator>
      <NewsDetailStack.Screen
        name="In The News"
        component={IndexScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.goBack()}
            />
          ),

          headerStyle: {
            backgroundColor: '#184492',
          },
          headerTintColor: '#fff',
          headerRight: () => (
            <Ionicons
              name="md-menu"
              size={28}
              color="#FFF"
              style={{ marginHorizontal: 10 }}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      />
      <NewsDetailStack.Screen
        name="Show"
        component={ShowScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.goBack()}
            />
          ),
          title: 'In The News',
          headerStyle: {
            backgroundColor: '#184492',
          },
          headerTintColor: '#fff',
        })}
      />
    </NewsDetailStack.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen name="Home" component={AppTabs} />
          <Drawer.Screen name="Insights" component={InsightsDetail} />
          <Drawer.Screen name="News" component={NewsDetail} />
        </Drawer.Navigator>
        {/* <AppTabs /> */}
      </NavigationContainer>
    </Provider>
  );
}

// navigation.popToTop();
