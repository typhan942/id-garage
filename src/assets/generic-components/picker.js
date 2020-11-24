import React from 'react';
import RNPickerSelect from 'react-native-picker-select';
import {
  Text, View, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import colors from '../css/style-colors';

const DownArrowIcon = () => (
  <AntDesign
    name="down"
    size={14}
    color={colors.slateGrey}
  />
);

const Picker = ({
  items, onChange, label, bgGray, placeholder, value, icon,
}) => {
  const styles = StyleSheet.create({
    label: {
      color: colors.slateGrey,
      fontSize: 13,
      fontFamily: 'GothamMedium',
      paddingTop: 10,
      paddingBottom: 10,
    },
    row: {
      backgroundColor: bgGray ? colors.paleGrey : colors.white,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 40,
      borderRadius: 8,
      paddingRight: 8,
    },
  });

  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text> }
      <View style={styles.row}>
        <RNPickerSelect
          value={value}
          placeholder={placeholder}
          items={items}
          onValueChange={onChange}
          style={{
            inputAndroid: {
              width: '100%',
              minWidth: 120,
              fontSize: 16,
              paddingTop: 8,
              paddingBottom: 8,
              paddingHorizontal: 10,
              backgroundColor: bgGray ? colors.paleGrey : colors.white,
              color: colors.dark,
              textAlign: 'center',
              borderRadius: 8,
            },
            inputIOS: {
              width: '100%',
              minWidth: 71,
              fontSize: 16,
              paddingTop: 13,
              paddingHorizontal: 10,
              paddingBottom: 12,
              borderRadius: 8,
              backgroundColor: bgGray ? colors.paleGrey : colors.white,
              color: colors.dark,
              textAlign: 'center',
            },
            textInputProps: {
              backgroundColor: colors.perso,
              color: colors.paleGrey,
            },
            iconContainer: {
              top: 13,
              right: 15,
              paddingLeft: 10,
            },
            touchableWrapperProps: {
              backgroundColor: colors.paleGrey,
              color: colors.paleGrey,
            },
            placeholderColor: colors.dark,
            placeholderTextColor: colors.dark,
          }}
          useNativeAndroidPickerStyle={false}
          textInputProps={{ underlineColorAndroid: colors.transparent }}
          iconContainer={{
            top: 10,
            right: 10,
            paddingLeft: 10,
          }}
        />
        {icon && <DownArrowIcon /> }
      </View>
    </View>
  );
};

Picker.propTypes = {
  items: PropTypes.arrayOf(PropTypes.any).isRequired,
  placeholder: PropTypes.objectOf(PropTypes.any),
  onChange: PropTypes.func.isRequired,
  bgGray: PropTypes.bool,
  icon: PropTypes.bool,
  label: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

Picker.defaultProps = {
  bgGray: false,
  icon: true,
  label: null,
  placeholder: { value: '', label: '' },
  value: '',
};

export default Picker;
