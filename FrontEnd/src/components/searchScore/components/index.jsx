import { Routes, Route } from "react-router-dom"; //Cria as rotas pelo react-router-dom
//import Home from '../components/home/home'
//import Search from "./searchScore/searchLayout/searchLayout";
import SearchCourse from "./searchCourse/searchCourse"; //Importa as páginas utilizadas
import SearchCampus from "./searchCampus/searchCampus"; //Importa as páginas utilizadas
import SearchTurn from "./searchTurn/searchTurn"; //Importa as páginas utilizadas
import SearchType from "./searchType/searchType"; //Importa as páginas utilizadas

function SearchScore() {

  return ( //Função que cria as rotas que serão utilizadas
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