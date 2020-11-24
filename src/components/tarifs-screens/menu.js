import React from 'react';
import { connect } from 'react-redux';
import { FloatingAction } from 'react-native-floating-action';
import { Feather } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import colors from '../../assets/css/style-colors';

const mapStateToProps = (state) => ({
  ...state,
});

const MenuTarifs = (props) => {
  const { navigation, languageReducer } = props;
  const lg = languageReducer.language;

  const actions = [
    {
      text: lg.tarifsMobile.taxes,
      icon: <Feather name="eye" size={24} color="white" />,
      name: 'Taxes',
      position: 3,
      buttonSize: 45,
      color: colors.dark,
      textBackground: 'transparent',
      textStyle: { fontFamily: 'GothamMedium', fontSize: 14, color: colors.black },
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
      onPressItem={(name) => {
        navigation.navigate(name);
      }}
    />
  );
};

MenuTarifs.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(MenuTarifs);
