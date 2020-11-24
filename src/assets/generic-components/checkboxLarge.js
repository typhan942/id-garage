import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Text, TouchableOpacity, StyleSheet,
} from 'react-native';
import colors from '../css/style-colors';

const CheckBoxLarge = (props) => {
  const { checked, onPress } = props;

  const styles = StyleSheet.create({
    root: {
      marginLeft: 5,
      width: 54,
      height: 30,
    },
    container: {
      padding: 3,
      margin: 0,
      flex: 1,
      flexDirection: 'row',
      justifyContent: !checked ? 'flex-start' : 'flex-end',
      alignItems: 'center',
      backgroundColor: colors.paleGrey,
      borderRadius: 3,
    },
    check: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
      backgroundColor: checked ? colors.mediumGreen : colors.coral,
      borderRadius: 5,
    },
    text: { color: colors.white },
  });

  return (
    <View style={styles.root}>
      <View style={styles.container}>

        <TouchableOpacity
          onPress={onPress}
          style={styles.check}
        >
          <Text style={styles.text}>
            {checked ? '✓' : 'x'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

CheckBoxLarge.propTypes = {
  checked: PropTypes.bool,
  onPress: PropTypes.func,
};
CheckBoxLarge.defaultProps = {
  checked: false,
  onPress: null,
};

export default CheckBoxLarge;
