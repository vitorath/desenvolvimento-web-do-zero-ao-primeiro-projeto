const redux = require('redux');
const thunk = require('redux-thunk').default;

const { incrementAction, decrementAction } = require('./actions/CounterActions');
const { addItemAction } = require('./actions/ListActions');
const { addItem, loadItemAndAdd } = require('./actions/ThunkAction');

const counterReducer = require('./reducers/CounterReducer');
const listReducer = require('./reducers/ListReducer');
const thunkReducer = require('./reducers/ThunkReducer');

const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

const allReducers = combineReducer({
  counter: counterReducer,
  list: listReducer,
  thunk: thunkReducer,
});
const store = createStore(allReducers, redux.applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(decrementAction(1));
store.dispatch(incrementAction());
store.dispatch(incrementAction(1));
store.dispatch(incrementAction(2));
store.dispatch(incrementAction(3));

store.dispatch(addItemAction('Um novo item'));

store.dispatch(addItem({ id: 1, title: 'Novo Item', completed: true }));
store.dispatch(loadItemAndAdd());
