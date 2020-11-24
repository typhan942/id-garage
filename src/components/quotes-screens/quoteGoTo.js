import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet, Text, View,
} from 'react-native';
import connect from 'react-redux/lib/connect/connect';
import PropTypes from 'prop-types';
import { Controller, useForm } from 'react-hook-form';
import moment from 'moment';
import Button from '../../assets/generic-components/button';
import { RenderTable } from './quoteSummaryOrder';
import InputLabel from '../../assets/generic-components/inputLabel';
import SelectDate from '../../assets/generic-components/selectDate';
import colors from '../../assets/css/style-colors';
import OverlayModal from '../../assets/generic-components/overlayModal';
import useToogle from '../../hooks/useToogle';
import Picker from '../../assets/generic-components/picker';
import InputNote from '../../assets/generic-components/inputNote';

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
  { label: '1h', value: '1' },
  { label: '2h', value: '2' },
  { label: '3h', value: '3' },
  { label: '4h', value: '4' },
  { label: '5h', value: '5' },
  { label: '6h', value: '6' },
  { label: '7h', value: '7' },
  { label: '8h', value: '8' },

];

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.paleGrey,
    flex: 1,
    padding: 20,
  },
  label: {
    paddingBottom: 10,
    color: colors.slateGrey,
    fontSize: 13,
    fontFamily: 'GothamMedium',
  },
  error: {
    fontSize: 10,
    color: colors.problems,
  },
  spacer45: {
    flexBasis: '45%',
  },
  spacer10: {
    flexBasis: '10%',
  },
  wrapperBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderTopColor: colors.WhiteDark,
    backgroundColor: colors.paleGrey,
    borderTopWidth: 1,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: -20,
    marginRight: -20,
  },
  wrapperSelect: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCenter: {
    textAlign: 'center',
  },
  paddingTop40: {
    paddingTop: 40,
  },
  paddingTop20: {
    paddingTop: 20,
  },
  btnModal: {
    flexDirection: 'row',
    marginTop: 40,
  },
  pt40: {
    paddingTop: 40,
  },
});

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({});

const QuoteGoTo = (props) => {
  // redux
  const { languageReducer, navigation } = props;
  const lg = languageReducer.language;
  // state
  const [modalActive, setModalActive] = useToogle();
  const [selectShedules, setSelectShedules] = useState(shedules[0].value);
  const [selectTime, setSelectTime] = useState(time[0].value);
  const [selectDate, setSelectDate] = useState(new Date());
  const [note] = useState('');

  // hook forms
  const {
    control, handleSubmit, errors, watch,
  } = useForm({
    defaultValues: {
      note: '',
    },
  });

  // retrieves the input fields
  const onSubmit = (data) => {
    // object to reformat for api
    const obj = {
      ...data,
      shedules: selectShedules,
      time: selectTime,
      date: selectDate,
      note,
    };
    navigation.navigate('Confirm-Rdv', { item: obj });
  };

  return (
    <>
      <OverlayModal closeModal={setModalActive} isActive={modalActive}>
        <View style={styles.content}>
          <Text>{lg.rates.changeBackup}</Text>
          <View style={styles.btnModal}>
            <Button
              onPress={() => { navigation.navigate('Quotes'); setModalActive(); }}
              theme="dark"
              title={lg.planning.modification.confirm}
            />
            <Button onPress={setModalActive} theme="light" title={lg.planning.modification.cancel} />
          </View>
        </View>
      </OverlayModal>

      <ScrollView style={styles.container}>
        <RenderTable lg={lg} />
        <View style={styles.pt40}>
          <RenderFirstname lg={lg} errors={errors} control={control} />
          <RenderLastname lg={lg} errors={errors} control={control} />
          <RenderEmail lg={lg} errors={errors} control={control} />
          <RenderPhone lg={lg} errors={errors} control={control} />
        </View>
        <Text style={styles.label}>{lg.quote.date}</Text>
        <View style={styles.wrapperSelect}>

          <View style={styles.spacer45}>
            <SelectDate onChange={(date) => setSelectDate(date)} dateValue={moment(selectDate).format('DD MMM YYYY')} />
          </View>

          <View style={styles.spacer10}>
            <Text style={styles.textCenter}> -</Text>
          </View>

          <View style={styles.spacer45}>
            <View>
              <Picker
                value={selectShedules}
                onChange={(value) => setSelectShedules(value)}
                items={shedules}
              />
            </View>
          </View>
        </View>
        <View style={styles.paddingTop20}>
          <View style={styles.spacer45}>
            <Picker
              value={selectTime}
              onChange={(value) => { setSelectTime(value); }}
              items={time}
              label={lg.quote.timeOfRDV}
            />
          </View>
        </View>

        <View style={styles.paddingTop20}>
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
            onPress={setModalActive}
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
    </>
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

const RenderPhone = ({ control, lg, errors }) => (
  <Controller
    as={(
      <InputLabel
        errors={errors.phone}
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

QuoteGoTo.propTypes = {
  languageReducer: PropTypes.shape().isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

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
  errors: PropTypes.objectOf(PropTypes.any).isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,

};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteGoTo);
