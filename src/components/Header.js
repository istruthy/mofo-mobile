import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Header = ({ navigation, label }) => {
  return (
    <View style={[styles.container]}>
      <Image
        source={require('../../assets/MOFO_Icon_500x500px.png')}
        style={{ width: 40, height: 40, marginLeft: 10 }}
      />
      <Text style={styles.sectionStyle}>{label}</Text>
      <Ionicons
        name="md-menu"
        size={32}
        color="#fff"
        onPress={() => navigation.openDrawer()}
        style={{ paddingRight: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    paddingTop: 0,
    height: 54,
    backgroundColor: '#1b4690',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionStyle: {
    fontSize: 14,
    textTransform: 'uppercase',
    color: '#fff',
    fontWeight: 'bold',
    marginRight: 14,
  },
});

export default Header;
