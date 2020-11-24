import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { initState } from '../initialState';
import calendarReducer from './calendarReducer';
import statusReducer from './statusReducer';
import languageReducer from './languageReducer';
import authReducer from './authReducer';
import commandReducer from './commandReducer';
import invoiceReducer from './invoiceReducer';
import statisticsReducer from './statisticsReducer';
import congesReducer from './congesReducer';
import planningReducer from './planningReducer';
import tarifsReducer from './tarifsReducer';

export default function configureStore(initialState = initState) {
  return createStore(
    combineReducers({
      calendarReducer,
      statusReducer,
      languageReducer,
      authReducer,
      commandReducer,
      invoiceReducer,
      statisticsReducer,
      congesReducer,
      planningReducer,
      tarifsReducer,
    }),
    initialState,
    composeWithDevTools(
      applyMiddleware(
        thunk,
        // logger
      ),
    ),
  );
}
