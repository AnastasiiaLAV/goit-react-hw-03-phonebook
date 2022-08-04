import styled from "styled-components"
import { Form, Field } from "formik"


export const FormStyled = styled(Form)`
margin: 10px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 400px;
    height: 200px;
    background-color: rgba(136 144 208);
    border-radius: 10px;
    box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
`
export const FieldStyled = styled(Field)`
    color: #150000;
    font-size: 20px;
    font-weight: 500;
    border-radius: 5px; 
`
export const Button = styled.button`
    width: 120px;
    background-color: #c2fbd7;
    border-radius: 100px;
    box-shadow: rgba(44, 187, 99, .2) 0 -25px 18px -14px inset,rgba(44, 187, 99, .15) 0 1px 2px,rgba(44, 187, 99, .15) 0 2px 4px,rgba(44, 187, 99, .15) 0 4px 8px,rgba(44, 187, 99, .15) 0 8px 16px,rgba(44, 187, 99, .15) 0 16px 32px;
    color: rgb(19 7 69);
    cursor: pointer;
    display: inline-block;
    font-family: 'Yanone Kaffeesatz', sans-serif;
    padding: 8px 20px;
    margin: 10px 15px;
    text-align: center;
    text-decoration: none;
    transition: all 250ms;
    border: 0;
    font-size: 15px;
    font-weight: 500;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
        &:hover {
            box-shadow: rgba(44,187,99,.35) 0 -25px 18px -14px inset,rgba(44,187,99,.25) 0 1px 2px,rgba(44,187,99,.25) 0 2px 4px,rgba(44,187,99,.25) 0 4px 8px,rgba(44,187,99,.25) 0 8px 16px,rgba(44,187,99,.25) 0 16px 32px;
            transform: scale(1.05) rotate(-1deg);
}
`