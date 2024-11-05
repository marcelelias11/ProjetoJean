import styled from 'styled-components';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/notafacil.png'
import nat from '../../assets/icons/01.png'
import nat2 from '../../assets/icons/011.png'
import hu from '../../assets/icons/02.png'
import hu2 from '../../assets/icons/022.png'
import ling from '../../assets/icons/03.png'
import ling2 from '../../assets/icons/033.png'
import mat from '../../assets/icons/04.png'
import mat2 from '../../assets/icons/044.png'
import red from '../../assets/icons/05.png'
import red2 from '../../assets/icons/055.png'
import Menu from '../menuButton/menuButton';

export default function SignupScore (){
  const navigate = useNavigate();
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem('notes');
    return savedNotes ? JSON.parse(savedNotes) : {
      natureza: '',
      humano: '',
      ling: '',
      mat: '',
      red: '',
      signup: false
    };
  });
  
  const [tempNotes, setTempNotes] = useState({ ...notes });
  const [errorMessage, setErrorMessage] = useState('');

  const updateTempNote = (key, value) => {
    setTempNotes((prev) => ({ ...prev, [key]: value }));
  };

  function validateDecimal(numero) {
    const numberPointer = numero.replace(',', '.');
    const num = parseFloat(numberPointer);
    return !isNaN(num) && num % 1 !== 0;
  }

  const saveNotes = (event) => {
    event.preventDefault();
    
    const { natureza, humano, ling, mat, red } = tempNotes;
    if (!validateDecimal(natureza) || !validateDecimal(humano) || !validateDecimal(ling) || 
        !validateDecimal(mat) || !validateDecimal(red)) {
      setErrorMessage('Todos os campos devem ser números decimais válidos.');
      return; 
    }

    setErrorMessage(''); 
    const updatedNotes = { ...tempNotes, signup: true };
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };
  function backLocal(){
    localStorage.removeItem("notes");
    location.reload();
  }
  const { signup } = notes;

  return (
    <Container>
         {!signup ? (
          <>
          <BoxImg>
            <img className='marcaNome' src={logo}/>
          </BoxImg>
      <Title>Minhas Notas</Title>
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}
      <Form onSubmit={saveNotes}>
        <InputContainer signup={signup}>
        <img className='icon' src={nat}/>
          <Input 
          signup={signup} 
          type="text" 
          placeholder="Ciências da Natureza" 
          value={tempNotes.nat}
          onChange={(e) => updateTempNote('natureza', e.target.value)}
          />
        </InputContainer>
        <InputContainer signup={signup}>
        <img className='icon' src={hu}/>
          <Input 
            signup={signup} 
            type="text" 
            placeholder="Ciências Humanas"
            value={tempNotes.humano}
            onChange={(e) => updateTempNote('humano', e.target.value)}
            />
        </InputContainer>
        <InputContainer signup={signup}>
        <img className='icon' src={ling}/>
          <Input 
            signup={signup} 
            type="text" 
            placeholder="Linguagens, Códigos e suas Tecnologias" 
            value={tempNotes.ling}
            onChange={(e) => updateTempNote('ling', e.target.value)}
            />
        </InputContainer>
        <InputContainer signup={signup}>
        <img className='icon' src={mat}/>
          <Input 
            signup={signup} 
            type="text" 
            placeholder="Matemática e suas tecnologias" 
            value={tempNotes.mat}
            onChange={(e) => updateTempNote('mat', e.target.value)}
            />
        </InputContainer>
        <InputContainer signup={signup}>
          <img className='icon' src={red}/>
          <Input 
            signup={signup} 
            type="text" 
            placeholder="Redação" 
            value={tempNotes.red}
            onChange={(e) => updateTempNote('red', e.target.value)}
            />
        </InputContainer>
        <div className='boxButtons'>
         <Button type="submit">Salvar Notas</Button> 
        </div>
        
      </Form>
      </>
      ):(
      <>
      <BoxImg>
            <img className='marcaNome' src={logo}/>
          </BoxImg>
      <Title>Minhas Notas</Title>
      <Form>
        <InputContainer signup={signup}>
        <img className='icon' src={nat2}/>
          <Input signup={signup} type="text" placeholder={notes.natureza} />
        </InputContainer>
        <InputContainer signup={signup}>
        <img className='icon' src={hu2}/>
          <Input signup={signup} type="text" placeholder={notes.humano} />
        </InputContainer>
        <InputContainer signup={signup}>
        <img className='icon' src={ling2}/>
          <Input signup={signup} type="text" placeholder={notes.ling} />
        </InputContainer>
        <InputContainer signup={signup}>
        <img className='icon' src={mat2}/>
          <Input signup={signup} type="text" placeholder={notes.mat} />
        </InputContainer>
        <InputContainer signup={signup}>
          <img className='icon' src={red2}/>
          <Input signup={signup} type="text" placeholder={notes.red} />
        </InputContainer>
        <div className='boxButtons'>
         <Button onClick={() => navigate('/result')}>Salvar Notas</Button>
        <button onClick={backLocal} className='back'>Voltar</button> 
        </div>
        
      </Form>
      </>)}
      <Menu/>
    </Container>
  );
};

const Container = styled.div`
@media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
    height:55rem;
  }
`

const Title = styled.h2`
  height: 3rem;
  margin-bottom: 20px;
  opacity: 0;
  @media (max-width: 768px) {
    display:flex;
    justify-content:center;
    align-items:center;
    height: 3rem;
    font-size: 24px;
    margin-bottom: 20px;
    font-weight: 700;
    color:#0D99FF;
  }
`;

const Form = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;
  width: 100%;
  height: 30rem;

  .back{
    margin:auto;
    background-color: #757575;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  width:40%;
  cursor: pointer;
  margin-bottom: 10px;
  }

  .boxButtons{
    display:flex;
    flex-direction:column;
    width:60%;
    height:5rem;
    font-weight:700;
    margin-top:2rem;

    .back{
    margin:auto;
    background-color: #757575;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  width:34%;
  cursor: pointer;
  margin-bottom: 10px;
  font-weight:700;
  }
  }
  @media (max-width: 768px) {
    .boxButtons{
      width:80%;
    }
  }
`;

const InputContainer = styled.div`
  display:flex;

  margin:auto;
  margin-bottom: 10px;
  background-color:${props => props.signup ? '#0D99FF' : '#FFF5D6'};
  width:20%;
  height:3.3rem;

  .icon{
    object-fit:contain;
    width:20%;
    height:3rem;
    margin-left:0.5rem;
  }
  .b{
    background-color: red;
  }

  ::placeholder{
    color:${props => props.signup ?  '#FFF5D6' : '#0D99FF'};
    font-weight:750;
    font-size: ${props => props.signup ? '22px' : '11px'};
    padding-left:${props => props.signup ? 'none' : '20px'};
  }
  @media (max-width: 768px) {
   width:75%;
  }
`;


const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  background-color:${props => props.signup ? '#0D99FF' : '#FFF5D6'};
  border:none;

 &[type=text]{
  color:${props => props.signup ? '#FFF5D6' : '#0D99FF'};
    font-weight:750;
    font-size: ${props => props.signup ? '22px' : '11px'};
    padding-left:${props => props.signup ? 'none' : '20px'};
  }
`;

const Button = styled.button`
  margin:auto;
  background-color: #0D99FF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  width:34%;
  cursor: pointer;
  margin-bottom: 10px;
  font-weight:700;

  @media (max-width: 768px) {
   width:80%;
  }

`;

const BoxImg = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:start;
  height: 10rem;
  width: 100%;
  .logotipo {
    margin:auto;
    margin-bottom:-11rem;
    width: 80%;
    height: 35rem; 
    padding-right: 12rem;
  }

  .marcaNome{
    margin:auto;
    object-fit:contain;
    margin-top:2.5rem;
    width:10%;
    height:25rem;
  }

  @media (max-width: 768px) {
    height: 15rem;
    width: 100%;

    .marcaNome{
    width:50%;
    height:25rem;
    }
  }
  @media (max-height: 768px) {
    height: 4.5rem;
    width: 100%;

    .marcaNome{
    margin-top:0.5rem;
    margin-bottom:none;
    }
  }
`;