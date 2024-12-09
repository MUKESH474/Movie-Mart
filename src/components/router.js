import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from './layout'
import Movielist from "../pages/movielist"
import TopRated from "./toprated"
import Popular from "./popular"
import Upcoming from "./upcoming"
import All from "./all"
import View from "./viewmovies"
function Routerall(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Movielist title='Home Page'/>} apipath="movie/now_playing" />
                    <Route path="TopRated/movies" element={<TopRated title="Top Rated movies" />} apipath="movie/popular" />
                    <Route path="Popular/movies" element={<Popular title="Popular movies" />} apipath="top_rated" />
                    <Route path="Upcoming/movies" element={<Upcoming title="Upcoming movies" />} apipath="movie/upcoming" />
                    <Route path="All/movies" element={<All title="All movies" />} apipath="All movies" />
                    <Route path="view-movies" element={<View/>} />
                </Route>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Routerall