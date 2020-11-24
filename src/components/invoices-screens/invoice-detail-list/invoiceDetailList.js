// core
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
// components
import InvoiceDetailItem from './invoice-detail-item/invoiceDetailItem';
// style
import colors from '../../../assets/css/style-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    shadowColor: colors.slateGrey,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  item: {
    marginTop: 10,
  },
});

const InvoiceDetailList = ({ items }) => (
  <View style={styles.container}>
    {items.map((item, idx) => (
      <View key={idx} style={styles.item}>
        <InvoiceDetailItem item={item} />
      </View>
    ))}
  </View>
);

InvoiceDetailList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      client: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};

export default InvoiceDetailList;
