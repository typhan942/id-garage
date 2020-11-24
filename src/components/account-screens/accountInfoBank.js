import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet, Text, View,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import connect from 'react-redux/lib/connect/connect';
import PropTypes from 'prop-types';
import Title from '../../assets/generic-components/title';
import InputLabel from '../../assets/generic-components/inputLabel';
import Button from '../../assets/generic-components/button';
import colors from '../../assets/css/style-colors';
import Picker from '../../assets/generic-components/picker';
import CheckBox from '../../assets/generic-components/checkbox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleGrey,
    padding: 15,
  },
  boxTitle: {
    marginLeft: 10,
    paddingTop: 30,
    paddingBottom: 30,
  },
  error: {
    fontSize: 10,
    color: colors.problems,
  },
  ml0: {
    marginLeft: 0,
  },
  textChange: {
    margin: 20,
    fontSize: 14,
    fontFamily: 'GothamBook',
  },
  mg20: {
    margin: 20,
  },
  pb80: {
    paddingBottom: 80,
  },
});

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({
});

const AccountInfoBank = (props) => {
  const { languageReducer } = props;
  const lg = languageReducer.language;
  const countries = [{ label: lg.account.france, value: lg.account.france },
    { label: lg.account.belgium, value: lg.account.belgium }];

  const [visible, setVisible] = useState(true);

  const {
    control, handleSubmit, errors,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      adresse: '',
      additionalAddress: '',
      zipCode: '',
      city: '',
      country: countries[0].value,
      iban: '12345678910129',
      bic: '123456789',
    },
  });

  const onSubmit = (data) => data;

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.boxTitle, styles.ml0]}>
        <Title text={lg.rates.facturation} />
      </View>
      <CheckBox
        checked={visible}
        onPress={() => setVisible(!visible)}
        label={lg.rates.pays}
        style={styles.ml0}
      />
      { !visible
          && (
          <View>
            <Controller
              as={(
                <InputLabel
                  errors={errors.adress}
                  label={lg.rates.addressStreet}
                  returnKeyType="next"
                >
                  {errors.adress && (
                    <Text style={styles.error}>
                      {`⚠ ${lg.rates.requiredField}`}
                    </Text>
                  )}
                </InputLabel>
                    )}
              control={control}
              name="adress"
              onChange={(args) => args[0].nativeEvent.text}
              rules={{ required: true }}
            />

            <Controller
              as={(
                <InputLabel
                  errors={errors.additionalAddress}
                  label={lg.rates.additionalAddress}
                  returnKeyType="next"
                />
                    )}
              control={control}
              name="additionalAddress"
              onChange={(args) => args[0].nativeEvent.text}
              rules={{ required: false }}
            />

            <Controller
              as={(
                <InputLabel errors={errors.zipCode} label={lg.rates.postal} returnKeyType="next">
                  {errors.zipCode && errors.zipCode.type === 'required' && (
                  <Text style={styles.error}>
                    {`⚠ ${lg.rates.requiredField}`}
                  </Text>
                  )}
                  {errors.zipCode && errors.zipCode.type === 'pattern' && (
                  <Text style={styles.error}>
                    {`⚠ ${lg.rates.validPostal}`}
                  </Text>
                  ) }
                </InputLabel>
                    )}
              control={control}
              name="zipCode"
              onChange={(args) => args[0].nativeEvent.text}
              rules={{
                required: true,
                pattern: {
                  value: /^[0-9]{4,5}$/,
                },
              }}
            />

            <Controller
              as={(
                <InputLabel errors={errors.city} label={lg.rates.city} returnKeyType="next">
                  {errors.city && (
                  <Text style={styles.error}>
                    {`⚠ ${lg.rates.requiredField}`}
                  </Text>
                  )}
                </InputLabel>
                    )}
              control={control}
              name="city"
              onChange={(args) => args[0].nativeEvent.text}
              rules={{ required: true }}
            />

            <Controller
              as={(
                <Picker
                  label={lg.rates.country}
                  onChange={(args) => args[0].nativeEvent.text}
                  textLabel={lg.rates.country}
                  items={countries}
                />
                )}
              control={control}
              name="country"
              rules={{ required: true }}
            />
          </View>
          )}

      <View style={[styles.boxTitle, styles.ml0]}>
        <Title text={lg.account.bank} />
      </View>

      <Controller
        as={(
          <InputLabel
            editable={false}
            errors={errors.iban}
            label={lg.rates.iban}
            keyboardType="numeric"
            returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
          >
            {errors.iban && errors.iban.type === 'required' && (
            <Text style={styles.error}>
              {`⚠ ${lg.rates.requiredField}`}
            </Text>
            )}
            {errors.iban && errors.iban.type === 'pattern' && (
            <Text style={styles.error}>
              {`⚠ ${lg.rates.messageIban}`}
            </Text>
            ) }
          </InputLabel>
            )}
        control={control}
        name="iban"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{
          required: true,
          pattern: {
            value: /^\d{14}(?:[-\s]\d{4})?$/,
          },
        }}
      />

      <Controller
        as={(
          <InputLabel
            editable={false}
            errors={errors.bic}
            label={lg.rates.bic}
            keyboardType="numeric"
            returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
          >
            {errors.bic && errors.bic.type === 'required' && <Text style={styles.error}>{lg.rates.requiredField}</Text>}
            {errors.bic && errors.bic.type === 'pattern' && <Text style={styles.error}>{lg.rates.messageIban}</Text> }
          </InputLabel>
            )}
        control={control}
        name="bic"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{
          required: true,
          pattern: {
            value: /^\d{9}(?:[-\s]\d{4})?$/,
          },
        }}
      />
      <Text style={styles.textChange}>
        {lg.rates.change}
        admin@idgarages.com
      </Text>

      <View style={styles.mg20}>
        <Button onPress={handleSubmit(onSubmit)} theme="dark" title={lg.rates.save} />
      </View>
      <View style={styles.pb80} />
    </ScrollView>
  );
};

AccountInfoBank.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfoBank);
