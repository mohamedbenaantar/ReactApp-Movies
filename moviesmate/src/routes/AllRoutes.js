import {Routes, Route} from "react-router-dom";
import { MoviesList, MovieDetail,  Search, PageNotfound} from "./../pages/index";

// create the component for all Routes and then mention it


export const AllRoutes = () => {
  return (
    <div className="dark:bg-darkbg bg-blue-400">
    <Routes>
        <Route path="/" element={<MoviesList apiPath="discover/movie"/>}/>
        <Route path="movie/:id" element={<MovieDetail/>}/>
        <Route path="movies/popular" element={<MoviesList apiPath="movie/popular"/>}/>
        <Route path="movies/top" element={<MoviesList apiPath="tv/top_rated"/>}/>
        <Route path="movies/upcoming" element={<MoviesList apiPath="movie/upcoming"/>}/>
        <Route path="search" element={<Search apiPath="search/movie"/>}/>
        <Route path="*" element={<PageNotfound/>}/>
    </Routes>
    </div>
  )
}
