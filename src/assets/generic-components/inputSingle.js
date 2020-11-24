import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, TextInput, View,
} from 'react-native';
import colors from '../css/style-colors';

const InputSingle = ({
  text, placeholder,
}) => {
  const [value, onChangeText] = React.useState(text || '');

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    input: {
      flexDirection: 'row',
      flex: 4,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.veryPaleGrey,
      color: colors.slateGrey,
      fontSize: 14,
      fontWeight: 'bold',
      height: 40,
      paddingLeft: 20,
    },
    right: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderLeftWidth: 2,
      borderLeftColor: '#dfdfdf',
      backgroundColor: colors.veryPaleGrey,
      height: 40,
    },
    textRight: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.slateGrey,
    },
  });

  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          onChangeText={(t) => onChangeText(t)}
          value={value}
          placeholder={placeholder}
        />
        <View style={styles.right}>
          <Text style={styles.textRight}>€ HT</Text>
        </View>
      </View>

    </>
  );
};

InputSingle.propTypes = {
  text: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputSingle;
