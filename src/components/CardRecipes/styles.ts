import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    border-radius: 8px;
    flex: 1;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;

    @media (min-width: 600px) and (max-width: 768px) {
        height: 200px;
    }
`

export const TextContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    text-align: start;
    padding: 0rem 2rem;

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 0rem 0.5rem;
        justify-content: space-around;
    }

    @media (min-width: 600px) and (max-width: 768px) {
        justify-content: space-around;
        height: 200px;
    }

    @media (max-width: 600px) {
        padding: 0 0.5rem;
        height: 140px;
        justify-content: space-around;
    }

    h4 {
        font-size: 24px;
        padding-top: 0.5rem;

        @media (min-width: 768px) and (max-width: 1024px) {
            padding-top: 1rem;
        }

        @media (max-width: 600px) {
            font-size: 18px;
            padding-top: 0.5rem;
        }
    }

    button {
        width: 100px;
        padding: 12px;
        margin-bottom: 1rem;

        border: none;
        border-radius: 4px;
        background-color: ${(props) => props.theme.colors.green};
        color: ${(props) => props.theme.colors.white};
        transition: 0.3s;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        cursor: pointer;

        @media (min-width: 600px) and (max-width: 768px) {
            padding: 16px;
            width: 120px;
        }

        &:hover {
            transform: scale(1.1);
        }
    }
`
