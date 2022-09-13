import React, {useState, useEffect} from 'react'
import ListItem from './ListItem'
import './List.css'

const Local_Storage_Key = 'react-app-todos'

function List() {

  const [todos, setTodos] = useState([]);

  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if(storedTodos) setTodos(storedTodos)
  }, []);

  useEffect(()=>{
    if(todos.length > 0)
    localStorage.setItem(Local_Storage_Key, JSON.stringify(todos))
  }, [todos]);

  function deleteItem(id){
    setTodos(todos.filter((todo) => todo.id !== id))
  }
const [todoInput, setTodoInput] = useState('')
const handleInput = (e)=>{
  setTodoInput(e.target.value);
  console.log('todoinput', todoInput);
}

const handleSubmit = (e) =>{
  if(todoInput == '') return;

  setTodos(
    [{
      id:Math.random() * 100000,
      text:todoInput
    }, ...todos])
    setTodoInput("")
}
  return (
    <div className='list-container'> 

      <div className='todo-input-form'>
        <input className='todo-input-form input' type = "text" placeholder='Add ToDo' onChange={handleInput} value = {todoInput}/>
        <button className='todo-input-form button' onClick={handleSubmit}>Add ToDo</button>
      </div>

      {todos.map(todo =>(
        <ListItem text = {todo.text} id = {todo.id} deleteItem={deleteItem}/>
      ))}

    </div>
    
  )
}
export default List