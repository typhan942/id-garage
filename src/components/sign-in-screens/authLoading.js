import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NetInfo from '@react-native-community/netinfo';
import * as Font from 'expo-font';
import GothamBold from '../../assets/fonts/Gotham-Bold.ttf';
import GothamBoldItalic from '../../assets/fonts/Gotham-BoldItalic.ttf';
import GothamBook from '../../assets/fonts/Gotham-Book.ttf';
import GothamMedium from '../../assets/fonts/Gotham-Medium.ttf';
import GothamLigthItalic from '../../assets/fonts/Gotham-LightItalic.ttf';

// import screens
import AuthNavigator from '../../navigation/navigator/authNavigator';
import AppDrawerNavigator from '../../navigation/navigator/appDrawerNavigator';
import OfflineStatus from '../../offlineStatus';

const AuthLoading = () => {
  // redux
  const userToken = useSelector((state) => state.authReducer.userToken);

  // state
  const [isInternetReachable, setIsInternetReachable] = useState(null);
  const [fontLoaded, setFontloaded] = useState(false);

  const customFonts = {
    GothamBold,
    GothamBoldItalic,
    GothamBook,
    GothamMedium,
    GothamLigthItalic,
  };

  useEffect(() => {
    NetInfo.addEventListener((state) => {
      setIsInternetReachable(state.isInternetReachable);
    });
  }, []);

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync(customFonts);
      setFontloaded(true);
    };
    loadFonts();
  }, []);

  if (isInternetReachable === false) return <OfflineStatus />;
  if (fontLoaded) {
    if (userToken) {
      return <AppDrawerNavigator />;
    }
    return <AuthNavigator />;
  }
  return null;
};

export default AuthLoading;
