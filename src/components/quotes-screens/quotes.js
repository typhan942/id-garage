import React, { useState } from 'react';
import {
  StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions,
} from 'react-native';
import { Button } from 'react-native-elements';
import PropTypes from 'prop-types';
import connect from 'react-redux/lib/connect/connect';
import { useForm, Controller } from 'react-hook-form';
import { AntDesign } from '@expo/vector-icons';
import InputLabel from '../../assets/generic-components/inputLabel';
import colors from '../../assets/css/style-colors';

const carBrand = [
  { id: 1, marque: 'Ferrari', active: false },
  { id: 2, marque: 'Peugeot', active: false },
  { id: 3, marque: 'Audi', active: false },
  { id: 4, marque: 'Bmw', active: false },
  { id: 5, marque: 'Porshe', active: false },
  { id: 6, marque: 'Renault', active: false },
  { id: 7, marque: 'Subaru', active: false },
  { id: 8, marque: 'Nissan', active: false },
  { id: 9, marque: 'Volkswagen', active: false },
  { id: 10, marque: 'Opel', active: false },
];

const carModel = [
  { id: 1, model: 'Ferrari monza', active: false },
  { id: 2, model: 'Ferrari 812', active: false },
  { id: 3, model: 'Ferrari 488', active: false },
  { id: 4, model: 'Ferrari portofino', active: false },
  { id: 5, model: 'Ferrari 812 GTS', active: false },
  { id: 6, model: 'Ferrari F8 spider', active: false },
  { id: 7, model: 'Ferrari GTC4', active: false },
  { id: 8, model: 'Ferrari Maranello', active: false },
  { id: 9, model: 'Ferrari 458 ITALIA', active: false },
];

const carMotorisation = [
  { id: 1, motorisation: 'V8 de 441 kW (600 cv)', active: false },
  { id: 2, motorisation: 'Pack 1.6 VTi 120 ch (Essence)', active: false },
  { id: 3, motorisation: 'BMW Série 7 740d 306 ch', active: false },
  { id: 4, motorisation: 'pack 1.6 HDi 112 ch (Diesel)', active: false },
  { id: 5, motorisation: 'Authentique 1.2 16V 75 ch', active: false },
  { id: 6, motorisation: '1.4 MPI GPL 75 ch (GPL)', active: false },
  { id: 7, motorisation: 'Lauréate 1.4 MPI GPL 75 ch (GPL)', active: false },
  { id: 8, motorisation: 'Attraction 1.4 HDi 68 ch' },
  { id: 9, motorisation: ' 1.2 16 V Éco2 75 ch (Essence)' },
  { id: 10, motorisation: 'portes LS 1.2 16v GPLi', active: false },
];

// generate fake data
const prestations = Array.from(new Array(20)).map((_, i) => ({
  id: i + 1,
  label: `préstation ${i + 1}`,
  checked: false,
}));

const screenHeight = Math.round(Dimensions.get('window').height);

// styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WhiteDark,
    padding: 20,
    flex: 1,
    height: screenHeight,
    justifyContent: 'space-between',
  },
  title: {
    color: colors.dark,
    padding: 10,
  },
  boxselectedServices: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 50,
  },
  btnActive: {
    backgroundColor: colors.mediumGreen,
    color: colors.white,
  },
  btnInactive: {
    backgroundColor: colors.veryLightBlue,
    color: colors.dark,
  },

  titleSelection: {
    padding: 10,
    flexGrow: 1,
  },

  btnListScroll: {
    borderRadius: 10,
    backgroundColor: colors.white,
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
  p20: {
    paddingTop: 20,
  },
  btn: {
    backgroundColor: colors.dark,
    borderRadius: 10,
  },
  titleDevis: {
    paddingBottom: 10,
    fontFamily: 'GothamMedium',
    fontSize: 13,
    color: colors.slateGrey,
  },
  p10: {
    padding: 10,
  },
  flexRow: {
    flexDirection: 'row',
  },
  grow1: {
    flexGrow: 1,
  },
  grow4: {
    flexGrow: 4,
  },
  textQuote: {
    padding: 10,
    flexGrow: 1,
  },
  pt20: {
    paddingTop: 20,
  },
  quoteChoice: {
    textAlign: 'center',
    flexGrow: 1,
    fontFamily: 'GothamMedium',
    fontSize: 15,
    color: colors.dark,
  },
});

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({
});

const Quotes = ({ navigation, route, languageReducer }) => {
  // redux
  const lg = languageReducer.language;

  // state
  const [btnImmatriculation, setBtnImmatriculation] = useState(true);
  const [btnModel, setBtnModel] = useState(false);

  // hooks form
  const {
    control, handleSubmit, errors,
  } = useForm({
    defaultValues: {},
  });

  // get API
  const onSubmit = () => {
    navigation.navigate('Summary-Order');
  };

  const carBrandSelection = route.params?.carBrandSelection
    ? route.params.carBrandSelection[0]?.marque : false;
  const carModelSelection = route.params?.carModelSelection
    ? route.params.carModelSelection[0]?.model : false;
  const carMotorisationSelection = route.params?.carMotorisationSelection
    ? route.params.carMotorisationSelection[0]?.motorisation : false;
  const carPrestationSelection = route.params?.selectedUser
    ? route.params.selectedUser : false;

  const disableButton = !(
    (carBrandSelection.length > 0)
      && (carModelSelection.length > 0)
      && (carMotorisationSelection.length > 0)
      && (carPrestationSelection.length > 0));

  return (
    <View style={styles.container}>
      <View>
        <RenderButtons
          btnModel={btnModel}
          setBtnModel={setBtnModel}
          btnImmatriculation={btnImmatriculation}
          setBtnImmatriculation={setBtnImmatriculation}
          lg={lg}
        />
        {btnModel && (
          <>
            <RenderBtnSelectCar
              lg={lg}
              carBrandSelection={carBrandSelection}
              navigation={navigation}
            />

            <RenderBtnSelectModel
              lg={lg}
              carBrandSelection={carBrandSelection}
              carModelSelection={carModelSelection}
              navigation={navigation}
            />

            <RenderBtnSelectMotorisation
              lg={lg}
              carBrandSelection={carBrandSelection}
              carModelSelection={carModelSelection}
              carMotorisationSelection={carMotorisationSelection}
              navigation={navigation}
            />
          </>
        )}
        { btnImmatriculation && (
          <Controller
            as={(
              <InputLabel
                errors={errors.immatriculation}
                label={lg.command.commandToPrint.registration}
                returnKeyType="next"
              >
                {errors.immatriculation && errors.immatriculation.type === 'required' && (
                <Text style={styles.error}>
                  ⚠
                  {lg.rates.requiredField}
                </Text>
                )}
              </InputLabel>
                  )}
            control={control}
            name="immatriculation"
            onChange={(args) => args[0].nativeEvent.text}
            rules={{ required: true }}
          />
        )}

        <RenderBtnSelectedPrestation
          carPrestationSelection={carPrestationSelection}
          navigation={navigation}
          route={route}
          lg={lg}
        />

        <ScrollView style={styles.p20} horizontal>
          { carPrestationSelection && carPrestationSelection.map((item) => (
            <View key={item.id} style={styles.btnListScroll}>
              <Text style={styles.p10}>{item.label}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
      <View style={styles.buttonCus}>
        <Button
          disabled={!btnImmatriculation && disableButton}
              // onPress={() => navigation.navigate('Summary-Order')}
          onPress={handleSubmit(onSubmit)}
          buttonStyle={styles.btn}
          title={lg.quote.next}
        />
      </View>
    </View>
  );
};

const RenderButtons = ({
  lg, btnModel, setBtnModel, btnImmatriculation, setBtnImmatriculation,
}) => (
  <>
    <Text style={styles.titleDevis}>{lg.quote.selectionCar}</Text>

    <View style={styles.flexRow}>

      <View style={styles.grow1}>
        <Button
          onPress={() => { setBtnImmatriculation(!btnImmatriculation); setBtnModel(false); }}
          buttonStyle={btnImmatriculation ? styles.btnActive : styles.btnInactive}
          titleStyle={btnImmatriculation ? styles.btnActive : styles.btnInactive}
          title={lg.command.commandToPrint.registration}
        />
      </View>

      <View style={styles.grow4}>
        <Button
          onPress={() => { setBtnModel(!btnModel); setBtnImmatriculation(false); }}
          buttonStyle={btnModel ? styles.btnActive : styles.btnInactive}
          titleStyle={btnModel ? styles.btnActive : styles.btnInactive}
          title={lg.quote.model}
        />
      </View>
    </View>
  </>
);

const RenderBtnSelectCar = ({ navigation, lg, carBrandSelection }) => (
  <View style={styles.p20}>
    <TouchableOpacity
      style={styles.boxselectedServices}
      onPress={() => navigation.navigate('Select-Car', { carBrand })}
    >
      <Text style={styles.textQuote}>{lg.quote.brand}</Text>
      {carBrandSelection && <Text style={styles.title}>{carBrandSelection}</Text>}
    </TouchableOpacity>
  </View>
);

const RenderBtnSelectModel = ({
  navigation, lg, carBrandSelection, carModelSelection,
}) => (
  <View style={styles.p20}>
    <TouchableOpacity
      disabled={!carBrandSelection.length > 0}
      style={styles.boxselectedServices}
      onPress={() => navigation.navigate('Select-Model', { marqueModel: carModel })}
    >
      <Text style={styles.titleSelection}>{lg.quote.model}</Text>
      {carModelSelection && <Text style={styles.title}>{carModelSelection}</Text>}
      <View>
        {!carBrandSelection && <AntDesign name="lock" size={18} color={colors.black} />}
      </View>
    </TouchableOpacity>
  </View>
);

const RenderBtnSelectMotorisation = ({
  navigation, carBrandSelection, carMotorisationSelection, carModelSelection, lg,
}) => (
  <View style={styles.pt20}>
    <TouchableOpacity
      disabled={!(carBrandSelection && carModelSelection)}
      style={styles.boxselectedServices}
      onPress={() => navigation.navigate('Select-Motorisation', { motorisationModel: carMotorisation })}
    >
      <Text style={styles.titleSelection}>{lg.quote.engine}</Text>
      {carMotorisationSelection && <Text style={styles.title}>{carMotorisationSelection}</Text>}
      <View>
        {!(carBrandSelection && carModelSelection) && <AntDesign name="lock" size={18} color={colors.black} />}
      </View>
    </TouchableOpacity>
  </View>
);

const RenderBtnSelectedPrestation = ({ navigation, lg, carPrestationSelection }) => (
  <View style={styles.pt20}>
    <TouchableOpacity
      style={styles.boxselectedServices}
      onPress={() => navigation.navigate('Select-Services', {
        items: prestations,
        selected: carPrestationSelection,
      })}
    >
      <Text style={styles.quoteChoice}>
        {carPrestationSelection.length > 0 ? `${carPrestationSelection.length} `
            + 'prestations sélectionnées' : lg.quote.choice}
      </Text>
    </TouchableOpacity>
  </View>
);

Quotes.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

RenderButtons.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  btnModel: PropTypes.bool.isRequired,
  setBtnModel: PropTypes.func.isRequired,
  btnImmatriculation: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  setBtnImmatriculation: PropTypes.func.isRequired,
};

RenderBtnSelectCar.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  carBrandSelection: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,

};

RenderBtnSelectModel.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  carBrandSelection: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  carModelSelection: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,

};

RenderBtnSelectMotorisation.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  carBrandSelection: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  carMotorisationSelection: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,
  carModelSelection: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]).isRequired,

};
RenderBtnSelectedPrestation.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  carPrestationSelection: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.any).isRequired,
    PropTypes.bool,
  ]).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
