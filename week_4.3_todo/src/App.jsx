import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todo, setTodo] = useState([{
    title: "go for workout",
    description: "make muscles",
    completed: false
  }, {
    title: "study DSA",
    description: "study dsa from tuf",
    completed: true
  }, {
    title: "Blockchain",
    description: "Blockchain is the future",
    completed: true
  }])

  function newTodo(){

  //  general way
  let newTodos=[]
  for(i=0;i<todo.length;i++){
    newTodos.push(todo[i])
  }

  newTodos.push({title: "aziz", description: "punjab"})

  setTodo(newTodos)

  // Modern Syntex
    setTodo([...todo, {
      title: "hehehe",
      description: "fooo"
    }])
  }

  return (
    <>
     <div>
      {/* {JSON.stringify(todo)} */}

      {/* <Todo title={todo[0].title} description={todo[0].description}></Todo> */}
      {/* <Todo title={todo[1].title} description={todo[1].description}></Todo> */}

      <button onClick={newTodo}>Add a random todo</button>

      {todo.map((todo) => {
        return <Todo title={todo.title} description={todo.description}></Todo>
      })}

      <DummyButton></DummyButton>

     </div>
    </>
  )
}

function DummyButton(){
  // any time a parent re-render, its child re-render as well
  // DummyButton takes no input yet it will get re-render

  console.log("re-render dummmy btn")
  return <button>lalala</button>
}


function Todo(props){
  return <>  <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
  </>
}
export default App
