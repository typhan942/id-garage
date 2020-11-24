// core
import React, { useState, useMemo } from 'react';
import {
  View, Text, TouchableOpacity, LayoutAnimation,
} from 'react-native';
// icons
import { Ionicons, AntDesign } from '@expo/vector-icons';
// redux
import { connect } from 'react-redux';
// styles
import PropTypes from 'prop-types';
import styles from './totalInvoice.style';
import colors from '../../../assets/css/style-colors';

const mapStateToProps = ({ languageReducer }) => ({
  lg: languageReducer.language,
});

/**
 * @desc
 */
const TotalInvoice = ({ lg, price }) => {
  // data
  const detailItems = useMemo(() => [
    {
      text: lg.invoice.totalPrice.baseTva,
      price: 251.08,
    },
    {
      text: lg.invoice.totalPrice.tax,
      price: 71.84,
    },
    {
      text: lg.invoice.totalPrice.tva,
      price: 143.25,
    },
  ], [lg]);
  // states
  const [isExpand, setIsExpand] = useState(false);
  // style
  const expandStyle = isExpand ? { height: 'auto' } : { height: 0 };
  // methods
  const onToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpand(!isExpand);
  };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Ionicons
          name="ios-calculator"
          size={24}
          color={colors.mediumGreen}
        />
        <Text style={styles.name}>
          {lg.invoice.invoiceItem.totalInvoice}
        </Text>
        <TouchableOpacity
          style={styles.toggleBtn}
          onPress={onToggle}
        >
          <AntDesign
            name={isExpand ? 'minus' : 'plus'}
            size={13}
            color={colors.dark}
          />
        </TouchableOpacity>
      </View>
      <View style={[
        styles.detail,
        expandStyle,
      ]}
      >
        {detailItems.map(({ text, p }, idx) => (
          <View key={idx} style={styles.detailItem}>
            <Text color={colors.paleGrey}>
              {text}
            </Text>
            <Text>
              {p}
            </Text>
          </View>
        ))}
      </View>
      <View style={styles.price}>
        <Text style={styles.priceText}>
          {lg.invoice.invoiceItem.totalPrice}
        </Text>
        <Text style={styles.priceText}>
          {price}
        </Text>
      </View>
    </View>
  );
};
TotalInvoice.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  price: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(TotalInvoice);
