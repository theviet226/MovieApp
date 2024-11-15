import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import MovieList from '../components/movieList';

var {width, height} = Dimensions.get('window');

const PersonScreen = ({}) => {
  // const {person} = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const [personMoive, setPersonMovie] = useState([1, 2, 3, 4, 5]);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{paddingHorizontal: 5}}
      style={styles.container}>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.icon}>
          <Icon
            style={styles.back}
            name="chevron-left"
            color={'#fff'}
            size={20}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={toggleFavorite} style={styles.icon}>
          <Icon name="heart" color={isFavorite ? 'red' : '#fff'} size={30} />
        </TouchableOpacity>
      </SafeAreaView>

      <View>
        <View style={styles.imgContent}>
          <View style={styles.img}>
            <Image
              source={require('../../asset/images/person3.jpg')}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.name}>Robert Downey Jr.</Text>
          <Text style={styles.andress}>New York , USA</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Gender</Text>
            <Text style={styles.infoText}>Mele</Text>
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Birthday</Text>
            <Text style={styles.infoText}>22-6-2000</Text>
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Know for</Text>
            <Text style={styles.infoText}>Acting</Text>
          </View>
          <View style={{paddingHorizontal: 4, alignItems: 'center'}}>
            <Text style={styles.infoTitle}>Popularity</Text>
            <Text style={styles.infoText}>64.23</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailTitle}>Biography</Text>
          <Text style={styles.detailText}>
            Robert John Downey Jr. (born April 4, 1965) is an American actor.
            His films as a leading actor have grossed over $14 billion
            worldwide, making him one of the highest-grossing actors of all
            time. Downey's career has been characterized by some early success,
            a period of drug-related problems and run-ins with the law, and a
            surge in popular and commercial success in the 2000s. In 2008,
            Downey was named by Time magazine as one of the 100 most influential
            people in the world. From 2013 to 2015, he was listed by Forbes as
            Hollywood's highest-paid actor.
          </Text>
        </View>
        <MovieList title="Movies" hiddenSeeAll = {true} data={personMoive} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#121211',
    // flex: 1,
    // flexDirection: 'column',
  },
  header: {
    zIndex: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 12,
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
  imgContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 26,
    shadowColor: 'gray',
    shadowRadius: 100,
    shadowOffset: {width: 50, height: 50},
    shadowOpacity: 1,
  },
  img: {
    overflow: 'hidden',
    borderRadius: 144,
    width: 288,
    height: 288,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#6b7280',
  },
  title: {
    marginTop: 16,
  },
  name: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 1,
    // marginBottom : 6,
  },
  andress: {
    color: '#acafb5',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 12,
  },
  info: {
    marginHorizontal: 16,
    padding: 16,
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#374151',
    borderRadius: 34,
  },
  infoContent: {
    borderRightWidth: 1,
    borderRightColor: '#9ca3af',
    paddingHorizontal: 8,
    alignItems: 'center',
  },
  infoTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  infoText: {
    color: '#acafb5',
    fontSize: 14,
  },
  detail: {
    marginVertical: 24,
    marginHorizontal: 16,
    letterSpacing: 1,
  },
  detailTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom : 12
  },
  detailText: {
    color: '#acafb5',
    fontSize: 14,
  },
});

export default PersonScreen; // Đảm bảo export đúng
