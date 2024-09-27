import styled from 'styled-components';
import logo from '../../../../assets/images/logo.png';
import nome from '../../../../assets/images/notafacil.png';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function SearchLayout ({title, options, link}){
    const [isOpen, setIsOpen] = useState(false);
    const [isCourse, setIsCourse] = useState(false);
    // const cursos = ['Filosofia', 
    //     'Geografia', 'Engenharia', 
    //     'Ciência da Computação', 
    //     'Arquitetura', 'Física', 
    //     'Literatura', 'Astronomia', 
    //     'Medicina'];
    const navigate = useNavigate()
    console.log(link)
  
    const toggleList = () => {
        setIsOpen(!isOpen);
      };

      const toggleList02 = () => {
        setIsCourse(!isCourse);
      };
    return(
        <Body>
            <BoxImg>
                <img className='logotipo' src={nome}/>
                <img className='marcaNome' src={logo}/>
            </BoxImg>
            <BoxInput>
              <div className='miniBox' onClick={toggleList}>
              <ion-icon name="school-outline" size="large"></ion-icon>
                <h2>{title}</h2>
                <span className="arrow">{isOpen ? '▲' : '▼'}</span>
              </div>
              {isOpen && (
                        <ul className="curso-list">
                        {options.map((option, index) => (
                            <li onClick={toggleList02} key={index}>{option}</li>
                        ))}
                        </ul>
                    )}
            </BoxInput>
            <BoxButton>
            {isCourse && (
                <div onClick={()=> navigate({link})} className='miniButton'>
                        Próximos Passos
                    </div>
            )}      
            </BoxButton>
            
        </Body>
        
    )
}

const Body = styled.div`

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
    margin-bottom:-11rem;
    width: 150%;
    height: 35rem; 
    padding-right: 12rem;
  }

  .marcaNome{
    margin-top:-3.5rem;
    width:25rem;
    height:25rem;
  }

 



  @media (max-width: 768px) {
    /* Adjust height to auto on smaller screens */
  }
`;

const BoxInput = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    height:12rem;
    overflow: visible;
    position: relative;
  

    .miniBox{
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:50%;
    height:3rem;
    position:fixed;
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
        font-family:"Arial";
        font-weight:600;
        color:#6295F7;
    } 
    
    .curso-list{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    margin-top:13rem;
    background-color:#FFF5D6;
    width:75%;
    max-height:10rem;
    z-index:1;
    position:absolute;
    color:#757575;
    font-weight:600;
    font-family:"Arial";
    overflow:scroll;

    li:hover{
        background-color:#6295F7;
        color:#FFFFFF;
    }

    li{
        margin-top:10px;
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

    .miniButton{
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:40%;
    height:3rem;
    position:fixed;
    border-radius:10px;
    background-color:#FDB786;
    font-family:'Arial';
    font-weight:600;
    color:black;
    }
`
    
