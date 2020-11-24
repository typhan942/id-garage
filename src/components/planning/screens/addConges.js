import React, { useState } from 'react';
import {
  Dimensions, StyleSheet, View, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import moment from 'moment';
import Button from '../../../assets/generic-components/button';
import colors from '../../../assets/css/style-colors';
import allActions from '../../../redux/actions';
import AddOneDate from '../components/dateTimeAddItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
  },
  containerConges: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 20,
  },
  footer: {
    height: 60,
    borderTopWidth: 0.5,
    borderTopColor: colors.lightGreyBlue,
    backgroundColor: colors.paleGrey,
    paddingLeft: 16,
    marginBottom: 10,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    width: Dimensions.get('window').width,
  },
  text: {
    marginTop: 30,
    marginBottom: 30,
    paddingLeft: 16,
    paddingRight: 16,
    color: colors.dark,
    fontSize: 13,
    fontFamily: 'GothamBook',
  },
  error: {
    color: colors.coral,
  },
  texts: {
    fontFamily: 'GothamMedium',
    fontSize: 13,
    color: colors.slateGrey,
  },
  row: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setDate1: (data) => allActions.congesActions.setDate1(dispatch, data),
  setDate2: (data) => allActions.congesActions.setDate2(dispatch, data),
  setHour2: (data) => allActions.congesActions.setHour2(dispatch, data),
  setHour1: (data) => allActions.congesActions.setHour1(dispatch, data),
  setAllData: (data) => allActions.calendarActions.setAllData(dispatch, data),
  setConges: (data) => allActions.congesActions.setConges(dispatch, data),
  setModifMode: (data) => allActions.congesActions.setModifMode(dispatch, data),
});

const AddConges = (props) => {
  const {
    languageReducer, congesReducer, calendarReducer, navigation, setAllData, setModifMode,
    setConges,
  } = props;
  const lg = languageReducer.language;

  const { modif, index } = congesReducer;
  const { allData } = calendarReducer;
  const {
    date1, date2, hour1, hour2, hours, weekNumber1, weekDay1, weekNumber2, weekDay2,
  } = modif ? congesReducer.conges[index] : congesReducer;
  const [error, setError] = useState('');

  const handleAddItem = () => {
    if (moment(date2).format('DD MMM YYYY') < moment(date1).format('DD MMM YYYY')) {
      setError(lg.planning.menuRight.congesError);
    } else {
      const update = {
        date1, date2, hour1, hour2, hours, weekNumber1, weekDay1, weekNumber2, weekDay2,
      };
      const { conges } = congesReducer;
      conges.push(update);
      setConges(conges);
      setModifMode(false);

      const WithClosedTickets = allData;
      for (let i = weekNumber1; i <= weekNumber2; i++) {
        const d = i === weekNumber1 ? weekDay1 : 0;
        const n = i === weekNumber2 && weekDay2 <= 5 ? weekDay2 : 5;
        for (let j = d; j <= n; j++) {
          WithClosedTickets[i].data[j].closed = true;
        }
      }
      setAllData(WithClosedTickets);
      navigation.navigate('Conges');
    }
  };

  function handleDelItem() {
    const { conges } = congesReducer;
    conges.splice(index, 1);
    setConges(conges);
    setModifMode(false);

    const WithClosedTickets = allData;
    for (let i = weekNumber1; i <= weekNumber2; i++) {
      const d = i === weekNumber1 ? weekDay1 : 0;
      const n = i === weekNumber2 && weekDay2 <= 5 ? weekDay2 : 5;
      for (let j = d; j <= n; j++) {
        WithClosedTickets[i].data[j].closed = false;
      }
    }

    navigation.navigate('Conges');
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerConges}>

        <View className={styles.row}>
          <Text style={styles.texts}>{lg.planning.modification.congesPeriod}</Text>
        </View>

        <AddOneDate caseN={1} />
        <AddOneDate caseN={2} />

        <View style={styles.row}>
          <Text style={styles.error}>{error}</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.text}>{lg.planningMobile.fermeture}</Text>
        </View>

        <View style={styles.row}>
          <Button
            title={modif ? `-  ${lg.planning.modification.delItem}` : `+  ${lg.planning.modification.addItem}`}
            theme="light"
            onPress={() => (modif ? handleDelItem() : handleAddItem())}
          />
        </View>
      </View>

      <View style={styles.footer}>
        <Button
          theme="dark"
          title={modif ? lg.planning.modification.congesModif : lg.planning.menuRight.button}
          onPress={() => handleAddItem()}
        />
      </View>
    </View>
  );
};

AddConges.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  congesReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  setConges: PropTypes.func.isRequired,
  setAllData: PropTypes.func.isRequired,
  setModifMode: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddConges);
