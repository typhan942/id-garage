import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Taxes from '../../components/tarifs-screens/taxes';
import Tarifs from '../../components/tarifs-screens';
import Prestation from '../../components/tarifs-screens/prestation';

// style
import colors from '../../assets/css/style-colors';
import cog from '../../assets/images/cog/cog.png';

const styles = StyleSheet.create({
  m10: {
    margin: 10,
  },
  iconLeft: {
    marginLeft: 20,
    color: colors.black,
  },
});

const Stack = createStackNavigator();

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({
});

const TarifsStack = (props) => {
  const { languageReducer, tarifsReducer, navigation } = props;
  const { list } = tarifsReducer;
  const index = tarifsReducer.listIndex;
  const lg = languageReducer.language;

  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName="TarifsMain"

      screenOptions={() => ({
        headerMode: 'float',
        headerTintColor: colors.dark,
        headerStyle: { backgroundColor: 'white' },
        headerTitleStyle: { fontSize: 18, fontFamily: 'GothamBold' },
      })}
    >
      <Stack.Screen
        name="TarifsMain"
        component={Tarifs}
        options={{
          title: lg.tarifsMobile.header,
          headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="arrowleft" size={18} style={styles.iconLeft} /></TouchableOpacity>,
          headerRight: () => (
            <TouchableOpacity style={styles.m10} onPress={() => navigation.openDrawer()}>
              <Image size={30} source={cog} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Taxes"
        component={Taxes}
        options={{
          title: lg.tarifsMobile.taxes,
        }}
      />
      <Stack.Screen
        name="Prestation"
        component={Prestation}
        options={{
          title: list[index].data[0][0].header,
          headerLeft: () => <TouchableOpacity onPress={() => navigation.goBack()}><AntDesign name="arrowleft" size={18} style={styles.iconLeft} /></TouchableOpacity>,
        }}
      />

    </Stack.Navigator>
  );
};

TarifsStack.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  tarifsReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TarifsStack);
