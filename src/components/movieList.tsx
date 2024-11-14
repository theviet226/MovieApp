import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

type MovieListPorops = {
  data: number[];
  title: string;
};
var {width, height} = Dimensions.get('window');

const MovieList: React.FC<MovieListPorops> = ({title, data}) => {
  let movieName = 'Avengers : End Game';
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titile}>{title}</Text>
        <TouchableOpacity>
          <Text style={styles.text}>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {data.map((item: number, index: number) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.navigate('Movie', {item})}>
              <View style={styles.image}>
                <Image
                  source={require('../../asset/images/poster1.webp')}
                  style={{
                    width: width * 0.33,
                    height: height * 0.22,
                    borderRadius: 24,
                  }}
                />
                <Text style={styles.titleMovie}>
                  {movieName.length > 13
                    ? movieName.slice(0, 14) + '...'
                    : movieName}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 32,
  },
  content: {
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titile: {
    color: '#fff',
    paddingBottom: 15,
    fontSize: 18,
  },
  text: {
    fontSize: 18,
    color: '#eab308',
  },
  titleMovie: {
    fontSize: 17,
    color: '#acafb5',
    marginLeft: 4,
  },
  image: {
    flexDirection: 'column',
    marginBottom: 4,
    marginRight: 16,
  },
});

export default MovieList;
