import React from 'react';
import {
  Dimensions, StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Feather } from '@expo/vector-icons';
import Button from '../../../assets/generic-components/button';
import colors from '../../../assets/css/style-colors';
import allActions from '../../../redux/actions';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setIndex: (data) => allActions.congesActions.setIndex(dispatch, data),
  setModifMode: (data) => allActions.congesActions.setModifMode(dispatch, data),
});

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    flexDirection: 'column',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
    padding: 10,
  },
  containerConges: {
    justifyContent: 'flex-start',
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
  column: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10,
    width: Dimensions.get('window').width * 0.8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.WhiteDark,
  },
  bigText: {
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'GothamBook',
    color: colors.dark,
  },
  textTitle: {
    color: colors.lightGreyBlue,
    fontFamily: 'GothamMedium',
    fontSize: 11,
  },
  imageBox: {
    width: 45,
    height: 45,
    borderRadius: 23,
    backgroundColor: colors.WhiteDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Conges = (props) => {
  const {
    languageReducer, congesReducer, navigation, setIndex, setModifMode,
  } = props;
  const lg = languageReducer.language;

  function handleCongesModifs(i) {
    setIndex(i);
    setModifMode(true);
    navigation.navigate('AddConges');
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerConges}>
        {congesReducer.conges.map((item, i) => (
          <View style={styles.row} key={i}>
            <View style={styles.column}>
              <Text style={styles.textTitle}>{lg.planning.menuRight.congesPeriod}</Text>
              <Text style={styles.bigText}>{`${item.date1} - ${item.hour1} `}</Text>
              <Text style={styles.bigText}>{`${lg.planningMobile.to} ${item.date2} - ${item.hour2}`}</Text>
            </View>
            <TouchableOpacity
              style={styles.imageBox}
              onPress={() => handleCongesModifs(i)}
            >
              <Feather style={{ color: colors.dark }} name="edit" size={18} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <View style={styles.footer}>
        <Button theme="dark" title={lg.planning.menuRight.button} onPress={() => navigation.navigate('AddConges')} />
      </View>
    </View>
  );
};

Conges.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  congesReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  setIndex: PropTypes.func.isRequired,
  setModifMode: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Conges);
