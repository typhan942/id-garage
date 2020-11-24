// core
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
// redux
import { connect } from 'react-redux';
// components
import PropTypes from 'prop-types';
import InvoiceTopBarNavigation from '../navigator/topTabNavigatorInvoice';
import SignalScreen from '../../components/invoices-screens/signal-screen/signalScreen';

const Stack = createStackNavigator();

const mapStateToProps = ({ languageReducer }) => ({
  lg: languageReducer.language,
});

/**
 * @desc
 */
const InvoicesStack = ({ lg }) => (
  <Stack.Navigator
    headerMode="screen"
    initialRouteName="invoiceNavigation"
  >
    <Stack.Screen options={{ headerShown: false }} name="invoiceNavigation" component={InvoiceTopBarNavigation} />
    <Stack.Screen
      name="invoiceSignal"
      component={SignalScreen}
      options={{
        headerShown: true,
        headerTitle: lg.invoice.signal.title,
      }}
    />
  </Stack.Navigator>
);

InvoicesStack.propTypes = {
  lg: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default connect(mapStateToProps)(InvoicesStack);
