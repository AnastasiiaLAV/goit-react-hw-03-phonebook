import styled from "styled-components"

export const Label = styled.label`
    font-size: 22px;
    font-weight: 500;
`
export const Input = styled.input`
    padding: 0 10px;
    margin: 0 20px;
    color: #150000;
    font-size: 20px;
    font-weight: 400;
    border-radius: 5px; 
    &:hover, &:focus{
        box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
    }
`