import styled from 'styled-components';
import logo from '../../assets/images/notafacil.png'

export default function SignupScore (){
  return (
    <Container>
         <BoxImg>
                <img className='marcaNome' src={logo}/>
            </BoxImg>
      <Title>Minhas Notas</Title>
      <Form>
        <InputContainer>
          <Input type="text" placeholder="Ciências da Natureza" />
        </InputContainer>
        <InputContainer>
          <Input type="text" placeholder="Ciências Humanas" />
        </InputContainer>
        <InputContainer>
          <Input type="text" placeholder="Linguagens, Códigos e suas Tecnologias" />
        </InputContainer>
        <InputContainer>
          <Input type="text" placeholder="Matemática e suas tecnologias" />
        </InputContainer>
        <InputContainer>
          <Input type="text" placeholder="Redação" />
        </InputContainer>
        <Button>Salvar Notas</Button>
        <Button className='back'>Voltar</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`

@media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display:flex;
  flex-direction:column;
  align-items:center;
  width: 100%;

`;

const InputContainer = styled.div`
  margin:auto;
  margin-bottom: 10px;
  background-color:#FFF5D6;
  width:60%;
`;


const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  width: 100%;
  background-color:#FFF5D6;
  border:none;
`;

const Button = styled.button`
  margin:auto;
  background-color: #0D99FF;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  width:40%;
  cursor: pointer;
  margin-bottom: 10px;

  .back{
    background-color: #757575;
  }
`;

const BoxImg = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:start;
  height: 20rem;
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