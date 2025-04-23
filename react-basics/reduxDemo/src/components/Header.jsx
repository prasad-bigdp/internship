import React from 'react'
import { useSelector } from 'react-redux'

function Header ()
{
    const count= useSelector((state)=>state.count)
  return (
    <div>
      Header:{count}
    </div>
  )
}

export default Header
