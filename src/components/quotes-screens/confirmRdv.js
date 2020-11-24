import React from 'react';
import {
  Image, StyleSheet, Text, View,
} from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import Button from '../../assets/generic-components/button';
import colors from '../../assets/css/style-colors';
import CarIcon from '../../assets/images/command/greenCar.png';
import Calendar from '../../assets/images/command/Planning-green.png';
import Clock from '../../assets/images/clock/clock-green.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleGrey,
    padding: 20,
  },
  boxInfo: {
    flexGrow: 1,
    alignItems: 'flex-start',
  },
  boxBtn: {
    backgroundColor: colors.mediumGreen,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: 'GothamBold',
    color: colors.dark,
  },
  titleBot: {
    fontSize: 14,
    fontFamily: 'GothamBold',
    color: colors.dark,
  },
  titleInfo: {
    fontSize: 14,
    fontFamily: 'GothamBook',
    color: colors.dark,
    paddingTop: 10,
  },
  titleBtn: {
    fontSize: 11,
    fontFamily: 'GothamBold',
    color: colors.white,
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'stretch',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 12,
  },
  pt40: {
    paddingTop: 30,
  },
  iconeTitle: {
    fontSize: 16,
    fontFamily: 'GothamMedium',
    color: colors.dark,
    paddingLeft: 10,
  },
});

const IconTitle = ({ title, icon }) => (
  <View style={styles.wrapper}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.iconeTitle}>{title}</Text>
  </View>
);

const ConfirmRdv = ({ navigation, route }) => {
  const { item } = route.params;
  const time = item.time || '';
  const date = moment(item.date).format('dddd, DD MMMM') || '';
  const hours = item.shedules || '';

  // redux
  const lg = useSelector((state) => state.languageReducer.language);

  /**
   *  navigation.popToTop() goes back to the 1st stack
   */
  const handleNavigate = () => {
    navigation.popToTop();
    navigation.navigate('Planning');
  };

  const formatHours = (value) => {
    if (value.split('').includes('.')) {
      return value.replace(/[.]/gi, 'h');
    }
    return `${value}H`;
  };

  return (
    <View style={styles.container}>
      <View style={styles.boxInfo}>
        <Text style={styles.title}>N°20191216-227045</Text>
        <Text style={styles.titleInfo}>
          Me Trek CHERMAT (CITROEN - C4 PICASSO 1.6 HDI 110 FAB BVR)
        </Text>
        <View style={styles.boxBtn}>
          <Text style={styles.titleBtn}>DEVIS N°IDG-20191216-227045</Text>
        </View>
        <IconTitle title={lg.devis.intermediateRevision} icon={CarIcon} />
        <IconTitle title={`${date} ${formatHours(hours)}`} icon={Calendar} />
        <IconTitle title={`${time} H`} icon={Clock} />
        <Text style={[styles.titleBot, styles.pt40]}>
          {lg.devis.sum}
          171,89 €
        </Text>
      </View>
      <Button
        theme="dark"
        title={lg.command.back}
        onPress={handleNavigate}
      />
    </View>
  );
};

IconTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,

};

ConfirmRdv.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,

};

export default ConfirmRdv;
