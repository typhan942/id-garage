// core
import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, View,
} from 'react-native';
// libs
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';
// style
import colors from '../css/style-colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 8,
    paddingBottom: 8,
    borderRadius: 8,
    backgroundColor: colors.veryPaleGrey,
  },
});

const pickerInputStyle = {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-start',
  paddingRight: 40,
  paddingTop: 5,
  paddingBottom: 5,
  color: colors.dark,
  fontSize: 14,
  fontFamily: 'GothamMedium',
};

const pickerStyle = {
  inputAndroid: {
    ...pickerInputStyle,
    // extra Android style here
  },
  inputIOS: {
    ...pickerInputStyle,
    // extra IOS style here
  },
  textInputProps: {
    backgroundColor: colors.veryPaleGrey,
    color: colors.veryPaleGrey,
  },
  iconContainer: {
    top: '30%',
    right: 0,
    paddingLeft: 10,
  },
  touchableWrapperProps: {
    backgroundColor: colors.veryPaleGrey,
    color: colors.veryPaleGrey,
  },
};

const DownArrowIcon = () => (
  <AntDesign
    name="down"
    size={14}
    color={colors.slateGrey}
  />
);

/**
 *
 * @param {[]} items dropdown data
 * @param {function} onChange trigger on item select
 * @param {*} props react-native-picker props https://github.com/lawnstarter/react-native-picker-select#props
 */
const InputPicker = ({
  items,
  value,
  onChange,
  ...props
}) => (
  <View style={styles.container}>
    <RNPickerSelect
      items={items}
      value={value}
      style={pickerStyle}
      useNativeAndroidPickerStyle={false}
      textInputProps={{ underlineColorAndroid: 'transparent' }}
      iconContainer={styles.iconContainer}
      Icon={DownArrowIcon}
      onValueChange={onChange}
      {...props}
    />
  </View>
);

InputPicker.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputPicker;
