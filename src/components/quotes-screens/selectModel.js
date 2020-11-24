import React, { useState } from 'react';
import {
  FlatList, StyleSheet, Text, TouchableOpacity, View,
} from 'react-native';
import {
  CheckBox, Divider, SearchBar,
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
    margin: 20,
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
  touchableOpacity: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    flexBasis: '80%',
    fontWeight: 'bold',
  },
  logoAnimated: {
    height: 200,
    width: 200,
  },
});
const RenderItem = ({ item, onPress }) => (
  <>

    <TouchableOpacity onPress={onPress} style={styles.touchableOpacity}>

      <CheckBox
        checkedIcon="circle"
        uncheckedIcon="circle-o"
        checkedColor={colors.mediumGreen}
        containerStyle={{ backgroundColor: 'transparent' }}
        checked={item.active}
        onPress={onPress}
      />
      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{item.model}</Text>

    </TouchableOpacity>
    <Divider style={{ backgroundColor: colors.slateGrey }} />
  </>
);
const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = () => ({
});

const SelectModel = ({ route, navigation, languageReducer }) => {
  // redux
  const lg = languageReducer.language;

  // params Route
  const { marqueModel } = route.params;

  // state
  const [datas, setDatas] = useState(marqueModel);
  const [value, setValue] = useState('');

  // copy the state and filter the data
  let clone = [...datas];
  clone = value ? clone.filter((x) => x.model.includes(value)) : clone;

  const carModelSelection = datas.filter((y) => y.active === true);

  const selectModel = (item) => {
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
        renderItem={({ item }) => (<RenderItem onPress={() => selectModel(item)} item={item} />)}
      />

      <View style={styles.m20}>
        <Button
          onPress={() => navigation.navigate('Quotes', { carModelSelection })}
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

RenderResultFound.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
};

RenderItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  onPress: PropTypes.func.isRequired,
};

SelectModel.propTypes = {
  languageReducer: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(SelectModel);
