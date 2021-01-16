import styled from 'styled-components';

export const CellButtonStyles = styled.div`
  --gradient-start: var(--gradient-blue-1);
  --gradient-end: var(--gradient-blue-2);
  
  background: linear-gradient(to bottom right, var(--gradient-start) 0%, var(--gradient-end) 100%);
  width: 30px;
  height: 30px;
  text-align: center;
  transition: all 0.3s ease;
  display: table-cell;
  vertical-align: middle;
  
  button {
    background-color: var(--background-grey);
    border: 0;
    width: 26px;
    height: 26px;
    vertical-align: middle;

    :hover {
      background: linear-gradient(to bottom right, var(--gradient-start) 0%, var(--gradient-end) 100%);
      transform: scale(1.3);
    }

    :focus {
      outline: none;
    }
  }

  &.🛑 {
    --gradient-blue-1: var(--gradient-red-1);
    --gradient-end: var(--gradient-red-2);
  }

  &.✅ {
    --gradient-blue-1: var(--gradient-green-1);
    --gradient-end: var(--gradient-green-2);
  }

  &.❓ {
    --gradient-blue-1: var(--gradient-yellow-1);
    --gradient-end: var(--gradient-yellow-2);
  }
  
`;
