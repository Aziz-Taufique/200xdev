
import React, {useContext} from "react"
import { CountContext } from "./components/Context"
import { useRecoilValue } from "recoil"
import { countAtom } from "./store/atoms/Count"

function App(){
  

  return (
    <>
    <Counts  />
    </>
  )
}

function Counts(){
  console.log("coutn re-rendered")
  return(
    <div>
    <CoutnRerender/>
    <Button  />
  </div>
  )
}

function CoutnRerender(){
  const count = useRecoilValue(countAtom)
  return(
    <div>
      count rerender is {count}
    </div>
  )
}

function Button(){
  const count = 0
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  )
}

export default App