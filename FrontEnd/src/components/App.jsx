import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from '../assets/styles/globalStyles';
import Home from '../components/home/home'
//import Search from "./searchScore/searchLayout/searchLayout";
//import SearchCourse from "./searchScore/components/searchCourse/searchCourse";
//import { useState } from 'react';
import SearchScore from "./searchScore/components";
import SignupScore from "./signupScore/signupScore";
import ResultScore from "./resultScore/resultScore";

function App() {
 

  return (
    <>
    <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/*" element={<SearchScore/>}/>
          <Route path="/signup" element={<SignupScore/>}/>
          <Route path="/result" element={<ResultScore/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
