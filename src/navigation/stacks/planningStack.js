import React, { useState } from 'react';
import {
  TouchableOpacity, Image, StyleSheet,
} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { AntDesign } from '@expo/vector-icons';
import {
  useFocusEffect,
} from '@react-navigation/native';
import Planning from '../../components/planning';
import allActions from '../../redux/actions';
import WeekType from '../../components/planning/screens/semaineType';
import FilterRDV from '../../components/planning/screens/filterRdv';
import FilteredRDV from '../../components/planning/screens/filteredRdv';
import AddRDV from '../../components/planning/screens/addRdv';
import ModifHours from '../../components/planning/screens/modificationHours';
import ModifPlanning from '../../components/planning/screens/modificationPlanning';
import Conges from '../../components/planning/screens/conges';
import AddConges from '../../components/planning/screens/addConges';
import cog from '../../assets/images/cog/cog.png';
import CommandStack from './commandStack';
import AppointmentWithoutQuotation from '../../components/planning/screens/appointmentWithoutQuotation';
import Services from '../../components/planning/screens/service';
import ValideRdv from '../../components/planning/screens/valideRdv';
import colors from '../../assets/css/style-colors';
import QuotesStack from './quotesStack';
import SearchLogo from '../../assets/images/search/search.png';

const styles = StyleSheet.create({
  m10: {
    margin: 10,
  },
  iconLeft: {
    marginTop: -5,
    marginLeft: 22,
  },
});

const Stack = createStackNavigator();

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  showCalendar: (data) => allActions.calendarActions.showCalendar(dispatch, data),
  setScrollIndex: (data) => allActions.calendarActions.setScrollIndex(dispatch, data),
  setWeekDayMonthYear: (data) => allActions.calendarActions.setWeekDayMonthYear(dispatch, data),
});

const PlanningStack = (props) => {
  const [focus, setFocus] = useState(0);

  const {
    navigation, calendarReducer, languageReducer, planningReducer, showCalendar, setScrollIndex,
  } = props;
  const lg = languageReducer.language;
  const { calendarOpened } = calendarReducer;

  useFocusEffect(
    React.useCallback(() => {
      setFocus((f) => f + 1);
    }, []),
  );

  return (
    <Stack.Navigator
      headerMode="screen"
      initialRouteName="Planning"
      screenOptions={() => ({
        headerMode: 'float',
        headerTintColor: colors.dark,
        headerStyle: { backgroundColor: colors.white },
        headerTitleStyle: { fontSize: 18, fontFamily: 'GothamBold' },
      })}
    >
      <Stack.Screen
        options={{
          title: `${lg.planning.menuRight.months[calendarReducer.date.month()]} ${calendarReducer.date.year()}`,
          headerShown: !calendarOpened,
          headerTitleAlign: 'center',
          headerLeft: () => focus >= 2 && (
          <TouchableOpacity
            onPress={() => navigation.navigate('search')}
          >
            <Image source={SearchLogo} />
          </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity style={styles.m10} onPress={() => navigation.openDrawer()}>
              <Image size={30} source={cog} />
            </TouchableOpacity>
          ),
        }}
        onPress={() => {
          showCalendar(!calendarOpened);
          setScrollIndex(calendarReducer.scrollDay);
        }}
        name="Planning"
        component={Planning}
        style={{ color: colors.coral }}
      />
      <Stack.Screen
        name="WeekType"
        component={WeekType}
        options={{
          title: lg.planning.modification.semaineType.header,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={18} color="black" style={styles.iconLeft} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="Conges"
        component={Conges}
        options={{
          title: lg.planning.menuRight.congesTitle,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={18} color="black" style={styles.iconLeft} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ModifConges"
        component={AddConges}
        options={{
          title: lg.planning.modification.congesModif,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={18} color="black" style={styles.iconLeft} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="AddConges"
        component={AddConges}
        options={{
          title: lg.planning.menuRight.button,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={18} color="black" style={styles.iconLeft} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ModifPlanning"
        component={ModifPlanning}
        options={{
          title: lg.planningMobile.modifTitle,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={18} color="black" style={styles.iconLeft} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="ModifHours"
        component={ModifHours}
        options={{
          title: calendarReducer.date.format('dddd DD MMM'),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={18} color="black" style={styles.iconLeft} />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="AddRDV"
        component={AddRDV}
        options={{
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign name="arrowleft" size={18} color="black" style={styles.iconLeft} />
            </TouchableOpacity>
          ),
          title: lg.planning.addRDV,
        }}
      />

      <Stack.Screen
        name="Appointment-Without-Quotation"
        component={AppointmentWithoutQuotation}
        options={{
          title: lg.quote.addQuote,
        }}
      />
      <Stack.Screen
        name="Services"
        component={Services}
        options={{
          title: lg.quote.prestation,
        }}
      />

      <Stack.Screen
        name="FilterRDV"
        component={FilterRDV}
        options={{
          title: lg.planning.filterRDV,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name="arrowleft"
                size={18}
                color="black"
                style={styles.iconLeft}
              />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="Valide-Rdv"
        component={ValideRdv}
        options={{
          title: lg.quote.validedRDV,
        }}
      />

      <Stack.Screen
        options={{ headerTitle: lg.quote.addQuote, headerBackTitle: true }}
        name="Quotes"
        component={QuotesStack}
      />

      <Stack.Screen
        name="FilteredRDV"
        component={FilteredRDV}
        options={{
          title: planningReducer.currentStatus.header,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <AntDesign
                name="arrowleft"
                size={18}
                color="black"
                style={styles.iconLeft}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name="CommandStack"
        component={CommandStack}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

PlanningStack.propTypes = {
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  planningReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  showCalendar: PropTypes.func.isRequired,
  setScrollIndex: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanningStack);
