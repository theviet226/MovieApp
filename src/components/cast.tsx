import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { image185 } from '../api/moviedb';

type CastProps = {
  cast: string[];
};
type RootStackParamCast = {
  Person : {person : number}
}
const Cast: React.FC<CastProps> = ({cast}) => {
  const personName = 'Robert Downey Jr.';
  const characterName = 'Tony Stark / Iron Man';
  const navigation = useNavigation<StackNavigationProp<RootStackParamCast>>()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 12}}>
        {cast.map((person: any, index: number) => {
          return (
            <TouchableWithoutFeedback onPress={() => navigation.navigate('Person',{person})} key={index}>
              <View style={styles.imgContent}>
                <Image
                  style={styles.image}
                  // source={require('../../asset/images/person3.jpg')}
                  source={{uri: image185(person?.profile_path)}}
                />
              </View>
              <Text style={styles.character}>
                {person?.character.length > 8
                  ? person.character.slice(0, 8) + '...'
                  : person.character}
              </Text>
              <Text style={styles.person}>
                {person?.original_name.length > 8
                  ? person.original_name.slice(0, 8) + '...'
                  : person.original_name}
              </Text>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 24,
    marginBottom: 24,
    // alignItems: 'center',
  },
  person: {
    marginBottom: 4,
    marginRight: 12,
    fontSize: 14,
    color: '#fff',
    textAlign : 'center'
  },
  character: {
    marginBottom: 4,
    marginRight: 12,
    fontSize: 14,
    color: '#acafb5',
    textAlign : 'center'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
    marginBottom : 12
  },
  imgContent:{
    overflow : 'hidden',
    borderRadius : 50,
    width : 80,
    height : 80,
    alignItems : 'center',
    borderColor: '#6b7280',
    borderWidth : 1,
    marginRight : 20
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
});

export default Cast;
