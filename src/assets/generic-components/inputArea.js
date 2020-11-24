import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';
import {
  StyleSheet, Text, TextInput, TouchableOpacity, View,
} from 'react-native';
import colors from '../css/style-colors';
import allActions from '../../redux/actions';

const styles = StyleSheet.create({
  input: {
    flexDirection: 'column',
    backgroundColor: colors.white,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    color: colors.slateGrey,
    fontSize: 14,
    fontFamily: 'GothamBook',
    padding: 10,
  },
  right: {
    backgroundColor: colors.white,
    alignItems: 'flex-end',
  },
  textRight: {
    fontSize: 14,
    color: colors.slateGrey,
    padding: 10,
  },
  linkActive: {
    textDecorationLine: 'underline',
    textDecorationStyle: 'solid',
    textDecorationColor: colors.mediumGreen,
  },
  link: {
    margin: 10,
    fontSize: 13,
    color: colors.dark,
  },
  wrapper: {
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
});

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setLangAccount: (data) => allActions.languageActions.setLangAccount(dispatch, data),
});
const InputArea = ({
  placeholder, returnKeyType, setLangAccount, lang, index,
}) => {
  const descriptions = useSelector((state) => state.languageReducer.langAccount);
  const [language, setLanguage] = useState(lang);
  useEffect(() => {
    setLanguage(lang);
  }, [lang]);

  const selectedValueLanguage = (i) => {
    let obj;
    if (language === 'fr') {
      obj = descriptions[i].fr;
    } if (language === 'nl') {
      obj = descriptions[i].nl;
    }
    return obj;
  };

  const handleDescriptions = (i, text) => {
    const updates = descriptions;
    if (language === 'fr') {
      updates[i].fr = text;
    } if (language === 'nl') {
      updates[i].nl = text;
    }
    setLangAccount(updates);
  };
  return (
    <>
      <View style={styles.wrapper}>
        <TouchableOpacity onPress={() => setLanguage('fr')}>
          <Text style={[styles.link, language === 'fr' && styles.linkActive]}>
            FR
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setLanguage('nl')}>
          <Text style={[styles.link, language === 'nl' && styles.linkActive]}>
            NL
          </Text>
        </TouchableOpacity>

      </View>
      <View>
        <TextInput
          returnKeyType={returnKeyType}
          style={styles.input}
          // onChange={onChange}
          // value={value}
          value={selectedValueLanguage(index)}
          onChangeText={(text) => { handleDescriptions(index, text); }}
          multiline
          numberOfLines={8}
          editable
          maxHeight={150}
          minHeight={150}
          maxLength={360}
          textAlignVertical="top"
          placeholder={placeholder}
        />
      </View>
      <View style={styles.right}>
        <Text style={styles.textRight}>
          {selectedValueLanguage(index) && selectedValueLanguage(index).length}
          /360
        </Text>
      </View>
      {selectedValueLanguage(index).length >= 360 ? (
        <View>
          <Text>Attention! Maximum 360 caractères</Text>
        </View>
      ) : null}
    </>
  );
};

InputArea.propTypes = {
  setLangAccount: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  returnKeyType: PropTypes.string,
  index: PropTypes.number.isRequired,
  lang: PropTypes.string.isRequired,
};

InputArea.defaultProps = {
  placeholder: '',
  returnKeyType: '',

};

export default connect(mapStateToProps, mapDispatchToProps)(InputArea);
