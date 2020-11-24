import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import connect from 'react-redux/lib/connect/connect';
import colors from '../../../assets/css/style-colors';
import CheckBox from '../../../assets/generic-components/checkbox';
import Button from '../../../assets/generic-components/button';
import allActions from '../../../redux/actions';
import Picker from '../../../assets/generic-components/picker';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setAllData: (data) => allActions.calendarActions.setAllData(dispatch, data),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 10,
    backgroundColor: colors.white,
  },
  row: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    minHeight: 42,
    padding: 14,
  },
  texts: {
    fontWeight: 'bold',
    paddingTop: 10,
    paddingBottom: 10,
  },
  boxPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    alignItems: 'center',
  },
  footer: {
    height: 60,
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

const hours = (a, b) => {
  const array = [];
  let value = a;
  const M = b === a ? b : b * 2;
  const N = M > 24 ? 24 : M;
  for (let i = a; i <= N; i++) {
    const label = (value * 10) % 10 === 0 ? `${value}:00`
      : `${value.toString().slice(0, value < 10 ? 1 : 2)}:30`;
    array.push({ value, label });
    value += 0.5;
  }
  return array;
};

const hoursPerWeek = (a, b) => {
  const array = [];
  for (let i = a; i <= b; i++) {
    const label = `${i.toString()}`;
    array.push({ value: i, label });
  }
  return array;
};

const ModifPlanning = (props) => {
  const {
    languageReducer, calendarReducer, setAllData, navigation,
  } = props;
  const { allData, date } = calendarReducer;
  const day = date.weekday();
  const week = date.week();
  const lg = languageReducer.language;
  const [checked, setChecked] = useState(true);
  const [morning, setMorning] = useState(allData[week].data[day].openingHours[0]);
  const [pause, setPause] = useState(allData[week].data[day].openingHours[1]);
  const [pauseEnd, setPauseEnd] = useState(allData[week].data[day].openingHours[2]);
  const [evening, setEvening] = useState(allData[week].data[day].openingHours[3]);
  const [hour, setHours] = useState(allData[week].hours);

  function handleCheck() {
    setChecked(!checked);
  }
  function changeHours() {
    const update = allData;
    update[week].hours = hour;
    update[week].data[day].openingHours = [morning, pause, pauseEnd, evening];
    // .sort((a, b) => ((Number(a.slice(0, 2)) + Number(a.slice(4, 5))) >
    // (Number(b.slice(0, 2) + Number(b.slice(4, 5)))) ? 1 : -1));
    setAllData(update);
    navigation.navigate('ModifPlanning');
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerConges}>
        <View className={styles.row}>
          <Text>{lg.planning.modification.openingHours}</Text>
        </View>
        { checked ? (
          <>
            <View className={styles.row}>
              <View style={styles.boxPicker}>
                <Picker
                  items={hours(8, 22)}
                  placeholder={{
                    label: hours(morning, morning)[0].label,
                    value: morning,
                  }}
                  onChange={(e) => { setMorning(e); }}
                  bgGray
                />
                <Text style={styles.texts}>-</Text>
                <Picker
                  items={hours(morning, evening)}
                  placeholder={{ label: hours(pause, pause)[0].label, value: pause }}
                  onChange={(e) => { setPause(e); }}
                  bgGray
                />
              </View>
            </View>

            <View style={styles.row}>
              <CheckBox checked={checked} onPress={() => handleCheck()} />
              <Text>{lg.planning.modification.pause}</Text>
            </View>

            <View className={styles.row}>
              <View style={styles.boxPicker}>
                <Picker
                  items={hours(pause, evening)}
                  placeholder={{ label: hours(pauseEnd, pauseEnd)[0].label, value: pauseEnd }}
                  onChange={(e) => { setPauseEnd(e); }}
                  bgGray
                />
                <Text style={styles.texts}>-</Text>
                <Picker
                  items={hours(pauseEnd, evening)}
                  placeholder={{ label: hours(evening, evening)[0].label, value: evening }}
                  onChange={(e) => { setEvening(e); }}
                  bgGray
                />
              </View>
            </View>
          </>
        )
          : (
            <>
              <View className={styles.row}>
                <View style={styles.boxPicker}>
                  <Picker
                    items={hours(morning, evening)}
                    placeholder={{
                      label: hours(morning, morning)[0].label,
                      value: morning,
                    }}
                    onChange={(e) => { setMorning(e); }}
                    bgGray
                  />
                  <Text style={styles.texts}>-</Text>
                  <Picker
                    items={hours(pauseEnd, evening)}
                    placeholder={{
                      label: hours(evening, evening)[0].label,
                      value: evening,
                    }}
                    onChange={(e) => { setEvening(e); }}
                    bgGray
                  />
                </View>
              </View>

              <View style={styles.row}>
                <CheckBox checked={checked} onPress={() => handleCheck()} />
                <Text>{lg.planning.modification.pause}</Text>
              </View>
            </>
          )}

        <View className={styles.row}>
          <Text>{lg.planning.modification.availableHours}</Text>
        </View>
        <View style={styles.row}>
          <View style={styles.boxPicker}>
            <Picker
              items={hoursPerWeek(0, 50)}
              placeholder={{ label: hour.toString(), value: hour }}
              onChange={(e) => setHours(e)}
              bgGray
            />
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Button theme="dark" title={lg.planning.modification.saveButton} onPress={() => changeHours()} />
      </View>

    </View>
  );
};

ModifPlanning.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,

  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  setAllData: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModifPlanning);
