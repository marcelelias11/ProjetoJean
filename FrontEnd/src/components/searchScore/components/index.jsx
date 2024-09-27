import { Routes, Route } from "react-router-dom";
//import Home from '../components/home/home'
//import Search from "./searchScore/searchLayout/searchLayout";
import SearchCourse from "./searchCourse/searchCourse";
import SearchCampus from "./searchCampus/searchCampus";
import SearchTurn from "./searchTurn/searchTurn";


function SearchScore() {

  return (
    <>
        <Routes>
          <Route path="/" element={<SearchCourse/>}/>
          <Route path="/campus" element={<SearchCampus/>}/>
          <Route path="/turno" element={<SearchTurn/>}/>
        </Routes>
    </>
  )
}

export default SearchScore