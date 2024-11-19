import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  ScrollView,
  Button,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import TrendingMovies from '../components/trendingMovies';
import MovieList from '../components/movieList';
import {
  fetchNowPlayingMOive,
  fetchTopRatedMovie,
  fetchTrendingMovie,
  fetchUpcomingMovie,
} from '../api/moviedb';
import Loading from '../components/loading';

const HomeScreen: React.FC = () => {
  const [trending, setTrending] = useState([]);
  const [upComing, setUpComing] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [nowPlaying, setNowPlaying] = useState([])

  useEffect(() => {
    getTrendingMovie();
    getUpComingMovie();
    getTopRatedMovie();
    getNowPlaying();
  }, []);
  const getTrendingMovie = async () => {
    const data = await fetchTrendingMovie();
    // console.log('trend' , data)

    if (data && data.results) setTrending(data.results);
    setLoading(false)
  };
  const getUpComingMovie = async () => {
    const data = await fetchUpcomingMovie();
    // console.log('up' , data)

    if (data && data.results) setUpComing(data.results);
  };
  const getTopRatedMovie = async () => {
    const data = await fetchTopRatedMovie();
    // console.log('top' , data)

    if (data && data.results) setTopRated(data.results);
  };
  const getNowPlaying = async () => {
    const data = await fetchNowPlayingMOive()
    // console.log('now',data)
    if (data && data.results) setNowPlaying(data.results)
  }

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
      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 10}}>
          {trending?.length > 0 && <TrendingMovies data={trending} />}

          <MovieList hiddenSeeAll = {false} title="Now playing" data={nowPlaying}/>
          <MovieList hiddenSeeAll={false} title="Upcoming" data={upComing} />
          <MovieList hiddenSeeAll={false} title="Toprated" data={topRated} />
        </ScrollView>
      )}
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
    color: 'red',
  },
});

export default HomeScreen;
