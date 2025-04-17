import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
function MoviePage ()
{
    const { id } = useParams()
    const [movieData, setMovieData] = useState({})
    useEffect(() =>
    {
        fetch(`
https://api.themoviedb.org/3/movie/${id}?api_key=a23b2cea72fe75381083061b1261e9f5`)
            .then((res) => res.json())
            .then((data) => { setMovieData(data); console.log(data)})
            .catch((err) => console.log(err))
    }, [])
    return (
			<div className='bg-gray-100 dark:bg-gray-800 py-8'>
				<div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex flex-col md:flex-row -mx-4'>
						<div className='md:flex-1 px-4'>
							<div className=' rounded-lg bg-gray-300 dark:bg-gray-700 mb-4' style={{height:'460px'}}>
								<img
									src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
									alt={movieData.title}
									className='object-fill'
								/>
							</div>
							<div className='flex -mx-2 mb-4'>
								<div className='w-1/2 px-2'>
									<button className='w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700'>
										watch Trailer
									</button>
								</div>
								<div className='w-1/2 px-2'>
									<button className='w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600'>
										watch movie
									</button>
								</div>
							</div>
						</div>
						<div className='md:flex-1 px-4'>
							<h2 className='text-2xl font-bold text-gray-800 dark:text-white mb-2'>
								{movieData.title}
							</h2>
							<p className='text-gray-600 dark:text-gray-300 text-sm mb-4'>
								{movieData.overview}
							</p>
							<div className='flex mb-4'>
								<div className='mr-4'>
									<span className='font-bold text-gray-700 dark:text-gray-300'>
										year:
									</span>
									<span className='text-gray-600 dark:text-gray-300'>
										{movieData.release_date}
									</span>
								</div>
							</div>
							<div className='mb-4'>
								<span className='font-bold text-gray-700 dark:text-gray-300'>
									Select Color:
								</span>
								<div className='flex items-center mt-2'>
									{movieData.genres && movieData.genres.map((v, i) => (
                                        <button className='w-26 h-26 rounded-full bg-gray-800 dark:bg-gray-200 text-white mr-2' key={i}>
                                            {v.name}
                                        </button>
									))}
								</div>
							</div>
					
						</div>
					</div>
				</div>
			</div>
		)
}

export default MoviePage
