import React, { useEffect, useState } from 'react';
import {
  ScrollView,
  StyleSheet, Text, View,
} from 'react-native';
import { Divider } from 'react-native-elements';
import PropTypes from 'prop-types';
import connect from 'react-redux/lib/connect/connect';
import Title from '../../assets/generic-components/title';
import Button from '../../assets/generic-components/button';
import colors from '../../assets/css/style-colors';
import allActions from '../../redux/actions';
import Picker from '../../assets/generic-components/picker';
import CheckBox from '../../assets/generic-components/checkbox';
import CheckBoxLarge from '../../assets/generic-components/checkboxLarge';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleGrey,
  },
  boxTitle: {
    marginLeft: 10,
    paddingTop: 30,
    paddingBottom: 30,
  },
  boxBtnDays: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom: 10,
  },
  boxPicker: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    alignItems: 'center',
  },
  containerPicker: {
    flexGrow: 1,
    fontSize: 13,
    color: colors.slateGrey,
    fontFamily: 'GothamMedium',
  },
  divider: {
    backgroundColor: colors.WhiteDark,
    margin: 10,
  },
  row: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  fontBook: {
    fontFamily: 'GothamBook',
    fontSize: 13,
    color: colors.dark,
    paddingTop: 5,
  },
  footer: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: -20,
    marginRight: -20,
    paddingTop: 10,
    paddingBottom: 20,
    borderTopWidth: 1,
    borderTopColor: colors.WhiteDark,
  },
  mg10: {
    margin: 10,
  },
  alignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPause: {
    paddingRight: 10,
    fontFamily: 'GothamBook',
    fontSize: 13,
    color: colors.dark,
  },
  viewPicker: {
    flexGrow: 1,
    padding: 5,
  },
});

const hours = (a, b) => {
  const array = [];
  let value = a;
  for (let i = a; i <= b * 2; i++) {
    value += 0.5;
    const label = (value * 10) % 10 === 0 ? `${value}:00` : `${value.toString().slice(0, value < 10 ? 1 : 2)}:30`;
    array.push({ value, label });
  }
  return array;
};

// component
const FormPeriodHours = ({ days, lg, noPauses }) => {
  const [pauseMidi, setPauseMidi] = useState(noPauses);

  useEffect(() => {
    setPauseMidi(noPauses);
  }, [noPauses]);

  return (
    <>
      <View style={styles.mg10}>
        <View style={styles.alignCenter}>
          <Text style={styles.containerPicker}>{days}</Text>
          <View style={styles.alignCenter}>
            <Text style={styles.textPause}>
              {lg.planning.modification.pause}
            </Text>
            <CheckBoxLarge checked={pauseMidi} onPress={() => setPauseMidi(!pauseMidi)} />
          </View>
        </View>
        <View style={styles.boxPicker}>
          <PickerTime placeholder={{
            label: '9:00',
            value: '9',
          }}
          />
          <Text> - </Text>
          {pauseMidi && (
          <PickerTime placeholder={{
            label: '12:00',
            value: '12',
          }}
          />
          )}
          {pauseMidi && (
          <PickerTime placeholder={{
            label: '14:00',
            value: '14',
          }}
          />
          )}
          <Text> - </Text>
          <PickerTime placeholder={{
            label: '18:00',
            value: '18',
          }}
          />
        </View>
      </View>
      <Divider style={styles.divider} />
    </>
  );
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setHours: (data) => allActions.accountActions.setHours(dispatch, data),
});

const AccountShedules = (props) => {
  // redux
  const { languageReducer } = props;
  const lg = languageReducer.language;

  // state
  const [noPause, setNoPause] = useState(false);
  const [pause, setPause] = useState(true);

  const [monday, setMonday] = useState(true);
  const [tuesday, setTuesday] = useState(true);
  const [wednesday, setWednesday] = useState(true);
  const [thursday, setThursday] = useState(true);
  const [friday, setFriday] = useState(true);
  const [sunday, setSunday] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxTitle}>
        <Title text={lg.planning.modification.openingHours} />
      </View>
      <View style={styles.boxBtnDays}>
        <View style={{ opacity: monday ? 1 : 0.3 }}>
          <Button onPress={() => setMonday(!monday)} theme="light" title={lg.planning.weekdays[0]} />
        </View>
        <View style={{ opacity: tuesday ? 1 : 0.3 }}>
          <Button onPress={() => setTuesday(!tuesday)} theme="light" title={lg.planning.weekdays[1]} />
        </View>
        <View style={{ opacity: wednesday ? 1 : 0.3 }}>
          <Button onPress={() => setWednesday(!wednesday)} theme="light" title={lg.planning.weekdays[2]} />
        </View>
        <View style={{ opacity: thursday ? 1 : 0.3 }}>
          <Button onPress={() => setThursday(!thursday)} theme="light" title={lg.planning.weekdays[3]} />
        </View>
        <View style={{ opacity: friday ? 1 : 0.3 }}>
          <Button onPress={() => setFriday(!friday)} theme="light" title={lg.planning.weekdays[4]} />
        </View>
        <View style={{ opacity: sunday ? 1 : 0.3 }}>
          <Button onPress={() => setSunday(!sunday)} theme="light" title={lg.planning.weekdays[5]} />
        </View>
      </View>
      <View style={styles.row}>
        <CheckBox
          checked={pause}
          checkedColor={colors.mediumGreen}
          onPress={() => { setPause(!pause); setNoPause(!noPause); }}
        />
        <Text style={styles.fontBook}>{lg.rates.break}</Text>
      </View>
      <View style={styles.row}>

        <CheckBox
          checked={noPause}
          checkedColor={colors.mediumGreen}
          onPress={() => { setPause(false); setNoPause(!noPause); }}
        />
        <Text style={styles.fontBook}>{lg.rates.noBreak}</Text>
      </View>

      <Divider style={styles.divider} />
      {monday && <FormPeriodHours noPauses={pause} lg={lg} days={lg.planning.weekdaysFull[0]} /> }
      {tuesday && <FormPeriodHours noPauses={pause} lg={lg} days={lg.planning.weekdaysFull[1]} />}
      {wednesday && <FormPeriodHours noPauses={pause} lg={lg} days={lg.planning.weekdaysFull[2]} />}
      {thursday && <FormPeriodHours noPauses={pause} lg={lg} days={lg.planning.weekdaysFull[3]} />}
      {friday && <FormPeriodHours noPauses={pause} lg={lg} days={lg.planning.weekdaysFull[4]} />}
      {sunday && <FormPeriodHours noPauses={pause} lg={lg} days={lg.planning.weekdaysFull[5]} />}

      <View style={styles.footer}>
        <Button theme="dark" large={340} title={lg.planning.modification.saveButton} />
      </View>
    </ScrollView>
  );
};

const PickerTime = ({ placeholder }) => (
  <View style={styles.viewPicker}>
    <Picker
      items={hours(8, 19)}
      onChange={(v) => v}
      placeholder={placeholder}
    />
  </View>
);

PickerTime.propTypes = {
  placeholder: PropTypes.objectOf(PropTypes.string).isRequired,
};

AccountShedules.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
};

FormPeriodHours.propTypes = {
  days: PropTypes.string.isRequired,
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  noPauses: PropTypes.bool.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountShedules);
