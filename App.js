import React from 'react';
import { Image } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import {
  createStackNavigator,
  HeaderBackButton,
} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// https://github.com/hmajid2301/articles/blob/master/11.%20React%20Navigation%20with%20React%20Native/source_code/src/MainApp.js
import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogContext';
import { Provider as ContentProvider } from './src/context/ContentContext';
import ShowScreen from './src/screens/ShowScreen';
import HomeScreen from './src/screens/HomeScreen';
import InsightsScreen from './src/screens/InsightsScreen';
import BlogsScreen from './src/screens/BlogsScreen';
import PodcastsScreen from './src/screens/PodcastsScreen';
import EventsScreen from './src/screens/EventsScreen';
import DemoScreen from './src/screens/ContributorsScreen';
import EventsDetailScreen from './src/screens/EventsDetailScreen';
import {
  Ionicons,
  MaterialCommunityIcons,
  Feather,
  EvilIcons,
} from '@expo/vector-icons';

// stop visually showing the errors
console.disableYellowBox = true;

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

const PodcastDetailStack = createStackNavigator();
const PodcastDetail = () => {
  return (
    <PodcastDetailStack.Navigator>
      <PodcastDetailStack.Screen
        name="Podcasts"
        component={PodcastsScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.goBack()}
            />
          ),
          title: 'Podcasts',
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

      <PodcastDetailStack.Screen
        name="Show"
        component={ShowScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.goBack()}
            />
          ),
          title: 'Podcasts',
          headerStyle: {
            backgroundColor: '#184492',
          },
          headerTintColor: '#fff',
        })}
      />
    </PodcastDetailStack.Navigator>
  );
};

const EventDetailStack = createStackNavigator();
const EventDetail = () => {
  return (
    <EventDetailStack.Navigator>
      <EventDetailStack.Screen
        name="Events"
        component={EventsScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.goBack()}
            />
          ),
          title: 'Events',
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

      <EventDetailStack.Screen
        name="Show"
        component={EventsDetailScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.goBack()}
            />
          ),
          title: 'Events',
          headerStyle: {
            backgroundColor: '#184492',
          },
          headerTintColor: '#fff',
        })}
      />
    </EventDetailStack.Navigator>
  );
};

const BlogDetailStack = createStackNavigator();
const BlogDetail = () => {
  return (
    <BlogDetailStack.Navigator>
      <BlogDetailStack.Screen
        name="Blogs"
        component={BlogsScreen}
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

      <BlogDetailStack.Screen
        name="Show"
        component={ShowScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.goBack()}
            />
          ),
          title: 'Blogs',
          headerStyle: {
            backgroundColor: '#184492',
          },
          headerTintColor: '#fff',
        })}
      />
    </BlogDetailStack.Navigator>
  );
};

const CommonTabNavigator = createMaterialBottomTabNavigator(); // createBottomTabNavigator();

const CommonTabScreen = () => {
  return (
    <CommonTabNavigator.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: 'message-text-outline',
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}
    >
      <CommonTabNavigator.Screen
        name="ShowTab"
        component={ShowScreen}
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.goBack()}
            />
          ),
          title: 'xx', //route.params.category,
          headerStyle: {
            backgroundColor: '#184492',
          },
          headerTintColor: '#fff',
          tabBarLabel: 'Read',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="eye-outline"
              color={color}
              size={26}
            />
          ),
        })}
      />
      <CommonTabNavigator.Screen
        name="Authors"
        options={{
          tabBarLabel: 'Contributors',
          tabBarIcon: ({ color }) => (
            <Feather name="users" color={color} size={26} />
          ),
        }}
        component={DemoScreen}
      />
      <CommonTabNavigator.Screen
        name="Practices"
        options={{
          tabBarLabel: 'Share',
          tabBarIcon: ({ color }) => (
            <EvilIcons name="share-apple" color={color} size={26} />
          ),
        }}
        component={DemoScreen}
      />
    </CommonTabNavigator.Navigator>
  );
};

const CommonDetailStack = createStackNavigator();
const CommonDetail = () => {
  return (
    <CommonDetailStack.Screen
      name="Show"
      component={ShowScreen}
      options={({ navigation, route }) => ({
        headerLeft: (props) => (
          <HeaderBackButton
            tintColor="#fff"
            onPress={() => navigation.goBack()}
          />
        ),
        title: 'dd', //route.params.category,
        headerStyle: {
          backgroundColor: '#184492',
        },
        headerTintColor: '#fff',
      })}
    />
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
        component={CommonTabScreen} //CommonTabScreen // ShowScreen
        options={({ navigation, route }) => ({
          headerLeft: (props) => (
            <HeaderBackButton
              tintColor="#fff"
              onPress={() => navigation.goBack()}
            />
          ),
          title: route.params.category,
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
        component={CommonTabScreen}
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

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <Provider>
      <ContentProvider>
        <NavigationContainer>
          <Drawer.Navigator initialRouteName="Home">
            <Drawer.Screen name="Home" component={HomeStackScreen} />
            <Drawer.Screen name="Insights" component={InsightsDetail} />
            {/* InsightDeail */}
            <Drawer.Screen name="News" component={NewsDetail} />
            <Drawer.Screen name="Blogs" component={BlogDetail} />
            <Drawer.Screen name="Podcasts" component={PodcastDetail} />
            <Drawer.Screen name="Events" component={EventDetail} />
          </Drawer.Navigator>
          {/* <AppTabs /> */}
        </NavigationContainer>
      </ContentProvider>
    </Provider>
  );
}
