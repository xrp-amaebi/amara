import styled from 'styled-components'

export const Container = styled.div`
  background: #D3D3D3;
  min-height: 100vh;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ShowLess = styled.button`
  font-size: small;
  font-family: Arial;
  background-color: transparent;
  border: none;
  font-weight: bold;
  outline: none;
  color: #4c8bf5;
  letter-spacing: 0px;
  cursor: pointer;
  align-self: flex-end;
`;
