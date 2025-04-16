import React from 'react'

function Movie ({ title, url, setCount })
{
  const path= `https://image.tmdb.org/t/p/w500/${url}`

  return (
      <div className='movie p-5 shadow shadow-amber-500 rounded-2xl border '>
          <img src={path}
 alt={title} className=' object-cover'/>
          <h2>{title}</h2>
          <button onClick={()=>setCount((count)=>count+1)}>like👍🏻</button>
    </div>
  )
}

export default Movie
