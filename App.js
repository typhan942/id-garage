import React from 'react';
import { UIManager, Platform } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import configureStore from "./src/redux/reducers";
import AuthLoading from "./src/components/sign-in-screens/authLoading";

const store = configureStore();

// https://reactnative.dev/docs/layoutanimation
if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <AuthLoading />
      </NavigationContainer>
    </Provider>
  );
}

export default App;