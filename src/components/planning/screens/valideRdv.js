import React from 'react';
import {
  Image, StyleSheet, Text, View,
} from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../assets/generic-components/button';
import colors from '../../../assets/css/style-colors';
import CarIcon from '../../../assets/images/command/greenCar.png';
import Calendar from '../../../assets/images/command/Planning-green.png';
import Clock from '../../../assets/images/clock/clock-green.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  boxInfo: {
    flexGrow: 1,
    alignItems: 'flex-start',
  },
  boxBtn: {
    backgroundColor: colors.mediumGreen,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 30,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontFamily: 'GothamBold',
  },
  titleInfo: {
    fontSize: 14,
    paddingTop: 10,
    fontFamily: 'GothamBook',
  },
  titleBtn: {
    color: colors.white,
    fontSize: 11,
    fontFamily: 'GothamBold',
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: 'stretch',
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
  },
  titleIcon: {
    fontFamily: 'GothamMedium',
    fontSize: 16,
    paddingLeft: 10,
    flexGrow: 1,
  },
  textDate: {
    fontFamily: 'GothamBold',
    fontSize: 14,
    paddingTop: 30,
  }
});

const IconTitle = ({ title, icon }) => (
  <View style={styles.wrapper}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.titleIcon}
    >
      {title}
    </Text>
  </View>
);

const ValideRdv = ({ navigation }) => {
  // redux
  const lg = useSelector((state) => state.languageReducer.language);

  /**
   *  navigation.popToTop() goes back to the 1st stack
   */
  const handleNavigate = () => {
    navigation.popToTop();
    navigation.navigate('Planning');
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
        <IconTitle title="Mercredi, 8 janvier 9h30" icon={Calendar} />
        <IconTitle title="2h" icon={Clock} />
        <Text style={styles.textDate}>
          Mercredi, 8 janvier 9h30
        </Text>
      </View>
      <Button
        theme="dark"
        title={lg.command.back}
        onPress={() => handleNavigate()}
      />
    </View>
  );
};
ValideRdv.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

IconTitle.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.number.isRequired,
};
export default ValideRdv;
