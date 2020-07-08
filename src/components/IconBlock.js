import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const IconBlock = ({ label, background }) => {
  return (
    <View style={styles.halfWidth}>
      <FontAwesome5 name='globe-americas' style={styles.icon} />
      <Text>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  halfWidth: {
    backgroundColor: '#FFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

  },
  icon: {
    fontSize: 63,
    color: '#000',
    marginBottom: 10,
  },
});

export default IconBlock;