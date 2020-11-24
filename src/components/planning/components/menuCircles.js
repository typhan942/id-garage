import React from 'react';
import { connect } from 'react-redux';
import { FloatingAction } from 'react-native-floating-action';
import { AntDesign, Feather, MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import colors from '../../../assets/css/style-colors';

const mapStateToProps = (state) => ({
  ...state,
});

const MenuCircles = (props) => {
  const { navigation, languageReducer } = props;
  const lg = languageReducer.language;

  const actions = [
    {
      text: lg.planning.modification.semaineType.header,
      icon: <Feather name="edit" size={20} color="white" />,
      name: 'WeekType',
      position: 1,
      buttonSize: 45,
      color: colors.black,
      textBackground: 'transparent',
      textStyle: { fontFamily: 'GothamMedium', color: colors.black },
    },
    {
      text: lg.planning.modify,
      icon: <Feather name="edit" size={20} color="white" />,
      name: 'ModifPlanning',
      position: 2,
      buttonSize: 45,
      color: colors.dark,
      textBackground: 'transparent',
      textStyle: { fontFamily: 'GothamMedium', color: colors.black },
    },
    {
      text: lg.planning.menuRight.congesTitle,
      icon: <Feather name="eye" size={20} color="white" />,
      name: 'Conges',
      position: 3,
      buttonSize: 45,
      color: colors.dark,
      textBackground: 'transparent',
      textStyle: { fontFamily: 'GothamMedium', color: colors.black },

    },
    {
      text: lg.planning.addRDV,
      icon: <MaterialIcons name="add" size={22} color="white" />,
      name: 'AddRDV',
      position: 4,
      buttonSize: 45,
      color: colors.dark,
      textBackground: 'transparent',
      textStyle: { fontFamily: 'GothamMedium', color: colors.black },
    },
    {
      text: lg.planning.filterRDV,
      icon: <AntDesign name="filter" size={20} color="white" />,
      name: 'FilterRDV',
      position: 5,
      buttonSize: 45,
      color: colors.dark,
      textBackground: 'transparent',
      textStyle: { fontFamily: 'GothamMedium', color: colors.black },
    },
  ];

  return (
    <FloatingAction
      color={colors.dark}
      overlayColor="white"
      position="right"
      shadow={{ shadowOpacity: 0 }}
      buttonSize={59}
      actions={actions}
      actionsPaddingTopBottom={1}
      onPressItem={(name) => {
        navigation.navigate(name);
      }}
    />
  );
};

MenuCircles.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(MenuCircles);
