import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

import PropTypes from 'prop-types';
import colors from '../css/style-colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
  },
  title: {
    flexBasis: '60%',
    fontFamily: 'GothamBook',
    color: colors.dark,
    fontSize: 13,
  },
  price: {
    flexBasis: '40%',
    textAlign: 'right',
    fontFamily: 'GothamMedium',
    color: colors.dark,
    fontSize: 13,
  },

});

const Cell = ({ title, price, ...props }) => {
  const { divider, bold, red } = props;
  return (
    <>
      <View style={styles.container}>
        <Text style={bold ? [styles.title, { fontWeight: 'bold' }]
          : styles.title && red ? [styles.title, { color: colors.coral }]
            : styles.title}
        >
          {title}
        </Text>
        <Text style={[styles.price, red && { color: colors.coral }]}>{price}</Text>
      </View>
      {divider && <Divider style={{ backgroundColor: colors.slateGrey }} />}
    </>
  );
};

Cell.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  divider: PropTypes.bool,
  red: PropTypes.bool,
  bold: PropTypes.bool,
};

Cell.defaultProps = {
  divider: false,
  red: false,
  bold: false,

};

export default Cell;
