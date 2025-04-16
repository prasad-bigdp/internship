import React, { useState } from 'react'
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"
import axios from 'axios';

function login ()
{
    const [email, setEmail] = useState('');
    const [Password, setPassword] = useState('')
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        console.log(email, Password)
        try
        {
            const res = await axios.post("https://dummyjson.com/auth/login", {
           username:email,
            password: Password,
            expiresInMins: 30, // optional, defaults to 60
        }

            )
                        alert(res.data.firstName + "is successfully logged in")

        }
        catch (err)
        {
             alert("username or password is wrong")
        }
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
				<Button type='submit' variant='contained'>Login</Button>
			</form>
		</div>
	)
}

export default login
