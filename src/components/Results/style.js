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

`;

export const Content = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
