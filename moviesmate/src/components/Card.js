import React from 'react'
import { Link } from "react-router-dom"
import Backup  from "./../assets/images/backUp.jpg"
export const Card = ({movie}) => {
  const {id, original_title, overview, poster_path} = movie
  const image = poster_path ? `https://image.tmdb.org/t/p/w500/${poster_path}` : Backup ;
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4">
    <Link to={`/movie/${id}`}>
        <img className="object-cover w-full rounded-t-lg h-90  md:rounded-none md:rounded-l-lg" src={image} alt="" />
    </Link>
    <div className="p-5">
        <Link to={`/movie/${id}`}>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{original_title}</h5>
        </Link>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview}</p>
        
        </div>

</div>
        

   

  )
}
