import React from 'react';
import {
  Image, StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import connect from 'react-redux/lib/connect/connect';
import { Divider } from 'react-native-elements';
import Calendar from '../../../assets/images/planning.png';
import Quote from '../../../assets/images/devis.png';

import colors from '../../../assets/css/style-colors';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 20,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'stretch',
  },
  titleIcon: {
    fontFamily: 'GothamMedium',
    fontSize: 14,
    paddingLeft: 20,
    color: colors.dark,
  },
  divider: {
    backgroundColor: colors.WhiteDark,
    marginTop: 20,
  },
});

const IconTitle = ({ title, icon, onPress }) => (
  <>
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <Image source={icon} style={styles.icon} />
      <Text style={styles.titleIcon}>
        {title}
      </Text>
    </TouchableOpacity>
    <Divider style={styles.divider} />
  </>
);
const AddRDV = (props) => {
  const { languageReducer, navigation } = props;
  const lg = languageReducer.language;

  return (
    <View style={styles.container}>
      <IconTitle onPress={() => navigation.navigate('Quotes')} title={lg.quote.addQuote} icon={Calendar} />
      <IconTitle onPress={() => navigation.navigate('Appointment-Without-Quotation')} title={lg.quote.noQuote} icon={Quote} />
    </View>
  );
};

AddRDV.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

IconTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddRDV);
