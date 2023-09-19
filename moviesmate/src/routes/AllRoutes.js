import {Routes, Route} from "react-router-dom";
import { MoviesList, MovieDetail,  Search, PageNotfound} from "./../pages/index";

// create the component for all Routes and then mention it


export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg bg-blue-400">
    <Routes>
        <Route path="/" element={<MoviesList apiPath="movie/now_playing" title="Home"/>}/>
        <Route path="movie/:movie_id" element={<MovieDetail title="Movie Detail"/>}/>
        <Route path="movies/popular" element={<MoviesList apiPath="movie/popular" title="Popular"/>}/>
        <Route path="movies/top" element={<MoviesList apiPath="tv/top_rated" title="Top Rated"/>}/>
        <Route path="movies/upcoming" element={<MoviesList apiPath="movie/upcoming" title="Upcoming"/>}/>
        <Route path="search" element={<Search apiPath="search/movie"/>}/>
        <Route path="*" element={<PageNotfound title="PageNotFound"/>}/>
    </Routes>
    </div>
  )
}
