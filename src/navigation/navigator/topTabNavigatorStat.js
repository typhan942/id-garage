// core
import React from 'react';
import PropTypes from 'prop-types';
import {
  View, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import { Header } from 'react-native-elements';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
// redux
import { connect } from 'react-redux';
// components
import statisticsVisibility from '../../components/statistics-screens/components/statisticsVisibility';
import statisticsSales from '../../components/statistics-screens/components/statisticsSales';
import Period from '../../components/statistics-screens/components/period';
// style
import colors from '../../assets/css/style-colors';
import cog from '../../assets/images/header/Cog.png';
import SearchLogo from '../../assets/images/search/search.png';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  headerText: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: 'GothamBold',
  },
  img: {
    width: 18,
    height: 18,
  },
  horizon: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 16,
  },
  vertical: {
    justifyContent: 'center',
    flex: 1,
  },
  navText: {
    fontFamily: 'GothamMedium',
    fontSize: 13,
    textTransform: 'capitalize',
  },
  wrapHeader: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

const mapStateToProps = ({ languageReducer }) => ({
  lg: languageReducer.language,
});

const TopTabNavigatorStat = ({ navigation, lg }) => (
  <View style={styles.wrapHeader}>
    <Header
      containerStyle={{
        height: 'auto',
        paddingBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: colors.WhiteDark,
        borderBottomWidth: 1,
        headerForceInset: { top: 'never', bottom: 'never' },
      }}
      backgroundColor="white"
      centerComponent={{ text: lg.stat.title, style: styles.headerText }}
      leftComponent={(
        <TouchableOpacity
          onPress={() => navigation.navigate('search')}
        >
          <Image style={styles.icon} source={SearchLogo} />
        </TouchableOpacity>
      )}
      rightComponent={(
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={styles.img}
            source={cog}
          />
        </TouchableOpacity>
)}
    />
    <View style={styles.horizon}>
      <View style={styles.vertical}>
        <Period />
      </View>
    </View>
    <Tab.Navigator
      tabBarPosition="top"
      tabBarOptions={{
        scrollEnabled: true,
        labelStyle: styles.navText,
        indicatorStyle: {
          backgroundColor: colors.mediumGreen,
        },
        activeTintColor: colors.mediumGreen,
        inactiveTintColor: colors.slateGrey,
        showIcon: true,
        tabStyle: {
          flexDirection: 'row',
          width: 100,
        },
      }}
    >
      <Tab.Screen
        name="visibility"
        component={statisticsVisibility}
        options={{
          tabBarLabel: lg.stat.navbar.visibility,
        }}
      />
      <Tab.Screen
        name="sell"
        component={statisticsSales}
        options={{
          tabBarLabel: lg.stat.navbar.sell,
        }}
      />

    </Tab.Navigator>
  </View>

);

TopTabNavigatorStat.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(TopTabNavigatorStat);
