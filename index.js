
import React from "react";
import App from './App';
import registerRootComponent from "expo/build/launch/registerRootComponent";

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in the Expo client or in a native build,
// the environment is set up appropriately

registerRootComponent(App);
