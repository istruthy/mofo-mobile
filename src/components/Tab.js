import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

// import PageA from "../../views/Home/PageA";
// import PageB from "../../views/Home/PageB";

const Tab = createMaterialTopTabNavigator(
  {
    PageA: {
      navigationOptions: {
        tabBarLabel: 'PageA',
      },
      screen: PageA,
    },
    PageB: {
      navigationOptions: {
        tabBarLabel: 'PageB',
      },
      screen: PageB,
    },
  },
  {
    tabBarPosition: 'bottom',
  }
);

export default Tab;