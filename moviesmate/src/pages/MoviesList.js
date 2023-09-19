import { useEffect } from "react"
import { useFetch } from "../hooks/useFetch"
import { Card } from "./../components"

export const MoviesList = ({apiPath}) => {
    const {data: movies} = useFetch(apiPath)

   
      return (
    <main>
        <section className="max-w-7xl mx-auto py-7">
            <div className="flex justify-start flex-wrap other:justify-evenly">
                { movies.map((movie) => (
                    <Card key={movie.id} movie={movie}/>
                ))}
            </div>
        </section>
        </main>
  )
}
