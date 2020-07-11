import React from 'react';
import { StyleSheet } from 'react-native';

import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';

import DrawerNavigator from './src/components/DrawerNavigator';
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
const navigator = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            name="ios-home"
            style={[styles.icon, { color: tintColor, fontSize: 22 }]}
          />
        ),
        drawerLabel: 'Home',
      },
      screen: HomeScreen,
    },

    InsightsScreen: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-eye" style={{ color: tintColor, fontSize: 22 }} />
        ),
        drawerLabel: 'Insights',
      },
      screen: InsightsScreen,
    },

    ShowScreen: {
      navigationOptions: ({ navigation }) => {
        return {
          drawerLabel: () => null,
        };
      },
      screen: ShowScreen,
    },

    IndexScreen: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            name="ios-globe"
            style={{ color: tintColor, fontSize: 22 }}
          />
        ),
        drawerLabel: 'In The News',
      },
      screen: IndexScreen,
    },

    BlogsScreen: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            name="ios-globe"
            style={{ color: tintColor, fontSize: 22 }}
          />
        ),
        drawerLabel: 'Blogs',
      },
      screen: BlogsScreen,
    },

    PodcastsScreen: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            name="ios-globe"
            style={{ color: tintColor, fontSize: 22 }}
          />
        ),
        drawerLabel: 'Podcasts',
      },
      screen: PodcastsScreen,
    },

    EventsScreen: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons
            name="ios-globe"
            style={{ color: tintColor, fontSize: 22 }}
          />
        ),
        drawerLabel: 'Events',
      },
      screen: EventsScreen,
    },
  },

  {
    contentComponent: DrawerNavigator,
  }

  // {
  //   Index: IndexScreen,
  //   Show: ShowScreen,
  //   Create: CreateScreen,
  //   Edit: EditScreen,
  //   Layout: LayoutScreen,
  //   Home: HomeScreen,
  //   Insights: InsightsScreen,
  // },
  // {
  //   initialRouteName: 'Home',
  //   defaultNavigationOptions: {
  //     title: 'Blogs',
  //   },
  // }
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

const App = createAppContainer(navigator);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  );
};
