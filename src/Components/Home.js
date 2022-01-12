import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { addTodo,removeTodo,completeTodo , editTodo} from '../Action/todo';
import {connect} from "react-redux"
import  './index.scss'
function Home(props) {
const [todoName, setTodoName] = useState({id:'', name:''});
const [showlist, setShowList] = useState('todo');
const [isEdit, setisEdit] = useState(false);
const dispatch = useDispatch()

const changeTabs =(value)=>{
    setShowList(value)
}


const submitData =()=>{
     if(isEdit){
      dispatch(editTodo(todoName))
      setTodoName({id:'', name:''})
      setisEdit(false)
    }
    else { 
      if(!isEdit && todoName.name){
        dispatch(addTodo({id:Math.floor(Math.random() * 100) + 1, name:todoName.name}))
        setTodoName({id:'', name:''})
       }
       //multiple records with same name will create redundency to overcome this issue obj with unique id is dispatched     
    }
}
const updateTodo = (e)=>{
    setTodoName(e)
    setisEdit(true)
}
  return (
      <div className='mainDiv'>
            <p>Todo</p>
            <input value={todoName.name} name="todoName" onChange={e => setTodoName(todoName => {return {...todoName, name: e.target.value}})}/>
            <button onClick={submitData} >Submit</button>
            {/* <hr/ */}
            <div className='tabs' >
                    <span onClick={e=>changeTabs('todo')}>Todos</span>
                    <span onClick={e=>changeTabs('completed')}>Completed</span>
                    <span onClick={e=>changeTabs('deleted')}>Deleted</span>
            </div>
            <hr/>
            {showlist === 'todo' ? (
                <div className='parentList'>
                {props?.todosList?.map(e1=>
                    <div className='listDiv' >
                      <li key={e1.id}>{e1.name}</li>
                    <div> 
                      <button onClick={()=>updateTodo(e1)}>Edit</button>
                      <button onClick={e=> dispatch(removeTodo(e1))}>Delete</button>
                      <button onClick={e=> dispatch(completeTodo(e1))}>Complete</button></div>
                    </div>
                  )}
                </div>
            ): 
            showlist === 'completed' ? (
              <div className='parentList'>
                  {props?.todoCompletedList?.map(e1=>
                    <div  className='listDiv' >
                      <li key={e1.id}>{e1.name}</li>
                    </div>
                  )}
            </div>
            ):
            showlist === 'deleted' ? (
              <div className='parentList'>
                {props?.todoDeletedList?.map(e1=>
                    <div className='listDiv'>
                      <li key={e1.id}>{e1.name}</li>
                    </div>
                  )}
                </div>
            ): null }
      </div>
  );
}
const mapStateToProps = state =>({
  todosList:state.todosList.todo,
  todoDeletedList:state.todosList.todoDeleted,
  todoCompletedList:state.todosList.todoCompleted
})
export default connect(mapStateToProps)(Home)
