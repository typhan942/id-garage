import React, { useState } from 'react';
import {
  Dimensions, StyleSheet, Text, TextInput, View,
} from 'react-native';
import PropTypes from 'prop-types';
import connect from 'react-redux/lib/connect/connect';
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';
import colors from '../../assets/css/style-colors';
import Button from '../../assets/generic-components/button';

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
    color: colors.slateGrey,
    fontSize: 13,
    paddingBottom: 8,
    marginTop: 20,
  },
  inputBox: {
    width: Dimensions.get('window').width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.paleGrey,
  },
  inputBox2: {
    width: Dimensions.get('window').width * 0.9,
  },
  priceBox: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 40,
    borderLeftColor: colors.WhiteDark,
    borderLeftWidth: 1,
    backgroundColor: colors.paleGrey,
  },
  priceText: {
    color: colors.lightGreyBlue,
    fontFamily: 'GothamMedium',
    fontSize: 13,
  },
  footer: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: colors.WhiteDark,
    backgroundColor: colors.paleGrey,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 12,
    paddingBottom: 14,
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
  },
  inputIOS: {
    ...pickerInputStyle,
    // extra IOS style here
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
    size={14}
    color={colors.slateGrey}
  />
);

const range = (N) => {
  const set = [];
  for (let i = 0; i < N; i++) {
    set.push({ label: `${i * 5}%`, value: `${i * 5}%` });
  }
  return set;
};

const Item = ({ header, value, onChange }) => (
  <>
    <View className={styles.row}>
      <Text style={styles.texts}>{header}</Text>
    </View>
    <View style={styles.row}>
      <View style={styles.inputBox}>
        <TextInput
          keyboardType="numeric"
          defaultValue={value}
          // onChangeText={onChange}
          onChange={(e) => onChange(e.nativeEvent.text)}
        />
        <View style={styles.priceBox}>
          <Text style={styles.priceText}>€HT</Text>
        </View>
      </View>
    </View>
  </>
);
Item.propTypes = {
  header: PropTypes.string.isRequired,
  value: (PropTypes.string || PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({
});

const Taxes = (props) => {
  const {
    languageReducer, navigation,
  } = props;
  const lg = languageReducer.language;

  const [taux1, setTaux1] = useState('49.5');
  const [taux2, setTaux2] = useState('49.5');
  const [taux3, setTaux3] = useState('49.5');
  const [adjust, setAdjust] = useState('-10%');

  function handleChanges() {
    navigation.goBack();
    return (`Send to API: \n${taux1} \n${taux2} \n${taux3} \n${adjust}`);
    // alert(`Send to API: \n${taux1} \n${taux2} \n${taux3} \n${adjust}`);
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        <Item onChange={(value) => setTaux1(value)} value={taux1} header={lg.rates.taux1} />
        <Item onChange={(value) => setTaux2(value)} value={taux2} header={lg.rates.taux2} />
        <Item onChange={(value) => setTaux3(value)} value={taux3} header={lg.rates.taux3} />
        <View className={styles.row}>
          <Text style={styles.texts}>{lg.rates.adjust}</Text>
        </View>
        <View className={styles.row}>
          <View style={styles.inputBox2}>
            <RNPickerSelect
              items={range(5)}
              placeholder={{ label: '20%', value: '20%' }}
              style={pickerStyle}
              useNativeAndroidPickerStyle={false}
              textInputProps={{ underlineColorAndroid: 'transparent' }}
              iconContainer={styles.iconContainer}
              onValueChange={(value) => setAdjust(value)}
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

Taxes.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Taxes);
