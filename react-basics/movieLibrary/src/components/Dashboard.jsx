import React from 'react'
import {getAuth,signOut} from 'firebase/auth'
import { app } from '../firebase/firebase.config'
import { useNavigate } from 'react-router-dom'
function Dashboard ()
{
    const auth = getAuth(app)
    const navigate = useNavigate()
  return (
    <div>
          <h2>Welcome to dashboard,
              <button onClick={() =>
              {
                  signOut(auth); navigate('/login')
              }}>signout</button></h2>
    </div>
  )
}

export default Dashboard
