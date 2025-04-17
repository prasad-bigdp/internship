import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import axios from "axios"
import { Link } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { app } from "../firebase/firebase.config"
function Signup() {
	const [email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const auth= getAuth(app)
	const handleSubmit = async (e) => {
		e.preventDefault()
		console.log(email, Password)
    createUserWithEmailAndPassword(auth, email, Password)
      .then((res) => console.log(res))
    .catch((err)=>alert(err))
	}
	return (
		<div className=' flex h-screen justify-center items-center'>
			<form
				action=''
				className=' flex flex-col gap-3 p-5 rounded-2xl shadow shadow-gray-500'
				onSubmit={handleSubmit}>
				<h2 className=' text-3xl text-center'>Signup Form</h2>
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
					Signup
				</Button>
			</form>
		</div>
	)
}

export default Signup
