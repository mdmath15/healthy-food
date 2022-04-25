import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    min-height: 100vh;
    padding: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-wrap: wrap;

    button {
        cursor: pointer;
    }

    a {
        position: absolute;
        top: 20px;
        left: 20px;
        
    }
`

export const Button = styled.button`
    width: 40px;
    padding: 8px;
    margin-top: 8px;

    border: none;
    border-radius: 4px;
    background-color: ${(props) => props.theme.colors.green};
    color: ${(props) => props.theme.colors.white};
    transition: 0.3s;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

    &:hover {
        transform: scale(1.1);
    }
`

export const Background = styled.div`
    max-width: 600px;
    width: 100%;

    img {
        width: 100%;
    }
`

export const FormContainer = styled.div`
    max-width: 600px;
    width: 100%;
    margin: 1rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
`
