import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: white;
  padding: 12px;
  border: 1px solid grey;
  margin: 10px;
  font-family: monospace;

  div{
    min-width: 60px;
    align-items: center;
    justify-items: center;
    border: 1px solid grey;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    maargin-right: 10px;
  }
`