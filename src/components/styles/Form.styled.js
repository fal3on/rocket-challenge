import styled from "styled-components";

export const Form = styled.form`
    background-color: lightgray;
    padding: 1rem;
    width: 75%;
    border-radius: 5px;

    & h3 {
        margin-bottom: 1rem;
    }
`;

export const FormTitle = styled.h3`
    font-weight: bold;
`;

export const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FormLabel = styled.label`
    display: none;
`;

export const FormInput = styled.input`
    width: 100%;
    padding: .8rem;
    margin-bottom: .5rem;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: lightgray;
    & :focus {
        background-color: lightgray;
    }
    & :disabled {
        background-color: lightgray;
        border-color: lightgray;
    }
`;

export const SubmitButton = styled.button`
    display: none;
`;

export const ErrorBlock = styled.div` 
    color: red;
    font-size: .8rem;
    margin-bottom: .5rem;
`;