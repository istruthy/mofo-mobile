import React from 'react';
import { StyleSheet, Button, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
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
        options={{
          headerStyle: {
            backgroundColor: '#184492',
          },
          headerTintColor: '#fff',
          headerLeft: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#FFF"
            />
          ),
        }}
      />
      <HomeStack.Screen
        name="Insights"
        component={InsightsDetail} //{InsightsScreen}
        // options={({ route }) => ({ title: route.params.name })},

        options={{
          headerStyle: {
            backgroundColor: '#184492',
          },
          // title: ({ route }) => ({ title: route.params.name }),
          headerTintColor: '#fff',
          // headerLeft: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#FFF"
            />
          ),
        }}
      />

      <HomeStack.Screen
        name="News"
        component={IndexScreen}
        options={{
          headerStyle: {
            backgroundColor: '#184492',
          },
          headerTintColor: '#fff',
          // headerLeft: (props) => <LogoTitle {...props} />,
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#FFF"
            />
          ),
        }}
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

const Insight = createStackNavigator();
const InsightsDetail = () => {
  return (
    <Insight.Navigator>
      <Insight.Screen
        name="InsightsList"
        component={InsightsScreen}
        options={{ title: 'TEST' }}
      />
      <Insight.Screen
        name="Show"
        component={ShowScreen}
        options={{ title: 'TEST' }}
        //options={({ route }) => ({ title: route.params.name })}
      />
    </Insight.Navigator>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

// const App = createAppContainer(navigator);

// export default () => {
//   return (
//     <Provider>
//       <App />
//     </Provider>
//   );
// };

export default function App() {
  return (
    <Provider>
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
    </Provider>
  );
}
