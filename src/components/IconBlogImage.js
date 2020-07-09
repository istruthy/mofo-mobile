import React from 'react';
import { Text, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';

const IconBlockImage = ({ label, background, icon, backgroundImage }) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={[
        styles.halfWidth,
        {
          backgroundColor: background,
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        },
      ]}
    >
      <FontAwesome5 name={icon} style={styles.icon} />
      <Text style={styles.textStyle}>{label}</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  halfWidth: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 63,
    color: '#FFF',
    marginBottom: 10,
    fontWeight: '200',
    color: '#fff',
  },
  textStyle: {
    textTransform: 'uppercase',
    fontFamily: 'Verdana',
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default IconBlockImage;
