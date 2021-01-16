import styled from 'styled-components';

export const CellButtonStyles = styled.div`
  background: linear-gradient(to bottom right, #37cfdc 0%, #5a88e5 100%);
  width: 30px;
  height: 30px;
  text-align: center;
  transition: all 0.3s ease;
  
  
  
  button {
    background-color: var(--background-grey);
    border: 0;
    width: 26px;
    height: 26px;

    :hover {
    background: linear-gradient(to bottom right, #37cfdc 0%, #5a88e5 100%);
    transform: scale(1.3);
  }
  }
`;
