// core
import React from 'react';
import {
  View, Text, Image, TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import PropTypes from 'prop-types';
// icons
import { connect } from 'react-redux';
import alertIcon from '../../../../assets/images/command/alert.png';
// redux
// styles
import styles from './invoiceDetailItem.style';

const mapStateToProps = ({ languageReducer }) => ({
  lg: languageReducer.language,
});

/**
 * @desc
 */
const InvoiceItemList = ({ lg, item }) => {
  const navigation = useNavigation();

  const onAlertBtnPress = () => {
    navigation.navigate('invoiceSignal', {
      invoiceItem: item,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.name}>
        {item.id}
        {' '}
        {'\n'}
        <Text style={styles.nameSub}>
          {item.client}
        </Text>
      </Text>
      <View style={styles.price}>
        <Text style={styles.priceText}>
          {lg.invoice.invoiceItem.amountHT}
        </Text>
        <Text style={styles.priceNumber}>
          {item.price}
        </Text>
        <TouchableOpacity
          style={styles.alertBtn}
          onPress={onAlertBtnPress}
        >
          <Image style={styles.alertIcon} source={alertIcon} />
          <Text style={styles.alertText}>
            {lg.invoice.invoiceItem.signal}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

InvoiceItemList.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  item: PropTypes.shape({
    id: PropTypes.string,
    client: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
};

export default connect(mapStateToProps)(InvoiceItemList);
