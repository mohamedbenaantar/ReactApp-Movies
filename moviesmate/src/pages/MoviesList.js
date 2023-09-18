import { useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import { Card } from "./../components"

export const MoviesList = () => {
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        async function fetchMovies(){
            const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=e40d58ef12f677b100318e00a4c4c642");
            const data = await response.json();
            setMovies(data.results);
        }
    fetchMovies();
    },[])
  return (
    <main>
        <section className="max-w-7xl mx-auto py-7">
            <div className="flex justify-start flex-wrap">
                { movies.map((movie) => (
                    <Card key={movie.id} movie={movie}/>
                ))}
            </div>
        </section>
        </main>
  )
}
