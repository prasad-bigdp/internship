import React from 'react'
import { useRef } from 'react'

function Uncontrolled ()
{
    
    const emRef = useRef('')
    const handleSubmit = (e) =>
    {
        e.preventDefault()
        console.log(emRef.current.value)
    }
  return (
    <form onSubmit={handleSubmit}>
          <input type="email" ref={emRef} />
          <button>submit</button>
    </form>
  )
}

export default Uncontrolled
