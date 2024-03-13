import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function useTodos(){
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/todos").then((res)=>{
      res.json().then((data)=>{
        console.log(data);
        setTodos(data);
      })
    })
  }, [])

  setInterval(() => {
    fetch("http://localhost:3000/todos").then((res)=>{
      res.json().then((data)=>{
        console.log(data);
        setTodos(data);
      })
    })
  }, 1000);

  return todos;
}

function App() {
  const todos = useTodos();

  return (
    <>
     {todos.map((todo)=>{
      return <div>
          {todo.title}
          {todo.description}
          <button>Delete</button>
          <br/>
        </div>
     })}
    </>
  )
}




export default App
