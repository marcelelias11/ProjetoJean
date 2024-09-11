import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from '../assets/styles/globalStyles';
import Home from "./home/home";

function App() {

  return (
    <GlobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    </GlobalStyle>
  )
}

export default App
