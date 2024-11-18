import axios from 'axios';

const apiBaseUrl = `https://api.themoviedb.org/3`;
const token =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMGFjNDZhMTk2YTYyNDAxMDQ5OTczNWU5ZGQ3ZjkzNCIsIm5iZiI6MTczMTg5NTAyNS45Mjc4NDQ1LCJzdWIiOiI2NzMzMmQ1MzA5YjI1NmQwOTQ2MWI2OTEiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.IVMLNwmVyFuD8wr4s2BLSN1XUGrdwqzBeJFJv2Nb10g';

const trendingMovieEndPoint = `${apiBaseUrl}/trending/movie/day?language=en-US`;
const topRatedMovieEndPoint = `${apiBaseUrl}/movie/top_rated?language=en-US`;
const upcomingMovieEndPoint = `${apiBaseUrl}/movie/upcoming?language=en-US`;
const searchMovieEndPoint =  `${apiBaseUrl}/search/movie?language=en-US`

const movieDetailsEndPonint = (id: number) =>
  `${apiBaseUrl}/movie/${id}?language=en-US`;
const movieCreditsEndPoint = (id: number) =>
  `${apiBaseUrl}/movie/${id}/credits?language=en-US`;
const movieSimilarEndPoint = (id: number) =>
  `${apiBaseUrl}/movie/${id}/similar?language=en-US`;

// const searchMovieEndPoint = () => `${apiBaseUrl}/search/movie`

const personDetailEndPoint = (id:number) => `${apiBaseUrl}/person/${id}?language=en-US`
const personMovieEndPoint = (id:number) => `${apiBaseUrl}/person/${id}/movie_credits?language=en-US`

export const image500 = (path: any) => `https://image.tmdb.org/t/p/w500${path}`;
export const image342 = (path: any) => `https://image.tmdb.org/t/p/w342${path}`;
export const image185 = (path: any) => `https://image.tmdb.org/t/p/w185${path}`;

const apiCall = async (endPoint: string, params: any) => {
  const options = {
    method: 'GET',
    url: endPoint,
    headers: {
      accept: 'application/json',
      Authorization: token,
    },
    params: params ? params : {},
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    console.log('first');
  }
};

export const fetchTrendingMovie = () => {
  return apiCall(trendingMovieEndPoint, {});
};

export const fetchTopRatedMovie = () => {
  return apiCall(topRatedMovieEndPoint, {});
};

export const fetchUpcomingMovie = () => {
  return apiCall(upcomingMovieEndPoint, {});
};
export const fetchMoiveDetail = (id: number) => {
  return apiCall(movieDetailsEndPonint(id), {});
};
export const fetchMovieCredit = (id: number) => {
  return apiCall(movieCreditsEndPoint(id), {});
};
export const fetchMovieSimilar = (id: number) => {
  return apiCall(movieSimilarEndPoint(id), {});
};
export const fetchPersonDetail = (id : number) => {
    return apiCall(personDetailEndPoint(id),{})
}
export const fetchPersonMoive = (id:number) => {
    return apiCall(personMovieEndPoint(id),{})
}
export const searchMovie = (params : any) => {
    return apiCall(searchMovieEndPoint, params)
}