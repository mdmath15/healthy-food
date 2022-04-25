import styled from "styled-components"

export const Main = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #f0f3f7;
`

export const Arrow = styled.div`
    position: fixed;
    bottom: 50px;
    right: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px;
    z-index: 9999;
    border: 2px solid ${(props) => props.theme.colors.green};
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.white};
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`
