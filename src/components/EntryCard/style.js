import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  padding: 12px;
  border: 1px solid grey;
  margin: 10px;
  font-family: monospace;
`

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
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
  background-color: white;
  padding: 12px;
  // border: 1px solid grey;
  font-family: monospace;

  div {
    margin: 0;
    padding-top: 12px;
    border-bottom: 1px solid grey;
    display: ${({ show }) => show ? "flex" : " none"};
    justify-content: space-between;
  }

`

