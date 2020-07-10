import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import axios from 'axios';
import Header from '../components/Header';
import { Entypo } from '@expo/vector-icons';

const PodcastScreen = ({ navigation }) => {
  const [state, setState] = useState([]);

  const getPodcasts = async () => {
    let response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/1/albums`
    );
    let data = response.data;
    console.log(data);
    setState(data);
  };

  useEffect(() => {
    getPodcasts();
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', bottom: 'always', horizontal: 'never' }}
    >
      <Header navigation={navigation} />

      <FlatList
        data={state}
        keyExtractor={(podcast) => podcast.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => console.log('click')}>
              <View style={styles.row}>
                <Text style={styles.title} key={item.id}>
                  {item.title}
                </Text>

                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                  <Entypo
                    name="chevron-thin-right"
                    size={24}
                    color="black"
                    style={styles.icon}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderColor: '#3898AE',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignContent: 'center',
    alignItems: 'center',
  },
  column: {
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    color: 'grey',
    fontFamily: 'Verdana',

    maxWidth: '80%',
    textTransform: 'capitalize',
  },
  icon: {
    color: 'grey',
  },
  sectionTitle: {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: 'bold',
    color: 'grey',
    fontFamily: 'Verdana',
  },
  sectionIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  date: {
    color: 'grey',
  },
  container: {
    flexDirection: 'column',
  },
});

export default PodcastScreen;
