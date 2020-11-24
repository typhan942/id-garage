import React from 'react';
import {
  FlatList, StyleSheet, Text, View, TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Feather } from '@expo/vector-icons';
import allActions from '../../redux/actions';
import CheckboxLarge from '../../assets/generic-components/checkboxLarge';
import colors from '../../assets/css/style-colors';
import MenuTarifs from './menu';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  col: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    width: '70%',
  },
  imageBox: {
    backgroundColor: colors.WhiteDark,
    borderRadius: 23,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingTop: 5,
    fontFamily: 'GothamBook',
    color: colors.wallet,
    fontSize: 13,
  },
  textHeader: {
    fontFamily: 'GothamMedium',
    color: colors.wallet,
    fontSize: 13,
  },
  itemCheck: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 10,
    marginBottom: 5,
    borderRadius: 8,
  },
});

// rEDUX:

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setList: (data) => allActions.tarifsActions.setList(dispatch, data),
  setListIndex: (data) => allActions.tarifsActions.setListIndex(dispatch, data),
});

const Tarifs = (props) => {
  const {
    tarifsReducer, navigation, setList, setListIndex,
  } = props;
  const { list } = tarifsReducer;

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={{ flexDirection: 'column' }}
        data={list.sort((a, b) => a.checked - b.checked).reverse()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <View style={[styles.itemCheck,
            { backgroundColor: item.checked ? colors.white : colors.WhiteDark }]}
          >
            <CheckboxLarge
              checked={item.checked}
              onPress={() => {
                const update = list;
                update[index].checked = !item.checked; setList(update);
              }}
            />
            <View style={styles.col}>
              <Text style={styles.textHeader}>{item.data[0][0].header}</Text>
              { !item.checked ? null : (
                <Text style={styles.text}>
                  { item.text}
                </Text>
              ) }
            </View>
            {!item.checked ? null : (
              <TouchableOpacity style={styles.imageBox} onPress={() => { setListIndex(index); navigation.navigate('Prestation'); }}>
                <Feather name="edit" size={20} color="wallet" />
              </TouchableOpacity>
            )}
          </View>
        )}
      />
      <MenuTarifs navigation={navigation} />
    </View>
  );
};

Tarifs.propTypes = {
  tarifsReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  setList: PropTypes.func.isRequired,
  setListIndex: PropTypes.func.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(Tarifs);
