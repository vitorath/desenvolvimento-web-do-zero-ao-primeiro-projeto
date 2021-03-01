const initialStates = [{ id: 0, title: 'Tarefa', completed: false }];

module.exports = (state = initialStates, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [...state, action.payload];
    default:
      return state;
  }
}