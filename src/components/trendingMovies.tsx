import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';

type TrendingMoviesProps = {
  data: number[];
};

var {width, height} = Dimensions.get('window');

const TrendingMovies: React.FC<TrendingMoviesProps> = ({data}) => {
  const navigation = useNavigation();
  const handleClick = (item: number) => {
    navigation.navigate('Movie', {item});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending</Text>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
};
const MovieCard = ({
  item,
  handleClick,
}: {
  item: number;
  handleClick: (item: number) => void;
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={require('../../asset/images/poster.jpg')}
        style={{
          width: width * 0.6,
          height: height * 0.4,
          borderRadius: 24,
        }}
      />
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  title: {
    color: '#fff',
    paddingBottom: 15,
    fontSize: 18,
  },
  card: {
    backgroundColor: '#3498db',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    padding: 20,
  },
  number: {
    fontSize: 50,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default TrendingMovies;
