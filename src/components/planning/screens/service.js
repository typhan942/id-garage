import React, { useState } from 'react';
import {
  StyleSheet, Text, View, FlatList, TouchableOpacity,
} from 'react-native';
import {
  SearchBar, CheckBox, Divider,
} from 'react-native-elements';

import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '../../../assets/generic-components/button';
import colors from '../../../assets/css/style-colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleGrey,
  },
  containerNotFound: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleNotFound: {
    color: 'gray',
    fontSize: 18,
  },
  title: {
    flexBasis: '80%',
    fontWeight: 'bold',
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  containerSearchbar: {
    backgroundColor: colors.white,
  },
  inputSearchbar: {
    backgroundColor: colors.white,
  },
  mg10: {
    margin: 10,
  },
});
const datas = [
  { id: 1, title: 'Distribution', active: false },
  { id: 2, title: 'Embraye', active: false },
  { id: 3, title: 'Climatisation', active: false },
  { id: 4, title: 'Filtrer d\'habitable', active: false },
  { id: 5, title: 'Freinage', active: false },
  { id: 6, title: 'Géométrie des trains', active: false },
  { id: 7, title: 'Spécialiste climatisation', active: false },
  { id: 8, title: 'Spécialiste GPL', active: false },
  { id: 9, title: 'Spécialiste électro-diesel', active: false },
  { id: 10, title: 'Spécialiste éléctronique & hybride', active: false },
  { id: 11, title: 'Gonflage à l\'azote', active: false },
  { id: 12, title: 'Dépannage', active: false },
  { id: 13, title: 'Formalités carte grise', active: false },
  { id: 14, title: 'Possibilité de raccompagner le client à son domicile"', active: false },
  { id: 15, title: 'Pré-contrôle technique', active: false },
  { id: 16, title: 'Présentation au contrôle technique', active: false },
  { id: 17, title: 'Démarche déclaration sinistre assurance', active: false },
  { id: 18, title: 'Parking/Stationnement facile', active: false },
  { id: 19, title: 'Spécialiste électro-diesel', active: false },
  { id: 20, title: 'Courroie de distribution', active: false },
  { id: 21, title: 'Espace attente', active: false },
  { id: 22, title: 'Boutique/centre commercial à proximité', active: false },
  { id: 23, title: 'Possibilité de montrer les pièces usagées/changées sur demande', active: false },
  { id: 24, title: 'Espace enfants', active: false },
  { id: 25, title: 'Vente VO-VN', active: false },
  { id: 26, title: 'Montages de pneus', active: false },
];

// components

const RenderItem = ({ item, onPress }) => (
  <>
    <TouchableOpacity onPress={onPress} style={styles.touchable}>
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{item.title}</Text>
      <CheckBox
        uncheckedColor={colors.mediumGreen}
        checkedColor={colors.mediumGreen}
        containerStyle={{ backgroundColor: colors.transparent }}
        checked={item.active}
        onPress={onPress}
      />
    </TouchableOpacity>
    <Divider style={{ backgroundColor: colors.barGrey }} />
  </>
);

const Services = ({ navigation }) => {
  // redux
  const lg = useSelector((state) => state.languageReducer.language);
  // state
  const [prestations, setPrestations] = useState(datas);
  const [choicePrestation, setChoicePrestations] = useState(prestations.filter(
    (item) => item.active === true,
  ));
  const [value, setValue] = useState('');

  // copy the state and filter the data
  let copieStatePrestations = [...prestations];
  copieStatePrestations = value
    ? copieStatePrestations.filter((x) => x.title.includes(value)) : copieStatePrestations;

  // function
  const addPrestation = (item) => {
    const newState = [...prestations];
    const index = newState.findIndex((x) => x.id === item.id);
    if (newState[index].active === false) {
      newState[index].active = true;
    } else {
      newState[index].active = false;
    }
    const filterd = newState.filter((x) => x.active);
    setChoicePrestations(filterd);
    setPrestations(newState);
    setPrestations(newState);
  };

  return (
    <View style={styles.container}>
      <SearchBar
        lightTheme
        containerStyle={styles.containerSearchbar}
        inputContainerStyle={styles.inputSearchbar}
        placeholder={lg.billing.search}
        value={value}
        onChangeText={(text) => setValue(text)}
      />
      { copieStatePrestations.length <= 0
        ? (
          <View style={styles.containerNotFound}>
            <Text style={styles.titleNotFound}>{lg.quote.emptySearch}</Text>
          </View>
        )
        : null}
      <FlatList
        refreshing
        data={[
          ...copieStatePrestations,
        ]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <RenderItem onPress={() => addPrestation(item)} navigation={navigation} item={item} />
        )}
      />
      <View style={styles.mg10}>
        <Button
          theme="dark"
          title={lg.quote.save}
          onPress={() => navigation.navigate('Appointment-Without-Quotation', { selection: choicePrestation })}
        />
      </View>
    </View>
  );
};
Services.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};
RenderItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default Services;
