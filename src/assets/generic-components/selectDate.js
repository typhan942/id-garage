import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,

} from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import PropTypes from 'prop-types';
import colors from '../css/style-colors';

const styles = StyleSheet.create({
  input: {
    height: 30,
    padding: 10,
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    backgroundColor: colors.white,
    height: 40,
  },
  containerTextInput: {
    flex: 1,
  },
  pt10: {
    padding: 10,
  },
});

const CellIcon = () => (
  <View style={styles.pt10}>
    <FontAwesome name="calendar" size={15} color="black" />
  </View>
);

const SelectDate = ({ dateValue, ...props }) => {
  const [isDateTimePickerVisible, setIsDateTimePickerVisible] = useState(false);

  const showDateTimePicker = () => {
    setIsDateTimePickerVisible(true);
  };
  const hideDateTimePicker = () => {
    setIsDateTimePickerVisible(false);
  };
  const handleDatePicked = (date) => {
    const { onChange } = props;
    setIsDateTimePickerVisible(false);
    if (onChange) { onChange(date); }
  };
  return (
    <TouchableOpacity style={{ flex: 1 }} onPress={() => showDateTimePicker()}>
      <View style={styles.container}>
        <View style={styles.containerTextInput}>
          <TextInput
            editable={false}
            style={styles.input}
            inlineImageLeft="search"
            placeholderTextColor="gray"
            placeholderStyle={styles.pt10}
            value={dateValue}
          />
        </View>
        <CellIcon name="ios-arrow-down" />

        <DateTimePicker
          locale="FR"
          minimumDate={new Date()}
          isVisible={isDateTimePickerVisible}
          onConfirm={(date) => handleDatePicked(date)}
          onCancel={() => hideDateTimePicker()}
        />
      </View>

    </TouchableOpacity>

  );
};

SelectDate.propTypes = {
  onChange: PropTypes.func.isRequired,
  dateValue: PropTypes.string.isRequired,

};

export default SelectDate;
