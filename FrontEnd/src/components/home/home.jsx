import styled from 'styled-components';
import avatar from '../../assets/images/Avatar.png'

export default function Home (){
    return(
        <Body>
            <h1>Chuletayukyu</h1>
            <BoxImg>
                <img src={avatar}/>
            </BoxImg>
            
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
  height: 50%;
  width: 100%;
  border: 1px solid red;
  position: fixed;
  bottom: 0; /* Ensure absolute positioning works correctly */

  img {
    
    width: 100%;
    height: 10%; /* Set height to 100% to match the container */
    border: 2px solid black;
    
  }

  @media (max-width: 768px) {
    height: auto; /* Adjust height to auto on smaller screens */
  }
`;