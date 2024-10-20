import styled from 'styled-components';
import { Link } from 'react-router-dom';
import search from '../../assets/icons/search.png';
import signup from '../../assets/icons/signup.png';
import premio from '../../assets/icons/premio.png';
import { useState } from 'react';

export default function Menu() {
  // Estado para armazenar as cores de cada item
  const [colors, setColors] = useState({
    signup: '#FFF5D6',
    search: '#FFF5D6',
    result: '#FFF5D6',
  });

  // Função para mudar a cor do item clicado
  const handleColorChange = (item) => {
    setColors(prevColors => ({
      ...prevColors,
      [item]: prevColors[item] === '#FFF5D6' ? '#FEE1B5' : '#FFF5D6'
    }));
  };

  return (
    <>
      <Footer>
        <div className='select' style={{ backgroundColor: colors.signup }} onClick={() => handleColorChange('signup')}>
          <Link to="/signup"><img src={signup} /></Link>
        </div>
        <div className='select' style={{ backgroundColor: colors.search }} onClick={() => handleColorChange('search')}>
          <Link to="/teste">
            <img src={search} />
          </Link>
        </div>
        <div className='select' style={{ backgroundColor: colors.result }} onClick={() => handleColorChange('result')}>
          <Link to="/result"><img src={premio} /></Link>
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