import React from 'react';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import MultipleSelectList from '../../assets/generic-components/multipleSelectList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const SelectService = ({ navigation, route }) => (
  <View style={styles.container}>
    <MultipleSelectList items={route.params} navigation={navigation} route={route} />
  </View>
);

SelectService.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SelectService;
