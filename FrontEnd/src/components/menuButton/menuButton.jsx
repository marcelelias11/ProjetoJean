import styled from 'styled-components';
import { Link } from 'react-router-dom';
import search from '../../assets/icons/search.png';
import signup from '../../assets/icons/signup.png';
import premio from '../../assets/icons/premio.png';
import form from '../../assets/icons/form.svg';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Menu() {
  const navigate = useNavigate()
  // Estado para armazenar as cores de cada item
  const [colors, setColors] = useState({
    signup: '#FFF5D6',
    search: '#FFF5D6',
    result: '#FFF5D6',
  });

  let nome = sessionStorage.getItem('curso'); 
    let notas = JSON.parse(sessionStorage.getItem('notes'));

    function checkNotas(){
      if (!notas || !nome) {
      alert('Falta notas e ou curso !') // Navigate back to the previous page
    } else{
      navigate('/result')
    }
    }
    


  // Função para mudar a cor do item clicado
  const handleColorChange = (item) => {
    setColors(prevColors => ({
      ...prevColors,
      [item]: prevColors[item] === '#FFF5D6' ? '#FEE1B5' : '#FFF5D6'
    }));
  };

  function formNav() {
    if (confirm('Gostou do nosso app? Caso sim, aperte "ok" para responder um formulário de avaliação. Você irá nos ajudar bastante!')){
      location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdt6T98lugjbltN5O40srID4La8eYLtqZUIvIFMOPO553WqTA/viewform?fbzx=-8078658152923075375";
    }
  }

  return (
    <>
      <Footer>
        <div className='select' style={{ backgroundColor: colors.signup }} onClick={() => handleColorChange('signup')}>
          <Link to="/signup"><img src={signup} /></Link>
        </div>
        <div className='select' style={{ backgroundColor: colors.search }} onClick={() => handleColorChange('search')}>
          <Link to="/campus">
            <img src={search} />
          </Link>
        </div>
        <div className='select' style={{ backgroundColor: colors.result }} onClick={() => handleColorChange('result')}>
          <div onClick={checkNotas}><img src={premio} /></div>
        </div>
        <div className='select' style={{ backgroundColor: colors.result }} onClick={() => handleColorChange('result')}>
          <div onClick={formNav}><img src={form} /></div>
        </div>
      </Footer>
    </>
  );
}

const Footer = styled.footer`
  height: 5rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  overflow: visible;
  margin: auto;
  width: 100%;
  bottom: 0;
  position: fixed;
  background-color: #FFF5D6 !important;
  

  .select {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 33%;
    height: 5rem;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px; 
    
    cursor: pointer;
    
    &:hover {
      opacity: 0.8; 
    }
  }

  @media (min-width: 768px) {
    padding: 20px;
    height: auto;
    background-color: #F2F2F2; /* Cor do fundo em telas maiores */
    
    h1 {
      color: #52B6FF;
      font-size: 24px;
    }
  }
`;