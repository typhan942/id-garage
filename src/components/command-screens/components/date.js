import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  Calendar, LocaleConfig,
} from 'react-native-calendars';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import { AntDesign, Ionicons } from '@expo/vector-icons';

import RNPickerSelect from 'react-native-picker-select';
import PropTypes from 'prop-types';
import allActions from '../../../redux/actions';
import Button from '../../../assets/generic-components/button';
import colors from '../../../assets/css/style-colors';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setDataForCommand: (string) => allActions.calendarActions.setDataForCommand(dispatch, string),
});

const Date = (props) => {
  const screenHeight = Math.round(Dimensions.get('window').height);
  const button = parseInt(Math.round(Dimensions.get('window').width) - 32);

  const styles = StyleSheet.create({
    root: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: colors.white,
      height: screenHeight,
    },
    footer: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      bottom: 30,
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 10,
      paddingBottom: 10,
    },
    select: {
      justifyContent: 'center',
      alignItems: 'flex-start',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 10,
      paddingBottom: 10,
      marginTop: 30,
    },
    calendarView: {
      position: 'absolute',
      backgroundColor: colors.white,
      flex: 1,
      top: 30,
      width: Dimensions.get('window').width,
      padding: 10,
      zIndex: 100,
    },
    hour: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.dark,
      marginBottom: 10,
    },
    date: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.dark,
      marginBottom: 10,
      marginLeft: 16,
      marginTop: 35,
    },
    selectDate: {
      width: button,
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft: 16,
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 12,
      paddingBottom: 10,
      marginBottom: 20,
      borderRadius: 8,
      backgroundColor: colors.veryPaleGrey,
    },
  });

  LocaleConfig.locales.fr = {
    monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
    monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
    dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
    dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
    today: 'Aujourd\'hui',
  };
  LocaleConfig.defaultLocale = 'fr';

  const {
    navigation, languageReducer, calendarReducer, setDataForCommand,
  } = props;

  const lg = languageReducer.language;

  const { dataForCommand } = calendarReducer;

  const month = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet',
    'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];

  const [display, onChangeDisplay] = React.useState(false);
  const [hours, onChangeHours] = React.useState(dataForCommand.Commandtime);
  const [date, onChangeDate] = React.useState(dataForCommand.date);

  const data = [{
    label: '8h00',
    value: '8h00',
  }, {
    label: '8h30',
    value: '8h30',
  }, {
    label: '9h00',
    value: '9h00',
  }, {
    label: '9h30',
    value: '9h30',
  }, {
    label: '10h00',
    value: '10h00',
  }, {
    label: '10h30',
    value: '10h30',
  }, {
    label: '11h00',
    value: '11h00',
  }, {
    label: '11h30',
    value: '11h30',
  }, {
    label: '12h00',
    value: '12h00',
  }, {
    label: '12h30',
    value: '12h30',
  }, {
    label: '13h00',
    value: '13h00',
  }, {
    label: '13h30',
    value: '13h30',
  }, {
    label: '14h00',
    value: '14h00',
  }, {
    label: '14h30',
    value: '14h30',
  }, {
    label: '15h00',
    value: '15h00',
  }, {
    label: '15h30',
    value: '15h30',
  }, {
    label: '16h00',
    value: '16h00',
  }, {
    label: '16h30',
    value: '16h30',
  }, {
    label: '17h00',
    value: '17h00',
  }, {
    label: '17h30',
    value: '17h30',
  }, {
    label: '18h00',
    value: '18h00',
  }, {
    label: '18h30',
    value: '18h30',
  }, {
    label: '19h00',
    value: '19h00',
  }, {
    label: '19h30',
    value: '19h30',
  }, {
    label: '20h00',
    value: '20h00',
  }];

  const DownArrowIcon = () => (
    <Ionicons name="ios-arrow-down" size={20} color={colors.slateGrey} />
  );

  function handleDisplay() {
    onChangeDisplay(!display);
  }

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView>
        <SafeAreaView style={styles.root}>
          <Header
            containerStyle={{
              height: 70,
              paddingBottom: 30,
              justifyContent: 'center',
              alignItems: 'center',
              headerForceInset: { top: 'never', bottom: 'never' },
            }}
            backgroundColor="white"
            leftComponent={(
              <TouchableOpacity
                onPress={() => navigation.goBack()}
              >
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
)}
            centerComponent={{
              text: lg.commandMobile.modificationDate,
              style: { color: 'black', fontSize: 18, fontWeight: 'bold' },
            }}
          />

          {display ? (
            <View style={styles.calendarView}>
              <Calendar
                onDayPress={(day) => {
                  dataForCommand.date = `${day.day} ${month[day.month - 1]} ${day.year}`;
                  setDataForCommand(dataForCommand);
                  onChangeDate(`${day.day} ${month[day.month - 1]} ${day.year}`);
                  onChangeDisplay(false);
                }}
                monthFormat="MMM yyyy"
                onPressArrowLeft={(substractMonth) => substractMonth()}
                onPressArrowRight={(addMonth) => addMonth()}
              />
            </View>
          ) : (
            <>
              <Text style={styles.date}>{lg.commandMobile.dateSelect}</Text>
              <TouchableOpacity style={styles.selectDate} onPress={() => handleDisplay()}>
                <Text>{date}</Text>
                <Ionicons name="ios-arrow-down" size={20} color={colors.slateGrey} />
              </TouchableOpacity>
            </>
          )}

          <View style={styles.select}>
            <Text style={styles.hour}>{lg.commandMobile.hourSelect}</Text>
            <View>
              <RNPickerSelect
                placeholder={{}}
                items={data}
                value={hours}
                style={{
                  inputAndroid: {
                    fontSize: 16,
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingHorizontal: 10,
                    borderRadius: 4,
                    backgroundColor: colors.veryPaleGrey,
                    color: colors.dark,
                    width: button,
                  },
                  inputIOS: {
                    fontSize: 16,
                    paddingTop: 13,
                    paddingHorizontal: 10,
                    paddingBottom: 12,
                    borderRadius: 8,
                    backgroundColor: colors.veryPaleGrey,
                    color: colors.dark,
                    width: button,
                  },
                  textInputProps: {
                    backgroundColor: colors.veryPaleGrey,
                    color: colors.veryPaleGrey,
                  },
                  iconContainer: {
                    top: 13,
                    right: 15,
                    paddingLeft: 10,
                  },
                  touchableWrapperProps: {
                    backgroundColor: colors.veryPaleGrey,
                    color: colors.veryPaleGrey,
                  },
                }}
                useNativeAndroidPickerStyle={false}
                textInputProps={{ underlineColorAndroid: 'transparent' }}
                iconContainer={{
                  top: 10,
                  right: 10,
                  paddingLeft: 10,
                }}
                Icon={DownArrowIcon}
                onValueChange={(value) => {
                  dataForCommand.Commandtime = value;
                  setDataForCommand(dataForCommand);
                  onChangeHours(value);
                }}
              />
            </View>
          </View>

          <View style={styles.footer}>
            <Button
              title={lg.commandMobile.save}
              theme="dark"
              large={340}
              onPress={() => {
                navigation.goBack();
              }}
            />
          </View>
        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>

  );
};

Date.propTypes = {
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  setDataForCommand: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Date);
