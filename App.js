import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import {getPopularMovies} from './services/Services';

const App = () => {
  const [movie, setMovie] = useState('');
  const [error, setError] = useState(false);
  useEffect(() => {
    getPopularMovies()
      .then(movies => {
        setMovie(movies[0]);
      })
      .catch(err => {
        setError(err);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{movie.original_title}</Text>
      {error && <Text style={{color: 'red'}}>Error in server</Text>}
    </View>
  );
};
export default App;
