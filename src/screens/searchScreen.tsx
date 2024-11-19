import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableNativeFeedback,
  Image,
  Dimensions,
} from 'react-native';
import React, { useCallback, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import debounce from 'lodash.debounce';
import { image342, searchMovie } from '../api/moviedb';
import Loading from '../components/loading';

var { width, height } = Dimensions.get('window');

interface Movie {
  title: string;
  poster_path: string;
  id: number;
}

const SearchScreen = () => {
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true)

  const handleSearch = (value: string) => {
    if (value && value.length > 1) {
      setLoading(true)
      searchMovie({
        query: value,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      }).then((data) => {
        setLoading(false)
        if (data && data.results) setResults(data.results);
        
      });
    } else {
      setResults([]);
      setLoading(false)
    }
  };

  const handleTextDebounce = useCallback(debounce(handleSearch, 400), []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input}>
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder="Search Movie"
          placeholderTextColor={'lightgray'}
          style={styles.textInput}
        />
      </View>
      {loading ? (
        <Loading/>
      ) : 
    results.length > 0 ? (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        style={styles.content}>
        <Text style={styles.textResult}>Result({results.length})</Text>
        <View style={styles.result}>
          {results.map((item: Movie) => {
            return (
              <TouchableNativeFeedback key={item.id}>
                <View style={styles.contentResult}>
                  <Image
                    source={{ uri: image342(item.poster_path) }}
                    style={{
                      width: width * 0.44,
                      height: height * 0.33,
                      borderRadius: 24,
                    }}
                  />
                  <Text style={styles.textMoive}>
                    {item.title.length > 18
                      ? item.title.slice(0, 18) + '...'
                      : item.title}
                  </Text>
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
  },
  content: {
    marginBottom: 12,
  },
  textResult: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 16,
  },
  result: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  contentResult: {
    marginBottom: 14,
  },
  textMoive: {
    fontSize: 17,
    color: '#acafb5',
    marginLeft: 4,
    textAlign: 'center',
  },
});

export default SearchScreen;
