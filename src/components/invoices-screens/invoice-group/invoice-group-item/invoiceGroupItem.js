// core
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  View, LayoutAnimation, ScrollView, TouchableOpacity, Text,
} from 'react-native';
// icons
import { AntDesign } from '@expo/vector-icons';
// redux
import { connect } from 'react-redux';
// components
import InvoiceDetailList from '../../invoice-detail-list/invoiceDetailList';
// styles
import styles from './invoiceGroupItem.style';
import colors from '../../../../assets/css/style-colors';

const mapStateToProps = ({ languageReducer }) => ({
  lg: languageReducer.language,
});

/**
 * @param {bool} hasExpand if item hasExpand, isExpand = false by default,
 * ToggleButton is visible to toogle expand
 *                         if item does not hasExpand, is Expand always = true,
 *                         ToggleButton is not visible
 */
const InvoiceGroupItem = ({
  lg,
  groupItem = [],
  hasExpand = true,
}) => {
  // states
  const [isExpand, setIsExpand] = useState(!hasExpand);
  // methods
  const onToggle = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setIsExpand(!isExpand);
  };

  const expandStyle = isExpand ? { height: 'auto' } : { height: 0 };

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text style={styles.name}>
          {lg.month[groupItem.date.month]}
          {' '}
          {groupItem.date.year}
          {' '}
          {'\n'}
          {lg.invoice.invoiceItem.numeroInvoice}
          {' '}
          {groupItem.id}
        </Text>
        {hasExpand
          && (
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
          )}
      </View>
      <View style={[
        styles.invoiceDetail,
        expandStyle,
      ]}
      >
        <ScrollView>
          {groupItem.detailInvoice
            && <InvoiceDetailList items={groupItem.detailInvoice} />}
        </ScrollView>
      </View>
    </View>
  );
};

InvoiceGroupItem.propTypes = {
  hasExpand: PropTypes.bool.isRequired,
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  groupItem: PropTypes.shape({
    id: PropTypes.string,
    client: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default connect(mapStateToProps)(InvoiceGroupItem);
