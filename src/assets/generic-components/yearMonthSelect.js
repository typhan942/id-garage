import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import colors from '../css/style-colors';
import { years, months } from '../api-data/years';

const styles = StyleSheet.create({
  root: {
    backgroundColor: colors.white,
  },
  sectionTitle: {
    fontFamily: 'GothamMedium',
    fontSize: 13,
    paddingTop: 10,
    color: colors.slateGrey,
    marginBottom: 10,
  },
  boxPicker: {
    marginRight: 10,
    flexBasis: '40%',
  },
  okButton: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: colors.black,
  },
  submitBtnText: {
    color: colors.white,
    fontSize: 13,
    fontFamily: 'GothamMedium',
  },
  flexRow: {
    flexDirection: 'row',
  },
  wrapper: {
    flexBasis: '14%',
  },
});

const pickerInputStyle = {
  flexDirection: 'row',
  paddingLeft: 10,
  paddingRight: 40,
  paddingTop: 7,
  paddingBottom: 7,
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
    top: 12,
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
    size={14}
    color={colors.slateGrey}
  />
);

const SelectYearMonth = ({
  lg, setYear, setMonth,
}) => {
  // static data

  const placeholder = {
    year: { value: 2020, label: '2020' },
    month: { value: null, label: lg.invoice.selectPeriod.periodType.year },
  };

  // month with translated labels
  const realMonths = useMemo(() => months.map(({ value, label }) => ({
    value,
    label: lg.month[label],
  })), [months]);

  // state

  const [year, setYearValue] = useState(placeholder.year.value);
  const [month, setMonthValue] = useState(placeholder.month.label);
  const onChangeYear = (value) => {
    setYear(value);
    setYearValue(value);
  };
  const onChangeMonth = (value) => {
    setMonth(value); setMonthValue(value);
  };

  return (

    <View style={styles.root}>
      <Text style={styles.sectionTitle}>
        {lg.stat.period.title}
      </Text>
      <View style={styles.flexRow}>
        <View style={styles.boxPicker}>
          <RNPickerSelect
            items={years}
            placeholder={placeholder.year}
            style={pickerStyle}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColorAndroid: 'transparent' }}
            iconContainer={styles.iconContainer}
            onValueChange={(value) => onChangeYear(value)}
            Icon={() => <DownArrowIcon />}
          />
        </View>
        <View style={styles.boxPicker}>
          <RNPickerSelect
            items={realMonths}
            placeholder={placeholder.month}
            style={pickerStyle}
            useNativeAndroidPickerStyle={false}
            textInputProps={{ underlineColorAndroid: 'transparent' }}
            iconContainer={styles.iconContainer}
            onValueChange={(value) => onChangeMonth(value)}
            Icon={() => <DownArrowIcon />}
          />
        </View>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.okButton} onPress={() => alert(`${year}, ${month} is chosen`)}>
            <Text style={styles.submitBtnText}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>

  );
};

SelectYearMonth.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  setYear: PropTypes.func.isRequired,
  setMonth: PropTypes.func.isRequired,
};

export default SelectYearMonth;
