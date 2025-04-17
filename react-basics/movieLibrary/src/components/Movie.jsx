import React from 'react'
import { Link } from 'react-router-dom'
function Movie ({ title, url, id,setCount })
{
  const path= `https://image.tmdb.org/t/p/w500/${url}`

  return (
		<div className='movie p-5 shadow shadow-amber-500 rounded-2xl border '>
      <Link to={`/movie/${id}`}>
				<img
					src={path}
					alt={title}
					className=' object-cover'
				/>
				<h2>{title}</h2>
				<button onClick={() => setCount((count) => count + 1)}>like👍🏻</button>
			</Link>
		</div>
	)
}

export default Movie
