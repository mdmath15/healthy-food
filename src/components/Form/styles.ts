import styled from "styled-components"

export const Form = styled.form`
    max-width: 512px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    border: 4px solid ${(props) => props.theme.colors.green};
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.grey};
    border-radius: 4px;

    input {
        width: 100%;
        padding: 4px;
        font-size: 16px;
        border: 1px solid ${(props) => props.theme.colors.green};

        ::placeholder {
            color: ${(props) => props.theme.colors.grey};
        }
    }

    label {
        align-self: flex-start;
        margin: 4px 0;
        font-size: 16px;
        color: ${(props) => props.theme.colors.blue};
    }

    span {
        font-size: 12px;
        color: red;
        padding: 4px;
        align-self: flex-start;
    }

    button {
        width: 100px;
        padding: 12px;
        margin-top: 8px;

        border: none;
        border-radius: 4px;
        background-color: ${(props) => props.theme.colors.green};
        color: ${(props) => props.theme.colors.white};
        transition: 0.3s;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        cursor: pointer;

        &:hover {
            transform: scale(1.1);
        }
    }
`
