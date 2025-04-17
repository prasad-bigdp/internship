import React, { useEffect, useState } from 'react'
import Movie from './Movie'
function Movies ({ setCount })
{
	const [movies,setMovies]= useState([])
	useEffect(() =>
	{
		fetch(`
https://api.themoviedb.org/3/trending/movie/week?api_key=a23b2cea72fe75381083061b1261e9f5`)
			.then((res) => res.json())
			.then((data) => setMovies(data.results))
			.catch((err) => console.log(err))
	}, [])
	return (
		<div className='my-5 max-w-5xl m-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
			{movies.map((v, i) => (
				<Movie
					id={v.id}
					title={v.title}
					url={v.poster_path}
					setCount={setCount}
				/>
			))}
		</div>
	)
}

export default Movies
