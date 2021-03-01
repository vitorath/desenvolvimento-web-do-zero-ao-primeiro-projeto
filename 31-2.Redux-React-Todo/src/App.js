import { useState } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import listReducers from './reducers/listReducer';

import List from './components/List';
import Modal from './components/Modal';
import TodoForm from './components/TodoForm';

import './Todo.css'

const SAVED_ITEMS = 'savedItems';

function persistState(state) {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(state));
}

function loadState() {
  const actualState = localStorage.getItem(SAVED_ITEMS);
  if (actualState) {
    return JSON.parse(actualState);
  } else {
    return [];
  }
}

const store = createStore(listReducers, loadState());

store.subscribe(() => {
  console.log(store.getState());
  persistState(store.getState());
});

function Todo() {

  const [showModal, setShowModal] = useState(false);

  function onHideModal() {
    setShowModal(false);
  }

  return (
    <Provider store={store}>
      <div className="container">
        <header>
          <h1>Todo</h1>
          <button className="add-button" onClick={() => setShowModal(true)}>+</button>
        </header>
        <List />

        <Modal show={showModal} onHideModal={onHideModal}>
          <TodoForm onHideModal={onHideModal} />
        </Modal>
      </div>
    </Provider>
  )
}

export default Todo;