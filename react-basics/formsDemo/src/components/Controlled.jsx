import React from 'react'
import { useState } from 'react'

function Controlled ()
{
  const [email, setEmail] = useState('')
  const handleSubmit = (e) =>
  {
      e.preventDefault()
   console.log(email) 
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button>submit</button>
    </form>
  )
}

export default Controlled
