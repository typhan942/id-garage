import React, {
  memo, useCallback, useState,
} from 'react';
import {
  StyleSheet, Text, View, FlatList,
} from 'react-native';
import { TouchableHighlight } from 'react-native-gesture-handler';
import {
  Divider, SearchBar, Button,
} from 'react-native-elements';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import colors from '../css/style-colors';
import CheckBox from './checkbox';

// styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.paleGrey,
  },
  titleList: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  containerButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: colors.WhiteDark,
  },
  containerCheckbox: {
    backgroundColor: 'transparent',
  },
  divider: {
    backgroundColor: colors.barGrey,
  },
  title: {
    flexBasis: '80%',
    fontFamily: 'GothamMedium',
    fontSize: 14,
  },
  containerSearchbar: {
    backgroundColor: colors.white,
  },
  inputSearchbar: {
    backgroundColor: colors.white,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  result: {
    fontSize: 20,
    color: colors.black,
  },
});

const MultipleSelectList = ({ route, navigation }) => {
  const lg = useSelector((state) => state.languageReducer.language);

  /* 2. Get the param navigation */
  const { items, selected } = route.params;
  // selects the key of the object
  const keysItem = items.length > 0 ? Object.keys(items[0])[1] : '';

  // state
  const [value, setValue] = useState('');
  const [datas, setDatas] = useState(items);

  // copy the state and filter the data
  const filtered = value ? datas.filter((x) => x[keysItem].includes(value)) : datas;

  // retrieve the user selection
  const selectedUser = datas.filter((x) => x.checked);

  // checks whether the user has changed his or her data
  const compareDatas = JSON.stringify(selected) === JSON.stringify(selectedUser);

  const checkItems = useCallback((item) => {
    const { id } = item;
    // copies the state
    const copy = [...datas];
    const index = copy.findIndex((x) => x.id === id);
    copy[index].checked = copy[index].checked === false;
    setDatas(copy);
  }, []);

  return (
    <View style={styles.container}>
      <RenderSearchBar
        onChangeText={(text) => setValue(text)}
        value={value}
        setValue={value}
        lg={lg}
      />
      {filtered.length > 0
        ? (
          <RenderList
            lg={lg}
            filtered={filtered}
            keysItem={keysItem}
            datas={datas}
            checkItems={checkItems}
          />
        )
        : <RenderNoResult lg={lg} />}

      <RenderButton
        lg={lg}
        compareDatas={compareDatas}
        selectedUser={selectedUser}
        navigation={navigation}
      />
    </View>
  );
};

// components
const RenderSearchBar = ({ value, onChangeText, lg }) => (
  <SearchBar
    lightTheme
    containerStyle={styles.containerSearchbar}
    inputContainerStyle={styles.inputSearchbar}
    placeholder={lg.billing.search}
    value={value}
    onChangeText={onChangeText}
  />
);

const RenderList = memo(({
  filtered, keysItem, onPress, checkItems,
}) => (
  <FlatList
    refreshing
    data={[...filtered]}
    keyExtractor={(item, index) => index.toString()}
    renderItem={({ item }) => (
      <RenderItem
        keysItem={keysItem}
        checked={item.checked}
        item={item}
        onPress={onPress}
        checkItems={checkItems}
      />
    )}
  />
));

RenderList.displayName = 'RenderList';

const RenderItem = memo(({
  item, keysItem, checked, checkItems,
}) => (
  <>
    <TouchableHighlight
      style={styles.titleList}
      activeOpacity={0.6}
      underlayColor={colors.transparentBlack}
      onPress={() => checkItems(item)}
    >
      <>
        <CheckBox checked={checked} />
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>{item[keysItem]}</Text>
      </>
    </TouchableHighlight>
    <Divider style={styles.divider} />
  </>
));

RenderItem.displayName = 'RenderItem';

const RenderButton = ({
  navigation, selectedUser, compareDatas, lg,
}) => (
  <View style={styles.containerButton}>
    <View style={{
      margin: 10, width: '100%', paddingLeft: 15, paddingRight: 15,
    }}
    >
      <Button
        buttonStyle={{ backgroundColor: colors.dark, borderRadius: 5 }}
        disabled={compareDatas}
        title={lg.quote.save}
        onPress={() => navigation.navigate('Quotes', { selectedUser })}
      />
    </View>
  </View>
);

const RenderNoResult = ({ lg }) => (
  <View style={styles.center}>
    <Text style={styles.result}>
      {lg.quote.emptySearch}
      :(
    </Text>
  </View>
);

RenderButton.propTypes = {
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  selectedUser: PropTypes.arrayOf(PropTypes.any).isRequired,
  compareDatas: PropTypes.bool.isRequired,
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
};

RenderNoResult.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
};

RenderItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  keysItem: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  checkItems: PropTypes.func.isRequired,
};

RenderList.propTypes = {
  filtered: PropTypes.arrayOf(PropTypes.any).isRequired,
  keysItem: PropTypes.string.isRequired,
  checkItems: PropTypes.func.isRequired,
  onPress: PropTypes.func.isRequired,
};

RenderSearchBar.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
};

MultipleSelectList.propTypes = {
  items: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default MultipleSelectList;
