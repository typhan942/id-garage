import React from 'react';
import {
  Image,
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
import { Header } from 'react-native-elements';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import RNPickerSelect from 'react-native-picker-select';
import { useForm, Controller } from 'react-hook-form';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import colors from '../../assets/css/style-colors';
import logo2 from '../../assets/images/src_assets_images_logo2.png';
import logo from '../../assets/images/src_assets_images_logo1.png';
import Button from '../../assets/generic-components/button';
import dataContact from '../../assets/api-data/dataContact';
import iconCog from '../../assets/images/header/Cog.png';

const mapStateToProps = (state) => ({
  ...state,
});

const Contact = (props) => {
  const screenHeight = Math.round(Dimensions.get('window').height);
  const button = parseInt(Math.round(Dimensions.get('window').width) - 32);

  const {
    navigation, languageReducer,
  } = props;
  const lg = languageReducer.language;

  const styles = StyleSheet.create({
    root: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'space-between',
      backgroundColor: colors.veryPaleGrey,
      height: screenHeight,
    },
    img: {
      width: 25,
      height: 25,
    },
    contact: {
      flexDirection: 'column',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginLeft: 16,
      marginRight: 16,
      marginTop: -10,
      padding: 20,
      backgroundColor: colors.WhiteDark,
    },
    description: {
      fontFamily: 'GothamMedium',
      fontSize: 16,
      color: colors.dark,
    },
    phone: {
      fontSize: 16,
      color: colors.dark,
      fontFamily: 'GothamMedium',
      marginTop: 20,
      marginBottom: 12,
    },
    for: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    underline: {
      fontSize: 16,
      fontFamily: 'GothamMedium',
      color: colors.mediumGreen,
      textDecorationLine: 'underline',
      marginTop: 4,
    },
    horizon: {
      flexDirection: 'row',
      marginTop: 15,
      marginBottom: 5,
    },
    logo: {
      height: 35,
      width: 35,
      resizeMode: 'contain',
    },
    radius: {
      backgroundColor: colors.white,
      borderRadius: 8,
      padding: 5,
    },
    vertical: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-start',
      marginLeft: 15,
    },
    number: {
      fontSize: 14,
      fontFamily: 'GothamMedium',
      color: colors.dark,
    },
    open: {
      fontSize: 14,
      fontFamily: 'GothamBook',
      color: colors.dark,
    },
    textarea: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 145,
      marginLeft: 16,
      marginRight: 16,
    },
    input: {
      flexDirection: 'column',
      flex: 1,
      backgroundColor: colors.white,
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      color: colors.slateGrey,
      fontSize: 14,
      fontFamily: 'GothamMedium',
      padding: 10,
      position: 'relative',
    },
    textRight: {
      position: 'absolute',
      fontFamily: 'GothamBook',
      fontSize: 13,
      color: colors.slateGrey,
      bottom: 50,
      right: 20,
    },
    texteareaLabel: {
      fontSize: 13,
      fontFamily: 'GothamMedium',
      color: colors.slateGrey,
      marginTop: 20,
      marginBottom: -15,
      marginLeft: 19,
    },
    receiverLabel: {
      fontSize: 13,
      fontFamily: 'GothamMedium',
      color: colors.slateGrey,
      marginBottom: 5,
      marginTop: 25,
      marginLeft: 19,
    },
    footer: {
      flexDirection: 'column',
      flex: 0.3,
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 16,
      paddingRight: 16,
      marginTop: 30,
      backgroundColor: colors.white,
      borderTopWidth: 1,
      borderTopColor: colors.WhiteDark,
    },
    dropdown: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 16,
      marginRight: 16,
    },
    header: {
      height: 'auto',
      paddingBottom: 16,
      marginTop: -40,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  const [value, onChangeText] = React.useState('');
  const [number, onChangeNumber] = React.useState(0);

  React.useEffect(() => {
    const str = value.split('').length;
    onChangeNumber(str);
  });

  const data = [{
    label: 'IdGarage',
    value: 'IdGarage',
  }, {
    label: 'Ad',
    value: 'Ad',
  }, {
    label: 'All',
    value: 'All',
  }];

  const [select, onChangeSelect] = React.useState('');

  const handleText = (text) => {
    const str = text.split('').length;
    onChangeNumber(str);
    onChangeText(text);
  };

  const { control } = useForm();

  const DownArrowIcon = () => (
    <Ionicons name="ios-arrow-down" size={18} color={colors.perso} />
  );

  return (

    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <ScrollView>
        <SafeAreaView style={styles.root}>
          <Header
            containerStyle={styles.header}
            placement="center"
            backgroundColor="white"
            leftComponent={(
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <AntDesign
                  name="arrowleft"
                  size={19}
                  color={colors.black}
                />
              </TouchableOpacity>
)}
            centerComponent={{
              text: lg.contact.header,
              style: { olor: colors.black, fontSize: 18, fontFamily: 'GothamBold' },
            }}
            rightComponent={(
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Image
                  style={styles.img}
                  source={iconCog}
                />
              </TouchableOpacity>
)}
          />
          <Controller
            as={(
              <>
                <Text style={styles.receiverLabel}>{lg.contact.recipient}</Text>
                <View style={styles.dropdown}>
                  <RNPickerSelect
                    placeholder={{}}
                    items={data}
                    value={select}
                    style={{
                      inputAndroid: {
                        fontSize: 16,
                        paddingTop: 8,
                        paddingBottom: 8,
                        paddingHorizontal: 10,
                        borderRadius: 4,
                        backgroundColor: colors.white,
                        color: colors.dark,
                        width: button,
                      },
                      inputIOS: {
                        fontSize: 16,
                        paddingTop: 13,
                        paddingHorizontal: 10,
                        paddingBottom: 12,
                        borderRadius: 8,
                        backgroundColor: colors.white,
                        color: colors.dark,
                        width: button,
                        fontFamily: 'GothamMedium',
                        fontStyle: 14,
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
                    onValueChange={(v) => {
                      onChangeSelect(v);
                    }}
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
                <Text style={styles.texteareaLabel}>{lg.contact.message}</Text>
                <View style={styles.textarea}>
                  <TextInput
                    style={styles.input}
                    value={value}
                    multiline
                    numberOfLines={7}
                    editable
                    maxHeight={180}
                    minHeight={180}
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
            onChange={(args) => args[0].nativeEvent.text}
            rules={{ required: true }}
            defaultValue={value}
          />

          <View style={styles.contact}>
            <Text style={styles.description}>{lg.contact.qAtext}</Text>
            <TouchableOpacity style={styles.for} onPress={() => navigation.navigate('resetPassword')}>
              <Text style={styles.underline}>{lg.contact.help}</Text>
              <Text style={styles.phone}>{lg.contact.byPhone}</Text>
            </TouchableOpacity>
            <View style={styles.horizon}>
              <View style={styles.radius}>
                <Image style={styles.logo} source={logo} />
              </View>
              <View style={styles.vertical}>
                <Text style={styles.number}>
                  {dataContact.number}
                </Text>
                <Text style={styles.open}>
                  {dataContact.date}
                </Text>
              </View>
            </View>
            <View style={styles.horizon}>
              <View style={styles.radius}>
                <Image style={styles.logo} source={logo2} />
              </View>
              <View style={styles.vertical}>
                <Text style={styles.number}>
                  {dataContact.number}
                </Text>
                <Text style={styles.open}>
                  {dataContact.date}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.footer}>
            <View style={styles.button}>
              <Button title={lg.contact.send} theme="dark" large={340} />
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </TouchableWithoutFeedback>

  );
};

Contact.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(Contact);
