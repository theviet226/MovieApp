import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableNativeFeedback,
  Image,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

var {width, height} = Dimensions.get('window');

const SearchScreen = () => {
  const [results, setResults] = useState([1, 2, 3, 4, 5, 6]);
  let movieName = 'Avenger : Endgameeeeeeeeeeeeeeeeeeeeeeee'
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input}>
        <TextInput
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          style={styles.textInput}
        />
      </View>
      {
        results.length > 0  ? (
          <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
          style={styles.content}>
          <Text style={styles.textResult}>Result({results.length})</Text>
          <View style={styles.result}>
            {results.map((index: number, item: number) => {
              return (
                <TouchableNativeFeedback key={index}>
                  <View style={styles.contentResult}>
                    <Image
                      source={require('../../asset/images/poster.jpg')}
                      style={{width: width * 0.44, height: height * 0.33 , borderRadius : 24}}
                    />
                    <Text style={styles.textMoive}>{movieName.length >18 ? movieName.slice(0,18) + '...' : movieName}</Text>
                  </View>
                </TouchableNativeFeedback>
              );
            })}
          </View>
        </ScrollView>
        ) : (
          <Text>not found</Text>
        )
      }
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#121211',
  },
  input: {
    marginBottom: 12,
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 50,
    marginTop: 10,
  },
  textInput: {
    padding: 10,
    paddingLeft: 24,
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    // backgroundColor : 'red'
  },
  content: {
    marginBottom: 12,
  },
  textResult: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom : 16
  },
  result: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  contentResult: {
    marginBottom : 14
  },
  textMoive: {
    fontSize: 17,
    color: '#acafb5',
    marginLeft: 4,
    textAlign: 'center', 
  }
});

export default SearchScreen;
