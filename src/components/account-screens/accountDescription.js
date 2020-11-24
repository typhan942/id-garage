import React, { useState } from 'react';
import {
  Modal, Platform, SafeAreaView,
  ScrollView, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import PropTypes from 'prop-types';
import connect from 'react-redux/lib/connect/connect';
import { Controller, useForm } from 'react-hook-form';
import { AntDesign } from '@expo/vector-icons';
import Title from '../../assets/generic-components/title';
import colors from '../../assets/css/style-colors';
import InputArea from '../../assets/generic-components/inputArea';
import Button from '../../assets/generic-components/button';
import Picker from '../../assets/generic-components/picker';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleGrey,
    padding: 20,
  },
  modalContainer: {
    flex: 1,
  },
  boxTitle: {
    paddingTop: 30,
    paddingBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'GothamBold',
    fontSize: 18,
  },
  flexGrow: {
    flexGrow: 1,
  },
  title: {
    fontSize: 13,
    fontFamily: 'GothamMedium',
    color: colors.mediumGreen,
    paddingRight: 10,
    textDecorationLine: 'underline',
  },
  m20: {
    margin: 20,
  },
  center: {
    alignItems: 'center',
  },
  ghostContainer: {
    flexGrow: 1,
    backgroundColor: colors.transparentBlack,
  },
  btnClose: {
    alignItems: 'flex-end',
    padding: 10,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  wrapperModal: {
    flexGrow: 2,
    backgroundColor: colors.white,
    padding: 20,
  },
  lineH: {
    borderTopColor: colors.WhiteDark,
    borderTopWidth: 1,
    marginTop: 30,
  },
  footer: {
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginLeft: -20,
    marginRight: -20,
    paddingTop: 10,
    paddingBottom: 40,
    borderTopWidth: 1,
    borderTopColor: colors.WhiteDark,
  },
});

const datas = [{ label: 'SPEEDOTO', value: 'Speedoto' }, { label: 'AUTO HAMON DAVID', value: 'AutoHamonDavid' },
  { label: 'GARAGE VAILLANT', value: 'GarageVaillant' }, { label: 'AD GARAGES', value: 'AdGarages' }];

const aideDescription = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, beatae';

const aideEnseigne = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam aspernatur blanditiis consectetur culpa cum cupiditate dicta dolor dolore doloremque ea error et eveniet, fuga id impedit incidunt iusto laudantium magni minus mollitia nemo neque nulla officia officiis optio pariatur provident, quas quia quibusdam ratione sint soluta temporibus unde !voluptatem';

const aideEngagement = 'Indiquez ici les engagements spécifiques à votre garage.Voici quelques exemples à personnaliser\n'
    + 'Nous sommes engagés dans une démarche de recyclage de toutes les pièces usées…\n'
    + 'Nous garantissons nos interventions X ans pièces et main d’œuvre…\n'
    + 'Chaque année, nous formons X jeunes au métier de…\n'
    + 'Notre équipement technique est contrôlé chaque année et renouvelé en moyenne tous les X ans…\n'
    + 'Nous nous engageons à nettoyer votre véhicule intérieur/extérieur…\n'
    + 'Nous nous engageons à nettoyer votre pare-brise';

const aidePointsForts = 'Voici quelques idées à personnaliser, utiles pour mettre en avant votre garage\n'
    + 'Notre garage est situé à proximité de … (rue / place / route / magasin / arrêt de bus, métro, tramway)\n'
    + 'Notre équipe est composée de techniciens expérimentés…\n'
    + 'Nous sommes à votre service depuis 19XX / XX ans…\n'
    + 'Notre garage accueille toutes les marques de véhicules…\n'
    + 'Nos techniciens sont formés et équipés pour intervenir sur tous types de véhicules…';

// components
const BoxTitle = ({ title, lg, onPress }) => (
  <View style={styles.boxTitle}>
    <View style={styles.flexGrow}>
      <Title text={title} />
    </View>
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.title}>
        {lg.rates.help}
      </Text>
    </TouchableOpacity>
  </View>
);

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({});

const AccountDescription = (props) => {
  // redux
  const { languageReducer } = props;
  const lg = languageReducer.language;
  // state
  const [modalActive, setModalActive] = useState({ active: false, text: '' });

  const {
    control, handleSubmit,
  } = useForm({
    defaultValues: {
      address: 'Votre garage accueille toutes les marques de véhicules.Rendez-vous proche et réparation rapide.',
      commitment: 'Service de qualité',
    },
  });

  const onSubmit = (data) => data;

  const activeModal = (text) => {
    setModalActive({ active: true, text });
  };

  return (
    <>
      <RenderModal modalActive={modalActive} setModalActive={setModalActive} />

      <ScrollView style={styles.container}>

        <BoxTitle
          onPress={() => activeModal(aideDescription)}
          title={lg.rates.garageAddress}
          lg={lg}
        />
        <View>

          <InputArea
            lang={lg.langCode}
            index={1}
            returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
          />
        </View>

        <View style={styles.lineH}>
          <BoxTitle
            onPress={() => activeModal(aideEnseigne)}
            lg={lg}
            title={lg.rates.learn}
          />

          <Controller
            as={(<Picker items={datas} onChange={(args) => args[0].nativeEvent.text} />)}
            control={control}
            name="country"
            rules={{ required: true }}
          />
        </View>

        <View style={styles.lineH}>
          <BoxTitle
            onPress={() => activeModal(aideEngagement)}
            lg={lg}
            title={lg.rates.commitments}
          />

          <View>
            <InputArea
              lang={lg.langCode}
              index={2}
              returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
            />
          </View>
        </View>

        <View style={styles.lineH}>
          <BoxTitle
            onPress={() => activeModal(aidePointsForts)}
            lg={lg}
            title={lg.account.yourStrongPoints}
          />

          <View>
            <InputArea
              lang={lg.langCode}
              index={1}
              returnKeyType={Platform.OS === 'ios' ? 'done' : 'next'}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Button
            title={lg.rates.save}
            theme="dark"
            large={340}
            onPress={handleSubmit(onSubmit)}
          />
        </View>

      </ScrollView>
    </>
  );
};

const RenderModal = ({ setModalActive, modalActive }) => (
  <Modal
    transparent
    animationType="slide"
    visible={modalActive.active}
  >
    <SafeAreaView style={styles.modalContainer}>
      <View style={styles.modalContainer}>
        <View style={styles.wrapperModal}>
          <TouchableOpacity onPress={() => setModalActive({ active: false, text: '' })} style={styles.btnClose}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <View style={styles.content}>
            <Text>{modalActive.text}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.ghostContainer} />
      </View>
    </SafeAreaView>
  </Modal>
);

AccountDescription.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
};

RenderModal.propTypes = {
  setModalActive: PropTypes.func.isRequired,
  modalActive: PropTypes.objectOf(PropTypes.any).isRequired,
};

BoxTitle.propTypes = {
  title: PropTypes.string.isRequired,
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  onPress: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(AccountDescription);
