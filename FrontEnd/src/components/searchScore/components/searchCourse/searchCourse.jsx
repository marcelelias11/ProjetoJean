import SearchLayout from "../searchLayout/searchLayout";
import { useState, useEffect } from 'react';

function createOption() {
    const [options, setOptions] = useState([]);
    console.log(localStorage.getItem("campus"));
    console.log(localStorage.getItem("tipo"));
    useEffect(() => {
        fetch("https://projetojean-1.onrender.com/curso", {
            method: "POST",
            mode: "cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              campus: localStorage.getItem("campus"),
              tipo: localStorage.getItem("tipo"),
            }),
          })
      .then(async function (response) {
        return await response.json();
      })
      .then(async function (text) {
        console.log(text)
        setOptions(text)
      })
      .catch((error) => {
        console.error(error);
      });
     }, []) 
    return options
}

export default function SearchCourse(){
    const options = createOption()
    return(
        <>
        <SearchLayout
        title={'Escolha o curso'}
        options={options}
        link={'/signup'}
        />
        </>
    )
}