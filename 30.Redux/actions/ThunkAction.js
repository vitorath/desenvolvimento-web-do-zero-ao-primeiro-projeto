const fetch = require('node-fetch');

function addItem(item) {
  return { type: 'ADD_ITEM', payload: item }
}

function loadItemAndAdd() {
  return (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(res => res.json())
      .then(json => {
        dispatch(addItem(json));
      });
  }
}

module.exports = {
  addItem,
  loadItemAndAdd
}