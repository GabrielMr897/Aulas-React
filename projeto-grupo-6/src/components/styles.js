import styled from 'styled-components'

export const BoxService = styled.div`

background: ${props => props.isBlue ? '#2947A9' : '#ffffff'};
color: ${props => props.isBlue ? '#ffffff' : '#2947A9'};

/*&:hover {
  background-color: ${props => props.isBlue ? '#ffffff' : '#2947A9'};
  color: ${props => props.isBlue ? '#2947A9' : '#ffffff'};
}*/

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 2.7rem 5.8rem;
box-shadow: 0px 0px 27.0741px -1.46346px rgba(17, 24, 39, 0.05);
border-radius: 2.92693px;

h4 {
    font-weight: 600;
    font-size: 14.6346px;
    line-height: 17px;
    text-align: center;
    margin: 0;

}

hr {
  width: 4.3rem;
  height: 0.1rem;
  align-self: center;

  /* Neutral/100 */

  background: ${props => props.isBlue ? '#ffffff' : '#2947A9'};
}

`