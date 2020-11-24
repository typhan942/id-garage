import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Dimensions, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import allActions from '../../redux/actions';
import CheckboxLarge from '../../assets/generic-components/checkboxLarge';
import colors from '../../assets/css/style-colors';

import Button from '../../assets/generic-components/button';
import { namesList } from '../../assets/api-data/nameList';
import Picker from '../../assets/generic-components/picker';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: Dimensions.get('window').width,
  },
  main: {
    width: Dimensions.get('window').width,
  },
  row: {
    flexWrap: 'nowrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: Dimensions.get('window').width,
    padding: 10,
  },
  lineH: {
    marginTop: 20,
    borderTopWidth: 0.5,
    borderTopColor: colors.WhiteDark,
  },
  buttonPlus: {
    fontSize: 26,
    color: colors.dark,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    fontFamily: 'GothamMedium',
    paddingTop: 25,
    fontSize: 18,
  },
  title: {
    fontWeight: 'bold',
    paddingLeft: 10,
  },
  lineText: { padding: 5, fontSize: 12 },
  titleBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 3,
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  body: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    width: '100%',
    borderTopColor: colors.veryPaleGrey,
    borderTopWidth: 1,
  },
  inputBox: {
    width: Dimensions.get('window').width * 0.9,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 10,
    height: 40,
    borderRadius: 8,
    backgroundColor: colors.paleGrey,
  },
  priceBox: {
    width: '25%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    height: 40,
    borderLeftColor: colors.WhiteDark,
    borderLeftWidth: 1,
    backgroundColor: colors.paleGrey,
  },
  priceText: {
    color: colors.lightGreyBlue,
    fontSize: 13,
    fontFamily: 'GothamMedium',
  },
  footer: {
    height: 60,
    borderTopWidth: 1,
    borderTopColor: colors.WhiteDark,
    backgroundColor: colors.paleGrey,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    width: Dimensions.get('window').width,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.veryLightBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  link: {
    color: colors.mediumGreen,
    textDecorationLine: 'underline',
    fontFamily: 'GothamMedium',
    fontSize: 13,
    paddingTop: 20,
    paddingRight: 20,
  },
  column: {
    justifyContent: 'space-between',
    width: Dimensions.get('window').width * 0.8,
    paddingLeft: 12,
  },
  textB: {
    fontFamily: 'GothamBook',
    fontSize: 13,
    color: colors.black,
  },
  bgWhite: {
    backgroundColor: colors.white,
  },
  p10: {
    padding: 10,
  },
  fullW: {
    width: 394,
    marginTop: -9,
  },
  input: {
    height: 36,
    padding: 10,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
    fontSize: 18,
    borderWidth: 1,
    borderRadius: 10,
  },
});

const DownArrowIcon = () => (
  <AntDesign
    name="down"
    size={14}
    color={colors.slateGrey}
  />
);
const range = (N) => {
  const set = [];
  for (let i = 0; i < N; i++) {
    set.push({ label: `${i * 5}%`, value: `${i * 5}%` });
  }
  return set;
};

// rEDUX:

const mapStateToProps = (state) => ({
  ...state,
});
const mapDispatchToProps = (dispatch) => ({
  setList: (string) => allActions.tarifsActions.setList(dispatch, string),
});

//

const Prestation = (props) => {
  const {
    languageReducer, tarifsReducer, setList, navigation,
  } = props;
  const { list } = tarifsReducer;
  const index = tarifsReducer.listIndex;
  const lg = languageReducer.language;

  // const handleCheckbox = (field) => {
  //   const update = list; update[index][field] = !list[index][field]; setList(update);
  // };

  const handleInputValue = (field, value) => {
    const update = list;
    update[index][field] = value;
    setList(update);
  };

  const handleSubmit = () => {
    // to do -- dynamisation
  };

  const Input = ({
    title, dropdown, droplist, onSelect, value, unit,
  }) => {
    const [val, setVal] = useState(value);
    return (
      <View>
        {title ? (
          <View style={styles.row}>
            <Text>{title}</Text>
          </View>
        ) : null }
        <View style={styles.row}>
          {dropdown ? (
            <View style={styles.inputBox}>
              <Picker
                items={droplist}
                onChange={(item) => {
                  setVal(item);
                  handleInputValue(onSelect, item);
                }}
                bgGray
                placeholder={{ label: val, value: val }}
              />
              <DownArrowIcon />
            </View>
          ) : (
            <View style={styles.inputBox}>
              <TextInput
                value={list[index][onSelect]}
                onChangeText={(e) => {
                  if (Number.isInteger(Number(e))) { setVal(e); }
                  handleInputValue(onSelect, e);
                }}
              />
              <View style={styles.priceBox}>
                <Text style={styles.priceText}>{unit}</Text>
              </View>
            </View>
          ) }
        </View>
      </View>
    );
  };
  Input.propTypes = {
    title: PropTypes.string,
    value: PropTypes.string || PropTypes.number,
    unit: PropTypes.string,
    droplist: PropTypes.arrayOf(PropTypes.any),
    dropdown: PropTypes.bool,
    onSelect: PropTypes.string.isRequired,
  };
  Input.defaultProps = {
    title: '',
    value: '',
    unit: '',
    dropdown: false,
    droplist: [],
  };

  const Title = ({ header, help }) => (
    <View style={styles.row}>
      <Text style={styles.header}>
        {header}
      </Text>
      { help && <Text style={styles.link}>{lg.header.help}</Text> }
    </View>
  );
  Title.propTypes = {
    header: PropTypes.string,
    help: PropTypes.bool,
  };
  Title.defaultProps = {
    header: '',
    help: false,
  };

  const Accordion = ({ data }) => {
    const [display, setDisplay] = useState(false);

    return (

      <View>

        { data.map((item, i) => (
          <View key={`card_${i}`}>
            <View style={styles.titleBox}>
              <Text style={styles.title}>
                {item.header}
              </Text>
              <TouchableOpacity
                style={styles.circle}
                onPress={() => setDisplay(!display)}
              >
                { display ? (<Text style={styles.buttonPlus}>-</Text>)
                  : (<Text style={styles.buttonPlus}>+</Text>)}
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              {display && (
              <View style={[styles.column, styles.bgWhite, styles.fullW]}>
                {item.list.map((line, j) => (
                  <Text key={`${j}-drop-item`} style={styles.lineText}>
                    {line}
                  </Text>
                ))}
              </View>
              )}
            </View>
          </View>
        )) }

      </View>
    );
  };
  Accordion.propTypes = {
    data: PropTypes.arrayOf(PropTypes.any).isRequired,
  };

  // hTML:

  const [preference, setPreference] = useState(true);

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView style={styles.main}>
        <View style={styles.body}>
          <View style={[styles.bgWhite, styles.p10]}>
            <View style={styles.row}>
              <CheckboxLarge
                checked={preference}
                onPress={() => setPreference(!preference)}
              />
              <View style={styles.column}>
                <Text style={styles.textB}>{lg.rates.service}</Text>
                <Text style={styles.link} onClick={() => {}}>{lg.rates.help}</Text>
              </View>
            </View>

            <View style={styles.row}>
              <CheckboxLarge
                checked={!preference}
                onPress={() => setPreference(!preference)}
              />
              <View style={styles.column}>
                <Text style={styles.textB}>{lg.rates.internet}</Text>
                <Text style={styles.link} onClick={() => {}}>{lg.rates.help}</Text>
              </View>
            </View>
          </View>

          <View style={styles.bgGray}>
            <Title header={lg.rates.prestation} />
            {list[index].data.map((item, i) => <Accordion key={`accordion-${i}`} data={item} />)}
          </View>

          <View style={[styles.bgWhite, styles.p10]}>
            <Title header={lg.rates.equipment} />
            <Input dropdown droplist={namesList} title={lg.rates.equipmentTitle} onSelect="equipementier" value={list[index].equipementier} />

            <View style={styles.lineH}>
              <Title header={lg.rates.adjust} help />
              <Input style={styles.input} title={lg.rates.piece} dropdown droplist={range(10)} onSelect="tarifAdjust" value={list[index].tarifAdjust} />
            </View>

            <View style={styles.lineH}>
              <Title header={lg.rates.level} />
              <Input title={lg.rates.oil} onSelect="oilLevel1" value={list[index].oilLevel1} unit="€HT/litre" />
              <Input title={lg.rates.oil} onSelect="oilLevel2" value={list[index].oilLevel2} unit="€HT/litre" />
            </View>
            <View style={styles.lineH}>
              <Title header={lg.rates.forfaitPres} help />
              <Input title={lg.rates.forfaitLiquide} onSelect="forfait1" value={list[index].forfait1} unit="€HT" />
              <Input title={lg.rates.forfaitClean} onSelect="forfait2" value={list[index].forfait2} unit="€HT" />
            </View>
            <View style={styles.lineH}>
              <Title header={lg.rates.try} help />
              <Input onSelect="essai" value={list[index].essai} unit="€HT" />
            </View>
          </View>

        </View>
        <View style={styles.footer}>
          <Button
            large={Dimensions.get('window').width * 0.4}
            theme="dark"
            title={lg.commandMobile.save}
            onPress={() => handleSubmit()}
          />
          <Button
            large={Dimensions.get('window').width * 0.4}
            theme="lignt"
            title={lg.commandMobile.cancel}
            onPress={() => navigation.goBack()}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

Prestation.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  tarifsReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  setList: PropTypes.func.isRequired,
};

Prestation.defaultProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Prestation);
