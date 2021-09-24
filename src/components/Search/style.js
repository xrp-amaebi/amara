import styled from 'styled-components'

export const EntrySearch = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Arial;

    div:nth-child(2){
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
export const InfoSpan = styled.span`
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
    width: 90%;

    button {
        display: flex;
        padding: 10px;
        color: #4c8bf5;
        background: none;
        border: 1px solid #4c8bf5;
        height: 38px;
        align-self: center;
        font-size: x-small;
        letter-spacing: 1px;
        cursor: pointer;
        border-radius: 2px;
        transition: .4s ease-in-out;
        align-items: center;
        justify-content: space-around;
        margin-left: 10px;

        :hover{
            color: white;
            background: #4c8bf5;
        }
    }
    
`

export const Input = styled.input`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 80%;
    padding: 10px;
    border: 1px solid #4c8bf5;
    border-radius: 2px;

    :focus{
        outline: 1px solid #4c8bf5;
        border-radius: 2px;
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