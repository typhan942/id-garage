import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {
  StyleSheet, Text, View, Dimensions, ScrollView, Image,
} from 'react-native';
import { ButtonGroup } from 'react-native-elements';
import PropTypes from 'prop-types';
import allActions from '../../../redux/actions';
import colors from '../../../assets/css/style-colors';
import contactIcon from '../../../assets/images/statistics/01-electrons-icon-contact.png';
import phoneBookIcon from '../../../assets/images/statistics/01-electrons-icon-annuaire.png';
import carIcon from '../../../assets/images/statistics/01-electrons-icon-car.png';
import dataVisibility from '../../../assets/api-data/dataVisibilty';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: '10%',
    height: Dimensions.get('window').height,
    borderTopWidth: 1,
    borderTopColor: colors.WhiteDark,
    backgroundColor: colors.paleGrey,
  },
  card: {
    width: '90%',
    backgroundColor: colors.white,
    paddingTop: 2,
    paddingBottom: 5,
    marginTop: '5%',
    marginLeft: '5%',
    borderRadius: 4,
    minHeight: 120,
  },
  hiddenCard: {
    height: 50,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  col: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  counter: {
    color: colors.white,
    textAlign: 'left',
    fontSize: 25,
    fontFamily: 'GothamMedium',
  },
  cardTitle: {
    fontSize: 13,
    color: colors.white,
    maxWidth: '80%',
    fontFamily: 'GothamMedium',
  },
  iconContact: {
    width: 30,
    height: 20,
    resizeMode: 'stretch',
  },
  iconCar: {
    width: 30,
    height: 20,
    resizeMode: 'stretch',
  },
  iconPhoneBook: {
    width: 20,
    height: 25,
    resizeMode: 'stretch',
  },
  iconInfo: {
    width: 20,
    height: 20,
    resizeMode: 'stretch',
  },
  info: {
    paddingTop: 5,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    fontSize: 13,
    fontFamily: 'GothamMedium',
    color: colors.dark,
  },
  iconShape: {
    marginTop: 0,
    marginRight: 20,
    marginLeft: 10,
    borderRadius: 8,
    width: 60,
    height: 60,
    backgroundColor: colors.veryLightBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgBlue: {
    backgroundColor: colors.lightblueCard,
    padding: 15,
    margin: 15,
    borderRadius: 5,
  },
  bgOrange: {
    backgroundColor: colors.orangeCard,
    padding: 15,
    margin: 15,
    borderRadius: 5,
  },
  bgRed: {
    backgroundColor: colors.watermelon,
    padding: 15,
    margin: 15,
    borderRadius: 5,
  },
  bgGreen: {
    backgroundColor: colors.greenCard,
    padding: 15,
    margin: 15,
    borderRadius: 5,
  },
});
const mapStateToProps = ({ statisticsReducer, languageReducer }) => ({
  statisticsReducer, languageReducer,
});
const mapDispatchToProps = (dispatch) => ({
  setNetworkIndex: (number) => allActions.statisticActions.setNetworkIndex(dispatch, number),
  setSalesData: (any) => allActions.statisticActions.setSalesData(dispatch, any),

});

const StatisticsSale = ({
  languageReducer, statisticsReducer, setNetworkIndex, setSalesData,
}) => {
  const lg = languageReducer.language;
  const buttons = [lg.stat.filters.all, lg.stat.filters.ad, lg.stat.filters.garage];
  const {
    network, salesData,
  } = statisticsReducer;

  const updateIndex = (index) => {
    setNetworkIndex(index);
    switch (index) {
      case 0:
        setSalesData({
          rdv: dataVisibility.sales.all.rdv,
          ca: dataVisibility.sales.all.ca,
          cart: dataVisibility.sales.all.cart,
        });
        break;
      case 1:
        setSalesData({
          rdv: dataVisibility.sales.ad.rdv,
          ca: dataVisibility.sales.ad.ca,
          cart: dataVisibility.sales.ad.cart,
        });
        break;
      case 2:
        setSalesData({
          rdv: dataVisibility.sales.idGarage.rdv,
          ca: dataVisibility.sales.idGarage.ca,
          cart: dataVisibility.sales.idGarage.cart,
        });
        break;
      default:
        setSalesData({
          rdv: dataVisibility.sales.all.rdv,
          ca: dataVisibility.sales.all.ca,
          cart: dataVisibility.sales.all.cart,
        });
        break;
    }
  };

  useEffect(() => {
    updateIndex();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>

        <ButtonGroup
          onPress={updateIndex}
          selectedIndex={network}
          selectedButtonStyle={{ backgroundColor: colors.selectedButton }}
          buttons={buttons}
          containerStyle={{
            height: 42,
            borderRadius: 5,
            backgroundColor: colors.WhiteDark,
          }}
        />
      </View>

      <View style={styles.card}>
        <View style={[styles.row, styles.bgBlue]}>
          <View style={styles.iconShape}>
            <Image style={styles.iconContact} source={contactIcon} />
          </View>
          <View style={styles.col}>
            <Text style={styles.counter}>{salesData.rdv}</Text>
            <Text style={styles.cardTitle}>{lg.stat.sell.rdv}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.info}>{lg.stat.sell.rdvText}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={[styles.row, styles.bgOrange]}>
          <View style={styles.iconShape}>
            <Image style={styles.iconPhoneBook} source={phoneBookIcon} />
          </View>
          <View style={styles.col}>
            <Text style={styles.counter}>{salesData.ca}</Text>
            <Text style={styles.cardTitle}>{lg.stat.sell.ca}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.info}>{lg.stat.sell.caText}</Text>
        </View>
      </View>

      <View style={styles.card}>
        <View style={[styles.row, styles.bgRed]}>
          <View style={styles.iconShape}>
            <Image style={styles.iconCar} source={carIcon} />
          </View>
          <View style={styles.col}>
            <Text style={styles.counter}>{salesData.cart}</Text>
            <Text style={styles.cardTitle}>{lg.stat.sell.cart}</Text>
          </View>
        </View>
        <View>
          <Text style={styles.info}>{lg.stat.sell.cartText}</Text>
        </View>
      </View>

      <View style={styles.hiddenCard}>
        {/* fake padding-bottom scrollingView iOS */}
      </View>
    </ScrollView>
  );
};

StatisticsSale.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  statisticsReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  setNetworkIndex: PropTypes.func.isRequired,
  setSalesData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(StatisticsSale);
