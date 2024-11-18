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
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { image185 } from '../api/moviedb';

type MovieListProps = {
  data: { poster_path: string; title: string , id : number}[]; 
  title: string;
  hiddenSeeAll: boolean;
};

type RootStackParamList = {
  Movie: { item: { poster_path: string; title: string,id : number } };
};

const { width, height } = Dimensions.get('window');

const MovieList: React.FC<MovieListProps> = ({ title, data, hiddenSeeAll }) => {
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
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        style={{ flexGrow: 0 }}>
        {data.map((item, index) => (
          <TouchableWithoutFeedback
            key={index}
            onPress={() => navigation.push('Movie', { item })}>
            <View style={styles.image}>
              <Image
                source={{ uri: image185(item.poster_path) }}
                style={{
                  width: width * 0.33,
                  height: height * 0.22,
                  borderRadius: 24,
                }}
              />
              <Text style={styles.titleMovie}>
                {item.title?.length > 13 ? item.title.slice(0, 14) + '...' : item.title}
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
    flex: 1
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
    marginBottom: 12,
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
