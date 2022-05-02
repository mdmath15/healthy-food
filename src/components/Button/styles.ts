import styled from "styled-components"

type ButtonProps = {
    ml?: string,
    mr?: string,
    mt?: string,
    mb?: string,
    wd?: string,
    hg?: string,
}

export const Button = styled.button<ButtonProps>`
    padding: 12px;
    width: ${(props) => props.wd ?? "auto"};
    margin-left: ${(props) => props.ml ?? "8px"};
    margin-top: ${(props) => props.mt ?? "0"};
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
