// core
import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import PropTypes from 'prop-types';
// libs
import RNPickerSelect from 'react-native-picker-select';
import { AntDesign } from '@expo/vector-icons';
// redux
import { connect } from 'react-redux';
import allActions from '../../redux/actions';
// images
import FrFlag from '../../assets/images/drawer/fr.png';
import NlFlag from '../../assets/images/drawer/nl.png';
// styles
import colors from '../../assets/css/style-colors';

const mapStateToProps = ({ languageReducer, invoiceReducer }) => ({
  lg: languageReducer.language,
  invoiceReducer,
});

const mapDispatchToProps = (dispatch) => ({
  setLang: (data) => allActions.languageActions.setLanguage(dispatch, data),
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: colors.veryLightPink,
    borderBottomColor: colors.veryLightPink,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },
  flag: {
    marginRight: 20,
    width: 20,
    height: 20,
  },
});

const pickerInputStyle = {
  flexDirection: 'row',
  color: colors.black,
  fontFamily: 'GothamBold',
};

const pickerStyle = {
  viewContainer: {
    flex: 1,
  },
  inputAndroid: {
    ...pickerInputStyle,
    // extra Android style here
  },
  inputIOS: {
    ...pickerInputStyle,
    paddingVertical: 15,
    // extra IOS style here
  },
  textInputProps: {
    backgroundColor: colors.veryPaleGrey,
    color: colors.veryPaleGrey,
  },
  iconContainer: {
    top: 17,
    right: 0,
    paddingLeft: 0,
  },
  touchableWrapperProps: {
    backgroundColor: colors.veryPaleGrey,
    color: colors.veryPaleGrey,
  },
};

const DownArrowIcon = () => (
  <AntDesign
    name="down"
    size={13}
    color={colors.perso}
  />
);

/**
 */
const SelectLanguage = ({ lg, setLang }) => {
  const onChange = (langCode) => setLang(langCode);

  const langItems = [
    {
      label: lg.langCode === 'fr' ? 'FR' : 'NL',
      value: lg.langCode === 'fr' ? 'fr' : 'nl',
    },
    {
      label: lg.langCode === 'fr' ? 'NL' : 'FR',
      value: lg.langCode === 'fr' ? 'nl' : 'fr',
    },
  ];

  const flagMap = {
    fr: FrFlag,
    nl: NlFlag,
  };

  return (
    <View style={styles.container}>
      <Image style={styles.flag} source={flagMap[lg.langCode]} />
      <RNPickerSelect
        items={langItems}
        placeholder={{}} // disable "Select an item" option
        style={pickerStyle}
        textInputProps={{ underlineColorAndroid: 'transparent' }}
        iconContainer={styles.iconContainer}
        Icon={DownArrowIcon}
        onValueChange={onChange}
      />
    </View>
  );
};

SelectLanguage.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  setLang: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguage);
