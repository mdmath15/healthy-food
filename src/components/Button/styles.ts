import styled from "styled-components"

type ButtonProps = {
    ml?: string,
}

export const Button = styled.button<ButtonProps>`
    padding: 12px;
    margin-left: ${(props) => props.ml ?? "8px"};
    border-radius: 4px;
    border: none;
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        transform: scale(1.1);
    }
`
