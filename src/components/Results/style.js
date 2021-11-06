import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  padding: 12px;
  display: flex;
  flex-direction: column;
`;

export const InfoWrapper = styled.div`
  position: relative;
  align-self: center;
  top: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #4c8bf5;

`;

export const Content = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  overflow-x: scroll;
  overflow-y: scroll;
  align-items: flex-start;
  // transform: rotateX(180deg);
  // border: 1px solid #4c8bf5;

  ::-webkit-scrollbar{
    width: 12px;
    height: 13px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(76, 139, 245, .2);
    outline: 1px solid #4c8bf5;
  }

  ::-webkit-scrollbar-thumb{
    border-radius: 5px;
    background: rgba(76, 139, 245, .6);

    :hover{
      background: rgba(255, 255, 255, 1);
    }
  }

  ::-webkit-scrollbar-resizer{
    background: none;
  }

  .currentLink {
    // width: 80%;
    height: 40px;
    list-style-type: none;
    display: flex;
    justify-content: center;
    font-size: x-small;
    font-family: Arial;
    letter-spacing: 1px
  }

  .currentLink a {
    padding: 6px;
    margin: 10px; 
    border-radius: 2px;
    border: 1px solid #4c8bf5;
    cursor: pointer;
    color: #4c8bf5;
    display: block;
    min-width: 20px;
  }

  .currentLink a:hover {
    color: white;
    background-color: #4c8bf5;
    border-radius: 2px;
    border: 1px solid #4c8bf5;
    cursor: pointer;
  }

  .paginateActive a {
    color: white;
    background-color: #4c8bf5;
  }

`;

export const THeader = styled.section`
  color: green;
  span {
    color: blue;
    border: 1px solid green;
  }
`
export const TContent = styled.section`
  width: 150px;
  height: 50px;
  color: white;
`

export const Table = styled.table`
  font-family: monospace;
  color: white;
  border-collapse: collapse;
  width: 100%;
  font-size: "10px";

  td, th {
    // border: 1px solid #dddddd;
    border: 3px solid #4c8bf5;
    text-align: center;
    padding: 12px;
    margin: 10px;
  }

  th {
    font-size: 12px;
    padding: 0px;
    // max-width: 150px;
  }
  
  tr:nth-child(even) {
    background-color: rgba(76, 139, 245, .2);
  }
`
