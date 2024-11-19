// components/Trailer.tsx
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, ActivityIndicator, Button} from 'react-native';
import WebView from 'react-native-webview';
import YoutubePlayer from 'react-native-youtube-iframe';
import {fetchMovieTrailer} from '../api/moviedb';
interface TrailerProps {
  movieId: number;
}

const Trailer: React.FC<TrailerProps> = ({movieId}) => {
  const [trailerUrl, setTrailerUrl] = useState<string>();
  const [playing, setPlaying] = useState(false);
  useEffect(() => {
    getMovieTrailer(movieId);
  }, [movieId]);

  const getMovieTrailer = async (movieId: number) => {
    const data = await fetchMovieTrailer(movieId);
    if(data && data.results){
        const trailer = data.results.find(
            (video: { type: string }) => video.type === 'Trailer'
          );
          if(trailer) setTrailerUrl(trailer.key)
    }
  };

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={trailerUrl}
        // onChangeState={onStateChange}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
});

export default Trailer;
