import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
  Dimensions,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import { Header } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';
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

const Note = (props) => {
  const screenHeight = Math.round(Dimensions.get('window').height);

  const styles = StyleSheet.create({
    root: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: colors.white,
      height: screenHeight,
    },
    textarea: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 16,
      marginRight: 16,
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
      fontSize: 14,
      color: colors.slateGrey,
      bottom: 5,
      right: 10,
    },
    texteareaLabel: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.slateGrey,
      marginBottom: 20,
      marginTop: 20,
      marginLeft: 16,
    },
    footer: {
      flexDirection: 'column',
      flex: 0.5,
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 10,
      paddingBottom: 10,
    },
  });

  const {
    navigation, languageReducer, calendarReducer, setDataForCommand,
  } = props;

  const lg = languageReducer.language;

  const { dataForCommand } = calendarReducer;

  const { control } = useForm();

  const [value, onChangeText] = React.useState(dataForCommand.note);
  const [number, onChangeNumber] = React.useState(0);

  React.useEffect(() => {
    const str = value.split('').length;
    onChangeNumber(str);
  });

  const handleText = (text) => {
    const str = text.split('').length;
    onChangeNumber(str);
    onChangeText(text);
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
              <TouchableOpacity
                onPress={() => navigation.goBack()}
              >
                <AntDesign name="arrowleft" size={24} color="black" />
              </TouchableOpacity>
)}
            centerComponent={{
              text: lg.commandMobile.modificationNote,
              style: { color: 'black', fontSize: 18, fontWeight: 'bold' },
            }}
          />
          <Controller
            as={(
              <>
                <Text style={styles.texteareaLabel}>{lg.commandMobile.note}</Text>
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
                    placeholder=""
                    onChangeText={handleText}
                    defaultValue={value}
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
              // args[0].nativeEvent.text;
            }}
            rules={{ required: true }}
            defaultValue={value}
          />
          <View style={styles.space} />
          <View style={styles.footer}>
            <View style={styles.button}>
              <Button
                title={lg.commandMobile.save}
                theme="dark"
                large={340}
                onPress={() => {
                  dataForCommand.note = value;
                  setDataForCommand(dataForCommand);
                  navigation.goBack();
                }}
              />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>

  );
};

Note.propTypes = {
  calendarReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  setDataForCommand: PropTypes.func.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Note);
