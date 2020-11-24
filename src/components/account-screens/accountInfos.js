import React, { useState, useRef } from 'react';
import {
  StyleSheet, Text, View, Platform, TouchableOpacity, RefreshControl,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import InputScrollView from 'react-native-input-scroll-view';
import { Linking } from 'expo';
import connect from 'react-redux/lib/connect/connect';
import PropTypes from 'prop-types';
import Title from '../../assets/generic-components/title';
import InputLabel from '../../assets/generic-components/inputLabel';
import Button from '../../assets/generic-components/button';
import colors from '../../assets/css/style-colors';
import InputArea from '../../assets/generic-components/inputArea';
import Picker from '../../assets/generic-components/picker';
import useToogle from '../../hooks/useToogle';
import CheckBoxLarge from '../../assets/generic-components/checkboxLarge';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleGrey,
    padding: 20,
  },
  error: {
    fontSize: 10,
    color: colors.problems,
  },
  titleResetPassword: {
    color: colors.dark,
    textDecorationLine: 'underline',
    fontFamily: 'GothamMedium',
    textAlign: 'right',
    fontSize: 13,
  },
  boxTitle: {
    paddingTop: 30,
    paddingBottom: 15,
  },
  scrollItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  titleCheckbox: {
    fontSize: 13,
    fontFamily: 'GothamMedium',
    color: colors.mediumGreen,
    paddingLeft: 23,
    textDecorationLine: 'underline',
  },
  title: {
    color: colors.slateGrey,
    fontSize: 13,
    padding: 5,
  },
  padding10: {
    padding: 10,
  },
  pt10: {
    paddingTop: 10,
  },
  boxCheckboxTitle: {
    flexDirection: 'row', alignItems: 'center',
  },
  footer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -20,
    marginRight: -20,
    borderTopWidth: 1,
    borderTopColor: colors.WhiteDark,
  },
  textRate: {
    color: colors.slateGrey,
    fontSize: 13,
    marginTop: 20,
    marginBottom: 10,
    fontFamily: 'GothamMedium',
  },
  viewSubmit: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  mb50: {
    marginBottom: 50,
  },
});

const CheckboxLabel = ({
  checked, title, lg, onPress,
}) => (
  <View style={styles.pt10}>
    <View style={styles.boxCheckboxTitle}>
      <CheckBoxLarge checked={checked} />
      <Text style={styles.title}>{title}</Text>
    </View>
    <View style={styles.padding10}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.titleCheckbox}>{lg.account.readHelp}</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({
});

const AccountInfos = (props) => {
  const { languageReducer } = props;
  const lg = languageReducer.language;
  const countries = [{ label: lg.account.france, value: lg.account.france },
    { label: lg.account.belgium, value: lg.account.belgium }];

  const phoneFixeRef = useRef();
  const phonePortableRef = useRef();
  const siretRef = useRef();
  const rcsRef = useRef();
  const adressRef = useRef();
  const newPasswordRef = useRef();
  const confirmPasswordRef = useRef();
  const buttonRef = useRef();
  const [refreshing] = useState(false);

  const [modalChangePassword, setModalChangePassword] = useToogle();

  const {
    control, handleSubmit, errors, watch,
  } = useForm({
    mode: 'all',
    defaultValues: {
      email: 'speedoto94@gmail.com',
      phonefixe: '0180276962',
      phoneMobile: '0634276962',
      siret: '12345678910129',
      rcs: '123456789',
      adresse: '57 rue de Mayenne',
      zipCode: '94000',
      city: 'Créteil',
      additionalAddress: 'la vitale',
      note: 'Hôpital intercommunal de Créteil.Centre hospitalier universitaire Henri-Mondor.',
    },
  });

  const onSubmit = (data) => data;

  return (
    <InputScrollView
      refreshControl={<RefreshControl refreshing={refreshing} />}
      style={styles.container}
    >

      <View style={styles.boxTitle}>
        <Title text={lg.account.info} />
      </View>
      <Controller
        as={(
          <InputLabel
            errors={errors.email}
            keyboardType="email-address"
            returnKeyType="next"
            label={lg.rates.email}
            onSubmitEditing={() => phoneFixeRef.current.focus()}
          >
            {errors.email && errors.email.type === 'required' && (
              <Text style={styles.error}>
                {`⚠ ${lg.rates.requiredField}`}
              </Text>
            )}
            {errors.email && errors.email.type === 'pattern' && (
              <Text style={styles.error}>
                {`⚠ ${lg.quote.messageEmail}`}
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
      {modalChangePassword && (
      <RenderResetPassword
        lg={lg}
        errors={errors}
        control={control}
        watch={watch}
        confirmPasswordRef={confirmPasswordRef}
        newPasswordRef={newPasswordRef}
        modalChangePassword={modalChangePassword}
      />
      )}

      <TouchableOpacity style={styles.scrollItem} onPress={setModalChangePassword}>
        <Text style={styles.titleResetPassword}>{lg.rates.password}</Text>
      </TouchableOpacity>

      <Controller
        as={(
          <InputLabel
            errors={errors.phonefixe}
            focus={phoneFixeRef}
            onSubmitEditing={() => phonePortableRef.current.focus()}
            label={lg.rates.phone}
            keyboardType="numeric"
            returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
          >
            { errors.phonefixe && errors.phonefixe.type === 'pattern' && (

              <Text style={styles.error}>
                {`⚠ ${lg.rates.messagePhone}`}
              </Text>
            )}
          </InputLabel>
            )}
        control={control}
        name="phonefixe"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{
          pattern: {
            value: /^\d{10}(?:[-\s]\d{4})?$/,
          },
        }}
      />

      <Controller
        as={(
          <InputLabel
            errors={errors.phoneMobile}
            focus={phonePortableRef}
            onSubmitEditing={() => siretRef.current.focus()}
            label={lg.rates.portable}
            keyboardType="numeric"
            returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
          >
            {errors.phoneMobile && errors.phoneMobile.type === 'pattern' && (
              <Text style={styles.error}>
                {`⚠ ${lg.rates.messagePhone}`}
              </Text>
            )}
          </InputLabel>
            )}
        control={control}
        name="phoneMobile"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{
          pattern: {
            value: /^\d{10}(?:[-\s]\d{4})?$/,
          },
        }}
      />

      <Controller
        as={(
          <InputLabel
            errors={errors.siret}
            focus={siretRef}
            onSubmitEditing={() => rcsRef.current.focus()}
            label={lg.rates.siret}
            keyboardType="numeric"
            returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
          >
            {errors.siret && errors.siret.type === 'required' && (
              <Text style={styles.error}>
                {`⚠ ${lg.rates.requiredField}`}
              </Text>
            )}
            {errors.siret && errors.siret.type === 'pattern' && (
              <Text style={styles.error}>
                {`⚠ ${lg.rates.messageSiret}`}
              </Text>
            ) }
          </InputLabel>
            )}
        control={control}
        name="siret"
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
            errors={errors.rcs}
            focus={rcsRef}
            onSubmitEditing={() => adressRef.current.focus()}
            label={lg.rates.rcs}
            keyboardType="numeric"
            returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
          >
            {errors.rcs && errors.rcs.type === 'pattern' && (
              <Text style={styles.error}>
                {`⚠ ${lg.rates.messageRCS}`}
              </Text>
            ) }
          </InputLabel>
            )}
        control={control}
        name="rcs"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{
          pattern: {
            value: /^\d{9}(?:[-\s]\d{4})?$/,
          },
        }}
      />

      <View style={styles.boxTitle}>
        <Title text={lg.account.adresseGarage} />
      </View>

      <Controller
        as={(
          <InputLabel
            errors={errors.adresse}
            focus={adressRef}
            label={lg.rates.addressStreet}
            returnKeyType="next"
          >
            {errors.adresse && (
              <Text style={styles.error}>
                {`⚠ ${lg.rates.requiredField}`}
              </Text>
            )}
          </InputLabel>
            )}
        control={control}
        name="adresse"
        onChange={(args) => args[0].nativeEvent.text}
        rules={{ required: true }}
      />

      <Controller
        as={(
          <InputLabel
            errors={errors.additionalAddress}
            focus={adressRef}
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
          <InputLabel
            errors={errors.zipCode}
            focus={adressRef}
            label={lg.rates.postal}
            returnKeyType="next"
          >
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
          <InputLabel
            focus={adressRef}
            label={lg.rates.city}
            returnKeyType="next"
          >
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
            label="Pays*"
            onChange={(args) => args[0].nativeEvent.text}
            textLabel={lg.rates.country}
            items={countries}
          />
            )}
        control={control}
        name="country"
        rules={{ required: true }}
        defaultValue={countries[0].value}
      />

      <View>
        <Text style={styles.textRate}>
          {lg.rates.next}
        </Text>

        <InputArea
          lang={lg.langCode}
          index={0}
          returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
        />

      </View>

      <CheckboxLabel
        checked
        title={lg.rates.condition}
        lg={lg}
        onPress={() => Linking.openURL('https://www.idgarages.com/fr-fr/a-propos/cgvu-garages')}
      />

      <CheckboxLabel
        checked
        title={lg.rates.charter}
        lg={lg}
        onPress={() => Linking.openURL('https://www.idgarages.com/fr-fr/a-propos/cgvu-garages')}
      />

      <View style={styles.footer}>
        <View focus={buttonRef} style={styles.viewSubmit}>
          <Button
            title={lg.rates.save}
            theme="dark"
            large={340}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      </View>

      <View style={styles.mb50} />
    </InputScrollView>
  );
};

const RenderResetPassword = ({
  errors, control, watch, newPasswordRef, confirmPasswordRef, lg, modalChangePassword,
}) => (
  <View>

    { /* ───Old password 👇 ───────────────────────── */ }

    <Controller
      as={(
        <InputLabel
          onSubmitEditing={() => newPasswordRef.current.focus()}
          label={lg.rates.oldPassword}
          secureTextEntry
          returnKeyType="next"
        >
          {modalChangePassword && errors.password && (
          <Text style={styles.error}>
            {`⚠ ${lg.rates.requiredField}`}
          </Text>
          )}
        </InputLabel>
          )}
      control={control}
      name="password"
      onChange={(args) => args[0].nativeEvent.text}
      rules={{ required: true }}
    />

    <Controller
      as={(
        <InputLabel
          errors={errors.newPassword}
          onSubmitEditing={() => confirmPasswordRef.current.focus()}
          focus={newPasswordRef}
          label={lg.rates.newPassword}
          secureTextEntry
          returnKeyType="next"
        >
          {modalChangePassword && errors.newPassword && errors.newPassword.type === 'required' && (
          <Text style={styles.error}>
            {`⚠ ${lg.rates.requiredField}`}
          </Text>
          )}
          {modalChangePassword && errors.newPassword && errors.newPassword.type === 'pattern' && (
          <Text style={styles.error}>
            {`⚠ ${lg.rates.messagePassword}`}
          </Text>
          )}
        </InputLabel>
          )}
      control={control}
      name="newPassword"
      onChange={(args) => args[0].nativeEvent.text}
      rules={{
        required: modalChangePassword,
        pattern: {
          value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30}$/,
        },
      }}
    />

    <Controller
      as={(
        <InputLabel
          errors={errors.confirmPassword}
          focus={confirmPasswordRef}
          label={lg.rates.confirmPassword}
          secureTextEntry
          returnKeyType="done"
        >
          {modalChangePassword && errors.confirmPassword && errors.confirmPassword.type === 'required' && (
          <Text style={styles.error}>
            {`⚠ ${lg.rates.requiredField}`}
          </Text>
          )}
          {modalChangePassword && errors.confirmPassword && (
          <Text style={styles.error}>
            {`⚠ ${lg.rates.difference}`}
          </Text>
          ) }
        </InputLabel>
          )}
      control={control}
      name="confirmPassword"
      onChange={(args) => args[0].nativeEvent.text}
      rules={{
        required: modalChangePassword,
        validate: (value) => value === watch('newPassword'),
      }}
    />

  </View>

);

AccountInfos.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
};

RenderResetPassword.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  errors: PropTypes.objectOf(PropTypes.any).isRequired,
  control: PropTypes.objectOf(PropTypes.any).isRequired,
  watch: PropTypes.func.isRequired,
  newPasswordRef: PropTypes.objectOf(PropTypes.any).isRequired,
  confirmPasswordRef: PropTypes.objectOf(PropTypes.any).isRequired,
  modalChangePassword: PropTypes.bool.isRequired,
};
CheckboxLabel.propTypes = {
  checked: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfos);
