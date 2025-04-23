import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Header from './components/Header'
function App ()
{
  const count = useSelector((state) => state.count)
  const dispatch =useDispatch()
  return (
    <div>
      <Header />
      <h2>HEllo redux</h2>
      <p>{count}</p>
      <button onClick={()=>dispatch({type:"INCR"})}>+</button>
    </div>
  )
}

export default App
