import styled from 'styled-components'

export const EntrySearch = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Arial;

    div:nth-child(2){
        font-family: Arial;
        font-size: small;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #4c8bf5;
        padding: 12px;
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
    padding: 8px;
    color: #4c8bf5;
    background: none;
    border: 1px solid #4c8bf5;
    height: 38px;
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