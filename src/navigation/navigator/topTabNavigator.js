import React, { useRef, useState } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Header } from 'react-native-elements';
import {
  View, Text, Image, TouchableOpacity, Modal, StyleSheet,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { AntDesign, Feather } from '@expo/vector-icons';

import * as Linking from 'expo-linking';
import InputScrollView from 'react-native-input-scroll-view';
import PropTypes from 'prop-types';
import connect from 'react-redux/lib/connect/connect';
import AccountInfos from '../../components/account-screens/accountInfos';
import AccountDescription from '../../components/account-screens/accountDescription';
import AccountShedules from '../../components/account-screens/accountShedules';
import AccountInfoBank from '../../components/account-screens/accountInfoBank';
import AccountServices from '../../components/account-screens/accountServices';
import colors from '../../assets/css/style-colors';
import InputLabel from '../../assets/generic-components/inputLabel';
import Title from '../../assets/generic-components/title';
import Button from '../../assets/generic-components/button';
import Picker from '../../assets/generic-components/picker';
import Cog from '../../assets/images/header/Cog.png';

const Tab = createMaterialTopTabNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: {
    width: 20,
    height: 20,
    margin: 10,
  },
  containerModal: {
    backgroundColor: colors.white,
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  containerForm: {
    padding: 20,
    backgroundColor: colors.paleGrey,
    borderRadius: 20,
    margin: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  boxTitle: {
    alignItems: 'center',
    paddingTop: 40,
  },
  boxBtn: {
    alignItems: 'center',
    margin: 20,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  boxIcon: {
    alignItems: 'center',
  },
  box: {
    paddingTop: 20,
  },
  error: {
    fontSize: 10,
    color: colors.problems,
  },
  enseigne: {
    fontSize: 18,
    fontFamily: 'GothamBold',
    letterSpacing: 0.5,
  },
  name: {
    fontSize: 18,
    fontFamily: 'GothamBook',
    letterSpacing: 0.5,
  },
  edit: {
    margin: 10,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.veryLightBlue,
    borderRadius: 50,
    position: 'relative',
    top: -30,
  },
  wrapper: {
    backgroundColor: colors.white,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  pt10: {
    paddingTop: 10,
  },
  pt40: {
    paddingTop: 10,
  },
  titleAccount: {
    fontSize: 13,
    paddingBottom: 10,
  },
  titleBox: {
    fontFamily: 'GothamMedium',
    fontSize: 15,
    borderWidth: 1,
    borderColor: colors.WhiteDark,
    borderRadius: 5,
    paddingTop: 12,
    paddingBottom: 8,
    textAlign: 'center',
    marginTop: 20,
  },
  plusIcon: {
    position: 'absolute',
    bottom: 10,
    left: 12,
  },
  grow1: {
    flexGrow: 1,
  },
});

const civility = [{ label: 'M', value: 'Monsieur' }, { label: 'Mme', value: 'Madame' }];

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({
});

const TopTabNavigator = ({ navigation, languageReducer }) => {
  // redux
  const { language: lg } = languageReducer;
  // ref
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const [modalActive, setModalActive] = useState(false);

  const {
    control, handleSubmit, errors,
  } = useForm();

  const onSubmit = () => {
    setModalActive(false);
  };

  return (
    <View style={styles.container}>
      <Modal
        transparent
        visible={modalActive}
      >
        <View style={styles.containerModal}>
          <InputScrollView style={styles.box}>
            <View style={styles.containerForm}>
              <View style={styles.boxTitle}>
                <Title text={lg.account.title} />
              </View>
              <View style={styles.pt40}>

                <Controller
                  as={(
                    <InputLabel
                      errors={errors.name}
                      label={lg.reset.emailField}
                      returnKeyType="next"
                    >
                      {errors.name && (
                      <Text style={styles.error}>
                        ⚠
                        {lg.rates.requiredField}
                      </Text>
                      )}
                    </InputLabel>
                  )}
                  control={control}
                  name="name"
                  onChange={(args) => args[0].nativeEvent.text}
                  rules={{ required: true }}
                  defaultValue="SPEEDOTO"
                />

                <Text style={styles.titleAccount}>{lg.account.civility}</Text>
                <Controller
                  as={(<Picker items={civility} onChange={(args) => args[0].nativeEvent.text} />)}
                  control={control}
                  name="civility"
                  rules={{ required: true }}
                  defaultValue={civility[0].value}
                />

                <Controller
                  as={(
                    <InputLabel
                      errors={errors.firstname}
                      focus={firstnameRef}
                      onSubmitEditing={() => lastnameRef.current.focus()}
                      label={lg.account.lastname}
                      returnKeyType="next"
                    >
                      {errors.firstname && (
                      <Text style={styles.error}>
                        ⚠
                        {lg.rates.requiredField}
                      </Text>
                      )}
                    </InputLabel>
                  )}
                  control={control}
                  name="firstname"
                  onChange={(args) => args[0].nativeEvent.text}
                  rules={{ required: true }}
                  defaultValue="Ghorbel"
                />
                <Controller
                  as={(
                    <InputLabel
                      errors={errors.lastname}
                      focus={lastnameRef}
                      label={lg.account.firstname}
                      // returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
                    >
                      {errors.lastname && (
                      <Text style={styles.error}>
                        ⚠
                        {lg.rates.requiredField}
                      </Text>
                      )}
                    </InputLabel>
                  )}
                  control={control}
                  name="lastname"
                  onChange={(args) => args[0].nativeEvent.text}
                  rules={{ required: true }}
                  defaultValue="Hani ben"
                />

                <View style={styles.boxBtn}>
                  <Button title={lg.rates.save} theme="dark" large={300} onPress={handleSubmit(onSubmit)} />
                </View>

              </View>
              <TouchableOpacity onPress={() => setModalActive(false)} style={styles.boxIcon} />
            </View>
          </InputScrollView>

        </View>
      </Modal>
      <Header
        backgroundColor={colors.white}
        leftComponent={(
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >
            <AntDesign name="arrowleft" size={18} color={colors.black} />
          </TouchableOpacity>
        )}
        centerComponent={{ text: lg.menuRight.account, style: { color: colors.dark, fontFamily: 'GothamBold', fontSize: 18 } }}
        rightComponent={(
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
          >
            <Image style={styles.img} source={Cog} />
          </TouchableOpacity>
        )}
      />
      <View style={styles.wrapper}>
        <View style={styles.grow1}>
          <Text style={styles.enseigne}>SPEEDOTO</Text>
          <Text style={styles.name}>M. Hani Ben Ghorbel</Text>
          <TouchableOpacity onPress={() => Linking.openURL('https://www.idgarages.com/fr-fr')} style={styles.pt10}>
            <AntDesign style={styles.plusIcon} name="plus" size={16} color="black" />
            <Text style={styles.titleBox}>{lg.account.read}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => setModalActive(!modalActive)} style={styles.edit}>
          <Feather name="edit" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Tab.Navigator
        tabBarOptions={{
          scrollEnabled: true,
          labelStyle: { fontSize: 13, fontFamily: 'GothamMedium', textTransform: 'capitalize' },
          activeTintColor: colors.mediumGreen,
          inactiveTintColor: colors.slateGrey,
          indicatorStyle: {
            backgroundColor: colors.mediumGreen,
          },
          tabStyle: {
            flexDirection: 'row',
            width: 130,
          },
        }}
      >
        <Tab.Screen name={lg.account.info} component={AccountInfos} />
        <Tab.Screen name={lg.account.description} component={AccountDescription} />
        <Tab.Screen name={lg.account.timetable} component={AccountShedules} />
        <Tab.Screen name={lg.account.bank} component={AccountInfoBank} />
        <Tab.Screen name={lg.account.service} component={AccountServices} />
      </Tab.Navigator>
    </View>

  );
};
TopTabNavigator.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(TopTabNavigator);
