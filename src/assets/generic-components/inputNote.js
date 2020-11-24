import React from 'react';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';
import PropTypes from 'prop-types';
import colors from '../css/style-colors';

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingTop: 10,
    backgroundColor: colors.white,
  },
  input: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    color: colors.slateGrey,
    fontSize: 14,
    fontWeight: 'bold',
    padding: 10,
  },
  label: {
    paddingBottom: 5,
    color: colors.slateGrey,
    fontSize: 13,
  },
  right: {
    backgroundColor: colors.paleGrey,
    alignItems: 'flex-end',
  },
  textRight: {
    fontSize: 14,
    color: colors.slateGrey,
    padding: 10,
  },
});

const InputNote = ({
  value, onChange, label, length,
}) => (
  <>
    <Text style={styles.label}>{label}</Text>

    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChange={onChange}
        multiline
        numberOfLines={8}
        editable
        maxHeight={150}
        minHeight={150}
        maxLength={360}
        textAlignVertical="top"
      />
      <View style={styles.right}>
        <Text style={styles.textRight}>
          {length || 0}
          /360
        </Text>
      </View>
    </View>
  </>
);

InputNote.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  label: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired,
};

InputNote.defaultProps = {
  value: null,
  onChange: null,
};

export default InputNote;
