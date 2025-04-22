import React from 'react'
import { useSelector } from 'react-redux'

function App ()
{
  const { count } =useSelector((state)=>state.count)
  return (
    <div>
      <p>{count}</p>
    </div>
  )
}

export default App
