// core
import React, { useState } from 'react';
import {
  View, Text,
  TextInput, TouchableOpacity,
  Keyboard, Platform,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
// redux
import { connect } from 'react-redux';
// styles
import styles from './signalScreen.style';
import colors from '../../../assets/css/style-colors';

const mapStateToProps = ({ languageReducer }) => ({
  lg: languageReducer.language,
});

/**
 * @desc
 */
const SignalScreen = ({ route, navigation, lg }) => {
  // props
  const { invoiceItem } = route.params;
  // states
  const [text, setText] = useState('');
  // methods
  const onInputChange = (value) => setText(value);

  const showSuccessMessage = () => {
    Alert.alert(
      '',
      lg.invoice.signal.successMessage,
      [
        {
          text: lg.invoice.signal.goBack,
          onPress: () => navigation.goBack(),
        },
      ],
      { cancelable: false },
    );
  };

  const showValidationMessage = () => {
    Alert.alert(
      '',
      lg.invoice.signal.textEmptyValidation,
      [
        { text: 'OK' },
      ],
    );
  };

  /**
   * @desc only allow subit if text is not empty
   */
  const onSubmitPress = () => {
    if (text.length <= 0) {
      showValidationMessage();
    } else {
      Keyboard.dismiss();
      showSuccessMessage();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={styles.container}
    >
      <View style={styles.inner}>
        <Text style={styles.title}>
          {invoiceItem.id}
          {' '}
          {'\n'}
          {lg.invoice.invoiceItem.client}
          :
          {invoiceItem.client}
        </Text>
        <View style={styles.form}>
          <Text style={styles.inputLabel}>
            {lg.invoice.signal.inputLabel}
            :
          </Text>
          <TextInput
            style={styles.input}
            value={text}
            placeholder={lg.invoice.signal.inputPlaceHolder}
            maxLength={360}
            multiline
            minHeight={200}
            textAlignVertical="top"
            placeholderTextColor={colors.slateGrey}
            onChangeText={onInputChange}
          />
        </View>
        <TouchableOpacity
          style={[
            styles.submitBtn,
            { marginBottom: Platform.OS === 'ios' ? 80 : 0 },
          ]}
          onPress={onSubmitPress}
        >
          <Text style={styles.submitText}>
            {lg.invoice.signal.save}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

SignalScreen.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
  route: PropTypes.objectOf(PropTypes.any).isRequired,
  navigation: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(SignalScreen);
