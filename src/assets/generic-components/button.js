import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, Image, View,
} from 'react-native';
import colors from '../css/style-colors';

const Button = ({
  title, onPress, disabled, theme, image, large, children,
}) => {
  const [larges] = useState(large || 'auto');

  const styles = StyleSheet.create({
    dark: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: 45,
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      backgroundColor: colors.dark,
      width: larges,
    },
    textDark: {
      color: colors.white,
      fontSize: 15,
      fontFamily: 'GothamMedium',
      width: larges,
      textAlign: 'center',
    },
    light: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderTopLeftRadius: 5,
      borderTopRightRadius: 5,
      borderBottomLeftRadius: 5,
      borderBottomRightRadius: 5,
      borderWidth: 1,
      borderColor: colors.lightGreyBlue,
      backgroundColor: colors.white,
      width: larges,
      minHeight: 45,
      marginLeft: 10,
    },
    textLight: {
      color: colors.dark,
      fontSize: 15,
      fontFamily: 'GothamMedium',
      width: larges,
      textAlign: 'center',
    },
    in: {
      flexDirection: 'row',
      justifyContent: 'center',
      paddingLeft: 30,
      paddingRight: 30,
    },
    logo: {
      height: 25,
      width: 35,
      marginRight: 10,
      resizeMode: 'contain',
    },
    active: {
      opacity: 0.3,
    },
  });

  return (
    <>
      { disabled === true ? (
        <TouchableWithoutFeedback
          disabled={disabled}
          style={theme === 'dark' ? styles.dark : theme === 'light' ? [styles.light] : ''}
        >
          <View style={styles.in}>
            { image && (
            <Image
              style={styles.logo}
              source={image}
            />
            )}
            <Text style={theme === 'dark' ? styles.textDark : theme === 'light' ? styles.textLight : ''}>{title}</Text>
            {children}
          </View>

        </TouchableWithoutFeedback>
      ) : (
        <TouchableOpacity
          onPress={onPress}
          disabled={disabled}
          style={theme === 'dark' ? styles.dark : styles.light}
        >
          <View style={styles.in}>
            { image && (
            <Image
              style={styles.logo}
              source={image}
            />
            )}
            <Text style={theme === 'dark' ? styles.textDark : theme === 'light' ? styles.textLight : ''}>{title}</Text>
            {children}
          </View>

        </TouchableOpacity>
      )}
    </>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  theme: PropTypes.string,
  image: PropTypes.objectOf(PropTypes.any),
  large: PropTypes.number,
  children: PropTypes.objectOf(PropTypes.any),
};

Button.defaultProps = {
  title: 'OK',
  onPress: () => {},
  disabled: false,
  theme: 'dark',
  image: null,
  large: null,
  children: null,
};

export default Button;
