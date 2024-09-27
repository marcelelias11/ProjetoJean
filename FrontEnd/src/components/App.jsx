import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from '../assets/styles/globalStyles';
//import Home from '../components/home/home'
//import Search from "./searchScore/searchLayout/searchLayout";
//import SearchCourse from "./searchScore/components/searchCourse/searchCourse";
import SearchScore from "./searchScore/components";
import SignupScore from "./signupScore/signupScore";

function App() {

  return (
    <>
    <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignupScore/>}/>
          <Route path="/*" element={<SearchScore/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
