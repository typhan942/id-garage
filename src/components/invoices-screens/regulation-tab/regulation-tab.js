// core
import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
// redux
import { connect } from 'react-redux';
// data
import invoiceGroups from '../../../assets/api-data/invoiceGroups';
// components
import TotalInvoice from '../total-invoice/totalInvoice';
import InvoiceGroup from '../invoice-group/invoiceGroup';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  invoiceGroups: {
    marginTop: 25,
  },
});
// mock data
const totalPrice = invoiceGroups.reduce((total, { price }) => price + total, 0);

const mapStateToProps = ({ invoiceReducer }) => ({
  invoiceReducer,
});

const RegulationTab = ({ invoiceReducer }) => {
  /**
   * @desc extract 1 group base on invoiceReducer.month
   *       year is current year
   */
  const getInvoiceGroupByMonth = () => {
    const thisYear = new Date().getFullYear();
    return invoiceGroups.filter(
      ({ date }) => date.year === thisYear && date.month === invoiceReducer.month,
    );
  };

  /**
   * @desc extract groups base on invoiceReducer.year
   *       year is current year
   */
  const getInvoiceGroupByYear = () => invoiceGroups.filter(
    ({ date }) => date.year === invoiceReducer.year,
  );

  return (
    <ScrollView style={styles.container}>
      <TotalInvoice price={totalPrice} />
      <View style={styles.invoiceGroups}>
        {invoiceReducer.periodType === 'year'
          && <InvoiceGroup items={getInvoiceGroupByYear()} />}
        {invoiceReducer.periodType === 'month'
          && <InvoiceGroup items={getInvoiceGroupByMonth()} />}
      </View>
    </ScrollView>
  );
};

RegulationTab.propTypes = {
  invoiceReducer: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(RegulationTab);
