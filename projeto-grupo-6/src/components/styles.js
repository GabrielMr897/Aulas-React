import styled from 'styled-components'

export const boxService = styled.div`

background: ${props => props.isBlue ? '#2947A9' : '#ffffff'};
color: ${props => props.isBlue ? '#ffffff' : '#2947A9'};

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`