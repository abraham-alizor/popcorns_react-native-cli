import React, {Component} from 'react';
import {Text, View, FlatList, StyleSheet} from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.string,
  content: PropTypes.array,
};

export class List extends Component {
  render() {
    const {title, content} = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.text}>{title}</Text>
        </View>
        <View>
          <FlatList
            data={content}
            horizontal
            keyExtractor={item => item.id}
            renderItem={({item}) => <Card item={item} />}
          />
        </View>
      </View>
    );
  }
}

List.propTypes = propTypes;

export default List;

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    flex: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 20,
  },
});
