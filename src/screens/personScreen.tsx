import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
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
import { fetchPersonDetail, fetchPersonMoive, image342 } from '../api/moviedb';

type RootStackParamList = {
  person : {id:number}
}

const PersonScreen = ({}) => {
  // const {person:item} = route.params;
  const route = useRoute<RouteProp<RootStackParamList, 'Person'>>();
  const { person: item } = route.params;
  const [isFavorite, setIsFavorite] = useState(false);
  const navigation = useNavigation();
  const [person,setPerson] = useState([])
  const [personMoive, setPersonMovie] = useState([]);
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };
  useEffect(() => {
    getPersonDetail(item.id)
    getPersonMoive(item.id)
    console.log('id',item.id)
  },[item])
  const getPersonDetail = async (id:number) => {
    const data = await fetchPersonDetail(id)
    if(data) setPerson(data)
  } 
  const getPersonMoive = async (id:number) => {
    const data = await fetchPersonMoive(id)
    console.log('data',data)
    if(data && data.cast) setPersonMovie(data.cast)
    //   console.log('person',data.cast)
  }
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      nestedScrollEnabled={true}
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
              // source={require('../../asset/images/person3.jpg')}
              source = {{uri: image342(person.profile_path)}}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>
        </View>
        <View style={styles.title}>
          <Text style={styles.name}>{person?.name}</Text>
          <Text style={styles.andress}>{person?.place_of_birth}</Text>
        </View>
        <View style={styles.info}>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Gender</Text>
            <Text style={styles.infoText}>Mele</Text>
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Birthday</Text>
            <Text style={styles.infoText}>{person.birthday}</Text>
          </View>
          <View style={styles.infoContent}>
            <Text style={styles.infoTitle}>Know for</Text>
            <Text style={styles.infoText}>{person.known_for_department}</Text>
          </View>
          <View style={{paddingHorizontal: 4, alignItems: 'center'}}>
            <Text style={styles.infoTitle}>Popularity</Text>
            <Text style={styles.infoText}>{person?.popularity?.toFixed(2)}%</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <Text style={styles.detailTitle}>Biography</Text>
          <Text style={styles.detailText}>
            {person?.biography || 'N/A'}
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
    flex: 1
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

export default PersonScreen;
