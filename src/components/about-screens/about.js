import React from 'react';
import {
  Dimensions,
  Image, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Header } from 'react-native-elements';
import { Linking } from 'expo';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import colors from '../../assets/css/style-colors';
import iconCog from '../../assets/images/header/Cog.png';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({
});

const About = (props) => {
  const screenHeight = Math.round(Dimensions.get('window').height);

  const {
    navigation, languageReducer,
  } = props;

  const lg = languageReducer.language;

  const styles = StyleSheet.create({
    root: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: colors.veryPaleGrey,
      height: screenHeight,
    },
    horizontalTop: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 40,
      marginBottom: 30,
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      alignItems: 'center',
      marginLeft: 20,
      marginRight: 20,
      marginTop: 5,
      marginBottom: 5,
    },
    version: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.dark,
    },
    img: {
      width: 25,
      height: 25,
    },
    header: {
      height: 'auto',
      paddingBottom: 15,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <>
      <Header
        containerStyle={styles.header}
        backgroundColor={colors.white}
        leftComponent={(
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="arrowleft"
              size={24}
              color={colors.black}
            />
          </TouchableOpacity>
)}
        centerComponent={{ text: lg.menuRight.about, style: { color: colors.black } }}
        rightComponent={(
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image style={styles.img} source={iconCog} />
          </TouchableOpacity>
            )}
      />
      <View style={styles.container}>
        <View style={styles.horizontalTop}>
          <Text style={styles.version}>
            {`${lg.aboutMobile.version}: 1.0`}
          </Text>
        </View>
        <TouchableOpacity style={styles.horizontal} onPress={() => Linking.openURL('https://www.idgarages.com/fr-fr/a-propos/qui-sommes-nous')}>
          <Text style={styles.version}>{lg.aboutMobile.info}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.horizontal} onPress={() => Linking.openURL('https://www.idgarages.com/fr-fr/a-propos/cgvu-garages')}>
          <Text style={styles.version}>{lg.aboutMobile.cgv}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

About.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(About);
