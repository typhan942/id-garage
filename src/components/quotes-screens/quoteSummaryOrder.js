import React, { useState } from 'react';
import {
  Image, ScrollView, StyleSheet, Text, View,
} from 'react-native';

import connect from 'react-redux/lib/connect/connect';
import PropTypes from 'prop-types';
import Cell from '../../assets/generic-components/cell';
import colors from '../../assets/css/style-colors';
import GroupItem from './groupItem';
import Button from '../../assets/generic-components/button';
import OverlayModal from '../../assets/generic-components/overlayModal';
import useToogle from '../../hooks/useToogle';
import IconGreenCar from '../../assets/images/command/greenCar.png';
import IconCalc from '../../assets/images/Total.png';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.paleGrey,
    padding: 10,
    flex: 1,

  },
  containerIntro: {
    backgroundColor: colors.WhiteDark,
    height: 151,
    justifyContent: 'space-evenly',
    padding: 10,
    borderRadius: 5,
  },
  boxLogo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'GothamMedium',
    color: colors.dark,
    fontSize: 16,
    paddingLeft: 10,
  },
  titleSub: {
    fontFamily: 'GothamMedium',
    color: colors.dark,
    fontSize: 14,
  },
  textBook: {
    fontFamily: 'GothamBook',
    color: colors.dark,
    fontSize: 14,
  },
  containerTable: {
    backgroundColor: colors.white,
    padding: 20,
    marginTop: 20,
    marginBottom: 10,
    borderRadius: 5,
    shadowColor: colors.transparentBlack,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.30,

    elevation: 13,

  },
  TableTilte: {
    fontFamily: 'GothamBold',
    paddingTop: 7,
    paddingLeft: 10,
    fontSize: 13,
    color: colors.dark,
    textTransform: 'uppercase',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  boxBtn: {
    flexDirection: 'row',
    marginTop: 40,
  },
  btnGroup: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.WhiteDark,
    backgroundColor: colors.paleGrey,
    padding: 10,
  },
  boxTable: {
    flexDirection: 'row',
    margin: 10,
    alignItems: 'center',
  },
  iconImg: {
    width: 12,
    height: 18,
  },
  iconImgCar: {
    width: 18,
    height: 17,
  },
  mt15: {
    marginTop: 15,
  },
});

const api = [
  {
    id: 1, name: 'Filtre Habitacle (pièces)Référence  : AHC191 premium', image: 'https://lh3.googleusercontent.com/ZMKlrsSsbJ29N5qM-16yKSEO9WbNjjs9sO41HkRPlf3AyKELGHVaTrLPIe2VaUcT4CE', price: '200',
  },
  {
    id: 2, name: 'Filtre Habitacle (pièces)Référence  : AHC191 premium', image: 'https://images-na.ssl-images-amazon.com/images/I/41ce%2BDkE8uL._AC_.jpg', price: '200',
  },
  {
    id: 3, name: 'Filtre Habitacle (pièces)Référence  : AHC191 premium', image: 'https://lh3.googleusercontent.com/ZMKlrsSsbJ29N5qM-16yKSEO9WbNjjs9sO41HkRPlf3AyKELGHVaTrLPIe2VaUcT4CE', price: '200',
  },
  { id: 4, name: 'Filtre Habitacle (pièces)Référence  : AHC191 premium', image: '' },
  {
    id: 5, name: 'Filtre Habitacle (pièces)Référence  : AHC191 premium', image: 'https://lh3.googleusercontent.com/ZMKlrsSsbJ29N5qM-16yKSEO9WbNjjs9sO41HkRPlf3AyKELGHVaTrLPIe2VaUcT4CE', price: '200',
  },
];

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({});

const QuoteSummaryOrder = (props) => {
  // redux
  const { languageReducer, navigation } = props;
  const lg = languageReducer.language;

  const [datas] = useState(api);
  const [modalActive, setModalActive] = useToogle();

  return (
    <>
      <OverlayModal closeModal={setModalActive} isActive={modalActive}>
        <View style={styles.content}>
          <Text>{lg.rates.changeBackup}</Text>
          <View style={styles.boxBtn}>
            <Button
              onPress={() => { navigation.navigate('Quotes'); setModalActive(); }}
              theme="dark"
              title={lg.planning.modification.confirm}
            />
            <Button onPress={setModalActive} theme="light" title={lg.planning.modification.cancel} />
          </View>
        </View>
      </OverlayModal>

      <>
        <ScrollView style={styles.container}>
          <RenderIntro lg={lg} />
          <RenderTable lg={lg} />
          {datas.map((item) => (<View key={item.id}><GroupItem item={item} /></View>))}
        </ScrollView>

        <View style={styles.btnGroup}>

          <Button
            onPress={setModalActive}
            theme="light"
            title={lg.signOut.cancel}
          />

          <Button
            onPress={() => navigation.navigate('Go-To')}
            theme="dark"
            title={lg.quote.makeAppointment}
          />
        </View>
      </>
    </>
  );
};

const RenderIntro = ({ lg }) => (
  <View style={styles.containerIntro}>
    <View style={styles.boxLogo}>
      <Image
        resizeMode="stretch"
        style={styles.iconImgCar}
        source={IconGreenCar}
      />
      <Text style={styles.title}>{lg.devis.intermediateRevision}</Text>
    </View>
    <Text style={styles.titleSub}>Audi A3 SPORTBACK</Text>
    <Text style={styles.textBook}>Mini type : ujdklncnks</Text>
    <Text style={styles.textBook}>Code moteur : LKJGH</Text>
    <Text style={styles.textBook}>
      {lg.quote.fuel}
      {' '}
      : essence
    </Text>
  </View>
);

export const RenderTable = ({ lg }) => (
  <View style={styles.containerTable}>
    <View style={styles.boxTable}>
      <Image
        resizeMode="stretch"
        style={styles.iconImg}
        source={IconCalc}
      />
      <Text style={styles.TableTilte}>{lg.devis.total}</Text>
    </View>
    <Cell divider title={lg.devis.TotalExcludingDiscount} price="215,08" />
    <Cell divider title={lg.devis.totalDiscountWithcoupon} price="71,84" />
    <Cell divider title={lg.billing.commission.total} price="143,25" />
    <Cell divider title="TVA €" price="43,25" />
    <View style={styles.mt15}>
      <Cell bold title={lg.command.commandToPrint.billingTTC} price="171,89" />
    </View>
    <Cell title={lg.devis.amounToBeInvoiced} price="171,89" />
    <Cell red price="-15,00 TTC" title="Code Promo TOP15" />
  </View>
);

QuoteSummaryOrder.propTypes = {
  languageReducer: PropTypes.shape().isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,

};

RenderTable.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
};

RenderIntro.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(QuoteSummaryOrder);
