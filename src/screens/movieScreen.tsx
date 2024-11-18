import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Cast from '../components/cast';
import MovieList from '../components/movieList';
import {
  fetchMoiveDetail,
  fetchMovieCredit,
  fetchMovieSimilar,
  image500,
} from '../api/moviedb';

var {width, height} = Dimensions.get('window');

const MovieScreen = () => {
  const {params} = useRoute();
  const item = params?.item;

  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const [cast, setCast] = useState([]);

  const [similatorMovie, setSimilatorMovie] = useState([]);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    console.log('id', item.id);
    getMovieDetail(item.id);
    getMovieCredti(item.id);
    getMovieSimilar(item.id);
  }, [item]);
  const getMovieDetail = async (id: number) => {
    const data = await fetchMoiveDetail(id);
    if (data) setMovie(data);
  };
  const getMovieCredti = async (id: number) => {
    const data = await fetchMovieCredit(id);
    if (data && data.cast) setCast(data.cast);
  };
  const getMovieSimilar = async (id: number) => {
    const data = await fetchMovieSimilar(id);
    if (data && data.results) setSimilatorMovie(data.results);
    // console.log('haha', similatorMovie);
  };
  const toggleFavorite = () => setIsFavorite(!isFavorite);
  const movieName = 'Avengers : Endgame';
  return (
    <ScrollView
      nestedScrollEnabled={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingBottom: 10}}
      style={styles.container}>
      <View style={styles.content}>
        <SafeAreaView style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.icon}>
            <Icon
              style={styles.back}
              name="chevron-left"
              color="#fff"
              size={20}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={toggleFavorite} style={styles.icon}>
            <Icon
              name="heart"
              color={isFavorite ? '#eab308' : '#fff'}
              size={35}
            />
          </TouchableOpacity>
        </SafeAreaView>
        <View>
          <Image
            source={{uri: image500(movie?.poster_path) || fallbackPersonImage}}
            style={{width, height: height * 0.55}}
          />
          <LinearGradient
            colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
            style={{
              width,
              height: height * 0.3,
              position: 'absolute',
              bottom: 0,
            }}
            start={{x: 0.5, y: 0}}
            end={{x: 0.5, y: 1}}
          />
        </View>
      </View>

      {/* movie detail */}
      <View style={styles.detail}>
        <Text style={styles.title}>{movie?.title}</Text>
        <Text style={styles.status}>
          {movie?.status} • {movie?.release_date?.split('-')[0]} •{' '}
          {movie?.runtime} min
        </Text>

        <View style={styles.genres}>
          {movie?.genres?.map((genre: {name: string}, index: number) => {
            let showDot = index + 1 != movie.genres.length;
            return (
              <Text key={index} style={styles.detailGeners}>
                {genre?.name} {showDot ? '•' : null}
              </Text>
            );
          })}
          {/* <Text style={styles.detailGeners}>Action •</Text>
          <Text style={styles.detailGeners}>Thrill •</Text>
          <Text style={styles.detailGeners}>Comedy</Text> */}
        </View>

        <Text style={styles.overview}>{movie?.overview}</Text>

        <Cast cast={cast} />

        <MovieList
          title="Similator Movie"
          hiddenSeeAll={true}
          data={similatorMovie}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    backgroundColor: '#121211',
    flex: 1,
  },
  content: {
    width: '100%',
    // position: 'relative',
    // backgroundColor : 'yellow'
  },
  header: {
    position: 'absolute',
    zIndex: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
    // backgroundColor : 'red'
  },
  icon: {
    borderRadius: 12,
    padding: 4,
  },
  back: {
    backgroundColor: '#eab308',
    padding: 6,
    paddingRight: 10,
    borderRadius: 8,
  },
  detail: {
    marginTop: -(height * 0.09),
    // marginBottom: 12,
    // width: 400,
  },
  title: {
    fontSize: 30,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
    marginBottom: 12,
  },
  status: {
    color: '#acafb5',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 12,
  },
  genres: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 16,
    textAlign: 'center',
    marginBottom: 12,
  },
  detailGeners: {
    marginRight: 8,
    color: '#acafb5',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  overview: {
    color: '#acafb5',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
    letterSpacing: 0.05,
    marginHorizontal: 14,
    width: '100%',
  },
});

export default MovieScreen;
