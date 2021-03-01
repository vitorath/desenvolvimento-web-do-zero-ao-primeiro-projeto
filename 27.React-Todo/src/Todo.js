import { useEffect, useState } from 'react';

import List from './components/List';
import Modal from './components/Modal';
import TodoForm from './components/TodoForm';

import Item from './components/Item';

import './Todo.css'

const SAVED_ITEMS = 'savedItems';

function Todo() {

  const [items, setItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

  function onAddItem(text) {
    const item = new Item(text);
    setItems((prevItems) => ([...prevItems, item]))
    onHideModal();
  }

  function onItemDeleted(item) {
    const filteredItems = items.filter(it => it.id !== item.id);
    setItems(filteredItems);
  }

  function onDone(item) {
    const updatedItems = items.map(it => {
      if (it.id === item.id) {
        it.done = !it.done;
      }
      return it;
    });

    setItems(updatedItems);
  }

  function onHideModal() {
    setShowModal(false);
  }

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem(SAVED_ITEMS));
    if (savedItems) {
      setItems(savedItems);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(SAVED_ITEMS, JSON.stringify(items));    
  }, [items])

  return (
    <div className="container">
      <header>
        <h1>Todo</h1>
        <button className="add-button" onClick={() => setShowModal(true)}>+</button>
      </header>
      <List 
        onItemDeleted={onItemDeleted} 
        onDone={onDone}
        items={items} 
      />

      <Modal show={showModal} onHideModal={onHideModal}>
        <TodoForm onAddItem={onAddItem} />
      </Modal>
    </div>
  )
}

export default Todo;