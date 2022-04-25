import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    background-color: #fff;

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 600px) {
            flex-direction: column;
        }
    }
`

export const Content = styled.div`
    width: 40%;
    padding: 0 3rem;

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 70%;
    }

    @media (min-width: 600px) and (max-width: 768px) {
        width: 60%;
        padding: 0 2rem;
    }

    @media (max-width: 600px) {
        width: 100%;
        padding: 1rem;
    }

    h2 {
        font-size: 42px;
        margin-bottom: 2rem;

        @media (min-width: 768px) and (max-width: 1024px) {
            font-size: 32px;
        }

        @media (min-width: 600px) and (max-width: 768px) {
            font-size: 28px;
        }

        @media (max-width: 600px) {
            font-size: 24px;
        }
    }

    input {
        width: 80%;
        padding: 12px;
        border-radius: 4px;
        border-color: ${(props) => props.theme.colors.blue};

        @media (min-width: 600px) and (max-width: 768px) {
            width: 70%;
        }

        &:focus {
            outline: none;
        }

        ::placeholder {
            color: ${(props) => props.theme.colors.grey};
        }
    }

    button {
        padding: 12px;
        margin-left: 8px;
        border-radius: 4px;
        border: none;
        background-color: ${(props) => props.theme.colors.green};
        color: ${(props) => props.theme.colors.white};
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            transform: scale(1.1);
        }
    }
`
export const Background = styled.div`
    width: 50%;

    @media (max-width: 600px) {
        width: 100%;
    }

    img {
        width: 100%;
    }
`
