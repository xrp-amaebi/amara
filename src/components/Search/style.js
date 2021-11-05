import styled from 'styled-components'

export const EntrySearch = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Arial;
    max-width: 100%;

    div:nth-child(2){
        width: 100%;
        font-size: small;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: #4c8bf5;
        padding: 12px;
    }

    div:nth-child(3){
        font-size: small;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #4c8bf5;
        padding: 12px;
    }
`
export const InfoSpan = styled.div`
    color: #4c8bf5; 
    border: 1px solid #4c8bf5;
    padding: 7px;
    border-radius: 20px; 
    margin-left: 6px;

    :hover{
        background-color: #4c8bf5;
        color: white;
    }
`
export const InputWrapper = styled.div`
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    button {
        display: flex;
        color: rgba(76, 139, 245, .5);
        background: rgba(76, 139, 245, .2);
        border: 1px solid #4c8bf5;
        border-left: none;
        height: 28px;
        align-self: center;
        font-size: x-small;
        letter-spacing: 1px;
        cursor: pointer;
        transition: .4s ease-in-out;
        align-items: center;
        justify-content: space-around;

        :hover {
            color: white;
        }
    }
    
`
export const Input = styled.input`
    position: relative;
    width: 35%;
    padding: 5px;
    border: 1px solid #4c8bf5;
    border-right: none;
    background: rgba(76, 139, 245, .2);
    color: rgba(76, 139, 245, .4);

    :focus {
        outline: 1px solid #4c8bf5;
        border: none;
        padding: 5px;
    }
`
export const FilterButton = styled.button`
    display: flex;
    padding: 12px;
    color: ${({ _active }) => _active ? "white" : "#4c8bf5"};
    background: ${({ _active }) => _active ? "#4c8bf5" : "none"};
    border: 1px solid #4c8bf5;
    height: 20px;
    align-self: center;
    font-size: x-small;
    letter-spacing: 1px;
    cursor: pointer;
    border-radius: 25px;
    transition: .4s ease-in-out;
    align-items: center;
    justify-content: space-around;
    margin-left: 10px;

    :hover{
        color: white;
        background: #4c8bf5;
    }
`