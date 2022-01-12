import { combineReducers } from 'redux'

export const todosList = (state = {todo:[],todoDeleted:[],todoCompleted:[]}, action) => {
    switch (action.type) { 
      // case 'GET_TODO':
      //   return action.todo

      case 'ADD_TODO':
        let data = state.todo.concat(action.todo) 
        return Object.assign({}, state, {
          todo:data
        })
        
      case 'REMOVE_TODO':
        let todoD = state.todo.filter(gr => gr.id !== action.todo.id)
        let todoDeleted = state.todoDeleted.concat(action.todo)
        return Object.assign({}, state, {
          todoDeleted,
          todo:todoD
        })
      case 'COMPLETED_TODO':
          let todoC = state.todo.filter(gr => gr.id !== action.todo.id)
          let todoCompleted = state.todoCompleted.concat(action.todo)
          return Object.assign({}, state, {
            todoCompleted,
            todo:todoC
          })
      case 'EDIT_TODO':
          let todoE = state.todo.filter(gr => gr.id !== action.todo.id)
          let data1 = todoE.concat(action.todo)
          return Object.assign({}, state, {
            todo:data1
          })


      default:
        return state
    }
  }
  
export default combineReducers({
   todosList
  })
  