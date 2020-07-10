import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const moment = require('moment');
import Header from '../components/Header';
import mofo from '../api/mofo';
import { Feather, Ionicons } from '@expo/vector-icons';

const InsightsScreen = ({ navigation }) => {
  const [state, setState] = useState([]);

  const getInsights = async () => {
    let response = await mofo.get(
      `/content-wss?id=1&type=MoFo Publications&wss=insights`
    );
    let data = response.data;
    setState(data);
  };

  useEffect(() => {
    getInsights();
    const listener = navigation.addListener('didFocus', () => {
      getInsights();
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <SafeAreaView
      style={styles.container}
      forceInset={{ top: 'always', horizontal: 'never', bottom: 'always' }}
    >
      <Header navigation={navigation} />
      <FlatList
        data={state}
        keyExtractor={(insight) => insight.id.toString()}
        renderItem={({ item }) => {
          const date = new Date(item.date).toString();
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ShowScreen', { id: item.id })}
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
                      {item.type === 'MoFo News'
                        ? 'in the news'
                        : item.category}
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
    </SafeAreaView>
  );
};

// InsightsScreen.navigationOptions = ({ navigation }) => {
//   return {
//     headerRight: () => (
//       <TouchableOpacity onPress={() => navigation.navigate('Create')}>
//         <Feather name="plus" size={30} />
//       </TouchableOpacity>
//     ),
//   };
// };

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
    fontSize: 22,
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
  },
});

export default InsightsScreen;
