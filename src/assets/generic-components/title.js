import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text,
} from 'react-native';
import colors from '../css/style-colors';

const Title = ({ text, width, ...props }) => {
  const { onPress } = props;

  const [value] = React.useState(text || '');

  const styles = StyleSheet.create({
    text: {
      fontSize: 18,
      fontFamily: 'GothamMedium',
      color: colors.dark,
    },
  });

  return (
    <>
      <Text onPress={onPress} style={styles.text}>{value}</Text>
    </>
  );
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.number || PropTypes.string,
  onPress: PropTypes.func.isRequired,
};

Title.defaultProps = {
  width: '100%',
};

export default Title;
