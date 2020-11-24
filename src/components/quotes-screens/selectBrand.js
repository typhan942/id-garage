import React, { useState } from 'react';
import {
  FlatList, StyleSheet, TouchableOpacity, View,
} from 'react-native';

import {
  CheckBox, Divider, SearchBar, Text,
} from 'react-native-elements';
import PropTypes from 'prop-types';
import connect from 'react-redux/lib/connect/connect';
import LottieView from 'lottie-react-native';
import Button from '../../assets/generic-components/button';
import colors from '../../assets/css/style-colors';
import errorNetwork from '../../assets/animations/errorNetwork.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleGrey,
  },
  m20: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  containerResultFound: {
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
  },
  containerSearchbar: {
    backgroundColor: colors.white,
  },
  inputSearchbar: {
    backgroundColor: colors.white,
  },
  logoAnimated: {
    height: 200,
    width: 200,
  },
  title: {
    flexBasis: '80%',
    fontWeight: 'bold',
  },
  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
});

const RenderItem = ({ item, onPress }) => (
  <>
    <TouchableOpacity onPress={onPress} style={styles.touchableOpacity}>
      <CheckBox
        checkedIcon="circle"
        uncheckedIcon="circle-o"
        checkedColor={colors.mediumGreen}
        containerStyle={{ backgroundColor: colors.transparent }}
        checked={item.active}
        onPress={onPress}
      />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{item.marque}</Text>
    </TouchableOpacity>
    <Divider style={{ backgroundColor: colors.slateGrey }} />
  </>
);

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({
});

const SelectBrand = ({ route, navigation, languageReducer }) => {
  // redux
  const lg = languageReducer.language;

  // params Route
  const { carBrand } = route.params;

  // state
  const [datas, setDatas] = useState(carBrand);
  const [value, setValue] = useState('');

  // copy the state and filter the data
  let clone = [...datas];
  clone = value ? clone.filter((x) => x.marque.includes(value)) : clone;

  const carBrandSelection = datas.filter((y) => y.active === true);

  const selectMarque = (item) => {
    const copyState = [...datas];
    const index = copyState.findIndex((x) => x.id === item.id);
    if (copyState[index].active === false) {
      copyState[index].active = true;
      copyState.filter((x) => x.id !== item.id).forEach((y) => y.active = false);
    }
    setDatas(copyState);
  };

  return (
    <View style={styles.container}>

      <SearchBar
        lightTheme
        containerStyle={styles.containerSearchbar}
        inputContainerStyle={styles.inputSearchbar}
        placeholder={lg.quote.search}
        value={value}
        onChangeText={(text) => setValue(text)}
      />

      {clone.length <= 0 && <RenderResultFound lg={lg} />}

      <FlatList
        refreshing
        data={[...clone]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (<RenderItem item={item} onPress={() => selectMarque(item)} />)}
      />

      <View style={styles.m20}>

        <Button
                // disabled={carBrandSelection.length <= 0}
          onPress={() => navigation.navigate('Quotes', { carBrandSelection })}
          theme="dark"
          title={lg.rates.save}
        />
      </View>

    </View>
  );
};

const RenderResultFound = ({ lg }) => (
  <View style={styles.containerResultFound}>
    <Text h4>{lg.quote.emptySearch}</Text>
    <LottieView style={styles.logoAnimated} source={errorNetwork} autoPlay loop />
  </View>
);

SelectBrand.propTypes = {
  languageReducer: PropTypes.shape().isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

RenderResultFound.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
};

RenderItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  onPress: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectBrand);
