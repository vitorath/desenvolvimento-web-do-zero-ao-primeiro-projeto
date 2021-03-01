import { createContext } from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import counterReducer from './reducers/counterReducer';

export const CounterContext = createContext();

export function CounterProvider(props) {

  const allReducers = combineReducers({ counter: counterReducer })
  const store = createStore(allReducers);

  return (
    <Provider store={store}>
      {props.children}
    </Provider>
  )
}

