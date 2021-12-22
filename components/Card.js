import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  item: PropTypes.object,
};
export const placeholderImage = require('../assets/images/placeholder.png');

export class Card extends Component {
  render() {
    const {navigation, item} = this.props;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => navigation.navigate('Details', {movieId: item.id})}>
        <Image
          style={styles.image}
          source={
            item.poster_path
              ? {uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`}
              : placeholderImage
          }
        />
        {!item.poster_path && (
          <Text style={styles.movieName}>{item.title}</Text>
        )}
      </TouchableOpacity>
    );
  }
}

Card.propTypes = propTypes;

export default Card;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    height: 200,
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 120,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    top: 10,
    width: 100,
    textAlign: 'center',
  },
});
