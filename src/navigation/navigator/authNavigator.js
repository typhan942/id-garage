import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Signin from '../../components/sign-in-screens/signin';
import ResetPassword from '../../components/sign-in-screens/resetPassword';
import Reset from '../../components/sign-in-screens/reset';

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator
    headerMode="screen"
    initialRouteName="Welcome"
    screenOptions={{
      headerMode: 'float',
      headerTintColor: 'black',
      headerBackTitle: true,
      headerTitleStyle: { fontSize: 18, fontFamily: 'GothamBold' },
    }}
  >
    <Stack.Screen options={{ headerShown: false }} name="Sigin" component={Signin} />
    <Stack.Screen name="resetPassword" options={{ title: 'Réinitialiser mon mot de passe' }} component={ResetPassword} />
    <Stack.Screen options={{ headerTitle: '' }} name="reset" component={Reset} />

  </Stack.Navigator>
);

export default AuthNavigator;
