import React from 'react';
import { View, StyleSheet } from 'react-native';
// import SafeAreaView from 'react-native-safe-area-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { DrawerItems } from 'react-navigation-drawer';

const DrawerNavigator = (props) => {
  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never' }}
    >
      <View>
        <DrawerItems
          activeBackgroundColor={'black'}
          activeTintColor={'white'}
          iconContainerStyle={styles.icons}
          {...props}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  icons: {
    width: 30,
    fontSize: 40,
  },
});

export default DrawerNavigator;
