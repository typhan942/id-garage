import React, { useState } from 'react';
import {
  Modal,
  Platform, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { AntDesign } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';
import PropTypes from 'prop-types';
import InputLabel from '../../../assets/generic-components/inputLabel';
import SelectDate from '../../../assets/generic-components/selectDate';
import colors from '../../../assets/css/style-colors';
import Button from '../../../assets/generic-components/button';
import Picker from '../../../assets/generic-components/picker';
import animationNetwork from '../../../assets/animations/errorNetwork.json';
import InputNote from '../../../assets/generic-components/inputNote';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: colors.white,
  },
  boxselectedServices: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: colors.WhiteDark,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ghostContainer: {
    flexGrow: 1,
    backgroundColor: colors.transparentBlack,
  },
  label: {
    paddingBottom: 10,
    color: colors.slateGrey,
    fontSize: 13,
    fontFamily: 'GothamMedium',
  },
  wrapperModal: {
    flexGrow: 2,
    backgroundColor: colors.white,
    padding: 20,
  },
  modalContainer: {
    flex: 1,
  },
  selection: {
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 10,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  error: {
    fontSize: 10,
    color: colors.problems,
  },
  animation: {
    height: 200,
    width: 200,
  },
  pt10: {
    paddingTop: 10,
  },
  pt20: {
    paddingTop: 20,
  },
  pt40: {
    paddingTop: 40,
  },
  wrapperBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 25,
    backgroundColor: colors.paleGrey,
    borderTopWidth: 1,
    borderTopColor: colors.WhiteDark,
    marginTop: 20,
    marginLeft: -20,
    marginRight: -20,
  },
  activeModal: {
    flexDirection: 'row',
    margin: 10,
  },

  boxDate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacer10: {
    flexBasis: '10%',
  },
  spacer45: {
    flexBasis: '45%',
  },
  pad10: {
    padding: 10,
  },
  textCenter: {
    textAlign: 'center',
  },
  alignGrow: {
    textAlign: 'center',
    flexGrow: 1,
  },
});

const shedules = [
  { label: '08h', value: '8' },
  { label: '08h30', value: '8.30' },
  { label: '09h', value: '9' },
  { label: '9h', value: '9.30' },
  { label: '10h00', value: '10' },
  { label: '10h30', value: '10.30' },
  { label: '11h', value: '11' },
  { label: '11h30', value: '11.30' },
  { label: '12h', value: '12' },
  { label: '12h30', value: '12.30' },
  { label: '13h', value: '13' },
  { label: '13h30', value: '13.30' },
  { label: '14h', value: '14' },
  { label: '14h30', value: '14.30' },
  { label: '15h', value: '15' },
  { label: '15h30', value: '15.30' },
  { label: '16h', value: '16' },
  { label: '16h30', value: '16.30' },
  { label: '17h', value: '17' },
  { label: '17h30', value: '17.30' },
  { label: '18h', value: '18' },
  { label: '18h30', value: '18.30' },
  { label: '19h00', value: '19.30' },
];

const time = [
  { label: '0', value: '0' },
  { label: '1h', value: '1' },
  { label: '2h', value: '2' },
  { label: '3h', value: '3' },
  { label: '4h', value: '4' },
  { label: '5h', value: '5' },
  { label: '6h', value: '6' },
  { label: '7h', value: '7' },
  { label: '8h', value: '8' },

];

const AppointmentWithoutQuotation = ({ route, navigation }) => {
// state
  const [modalActive, setModalActive] = useState(false);
  const [selectDate, setSelectDate] = useState(new Date());

  const activeModal = () => { setModalActive(true); };

  const lg = useSelector((state) => state.languageReducer.language);
  const carPrestationSelection = route.params?.selection ? route.params.selection : false;
  const {
    control, handleSubmit, errors, watch,
  } = useForm({
    defaultValues: {
      note: '',
    },
  });
  const onSubmit = () => {
    navigation.navigate('Valide-Rdv');
  };

  return (
    <ScrollView style={styles.container}>
      <RenderModal
        lg={lg}
        navigation={navigation}
        modalActive={modalActive}
        setModalActive={setModalActive}
      />

      <View>
        <RenderFirstname lg={lg} errors={errors} control={control} />
        <RenderLastname lg={lg} errors={errors} control={control} />
        <RenderEmail lg={lg} errors={errors} control={control} />
        <RenderPhone lg={lg} errors={errors} control={control} />
        <RenderImmatriculation lg={lg} errors={errors} control={control} />
        <RenderBtnSelectedPrestation
          carPrestationSelection={carPrestationSelection}
          navigation={navigation}
          route={route}
          lg={lg}
        />

        <ScrollView style={styles.pt20} horizontal>
          {carPrestationSelection && carPrestationSelection.map((item) => (
            <View
              key={item.id}
              style={styles.selection}
            >
              <Text style={styles.pad10}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>

        <Text style={styles.label}>{lg.quote.date}</Text>
        <View style={styles.boxDate}>
          <View style={styles.spacer45}>
            <SelectDate
              onChange={(date) => setSelectDate(date)}
              dateValue={moment(selectDate).format('DD MMM YYYY')}
            />
          </View>

          <View style={styles.spacer10}>
            <Text style={styles.textCenter}> - </Text>
          </View>
          <View style={styles.spacer45}>
            <Controller
              as={(<Picker onChange={(args) => args[0].nativeEvent.text} items={shedules} />)}
              control={control}
              name="hours"
              defaultValue={shedules[0].value}
            />
          </View>
        </View>
      </View>

      <View style={styles.pt20}>
        <Text style={styles.label}>{lg.quote.timeOfRDV}</Text>
        <View style={styles.spacer45}>
          <Controller
            as={(<Picker onChange={(args) => args[0].nativeEvent.text} items={time} />)}
            control={control}
            name="time"
            defaultValue={time[0].value}
          />
        </View>
      </View>
      <View style={styles.pt40}>
        <Controller
          as={(
            <InputNote label={lg.quote.noteRDV} length={watch('note').length} />
            )}
          onChange={(args) => args[0].nativeEvent.text}
          control={control}
          name="note"
        />
      </View>
      <View style={styles.wrapperBtn}>
        <Button
          onPress={() => activeModal()}
          theme="light"
          title={lg.signOut.cancel}
        />
        <Button
          onPress={handleSubmit(onSubmit)}
          theme="dark"
          title={lg.quote.validedRDV}
        />
      </View>
    </ScrollView>
  );
};

const RenderFirstname = ({ control, lg, errors }) => (
  <Controller
    as={(
      <InputLabel
        errors={errors.firstname}
        label={lg.quote.firstname}
        returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
      >
        {errors.firstname && (
        <Text style={styles.error}>
          ⚠
          {lg.rates.requiredField}
        </Text>
        )}
        {errors.firtname && (
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
  />
);

const RenderLastname = ({ control, lg, errors }) => (
  <Controller
    as={(
      <InputLabel
        errors={errors.lastname}
        label={lg.quote.lastName}
        returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
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
  />
);

const RenderEmail = ({ control, lg, errors }) => (
  <Controller
    as={(
      <InputLabel
        errors={errors.email}
        keyboardType="email-address"
        returnKeyType="next"
        label={lg.rates.email}
      >
        {errors.email && errors.email.type === 'required' && (
        <Text style={styles.error}>
          ⚠
          {lg.rates.requiredField}
        </Text>
        )}
        {errors.email && errors.email.type === 'pattern' && (
        <Text style={styles.error}>
          ⚠
          {lg.quote.messageEmail}
        </Text>
        ) }
      </InputLabel>
        )}
    control={control}
    name="email"
    onChange={(args) => args[0].nativeEvent.text}
    rules={{
      required: true,
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
      },
    }}
  />
);

const RenderPhone = ({ control, lg }) => (
  <Controller
    as={(
      <InputLabel
        label={lg.quote.phone}
        keyboardType="numeric"
        returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
      />
        )}
    control={control}
    name="phone"
    onChange={(args) => args[0].nativeEvent.text}
  />
);

const RenderImmatriculation = ({ control, lg }) => (
  <Controller
    as={(
      <InputLabel
        label={lg.quote.registration}
        returnKeyType="next"
      />
        )}
    control={control}
    name="immatriculation"
    onChange={(args) => args[0].nativeEvent.text}
  />
);

const RenderBtnSelectedPrestation = ({ navigation, lg, carPrestationSelection }) => (
  <View style={styles.pt10}>
    <Text style={styles.label}>{lg.quote.prestation}</Text>
    <TouchableOpacity
      style={styles.boxselectedServices}
      onPress={() => navigation.navigate('Services')}
    >
      <Text style={styles.alignGrow}>
        {carPrestationSelection.length > 0 ? `${carPrestationSelection.length} `
            + `${lg.quote.selectedServices}` : lg.quote.choice}
      </Text>
    </TouchableOpacity>
  </View>
);

const RenderModal = ({
  setModalActive, modalActive, navigation, lg,
}) => (
  <Modal
    transparent
    animationType="slide"
    visible={modalActive}
  >
    <SafeAreaView style={styles.modalContainer}>
      <View style={styles.modalContainer}>
        <View style={styles.wrapperModal}>
          <TouchableOpacity onPress={() => setModalActive(false)} style={styles.btnClose}>
            <AntDesign name="close" size={24} color={colors.black} />
          </TouchableOpacity>
          <View style={styles.content}>
            <LottieView style={styles.animation} source={animationNetwork} autoPlay loop />
            <Text>{lg.devis.doYouReallyWantToCancel}</Text>
            <View style={styles.activeModal}>
              <Button
                onPress={() => { navigation.navigate('Planning'); setModalActive(false); }}
                theme="dark"
                title={lg.planning.modification.confirm}
              />
              <Button onPress={() => setModalActive(false)} theme="light" title={lg.planning.modification.cancel} />
            </View>
          </View>
        </View>
        <TouchableOpacity style={styles.ghostContainer} />
      </View>
    </SafeAreaView>
  </Modal>
);

RenderFirstname.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  errors: PropTypes.objectOf(PropTypes.any).isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,

};

RenderLastname.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  errors: PropTypes.objectOf(PropTypes.any).isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,

};

RenderEmail.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  errors: PropTypes.objectOf(PropTypes.any).isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,

};

RenderPhone.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,
};

RenderImmatriculation.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,
};

RenderModal.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  modalActive: PropTypes.bool.isRequired,
  setModalActive: PropTypes.func.isRequired,
};
RenderBtnSelectedPrestation.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  carPrestationSelection: PropTypes.bool.isRequired,
};

AppointmentWithoutQuotation.propTypes = {
  route: PropTypes.string.isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default AppointmentWithoutQuotation;
