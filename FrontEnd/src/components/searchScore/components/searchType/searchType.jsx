import SearchLayout from "../searchLayout/searchLayout";
import { useState, useEffect } from 'react';

function createOption() {
    const [options, setOptions] = useState([]);
    useEffect(() => {
        fetch("https://projeto-jean-back.vercel.app/tipo")
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

export default function SearchType(){
     
    return(
        <>
        <SearchLayout
        title={'Escolha o tipo'}
        options={createOption()}
        link={'/curso'}
        />
        </>
    )
}