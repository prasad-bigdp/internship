import React, { useState } from 'react'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app } from "../firebase/firebase.config"
function login ()
{
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('')
    const navigate = useNavigate()
    const auth= getAuth(app)
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        console.log(email, Password);
        signInWithEmailAndPassword(auth, email, Password)
            .then((res) => navigate('/dashboard'))
            .catch((err) => alert(err))
       
    }
  return (
		<div className=' flex h-screen justify-center items-center'>
			<form
				action=''
				className=' flex flex-col gap-3 p-5 rounded-2xl shadow shadow-gray-500'
				onSubmit={handleSubmit}>
				<h2 className=' text-3xl text-center'>Login Form</h2>
				<TextField
					id='outlined-basic'
					label='Enter email'
					variant='outlined'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<TextField
					id='outlined-basic'
					label='Enter Password'
					variant='outlined'
					value={Password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<Button
					type='submit'
					variant='contained'>
					Login
				</Button>
				<p>
\					If not regiteres, signup <Link to='/signup' className=' text-blue-600 decoration-1 underline'>here</Link>
				</p>
			</form>
\		</div>
	)
}

export default login
