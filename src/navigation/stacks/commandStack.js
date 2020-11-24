import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TopTabNavigatorCommand from '../navigator/topTabNavigatorCommand';
import Signal from '../../components/command-screens/components/signal';
import Note from '../../components/command-screens/components/note';
import Date from '../../components/command-screens/components/date';

const Stack = createStackNavigator();

const CommandStack = () => (
  <Stack.Navigator
    headerMode="screen"
    initialRouteName="Command"
    screenOptions={{
      headerMode: 'float',
      headerTitle: null,
      headerTintColor: 'white',
      headerStyle: { backgroundColor: '#60499d' },
    }}
  >
    <Stack.Screen options={{ headerShown: false }} name="Command" component={TopTabNavigatorCommand} />
    <Stack.Screen options={{ headerShown: false }} name="Signal" component={Signal} />
    <Stack.Screen options={{ headerShown: false }} name="Note" component={Note} />
    <Stack.Screen options={{ headerShown: false }} name="Date" component={Date} />
  </Stack.Navigator>
);

export default CommandStack;
