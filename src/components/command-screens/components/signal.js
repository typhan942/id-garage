import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import PropTypes from 'prop-types';
import Button from '../../../assets/generic-components/button';
import allActions from '../../../redux/actions';
import colors from '../../../assets/css/style-colors';

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setDataForCommand: (string) => allActions.calendarActions.setDataForCommand(dispatch, string),
});

const Signal = (props) => {
  const {
    navigation, languageReducer, calendarReducer, setDataForCommand,
  } = props;

  const lg = languageReducer.language;

  const { dataForCommand } = calendarReducer;

  const { control } = useForm();

  const data = [{
    label: 'Chiffrage devis',
    value: 'Chiffrage devis',
  }, {
    label: 'Problème planning',
    value: 'Problème planning',
  }, {
    label: 'Autre',
    value: 'Autre',
  }];

  const screenHeight = Math.round(Dimensions.get('window').height);
  const button = parseInt(Math.round(Dimensions.get('window').width) - 32);

  const styles = StyleSheet.create({
    root: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: colors.white,
      height: screenHeight,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    textarea: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 16,
      marginRight: 16,
      position: 'relative',
    },
    input: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: colors.veryPaleGrey,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      color: colors.slateGrey,
      fontSize: 14,
      fontWeight: 'bold',
      padding: 10,
    },
    textRight: {
      position: 'absolute',
      fontSize: 13,
      color: colors.slateGrey,
      bottom: 10,
      right: 13,
      fontFamily: 'GothamBook',
    },
    texteareaLabel: {
      fontSize: 13,
      fontFamily: 'GothamMedium',
      color: colors.slateGrey,
      marginBottom: 5,
      marginLeft: 16,
      position: 'relative',
    },
    receiverLabel: {
      fontSize: 13,
      fontFamily: 'GothamMedium',
      color: colors.slateGrey,
      marginTop: 5,
      marginLeft: 16,
      position: 'relative',
    },
    footer: {
      flex: 0.7,
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 5,
      paddingBottom: 10,
      backgroundColor: colors.veryPaleGrey,
      borderTopWidth: 1,
      borderTopColor: colors.WhiteDark,
    },
    dropdown: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 16,
      marginRight: 16,
      marginBottom: 20,
      position: 'relative',
    },
    button: {
      position: 'absolute',
      bottom: -10,
      paddingBottom: 20,
    },
    content: {
      flexDirection: 'row',
      flex: 3,
      justifyContent: 'center',
      marginLeft: 20,
    },
    text: { color: 'black', fontSize: 18, fontWeight: 'bold' },
  });

  const [value, onChangeValue] = React.useState('');
  const [text, onChangeText] = React.useState('Chiffrage devis');
  const [number, onChangeNumber] = React.useState(0);
  const [responsePage, setResponsePage] = React.useState(false);

  const DownArrowIcon = () => (
    <Ionicons name="ios-arrow-down" size={20} color={colors.slateGrey} />
  );

  React.useEffect(() => {
    const str = value.split('').length;
    onChangeNumber(str);
  });

  const handleText = (t) => {
    const str = t.split('').length;
    onChangeNumber(str);
    onChangeValue(t);
  };

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
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign
                  name="arrowleft"
                  size={24}
                  color="black"
                />
              </TouchableOpacity>
)}
            centerComponent={{ text: lg.commandMobile.signalTitle, style: styles.text }}
          />

          {responsePage ? <Text style={styles.text}>{lg.commandMobile.signalRetour}</Text>
            : (
              <>
                <Controller
                  as={(
                    <>
                      <Text style={styles.receiverLabel}>{lg.commandMobile.signalSelect}</Text>
                      <View style={styles.dropdown}>
                        <RNPickerSelect
                          placeholder={{}}
                          items={data}
                          value={text}
                          style={{
                            inputAndroid: {
                              fontSize: 14,
                              paddingTop: 8,
                              paddingBottom: 8,
                              paddingHorizontal: 10,
                              borderRadius: 4,
                              backgroundColor: colors.veryPaleGrey,
                              color: colors.dark,
                              width: button,
                              fontFamily: 'GothamMedium',
                            },
                            inputIOS: {
                              fontSize: 14,
                              paddingTop: 13,
                              paddingHorizontal: 10,
                              paddingBottom: 12,
                              borderRadius: 8,
                              backgroundColor: colors.veryPaleGrey,
                              color: colors.dark,
                              width: button,
                              fontFamily: 'GothamMedium',
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
                          onValueChange={(v) => onChangeText(v)}
                        />
                      </View>
                    </>
                            )}
                  control={control}
                  name="receiver"
                  onChange={(args) => args[0].nativeEvent.text}
                  rules={{ required: true }}
                />

                <Controller
                  as={(
                    <>
                      <Text style={styles.texteareaLabel}>{lg.commandMobile.signalText}</Text>
                      <View style={styles.textarea}>
                        <TextInput
                          style={styles.input}
                          value={value}
                          multiline
                          numberOfLines={7}
                          editable
                          maxHeight={130}
                          minHeight={130}
                          maxLength={360}
                          textAlignVertical="top"
                          placeholder={lg.invoice.signal.inputPlaceHolder}
                          onChangeText={handleText}
                        />
                        <Text style={styles.textRight}>
                          {number}
                          /360
                        </Text>
                      </View>
                    </>
                            )}
                  control={control}
                  name="Message"
                  onChange={(args) => {
                    onChangeText(args[0].nativeEvent.text);
                  }}
                  rules={{ required: true }}
                  defaultValue={value}
                />
              </>
            )}

          <View style={styles.content} />
          <View style={styles.footer}>
            <View style={styles.button}>

              {responsePage ? (
                <Button
                  title={lg.commandMobile.return}
                  theme="light"
                  onPress={() => {
                    navigation.goBack();
                    setResponsePage(false);
                  }}
                />
              ) : (
                <View style={styles.row}>
                  <Button
                    title={lg.commandMobile.save}
                    theme="dark"
                    onPress={() => {
                      dataForCommand.note = value;
                      setDataForCommand(dataForCommand);
                      setResponsePage(true);
                    }}
                  />
                  <Button
                    title={lg.commandMobile.cancel}
                    theme="light"
                    onPress={() => {
                      dataForCommand.note = value;
                      setDataForCommand(dataForCommand);
                      navigation.goBack();
                    }}
                  />
                </View>
              )}
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>

  );
};

Signal.propTypes = {
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  setDataForCommand: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Signal);
