import React, { useState } from 'react';
import {
  Dimensions, StyleSheet, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import connect from 'react-redux/lib/connect/connect';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../../assets/css/style-colors';
import allActions from '../../../redux/actions';
import Button from '../../../assets/generic-components/button';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: colors.white,
  },
  main: {
    justifyContent: 'flex-start',
    padding: 20,
  },
  row: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: Dimensions.get('window').width,
  },
  texts: {
    fontFamily: 'GothamMedium',
    fontSize: 13,
    color: colors.slateGrey,
    paddingTop: 10,
    paddingBottom: 10,
    width: Dimensions.get('window').width * 0.9,
  },
  footer: {
    height: 70,
    borderTopWidth: 1,
    borderTopColor: colors.lightGreyBlue,
    backgroundColor: colors.paleGrey,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    width: Dimensions.get('window').width,
  },
});

const pickerInputStyle = {
  flexDirection: 'row',
  paddingLeft: 10,
  paddingRight: 40,
  paddingTop: 6,
  paddingBottom: 6,
  color: colors.dark,
  backgroundColor: colors.paleGrey,
  borderRadius: 8,
};

const pickerStyle = {
  inputAndroid: {
    ...pickerInputStyle,
    // extra Android style here
    fontFamily: 'GothamMedium',
    fontSize: 14,
  },
  inputIOS: {
    ...pickerInputStyle,
    // extra IOS style here
    fontFamily: 'GothamMedium',
    fontSize: 14,
  },
  textInputProps: {
    backgroundColor: colors.veryPaleGrey,
    color: colors.dark,
  },
  iconContainer: {
    top: 10,
    right: 10,
    paddingLeft: 10,
  },
  touchableWrapperProps: {
    backgroundColor: colors.veryPaleGrey,
    color: colors.veryPaleGrey,
  },
};

const DownArrowIcon = () => (
  <AntDesign
    name="down"
    size={12}
    color={colors.perso}
  />
);

const range = (N, string) => {
  const set = [];
  for (let i = 0; i < N; i++) {
    set.push({ label: `${i} ${string}` || '', value: i });
  }
  return set;
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setDataSemaine: (data) => allActions.planningActions.setDataSemaine(dispatch, data),
});

const WeekType = (props) => {
  const {
    languageReducer, planningReducer, setDataSemaine, navigation,
  } = props;
  const lg = languageReducer.language;
  const { dataWeekAPI } = planningReducer;

  const [cars, setCars] = useState(dataWeekAPI.cars);
  const [weekends, setWeekends] = useState(dataWeekAPI.weekends);
  const [weekdays, setWeekdays] = useState(dataWeekAPI.weekdays);
  const [delay, setDelay] = useState(dataWeekAPI.delay);

  function handleChanges() {
    const update = dataWeekAPI;
    update.delay = delay;
    update.weekdays = weekdays;
    update.weekends = weekends;
    update.cars = cars;
    setDataSemaine(update);
    navigation.navigate('Planning');
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <View className={styles.row}>
          <Text style={styles.texts}>{lg.planning.modification.semaineType.delay}</Text>
        </View>
        <View className={styles.row}>
          <View style={styles.inputBox}>
            <RNPickerSelect
              items={range(20, lg.planning.menuRight.days)}
              placeholder={{ label: `${dataWeekAPI.delay} ${lg.planning.menuRight.days}`, value: dataWeekAPI.delay }}
              style={pickerStyle}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColorAndroid: 'transparent' }}
              iconContainer={styles.iconContainer}
              onValueChange={(value) => setDelay(value)}
              Icon={() => <DownArrowIcon />}
            />
          </View>
        </View>

        <View className={styles.row}>
          <Text style={styles.texts}>{lg.planning.modification.semaineType.weekdays}</Text>
        </View>
        <View className={styles.row}>
          <View style={styles.inputBox}>
            <RNPickerSelect
              items={range(24, lg.planning.menuRight.hours)}
              placeholder={{ label: `${dataWeekAPI.weekdays} ${lg.planning.menuRight.hours}`, value: dataWeekAPI.weekdays }}
              style={pickerStyle}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColorAndroid: 'transparent' }}
              iconContainer={styles.iconContainer}
              onValueChange={(value) => setWeekdays(value)}
              Icon={() => <DownArrowIcon />}
            />
          </View>
        </View>

        <View className={styles.row}>
          <Text style={styles.texts}>{lg.planning.modification.semaineType.weekends}</Text>
        </View>
        <View className={styles.row}>
          <View style={styles.inputBox}>
            <RNPickerSelect
              items={range(24, lg.planning.menuRight.hours)}
              placeholder={{ label: `${dataWeekAPI.weekends} ${lg.planning.menuRight.hours}`, value: dataWeekAPI.weekends }}
              style={pickerStyle}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColorAndroid: 'transparent' }}
              iconContainer={styles.iconContainer}
              onValueChange={(value) => setWeekends(value)}
              Icon={() => <DownArrowIcon />}
            />
          </View>
        </View>

        <View className={styles.row}>
          <Text style={styles.texts}>{lg.planning.modification.semaineType.cars}</Text>
        </View>
        <View className={styles.row}>
          <View style={styles.inputBox}>
            <RNPickerSelect
              items={range(20, lg.planning.menuRight.cars)}
              placeholder={{ label: `${dataWeekAPI.cars} ${lg.planning.menuRight.cars}`, value: dataWeekAPI.cars }}
              style={pickerStyle}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColorAndroid: 'transparent' }}
              iconContainer={styles.iconContainer}
              onValueChange={(value) => setCars(value)}
              Icon={() => <DownArrowIcon />}
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button theme="dark" title={lg.planning.modification.saveButton} onPress={() => handleChanges()} />
      </View>

    </View>
  );
};

WeekType.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  planningReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  setDataSemaine: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(WeekType);
