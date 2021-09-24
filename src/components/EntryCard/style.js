import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: black;
  padding: 12px;
  border: 1px solid #4c8bf5;
  margin: 10px;
  font-family: monospace;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  color: #4c8bf5;
  padding: 12px;
  // border: 1px solid grey;
  font-family: monospace;

  div{
    margin: 0;
    padding-top: 12px;
    border-bottom: 1px solid grey;
    display: ${({ show }) => show ? "none" : "flex"};
    justify-content: space-between;
  }
`

export const Sub = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: black;
  color: #4c8bf5;
  padding: 12px;
  // border: 1px solid grey;
  font-family: monospace;

  div {
    margin: 0;
    padding-top: 12px;
    border-bottom: 1px solid grey;
    display: ${({ show }) => show ? "flex" : " none"};
    justify-content: space-between;

    a {
      text-decoration: none;
      color: #4c8bf5;

      :visited {
        color: purple;
      }
    }

  }

`

export const ShowLess = styled.button`
  margin: 0;
  font-size: x-small;
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