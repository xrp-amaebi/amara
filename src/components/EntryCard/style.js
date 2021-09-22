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

  div {
    min-height: 30px;
    align-items: center;
    justify-content: space-between;
    border: 1px solid grey;
    border-radius: 3px;
    display: flex;
    margin-top: 10px;
    padding: 10px;
  }
`