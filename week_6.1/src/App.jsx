import React from 'react'
import { useState } from 'react'

function App() {
  // const [title, setTitle] = useState("Say my name")

  // const  updateTitle = () => {
  //   setTitle("My name is " + Math.random())
  return (
    <div>
      {/* <button onClick={updateTitle}>Update the title</button> */}
      <HeaderWithButton/>
      <Header title="my name is aziz"></Header>
      <Header title="my name is aziz"></Header>
      <Header title="my name is aziz"></Header>
      {/* <Header title="fooo"></Header> */}
    </div>
  )
  }



function HeaderWithButton(){
  const [firstTitle, setFirstTitle] = useState("Say me name")

  function changeTitle(){
    setFirstTitle("my name is " + Math.random())
  }

  return <>
  <button onClick={changeTitle}>Click me to change the title</button>
  <Header title={firstTitle}></Header>
  </>
}

function Header({title}){
  return <h1>
    {title}
  </h1>
}

export default App
