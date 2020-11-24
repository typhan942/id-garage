import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../../assets/css/style-colors';
import PlanningStack from '../stacks/planningStack';
import QuotesStack from '../stacks/quotesStack';
import StatisticsStack from '../stacks/statisticsStack';
import InvoicesStack from '../stacks/invoicesStack';
import TarifsStack from '../stacks/tarifsStack';

import planningGreen from '../../assets/images/navigation/Planning-green.png';
import planning from '../../assets/images/navigation/Planning.png';
import tarifGreen from '../../assets/images/navigation/Tarif-green.png';
import tarif from '../../assets/images/navigation/Tarif.png';
import devisGreen from '../../assets/images/navigation/Devis-green.png';
import devis from '../../assets/images/navigation/Devis.png';
import statsGreen from '../../assets/images/navigation/Statistics-green.png';
import stats from '../../assets/images/navigation/Statistics.png';
import facturationGreen from '../../assets/images/navigation/Facturation-green.png';
import facturation from '../../assets/images/navigation/Facturation.png';

const styles = StyleSheet.create({
  img: {
    width: 20,
    height: 20,
  },
});

const Tab = createBottomTabNavigator();

const getTabBarVisibility = (route) => {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : '';

  if (routeName === 'CommandStack' || routeName === 'AddRDV' || routeName === 'FilterRDV'
      || routeName === 'FilteredRDV' || routeName === 'ModifPlanning' || routeName === 'Conges'
      || routeName === 'quotesStack' || routeName === 'Quotes'
      || routeName === 'Select-Services' || routeName === 'Select-Car' || routeName === 'Select-Model'
      || routeName === 'Go-To' || routeName === 'Select-Order' || routeName === 'Select-Motorisation'
      || routeName === 'Confirm-Rdv' || routeName === 'AddConges' || routeName === 'WeekType') {
    return false;
  }
  return true;
};

const bottomTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => {
        if (route.name === 'Planning') {
          return focused
            ? <Image style={styles.img} source={planningGreen} />
            : <Image style={styles.img} source={planning} />;
        } if (route.name === 'Tarifs') {
          return focused
            ? <Image style={styles.img} source={tarifGreen} />
            : <Image style={styles.img} source={tarif} />;
        } if (route.name === 'Devis') {
          return focused
            ? <Image style={styles.img} source={devisGreen} />
            : <Image style={styles.img} source={devis} />;
        } if (route.name === 'Statistiques') {
          return focused
            ? <Image style={styles.img} source={statsGreen} />
            : <Image style={styles.img} source={stats} />;
        } if (route.name === 'Facturation') {
          return focused
            ? <Image style={styles.img} source={facturationGreen} />
            : <Image style={styles.img} source={facturation} />;
        }
        return focused;
      },
    })}
    tabBarOptions={{
      activeTintColor: `${colors.mediumGreen}`,
    }}
  >
    <Tab.Screen
      options={({ route }) => ({
        tabBarVisible: getTabBarVisibility(route),
      })}
      name="Planning"
      component={PlanningStack}
      listeners={({ navigation }) => ({
        tabPress: () => {
          navigation.navigate('Planning');
        },
      })}
    />
    <Tab.Screen
      name="Tarifs"
      component={TarifsStack}
      listeners={({ navigation }) => ({
        tabPress: () => {
          navigation.navigate('Tarifs');
        },
      })}
    />
    <Tab.Screen
      name="Devis"
      component={QuotesStack}
      listeners={({ navigation }) => ({
        tabPress: () => {
          navigation.navigate('Devis');
        },
      })}
    />
    <Tab.Screen
      name="Statistiques"
      component={StatisticsStack}
      listeners={({ navigation }) => ({
        tabPress: () => {
          navigation.navigate('Statistiques');
        },
      })}
    />
    <Tab.Screen
      name="Facturation"
      component={InvoicesStack}
      listeners={({ navigation }) => ({
        tabPress: () => {
          navigation.navigate('Facturation');
        },
      })}

    />
  </Tab.Navigator>
);

export default bottomTabNavigator;
