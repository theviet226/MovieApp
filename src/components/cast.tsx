import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

type CastProps = {
  cast: number[];
};
const Cast: React.FC<CastProps> = ({cast}) => {
  const personName = 'Robert Downey Jr.';
  const characterName = 'Tony Stark / Iron Man';
  const navigation = useNavigation()
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
                  source={require('../../asset/images/person3.jpg')}
                />
              </View>
              <Text style={styles.character}>
                {characterName.length > 10
                  ? characterName.slice(0, 10) + '...'
                  : characterName}
              </Text>
              <Text style={styles.person}>
                {personName.length > 10
                  ? personName.slice(0, 10) + '...'
                  : personName}
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
    marginRight: 16,
    fontSize: 16,
    color: '#fff',
  },
  character: {
    marginBottom: 4,
    marginRight: 16,
    fontSize: 16,
    color: '#acafb5',
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
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 24,
  },
});

export default Cast;
