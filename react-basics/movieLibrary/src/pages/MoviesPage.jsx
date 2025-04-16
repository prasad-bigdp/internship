import React from 'react'
import { useState } from 'react'
import Movies from '../components/Movies'
function MoviesPage ()
{

			const [count, setCount] = useState(0)
  return (
		<div>
			<Movies
				setCount={setCount}
			/>
		</div>
	)
}

export default MoviesPage
