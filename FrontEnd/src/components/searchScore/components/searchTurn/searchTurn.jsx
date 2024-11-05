import SearchLayout from "../searchLayout/searchLayout";
import { useState, useEffect } from 'react';

function createOption() {
    const [options, setOptions] = useState([]);
    useEffect(() => {
        fetch("https://projetojean-1.onrender.com/turno")
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

export default function SearchTurn(){
     
    return(
        <>
        <SearchLayout
        title={'Escolha o turno'}
        options={createOption()}
        link={'/tipo'}
        />
        </>
    )
}