import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Image,
  ImageBackground,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {image500} from '../api/moviedb';

type TrendingMoviesProps = {
  data: {poster_path: string | null}[];
};

type RootStackParamList = {
  Movie: {item: {poster_path: string | null}};
};

var {width, height} = Dimensions.get('window');

const TrendingMovies: React.FC<TrendingMoviesProps> = ({data}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleClick = (item: {poster_path: string | null}) => {
    navigation.navigate('Movie', {item});
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending</Text>
      <ImageBackground
        source={{uri: image500(data[currentIndex]?.poster_path)}}
        style={{width: '100%', height: height * 0.45}}
        blurRadius={2}>
        <View style={styles.content}>
          <Carousel
            data={data}
            renderItem={({item}) => (
              <MovieCard item={item} handleClick={handleClick} />
            )}
            firstItem={0}
            inactiveSlideOpacity={0.6}
            sliderWidth={width}
            itemWidth={width * 0.62}
            slideStyle={{display: 'flex', alignItems: 'center'}}
            onSnapToItem={index => setCurrentIndex(index)}
          />
        </View>
      </ImageBackground>
    </View>
  );
};

const MovieCard = ({
  item,
  handleClick,
}: {
  item: {poster_path: string | null};
  handleClick: (item: any) => void;
}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={{uri: image500(item.poster_path)}}
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
    marginBottom: 10,
  },
  content: {
    flex: 1, // Thêm flex: 1 để chiếm toàn bộ không gian
    justifyContent: 'center', // Căn giữa theo chiều dọc
    alignItems: 'center', // Căn giữa theo chiều ngang
    padding: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
    marginLeft: 12,
  },
});

export default TrendingMovies;
