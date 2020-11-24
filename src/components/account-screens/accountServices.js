import React, { useState } from 'react';
import {
  Platform, ScrollView, StyleSheet, View,
} from 'react-native';
import PropTypes from 'prop-types';
import connect from 'react-redux/lib/connect/connect';
import Title from '../../assets/generic-components/title';
import InputArea from '../../assets/generic-components/inputArea';
import Button from '../../assets/generic-components/button';
import colors from '../../assets/css/style-colors';
import CheckBox from '../../assets/generic-components/checkbox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleGrey,
  },
  boxTitle: {
    marginLeft: 10,
    paddingTop: 30,
    paddingBottom: 10,
  },
  m20: {
    margin: 20,
  },
  line: {
    borderTopWidth: 1,
    borderTopColor: colors.WhiteDark,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
  },
});

const serviceCertifications = [
  { id: 1, title: 'Certifié climatisation', active: false },
  { id: 2, title: 'Gestion moteur Essence/Diesel', active: false },
  { id: 3, title: 'Carrosserie (peinture et réparation)', active: false },
  { id: 4, title: 'Réparation et rénovation plastique', active: false },
  { id: 5, title: 'Diagnostic électronique', active: false },
  { id: 6, title: 'Géométrie des trains', active: false },
  { id: 7, title: 'Spécialiste climatisation', active: false },
  { id: 8, title: 'Spécialiste GPL', active: false },
  { id: 9, title: 'Spécialiste électro-diesel', active: false },
  { id: 10, title: 'Spécialiste éléctronique & hybride', active: false },
];

const servicesPlus = [
  { id: 1, title: 'Transport en commun à proximité', active: false },
  { id: 2, title: 'Dépannage', active: false },
  { id: 3, title: 'Formalités carte grise', active: false },
  { id: 4, title: 'Possibilité de raccompagner le client à son domicile"', active: false },
  { id: 5, title: 'Pré-contrôle technique', active: false },
  { id: 6, title: 'Présentation au contrôle technique', active: false },
  { id: 7, title: 'Démarche déclaration sinistre assurance', active: false },
  { id: 8, title: 'Parking/Stationnement facile', active: false },
  { id: 9, title: 'Spécialiste électro-diesel', active: false },
  { id: 10, title: 'Wifi pour les clients', active: false },
  { id: 11, title: 'Espace attente', active: false },
  { id: 12, title: 'Boutique/centre commercial à proximité', active: false },
  { id: 13, title: 'Possibilité de montrer les pièces usagées/changées sur demande', active: false },
  { id: 14, title: 'Espace enfants', active: false },
  { id: 15, title: 'Vente VO-VN', active: false },
  { id: 16, title: 'Montages de pneus', active: false },
];
const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({
});

// components
const RenderCheckbox = ({ item, onPress }) => {
  const { title, active } = item;
  return (
    <CheckBox
      label={title}
      labelColor={colors.black}
      checked={active}
      onPress={onPress}
    />
  );
};

RenderCheckbox.propTypes = {
  item: { title: PropTypes.string, active: PropTypes.bool }.isRequired,
  onPress: PropTypes.func.isRequired,
};

const AccountServices = (props) => {
  // redux
  const { languageReducer } = props;
  const lg = languageReducer.language;

  const [datasServiceCertifications,
    setDatasServiceCertifications] = useState(serviceCertifications);
  const [datasServicePlus, setDatasServicePlus] = useState(servicesPlus);

  const addPrestation = (item, array, fn) => {
    const newState = [...array];
    const index = newState.findIndex((x) => x.id === item.id);
    newState[index].active = !newState[index].active;
    fn(newState);
  };

  const selectedPrestations = () => {
    const selectCertificationsServices = datasServiceCertifications.filter(
      (value) => value.active === true,
    );
    const selectServicesPlus = datasServicePlus.filter((value) => value.active === true);
    return [{
      serviceCertifications: selectCertificationsServices,
      servicesPlus: selectServicesPlus,
    }];
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.boxTitle}><Title text={lg.account.serviceSertification} /></View>
      {datasServiceCertifications && datasServiceCertifications.map((item, i) => (
        <View key={i}>
          <RenderCheckbox
            onPress={() => addPrestation(item,
              datasServiceCertifications, setDatasServiceCertifications)}
            item={item}
          />
        </View>
      ))}
      <View style={styles.m20}>
        <InputArea
          lang={lg.langCode}
          index={1}
          returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
        />
      </View>
      <View style={styles.line} />
      <View style={styles.boxTitle}><Title text={lg.account.servicePlus} /></View>
      {datasServicePlus && datasServicePlus.map((item, i) => (
        <View key={i}>
          <RenderCheckbox
            onPress={() => addPrestation(item, datasServicePlus, setDatasServicePlus)}
            item={item}
          />
        </View>
      ))}
      <View style={styles.m20}>
        <InputArea
          lang={lg.langCode}
          index={1}
          returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
        />
      </View>
      <View style={styles.m20}>
        <Button onPress={() => selectedPrestations()} theme="dark" title={lg.rates.save} />
      </View>
    </ScrollView>
  );
};

AccountServices.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountServices);
