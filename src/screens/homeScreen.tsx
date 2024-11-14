import {View, Text, StyleSheet, StatusBar, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/movieList';



const HomeScreen : React.FC = () => {
    const [trending, setTrending] = useState([1,2,3,4,5]);
    const [upComing, setUpComing] = useState([1,2,3,4,5]);
    const [topRated, setTopRated] = useState([1,2,3,4,5]);
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.content}>
          <StatusBar barStyle="light-content" />
          <View>
            <Text style={styles.title}>
              <Text style={styles.m}>M</Text>oives
            </Text>
          </View>
        </SafeAreaView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}>
          <TrendingMovies data={trending} />
          <MovieList title='Upcoming' data = {upComing}/>
          <MovieList title='Toprate' data = {topRated}/>

        </ScrollView>
      </View>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: '0%',
    backgroundColor: '#121211',
  },
  content: {
    paddingBottom: 16,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  m: {
    color: '#eab308',
  },
});

export default HomeScreen;
