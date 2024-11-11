import SearchLayout from "../searchLayout/searchLayout";
import { useState, useEffect } from 'react';

function createOption() {
    const [options, setOptions] = useState([]);
    console.log(sessionStorage.getItem("campus"));
    console.log(sessionStorage.getItem("tipo"));
    useEffect(() => {
        fetch("https://projeto-jean-back.vercel.app/curso", {
            method: "POST",
            mode: "cors",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              campus: sessionStorage.getItem("campus"),
              tipo: sessionStorage.getItem("tipo"),
              turno: sessionStorage.getItem("turno")
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