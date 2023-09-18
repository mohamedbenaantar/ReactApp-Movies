import {Routes, Route} from "react-router-dom";
import { MoviesList, MovieDetail,  Search, PageNotfound} from "./../pages/index";

// create the component for all Routes and then mention it


export const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<MoviesList/>}/>
        <Route path="movie/:id" element={<MovieDetail/>}/>
        <Route path="movies/popular" element={<MoviesList/>}/>
        <Route path="movies/top" element={<MoviesList/>}/>
        <Route path="movies/upcoming" element={<MoviesList/>}/>
        <Route path="search" element={<Search/>}/>
        <Route path="*" element={<PageNotfound/>}/>
    </Routes>
  )
}