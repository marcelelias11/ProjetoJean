import styled from "styled-components";
import avatar from "../../assets/images/avat.png";
import emojiH from "../../assets/icons/emojiH.png";
import emojiS from "../../assets/icons/emojiS.png";
import Menu from "../menuButton/menuButton";
import { useState, useEffect } from 'react';
export default function ResultScore(){
    const [notasCorte, setNotasCorte] = useState(0)
    let nome = localStorage.getItem('curso'); 
    let notas = JSON.parse(localStorage.getItem('notes'));
    let notassum = 0
   
    for (let x in notas){
      if (notas[x] == true){
        break
      }
      let nota = String(notas[x]).replace(',', '.');
      console.log(`Nota ${x}: ` + nota)
      notassum += Number(nota)
      console.log(notassum)
    }
    let notamedia = notassum/(Object.keys(notas).length-1)
    console.log("notas.length: " + Object.keys(notas).length)
    console.log(nome);
    console.log(notas);
    console.log(notamedia)
    useEffect(() => {
      fetch("http://localhost:8080/result", {
          method: "POST",
          mode: "cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            curso: localStorage.getItem("curso"),
            campus: localStorage.getItem("campus"),
            tipo: localStorage.getItem("tipo"),
          }),
        })
    .then(async function (response) {
      return await response.json();
    })
    .then(async function (text) {
      console.log(text)
      setNotasCorte(text)
    })
    .catch((error) => {
      console.error(error);
    });
   }, [])
    return (
      <>
        <Body>
          <img className="emoji" src={notamedia >= notasCorte[0] ? emojiH : emojiS} />
          <BoxResults notamedia={notamedia} notasCorte={notasCorte}>
            <h1>Sua nota é</h1>
            <h2>{notamedia}</h2>
            <h1>Status</h1>
            <h2>{notamedia >= notasCorte[0] ? "Aprovado" : "Reprovado"}</h2>
            <h1>Nota de corte</h1>
            <h2>{notasCorte[0]}</h2>
          </BoxResults>
          <Footer>
            <div className="balao">
              <p>
                {notamedia >= notasCorte[0]
                  ? `Parabéns você passaria no curso de ${nome} com essa nota !`
                  : `Infelizmente você não passaria no curso de ${nome} com essa nota !`}
              </p>
            </div>
            <img src={avatar} className="avatar" />
          </Footer>
        </Body>
        <Menu />
      </>
    )
}

const Body = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:space-around;
.emoji{
    margin:auto;
    margin-top: 15px;
    width:10%;
}
@media (max-width: 768px) {
   height: 52rem;
   align-items:center;
   justify-content:center;
    .emoji{
        width:30%;
    }
}
`

const Footer = styled.div`
  position: relative;
  top: -150px;
  //margin-top:-150px;
  left: 0;
  width: 40%;
  div{
    width:80%;
    height:10rem;
  }

  .botao{
    right: 50%;
    margin-right: -10px;
    z-index:1;
  }

  .avatar{
    width:13rem;
  }

  .balao {
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    color:#0D99FF;
    font-weight:700;
    font-size: 28px;
    text-align:center;
    margin-left:3.5rem;
    ::before {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent; 
    } 
    p{
        width: 80%;
    }
}
@media (max-width: 768px) {
   //position: fixed;
   //margin-top: -188rem;
  //bottom: 0;
  //left: 0;
  top: 0;
  width: 100%;
  //display:none;
  div{
    width:80%;
    height:6rem;
  }

  .botao{
    right: 50%;
    margin-right: -10px;
    //z-index:1;
  }

  .avatar{
    width:9rem;
  }
    .balao {
    position: relative;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    color:#0D99FF;
    font-weight:700;
    font-size: 20px;
    text-align:center;
    margin-left:3.5rem;
    ::before {
    content: "";
    position: absolute;
    //bottom: -10px;
    //left: 50%;
    margin-left: -10px;
    border-width: 10px;
    border-style: solid;
    border-color: transparent transparent #fff transparent; 
    } 
    p{
        width:70%;
    }
}
  }
  
  @media (max-width: 1280px) {
    //margin-top: -5rem;
  }
  @media (max-height: 1080px) {
    //margin-top:-338px;
  }
  @media (max-height: 1080px) {
    margin-top:-338px;
  }
`

const BoxResults = styled.div`
position:relative;
display:flex;
flex-direction:column;
justify-content:space-around;
    text-align:center;
    //margin-top:20px;
    width:100%;
    height:25rem;
    font-size:45px;
    font-weight:700;
    h1{
        color:#1E1E1E;
    }
    h2{
      color: ${(props) => (props.notamedia >= props.notasCorte[0] ? '#14AE5C' : 'red')};
    }

    @media (max-width: 768px) {
        position: absolute;
        //margin-bottom: 25rem;
        width:100%;
        height:17rem;
        h1{
        font-size: 25px;
        color:#1E1E1E;
    }
    h2{
        font-size: 28px;
        color: ${(props) => (props.notamedia >= props.notasCorte[0] ? '#14AE5C' : 'red')};
    }
    }

`