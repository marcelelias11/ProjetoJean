import styled from 'styled-components'; //Permite a escrita de CSS no Javascript
import avatar from '../../assets/images/Avatar.png' //Importa imagens utilizadas
import logo from '../../assets/images/logo.png' //Importa imagens utilizadas
import notafacil from '../../assets/images/notafacil.png' //Importa imagens utilizadas
import { useNavigate } from 'react-router-dom'; //Permite a navegação entre múltiplas páginas
import { useState } from 'react'; //Uso de estados do React para armazenar informações de forma dinâmica

export default function Home (){ //Exporta a página "Home" para ser utilizada no roteamento
  const [ fala, setFala] = useState('Seu futuro começa aqui !') //Estado que armazena o texto utlizado na fala
  const [ next, setNext] = useState(true) //Estado que indica qual tela será mostrada na página inicial
  const [sumi, setSumi] = useState(1); //Estado que dita qual fala será utilizada na segunda tela da página

  const navigate = useNavigate() //Componente que permite a navegação

  function Fala(sum){ //Função que atualiza as falas na página inicial
    const newSumi = sumi + sum; //Avança o estado
    setSumi(newSumi); //Armazena o novo estado
    console.log(newSumi) 

    if(newSumi === 2){ //Apresentam as falas em ordem sequencial
      console.log(newSumi + ' if 1 Chegou aqui !')
      setFala('Personalize sua busca e descubra quais faculdades e cursos estão ao seu alcance.')
    } else if (newSumi === 3){
      setFala('Nosso app te mostra a nota de corte ideal para você realizar o seu sonho.')
      console.log(newSumi + ' if 2 Chegou aqui !')
    } else{
      console.log(newSumi + ' Else Chegou aqui !')
      setFala('Seu futuro começa aqui !')
      setSumi(1)
      navigate('/campus')
    }


  }
    return(
        <Body>
          {next ? ( //Escolhe qual tela será utilizada
            <>
             <BoxLogo>
            <img className='nome' src={logo}/>
            <img className='logo' src={notafacil}/>
          </BoxLogo>
          <Button onClick={()=> setNext(false)}>Próximos passos</Button>
            </>
           ): (
           <>
           
           <div className="balao">
              <p onClick={()=>Fala(1)}>{fala}</p>
          </div>
          <BoxImg>
            <img src={avatar}/>
          </BoxImg>
           </>
           )
          }
        </Body>
        
    )
}
//CSS abaixo
const Body = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex-direction: column;
.balao {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
    color:#0D99FF;
    font-weight:700;
    font-size: 28px;
    text-align:center;
    margin-top:8rem;
    width:40%;
    min-height: 12rem;
    cursor:pointer;
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
        margin-top:1rem;
        width:70%;
    }
}

@media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;

    .balao{
      width:80%;
    }
    p{
      width:100%;
    }
  }
`

const BoxImg = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:start;
  height: 50%;
  width: 100%;
  position: fixed;
  bottom: 0; /* Ensure absolute positioning works correctly */

  img {
    margin:auto;
    width: 20%;
    height: 100%; /* Set height to 100% to match the container */
  }

  @media (max-width: 768px) {
    height: auto; 
    img {
    width: 100%;
    height: 10%; 
  }
  }
`;

const BoxLogo = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    width:100%;
    height: 35rem;
    margin-top:4rem;
  .nome{
    object-fit:contain;
    width:45%;
    height:15em;
  }

  .logo{
    object-fit:contain;
    width:85%;
    height:20em;
  }

  @media (max-width: 768px) {
    
  }
`
const Button = styled.button`
  margin:auto;
  margin-top:10rem;
  background-color: #FDB786;
  color: black;
  height: 2.5rem;
  border: none;
  border-radius: 10px;
  width:15%;
  cursor: pointer;
  margin-bottom: 20rem;
  font-weight:700;
  font-size:15px;

  @media (max-width: 768px) {
    margin-top: 5rem;
    width:50%;
  }

`;