import React, { useState, useEffect } from 'react';
import mofo from '../api/mofo';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

const HeroBlock = () => {
  const [state, setState] = useState({});

  const getHeroBlock = async () => {
    let response = await mofo.get(`/content-api?cid=508649981`);
    let hero = await mofo.get(`/content-api?cid=${response.data.heroImage}`);
    let data = hero.data;
    setState(data);
  };

  useEffect(() => {
    getHeroBlock();
  }, []);

  return (
    <ImageBackground
      style={[styles.halfHeight, { backgroundSize: '150% 150%' }]}
      source={{
        uri: `${state.splashImage}`,
      }}
    >
      <View style={styles.featuredContent}>
        <Text style={styles.headline}>{state.displayTitle}</Text>
        <Text style={styles.byline}>{state.subtitle}</Text>
        <Text style={styles.buttonStyle}>{state.buttonText}</Text>
      </View>
    </ImageBackground>
  );
};

export default HeroBlock;

const styles = StyleSheet.create({
  halfHeight: {
    flex: 2,
    flexDirection: 'column',
  },
  featuredContent: {
    justifyContent: 'space-around',
    flex: 1,
    margin: 20,
  },
  headline: {
    fontSize: 32,
    color: '#fff',
    fontFamily: 'Georgia',
    fontWeight: '600',
  },
  byline: {
    fontSize: 20,
    color: '#fff',
  },
  buttonStyle: {
    borderColor: '#FFF',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 14,
    padding: 10,
    fontWeight: '800',
    textAlign: 'center',
    color: '#fff',
  },
});
