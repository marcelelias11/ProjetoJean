import styled from 'styled-components';
import logo from '../../../../assets/images/logo.png';
import nome from '../../../../assets/images/notafacil.png';
import Menu from '../../../menuButton/menuButton';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SearchLayout({ title, options, link }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCourse, setIsCourse] = useState(false);
  const [titleOp, setTitleOp] = useState(title);
  //const [selectedData, setSelectedData] = useState({ curso: '', campus: '', turno: '' }); // Estado para armazenar o objeto
  const navigate = useNavigate();

  const toggleList = () => {
      setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    console.log(link);
    if (link === '/curso') {
            localStorage.setItem('tipo', option)
            console.log(option + " tipo");
    } else if (link === '/turno') {
            localStorage.setItem('campus', option);
        console.log(option + " Campus");
    } else if (link === '/tipo') {
            localStorage.setItem('turno', option);
        console.log(option + " turno");
    }else {    
        localStorage.setItem('curso', option);
        console.log(option + " curso");
    }
    setTitleOp(option);
    // Atualiza o estado para indicar que uma opção foi escolhida
    setIsCourse(true);
    setIsOpen(false); // Fecha a lista após selecionar a opção
}

  return (
      <Body>
          <BoxImg>
              <img className='logotipo' src={nome} />
              <img className='marcaNome' src={logo} />
          </BoxImg>
          <BoxInput>
              <div className='inputContainer'><div className='miniBox' onClick={toggleList}>
                  <ion-icon name="school-outline" size="large"></ion-icon>
                  <h2>{titleOp}</h2>
                  <span className="arrow">{isOpen ? '▲' : '▼'}</span>
              </div>
              {isOpen && (
                  <ul className="curso-list">
                      {options.map((option, index) => (
                          <li onClick={() => handleOptionClick(option)} key={index}>
                              {option}
                          </li>
                      ))}
                  </ul>
              )}</div>
              
          </BoxInput>
          <BoxButton>
              {isCourse && (
                  <div onClick={() => navigate(link)} className='miniButton'>
                      Próximos Passos
                  </div>
              )}
          </BoxButton>
          <Menu />
      </Body>
  );
}

const Body = styled.div`
width:100%;
@media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

const BoxImg = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:start;
  height: 30rem;
  width: 100%;
  .logotipo {
    margin:auto;
    height: 35rem; 
    object-fit:contain;
    width:15rem;
    
  }

  .marcaNome{
    margin:auto;
    margin-top:-3.5rem;
    height:25rem;
    width:10rem;
    object-fit:contain;
  }

 



  @media (max-height: 768px) {
    
    .marcaNome{
      height:8rem;
    }
  .logotipo {
    height:10rem;
    
  }
}
`;

const BoxInput = styled.div`
    display:flex;
    z-index: 0;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    //height:auto;
    overflow: visible;
    position: relative;
    cursor:pointer;

    .inputContainer{
      width:100%;
      align-items:center;
      display:flex;
      flex-direction:column;
    }
  
    .miniBox{
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:20%;
    height:3rem;
    position:relative;
    background-color:#FFF5D6;
    border-radius: 5px;

    ion-icon {
        color: #6295F7;
        }
    }

    .arrow{
        color:#6295F7;
    }

    h2{
        font-weight:600;
        color:#6295F7;
    } 
    
    .curso-list{
      display:flex;
      z-index:0 ;
      flex-direction:column;
      //justify-content:space-around;
      align-items:center;
      margin-top:0rem;
      background-color:#FFF5D6;
      width:20%;
      max-height:10rem;
      //z-index:1;
      position:relative;
      color:#757575;
      font-weight:600;
      overflow:scroll;

    li:hover{
        
        color:#6295F7;
    }

    li{
      position: relative;
  margin-bottom: 10px;
  text-align: center;
    }
    
  }
  .curso-list::-webkit-scrollbar {
    width: 0px;
}

  @media (max-width: 768px) {
      width:100%;
      .miniBox{
        width:70%;
      }
      .curso-list{
        width:70%;
      }
}
@media (max-height: 768px) {
    justify-content:start;
    height:1.5rem;
      .miniBox{
        width:20%;
      }
      .curso-list{
        width:20%;
        //max-height:7rem;
        //margin-top:3rem;
      }
  }
`

const BoxButton = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    width:100%;
    height:8rem;
    margin-top: 5rem;
    margin-bottom: 8rem;

    .miniButton{
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:20%;
    height:3rem;
    border-radius:10px;
    background-color:#FDB786;
    font-weight:600;
    color:black;
    cursor:pointer;
    }
    @media (max-width: 768px) {
      width:100%;
      .miniButton{
        width:40%;
      }
    }
    @media (max-height: 768px) {
      width:100%;
      align-items:start;
      .miniButton{
        width:20%;
      }
}
`
    
