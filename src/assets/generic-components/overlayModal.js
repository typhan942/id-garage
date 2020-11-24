import React from 'react';
import {
  StyleSheet, View, Modal, TouchableOpacity, SafeAreaView,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import colors from '../css/style-colors';

const styles = StyleSheet.create({
  ghostContainer: {
    flexGrow: 1,
    backgroundColor: colors.transparentBlack,
  },
  modalContainer: {
    flex: 1,
  },
  btnClose: {
    alignItems: 'flex-end',
    padding: 10,
  },
  wrapperModal: {
    flexGrow: 2,
    backgroundColor: colors.paleGrey,
  },
});

const OverlayModal = ({ children, isActive, closeModal }) => (
  <Modal
    transparent
    animationType="slide"
    visible={isActive}
  >
    <SafeAreaView style={styles.modalContainer}>
      <View style={styles.modalContainer}>
        <View style={styles.wrapperModal}>
          <TouchableOpacity onPress={closeModal} style={styles.btnClose}>
            <AntDesign name="close" size={24} color={colors.black} />
          </TouchableOpacity>
          {children}
        </View>
        <View style={styles.ghostContainer} />
      </View>
    </SafeAreaView>
  </Modal>
);

OverlayModal.propTypes = {
  children: PropTypes.element.isRequired,
  isActive: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default OverlayModal;
