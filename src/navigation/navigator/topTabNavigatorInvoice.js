// core
import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header } from 'react-native-elements';
import {
  View, Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
// components
import { connect } from 'react-redux';
import SelectPeriod from '../../components/invoices-screens/select-period/selectPeriod';
import CommissionScreen from '../../components/invoices-screens/commission-tab/commissionTab';
import CouponScreen from '../../components/invoices-screens/coupon-tab/couponTab';
import SubscriptionScreen from '../../components/invoices-screens/subscription-tab/subscription-tab';
import RegulationScreen from '../../components/invoices-screens/regulation-tab/regulation-tab';
import SearchLogo from '../../assets/images/search/search.png';

// redux
// styles
import colors from '../../assets/css/style-colors';
// images
import cogIcon from '../../assets/images/cog/cog.png';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.coral,
  },
  icon: {
    marginHorizontal: 5,
  },
  headerText: {
    color: colors.dark,
    fontSize: 18,
    fontFamily: 'GothamBold',
  },
  navText: {
    fontFamily: 'GothamMedium',
    fontSize: 13,
    textTransform: 'none',

  },
  navIndicator: {
    backgroundColor: colors.mediumGreen,
  },
});

const Tab = createMaterialTopTabNavigator();

const mapStateToProps = ({ languageReducer }) => ({
  lg: languageReducer.language,
});

const TopTabNavigator = ({ navigation, lg }) => (
  <View style={styles.container}>
    <Header
      containerStyle={{
        paddingBottom: 15,
        borderBottomColor: colors.WhiteDark,
        borderBottomWidth: 0.5,
        headerForceInset: { top: 'never', bottom: 'never' },
      }}
      backgroundColor="white"
      centerComponent={{ text: lg.invoice.header.title, style: styles.headerText }}
      leftComponent={(
        <TouchableOpacity
          onPress={() => navigation.navigate('search')}
        >
          <Image style={styles.icon} source={SearchLogo} />
        </TouchableOpacity>
        )}
      rightComponent={(
        <TouchableOpacity
          onPress={() => navigation.openDrawer()}
        >
          <Image style={styles.icon} source={cogIcon} />
        </TouchableOpacity>
        )}
    />
    <SelectPeriod />
    <Tab.Navigator
      tabBarOptions={{
        scrollEnabled: true,
        labelStyle: styles.navText,
        indicatorStyle: styles.navIndicator,
        activeTintColor: colors.mediumGreen,
        inactiveTintColor: colors.slateGrey,
        tabStyle: {
          flexDirection: 'row',
          width: 155,
        },
      }}
    >
      <Tab.Screen
        name="commission"
        component={CommissionScreen}
        options={{
          tabBarLabel: lg.invoice.topTap.commission,
        }}
      />
      <Tab.Screen
        name="coupon"
        component={CouponScreen}
        options={{
          tabBarLabel: lg.invoice.topTap.coupon,
        }}
      />
      <Tab.Screen
        name="subscription"
        component={SubscriptionScreen}
        options={{
          tabBarLabel: lg.invoice.topTap.subscription,
        }}
      />
      <Tab.Screen
        name="regulation"
        component={RegulationScreen}
        options={{
          tabBarLabel: lg.invoice.topTap.regulation,
        }}
      />
    </Tab.Navigator>
  </View>
);

TopTabNavigator.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(TopTabNavigator);
