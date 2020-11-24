// core
import React from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes, { number, arrayOf } from 'prop-types';
// components
import InvoiceGroupItem from './invoice-group-item/invoiceGroupItem';
// style
import colors from '../../../assets/css/style-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    borderTopColor: colors.lightGreyBlue,
    borderTopWidth: 0.5,
  },
  item: {
    marginBottom: 20,
    borderTopWidth: 2,
    borderTopColor: colors.veryPaleGrey,
  },
});

const InvoiceGroups = ({ items }) => (
  <View style={styles.container}>
    {items.map((groupItem, idx) => (
      <View key={idx} style={styles.item}>
        <InvoiceGroupItem groupItem={groupItem} hasExpand={items.length > 1} />
      </View>
    ))}
  </View>
);

InvoiceGroups.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      price: PropTypes.number,
      date: PropTypes.shape({
        month: number,
        year: number,
      }),
      detailInvoice: arrayOf(PropTypes.shape({
        id: PropTypes.id,
        client: PropTypes.string,
        price: number.price,
      })),
    }),
  ).isRequired,
};

export default InvoiceGroups;
