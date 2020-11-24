import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import colors from '../css/style-colors';

const CheckBox = (props) => {
  const {
    checked, onPress, disabled, label, labelColor,
  } = props;
  const [check, setCheck] = useState(checked);

  const styles = StyleSheet.create({
    container: {
      padding: 10,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center'
    },
    text: { color: colors.white },
    label: { color: labelColor, paddingLeft: 10, fontSize: 13, fontFamily: 'GothamMedium' },
    check: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 24,
      height: 24,
      backgroundColor: !checked || disabled ? colors.white : colors.mediumGreen,
      borderColor: !checked || disabled ? colors.lightGreyBlue : colors.mediumGreen,
      borderWidth: 1,
      borderRadius: 5,
    },
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={disabled ? null : () => onPress() || setCheck(!check)}
        style={styles.check}
      >
        <Text style={styles.text}>
          {checked ? '✓' : ''}
        </Text>
      </TouchableOpacity>
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

CheckBox.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onPress: PropTypes.func,
  label: PropTypes.string,
  labelColor: PropTypes.string,
};

CheckBox.defaultProps = {
  checked: false,
  disabled: false,
  onPress: () => {},
  label: '',
  labelColor: colors.lightGreyBlue,
};

export default CheckBox;
