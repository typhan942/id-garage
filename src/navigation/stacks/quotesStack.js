import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import {
  Image, TouchableOpacity, StyleSheet,
} from 'react-native';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import Quotes from '../../components/quotes-screens/quotes';
import colors from '../../assets/css/style-colors';
import SelectCar from '../../components/quotes-screens/selectBrand';
import SelectModel from '../../components/quotes-screens/selectModel';
import SelectMotorisation from '../../components/quotes-screens/selectMotorisation';
import QuoteSummaryOrder from '../../components/quotes-screens/quoteSummaryOrder';
import QuoteGoTo from '../../components/quotes-screens/quoteGoTo';
import ConfirmRdv from '../../components/quotes-screens/confirmRdv';
import SelectService from '../../components/quotes-screens/selectService';
import IconCog from '../../assets/images/header/Cog.png';

const styles = StyleSheet.create({
  img: {
    width: 25,
    height: 25,
  },
  m10: {
    margin: 10,
  },
  iconLeft: {
    marginLeft: 20,
    color: colors.black,
  },
});
const Stack = createStackNavigator();

const QuotesStack = ({ navigation }) => {
  const lg = useSelector((state) => state.languageReducer.language);

  const headerRight = () => (
    <TouchableOpacity
      style={styles.m10}
      onPress={() => navigation.openDrawer()}
    >
      <Image style={styles.img} source={IconCog} />
    </TouchableOpacity>
  );

  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName="Quotes"
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackTitle: true,
        headerTintColor: colors.dark,
        headerRight,
      }}
    >
      <Stack.Screen
        options={{
          title: lg.quote.create,
        }}
        name="Quotes"
        component={Quotes}
      />
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={18} style={styles.iconLeft} />
            </TouchableOpacity>
          ),
          title: lg.quote.choice,
        }}
        name="Select-Services"
        component={SelectService}
      />
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={18} style={styles.iconLeft} />
            </TouchableOpacity>
          ),
          title: lg.quote.choiceBrand,
        }}
        name="Select-Car"
        component={SelectCar}
      />
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={18} style={styles.iconLeft} />
            </TouchableOpacity>
          ),
          title: lg.quote.choiceModel,
        }}
        name="Select-Model"
        component={SelectModel}
      />
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={18} style={styles.iconLeft} />
            </TouchableOpacity>
          ),
          title: lg.quote.choiceMotorisation,
        }}
        name="Select-Motorisation"
        component={SelectMotorisation}
      />
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={18} style={styles.iconLeft} />
            </TouchableOpacity>
          ),
          title: lg.quote.create,
        }}
        name="Summary-Order"
        component={QuoteSummaryOrder}
      />
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={18} style={styles.iconLeft} />
            </TouchableOpacity>
          ),
          title: lg.quote.create,
        }}
        name="Go-To"
        component={QuoteGoTo}
      />
      <Stack.Screen
        options={{
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <AntDesign name="arrowleft" size={18} style={styles.iconLeft} />
            </TouchableOpacity>
          ),
          title: lg.quote.validRdv,
        }}
        name="Confirm-Rdv"
        component={ConfirmRdv}
      />
    </Stack.Navigator>
  );
};

QuotesStack.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default QuotesStack;
