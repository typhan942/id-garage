import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { useSelector } from 'react-redux';
import colors from './assets/css/style-colors';
import AnimationNetwork from './assets/animations/errorNetwork.json';

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 20,
    color: colors.black,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sousTitle: {
    color: colors.black,
    textAlign: 'center',
    margin: 20,
  },
  animation: {
    height: 200,
    width: 200,
  },
});
const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const tick = () => {
      savedCallback.current();
    };
    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return true;
  }, [delay]);
};

const OfflineStatus = () => {
  const lg = useSelector((state) => state.languageReducer.language);
  const [isActive, setisActive] = useState(true);

  useInterval(() => {
    setisActive(!isActive);
  }, 5000);

  return (
    <View style={[styles.container, { backgroundColor: colors.white }]}>
      <LottieView style={styles.animation} source={AnimationNetwork} autoPlay loop />
      <Text style={styles.title}>{lg.offlineStatus.connecttheInternet}</Text>
      <Text style={styles.sousTitle}>{lg.offlineStatus.checkConnection}</Text>
    </View>
  );
};

export default OfflineStatus;
