module.exports = {
  incrementAction: (value) => ({ type: 'INCREMENT', payload: value || 1 }),
  decrementAction: (value) => ({ type: 'DECREMENT', payload: value || 1 })
}