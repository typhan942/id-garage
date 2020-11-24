import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, Image, View, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../../assets/css/style-colors';
import allActions from '../../../redux/actions';

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  setAllData: (string) => allActions.calendarActions.setAllData(dispatch, string),
  setDataForCommand: (string) => allActions.calendarActions.setDataForCommand(dispatch, string),
});

const Devis = (props) => {
  const {
    data, navigation, ticket, languageReducer, setDataForCommand,
  } = props;
  const {
    name, order, time, minutes, logo, quotes, rdv, vehicleMarque, vehicleMotorisation,
  } = data;

  const lg = languageReducer.language;

  const styles = StyleSheet.create({
    root: {
      position: 'relative',
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      paddingTop: 0,
      paddingLeft: 10,
      paddingBottom: 5,
      marginTop: 2,
      marginRight: 10,
      marginBottom: 5,
      marginLeft: 10,
      backgroundColor: colors.white,
      borderRadius: 4,
      minHeight: 120,
      minWidth: 333,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: 'GothamMedium',
    },
    headerCus: {
      justifyContent: 'flex-start',
    },
    headerLeft: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      maxWidth: '80%',
    },
    name: {
      color: colors.dark,
      fontFamily: 'GothamMedium',
      fontSize: 11,
      paddingTop: 5,
      paddingBottom: 5,
    },
    order: {
      color: colors.dark,
      width: '50%',
      fontFamily: 'GothamBook',
      fontSize: 11,
      marginRight: -50,
    },
    time: {
      color: colors.lightGreyBlue,
      fontFamily: 'GothamMedium',
      width: '30%',
      marginTop: 10,
      marginLeft: 20,
      fontSize: 11,
    },
    timeTitle: {
      color: colors.lightGreyBlue,
      fontFamily: 'GothamMedium',
      width: '50%',
      marginTop: 10,
      fontSize: 11,
    },
    pdL0: {
      paddingLeft: 0,
      color: colors.dark,
    },
    border: {
      width: 40,
      height: 40,
      borderRadius: 4,
      borderWidth: 1,
      borderColor: colors.WhiteDark,
      justifyContent: 'center',
      alignItems: 'center',
      resizeMode: 'center',
      marginRight: 10,
    },
    image: {
      width: 30,
      height: 16,
    },
    devis: {
      color: colors.white,
      paddingTop: 2,
      paddingLeft: 5,
      paddingBottom: 2,
      paddingRight: 5,
      margin: 5,
      fontFamily: 'GothamBold',
      fontSize: 11,
    },
    quote: {
      paddingTop: 5,
      marginTop: 5,
      fontFamily: 'GothamMedium',
      borderBottomColor: colors.paleGrey,
      borderBottomWidth: quotes.length > 1 ? 1 : 0,
    },
    hoursCus: {
      marginTop: 10,
      paddingRight: 10,
      fontSize: 11,
      fontFamily: 'GothamMedium',
    },
    picOclock: {
      marginTop: 10,
    },
    mgOrder: {
      marginTop: 10,
    },
    quoteNumber: {
      borderRadius: 4,
      width: 250,
    },
  });

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setDataForCommand(data);
          navigation.navigate('CommandStack', { ticket: data });
        }}
        style={styles.root}
      >
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.timeTitle}>{`RDV: ${time}h${minutes}`}</Text>
            <Text style={styles.name} numberOfLines={1}>{`${name} (${vehicleMarque} ${vehicleMotorisation})`}</Text>
            <Text style={[styles.order, styles.pdL0]}>{`N° ${order}`}</Text>
          </View>
          {rdv === 'perso' ? null : (
            <View style={styles.border}><Image style={styles.image} source={logo} /></View>
          )}
        </View>
        {quotes.map((quote) => {
          const {
            number, type, price, hours, status,
          } = quote;

          return (
            <View key={`quote_${Math.random()}`} style={styles.quote}>
              <View style={[styles.quoteNumber, { backgroundColor: colors[status] }]}>
                <Text
                  style={styles.devis}
                  onPress={() => {
                    setDataForCommand(data);
                    navigation.navigate('CommandStack', { ticket: data });
                  }}
                >
                  {ticket.quoteType === 'with' ? `${lg.planning.quote} N°${number}` : number}
                </Text>
              </View>
              <View style={[styles.header, styles.headerCus]}>
                <Text style={[styles.order, styles.mgOrder]}>{type}</Text>
                <Text style={styles.time}>{`HT : ${price} €`}</Text>
                <View style={styles.header}>
                  <AntDesign style={styles.picOclock} name="clockcircleo" size={10} color="black" />
                  <Text style={styles.hoursCus}>{` ${hours}h`}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </TouchableOpacity>
    </View>
  );
};

Devis.propTypes = {
  data: PropTypes.objectOf(PropTypes.any),
  quotes: PropTypes.arrayOf(PropTypes.any),
  ticket: PropTypes.objectOf(PropTypes.any),
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  setDataForCommand: PropTypes.func.isRequired,
};

Devis.defaultProps = {
  data: [],
  ticket: [],
  quotes: [],
};

export default connect(mapStateToProps, mapDispatchToProps)(Devis);
