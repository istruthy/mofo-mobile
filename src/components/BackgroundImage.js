import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const BackgroundImage = ({ children, imageSource }) => {
  return (
    <View>
      <Image style={styles.backroundImageStyle} source={imageSource} />
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1
  },
  backroundImageStyle: {
    flex: 1,
    position: 'absolute',
    zIndex: 0,
    width: '100%',
    height: '100%',

  }
});

export default BackgroundImage;