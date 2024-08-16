import React from 'react'
import { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react'

function App() {
  const [incomTax, setIncometax] = useState(20000);
    const divRef = useRef()
 

  useEffect(() => {
    setTimeout(() => {
      console.log(divRef.current)
     divRef.current.innerHTML = 10
    }, 5000)
  }, [])



  return (
    <div>
      your income tax returns are <div ref={divRef}>{incomTax}</div>
    </div>
  )
}

export default App
