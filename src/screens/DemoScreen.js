import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { Context } from '../context/ContentContext';

const DemoScreen = ({ navigation, route }) => {
  const { state, getPeople } = useContext(Context);
  console.log('demo screen state', state);

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <>
      <FlatList
        data={state}
        keyExtractor={(ele) => ele.url}
        renderItem={({ item }) => {
          return (
            <View key={item.url} style={styles.container}>
              <Image
                source={{
                  uri: item.socialImage,
                }}
                style={styles.imageStyle}
              />
              <View>
                <Text style={styles.textStyle}>{item.fullname}</Text>
                <Text style={styles.positionStyle}>{item.type}</Text>
              </View>
            </View>
          );
        }}
      />
    </>
  );
};

export default DemoScreen;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    // borderWidth: 2,
    // borderColor: '#000',
    backgroundColor: '#184492',
    // justifyContent: 'space-between',

    alignItems: 'center',
  },
  imageStyle: {
    flexDirection: 'column',
    width: 160,
    height: 160,
  },
  textStyle: {
    flexDirection: 'column',
    fontSize: 16,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    color: '#fff',
    marginHorizontal: 18,
    fontFamily: 'Verdana',
    marginBottom: 6,
  },
  positionStyle: {
    fontSize: 14,
    marginHorizontal: 18,
    color: '#fff',
    fontFamily: 'Verdana',
  },
});
