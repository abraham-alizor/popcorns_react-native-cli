import React, {useState, useEffect} from 'react';
import {ActivityIndicator, View, Dimensions, ScrollView} from 'react-native';
import {
  getAnimation,
  getDocumentary,
  getPopularMovies,
  getPopularTv,
  getUpcomingMovies,
} from '../services/Services';
import {SliderBox} from 'react-native-image-slider-box';
import {GlobalStyles} from '../App';
import List from '../components/List';
import Error from '../components/Error';

const dimensions = Dimensions.get('screen');

const Home = () => {
  const getData = () => {
    return Promise.all([
      getUpcomingMovies(),
      getPopularMovies(),
      getPopularTv(),
      getAnimation(),
      getDocumentary(),
    ]);
  };

  const [movieImages, setMovieImages] = useState();
  const [popularMovies, setPopularMovies] = useState();
  const [popularTv, setPopularTv] = useState();
  const [animation, setAnimation] = useState();
  const [documentary, setDocumentary] = useState();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    getData()
      .then(
        ([
          upcomingMoviesData,
          popularMoviesData,
          popularTvData,
          animationData,
          documentaryData,
        ]) => {
          const moviesImagesArray = [];
          upcomingMoviesData.forEach(movie => {
            moviesImagesArray.push(
              'https://image.tmdb.org/t/p/w500' + movie.poster_path,
            );
          });

          setMovieImages(moviesImagesArray);
          setPopularMovies(popularMoviesData);
          setPopularTv(popularTvData);
          setAnimation(animationData);
          setDocumentary(documentaryData);
        },
      )
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoaded(true);
      });
  }, []);

  return (
    <>
      {loaded && !error && (
        <ScrollView>
          {movieImages && (
            <View style={GlobalStyles.container}>
              <SliderBox
                images={movieImages}
                dotStyle={GlobalStyles.dotstyle}
                sliderBoxHeight={dimensions.height / 1.5}
                autoplay={true}
                circleLoop={true}
                resizeMode="cover"
                parentWidth={dimensions.width}
              />
            </View>
          )}
          {/* popular movies */}
          {popularMovies && (
            <List title="Popular Tv Shows" content={popularTv} />
          )}
          {/* popular Tv */}
          {popularTv && <List title="Popular Movies" content={popularMovies} />}
          {/* animation */}
          {animation && <List title="Animations" content={animation} />}
          {/* documentary */}
          {documentary && <List title="Doumentary" content={documentary} />}
        </ScrollView>
      )}
      {!loaded && <ActivityIndicator size="large" color="#00ff00" />}
      {error && <Error />}
    </>
  );
};
export default Home;
