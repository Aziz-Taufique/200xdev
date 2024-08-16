import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function useTodos(){
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("")
    .then((res) => {
      if(res.data.todos){

        setTodos(res.data.todos)
      }else{
        setTodos([{title: "oho", description: "are"}])
      }
    })
  }, [])
  return todos
}

function App() {
 
const todos = useTodos()
  return (
    <>
     {todos.map(todo => <Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </>
  )
}

const Todo = ({title, description}) => {
 return <div>
  <h1>{title}</h1>
  <h1>{description}</h1>
 </div>
}

export default App
