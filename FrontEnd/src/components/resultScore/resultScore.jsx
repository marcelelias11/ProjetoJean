import styled from "styled-components";
import avatar from "../../assets/images/avat.png";
import emojiH from "../../assets/icons/emojiH.png";
import Menu from "../menuButton/menuButton";
export default function ResultScore(){
    let nome = localStorage.getItem('curso'); 
    console.log(nome)
    return(
        <>
    <Body>
        <img className="emoji" src={emojiH}/>
    <BoxResults>
        <h1>Sua nota é:</h1>
        <h2>543</h2>
        <h1>Status</h1>
        <h2>Aprovado</h2>
        <h1>Nota de corte:</h1>
        <h2>Aprovado</h2>
    </BoxResults>
    <Footer>
        <div className="balao">
            <p>Parabéns você passaria no curso de {nome} com essa nota !</p>
        </div>
            <img src={avatar} className="avatar"/>
    </Footer>
    </Body>
    <Menu/>
    
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
    .emoji{
        width:30%;
    }
}
`

const Footer = styled.div`
  position: relative;
  margin-top:-150px;
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
   // position: fixed;
   margin-top: 1.5rem;
    border:1px solid black;
  //bottom: 0;
  //left: 0;
  width: 100%;

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
    bottom: -10px;
    left: 50%;
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
    margin-top: -5rem;
  }
`

const BoxResults = styled.div`
display:flex;
flex-direction:column;
justify-content:space-around;
    text-align:center;
    margin-top:20px;
    width:100%;
    height:25rem;
    font-size:45px;
    font-weight:700;

    h1{
        color:#1E1E1E;
    }
    h2{
        color:#14AE5C;
    }

    @media (max-width: 768px) {
        //margin-bottom: 25rem;
        width:100%;
        height:17rem;
        h1{
        font-size: 25px;
        color:#1E1E1E;
    }
    h2{
        font-size: 28px;
        color:#14AE5C;
    }
    }

`
