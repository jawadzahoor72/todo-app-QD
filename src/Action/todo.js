export const addTodo = todo => ({
    type: 'ADD_TODO',
    todo
  })
export const getTodo = todo => ({
    type: 'GET_TODO',
    todo
  })
export const removeTodo = todo => ({
    type: 'REMOVE_TODO',
    todo
  })
export const completeTodo = todo => ({
    type: 'COMPLETED_TODO',
    todo
  })
export const editTodo = todo => ({
    type: 'EDIT_TODO',
    todo
  })