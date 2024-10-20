import { Routes, Route } from "react-router-dom";
//import Home from '../components/home/home'
//import Search from "./searchScore/searchLayout/searchLayout";
import SearchCourse from "./searchCourse/searchCourse";
import SearchCampus from "./searchCampus/searchCampus";
import SearchTurn from "./searchTurn/searchTurn";
import SearchType from "./searchType/searchType";

function SearchScore() {

  return (
    <>
        <Routes>
          <Route path="/curso" element={<SearchCourse/>}/>
          <Route path="/campus" element={<SearchCampus/>}/>
          <Route path="/turno" element={<SearchTurn/>}/>
          <Route path="/tipo" element={<SearchType/>}/>
        </Routes>
    </>
  )
}

export default SearchScore