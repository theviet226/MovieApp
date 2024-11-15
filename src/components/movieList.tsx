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
// import {useNavigation} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type MovieListProps = {
  data: number[];
  title: string;
  hiddenSeeAll : boolean;
};

type RootStackParamList = {
  Movie: {item: number};
};
var {width, height} = Dimensions.get('window');

const MovieList: React.FC<MovieListProps> = ({title, data, hiddenSeeAll}) => {
  let movieName = 'Iron man 3';
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'Movie'>>();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.titile}>{title}</Text>
        {!hiddenSeeAll && (
          <TouchableOpacity>
            <Text style={styles.text}>See All</Text>
          </TouchableOpacity>
        )}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {data.map((item: number, index: number) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => navigation.push('Movie', {item})}>
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
        ))}
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
    textAlign: 'center',
  },
  titile: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    // marginLeft: 10,
    marginBottom : 12
  },
  text: {
    fontSize: 18,
    color: '#eab308',
  },
  titleMovie: {
    fontSize: 17,
    color: '#acafb5',
    marginLeft: 4,
    textAlign: 'center',
  },
  image: {
    flexDirection: 'column',
    marginBottom: 4,
    marginRight: 16,
  },
});

export default MovieList;
