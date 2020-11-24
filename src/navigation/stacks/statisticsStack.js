import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import colors from '../../assets/css/style-colors';
import TopTabNavigatorStat from '../navigator/topTabNavigatorStat';
import cog from '../../assets/images/header/Cog.png';
import SearchLogo from '../../assets/images/search/search.png';

const Stack = createStackNavigator();
const styles = StyleSheet.create({
  img: {
    width: 25,
    height: 25,
  },
  m10: {
    margin: 10,
  },
});
const StatisticsStack = ({ navigation }) => (
  <Stack.Navigator
    headerMode="screen"
    initialRouteName=""
    screenOptions={{
      headerTitleAlign: 'center',
      headerMode: 'float',
      headerTitle: 'Statistiques',
      headerTintColor: colors.dark,
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate('search')}
        >
          <Image source={SearchLogo} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={styles.m10}
          onPress={() => navigation.openDrawer()}
        >
          <Image style={styles.img} source={cog} />
        </TouchableOpacity>
      ),
    }}
  >
    <Stack.Screen options={{ headerShown: false }} name="stat" component={TopTabNavigatorStat} />
    {/* import screens... */}
  </Stack.Navigator>
);

StatisticsStack.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default StatisticsStack;
