import React, { useState, useEffect } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';

const moment = require('moment');

import mofo from '../api/mofo';
import { Ionicons } from '@expo/vector-icons';

const PodcastsScreen = ({ navigation }) => {
  const [state, setState] = useState([]);

  const getInsights = async () => {
    let response = await mofo.get(
      `/content-wss?id=1&type=MoFo Multimedia&wss=video-audio&cid=23711`
    );
    let data = response.data;
    setState(data);
  };

  useEffect(() => {
    getInsights();
  }, []);

  return (
    <FlatList
      data={state}
      keyExtractor={(podcast) => podcast.id.toString()}
      renderItem={({ item }) => {
        const date = new Date(item.date).toString();
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Show', {
                params: { id: item.id },
              })
            }
          >
            <View style={styles.row}>
              <View style={styles.column}>
                <View style={styles.sectionIcon}>
                  <Ionicons
                    name="ios-globe"
                    size={22}
                    style={{ marginRight: 8 }}
                  />
                  <Text style={styles.sectionTitle}>
                    {item.type === 'MoFo News' ? 'in the news' : item.category}
                  </Text>
                </View>
                <Text style={styles.title} key={item.title}>
                  {item.title}
                </Text>
                <Text style={styles.date}>
                  {moment(date).format('DD MMM YY')}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 20,
    margin: 10,
  },
  column: {
    flexDirection: 'column',
  },
  title: {
    fontSize: RFValue(18),
    color: 'grey',
    fontWeight: 'bold',
    marginBottom: 12,
  },
  icon: {
    fontSize: 24,
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
    flex: 1,
  },
});

export default PodcastsScreen;
