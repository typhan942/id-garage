import React from 'react';
import {
  StyleSheet, Text, View, TextInput,
} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../css/style-colors';

const styles = StyleSheet.create({
  input: {
    height: 50,
    padding: 10,
    color: colors.dark,
    fontFamily: 'GothamMedium',
    fontSize: 14,
    backgroundColor: colors.white,
    borderRadius: 5,
  },
  errors: {
    borderBottomWidth: 1,
    borderColor: colors.problems,
  },
  wrapper: {
    paddingBottom: 10,
    paddingTop: 10,
  },
  label: {
    paddingBottom: 10,
    color: colors.slateGrey,
    fontSize: 13,
    fontFamily: 'GothamMedium',
  },
  pt5: {
    paddingTop: 5,
  },
  p10: {
    padding: 10,
  },

});

const InputLabel = ({
  editable, onChange, placeholder, secureTextEntry, textContentType, value,
  keyboardType, focus, returnKeyType,
  onSubmitEditing, label, children, errors,
}) => (
  <View style={styles.wrapper}>
    <Text style={styles.label}>{label}</Text>
    <TextInput
      editable={editable}
      autoCapitalize="none"
      textContentType={textContentType}
      secureTextEntry={secureTextEntry}
      placeholderStyle={styles.p10}
      placeholder={placeholder}
      style={[styles.input, errors && styles.errors]}
      onChange={onChange}
      value={value}
      clearButtonMode="always"
      keyboardType={keyboardType}
      ref={focus}
      returnKeyType={returnKeyType}
      onSubmitEditing={onSubmitEditing}
    />
    <View style={styles.pt5}>
      {children}
    </View>
  </View>
);

InputLabel.propTypes = {
  textContentType: PropTypes.string,
  editable: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  returnKeyType: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.objectOf(PropTypes.any),
  focus: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.objectOf(PropTypes.any),
  ]),
  onSubmitEditing: PropTypes.func,
  onChange: PropTypes.func,
  children: PropTypes.node,
};

InputLabel.defaultProps = {
  textContentType: 'none',
  editable: true,
  secureTextEntry: false,
  placeholder: '',
  keyboardType: 'default',
  returnKeyType: 'done',
  label: '',
  value: null,
  children: false,
  errors: {},
  focus: {},
  onSubmitEditing: () => {},
  onChange: () => {},
};

export default InputLabel;
