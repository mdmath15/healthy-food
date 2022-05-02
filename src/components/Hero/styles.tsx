import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    background-color: #fff;

    section {
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 600px) {
            flex-direction: column-reverse;
        }
    }
`

export const HeroContent = styled.div`
    width: 40%;
    padding: 0 3rem;

    @media (min-width: 768px) and (max-width: 1024px) {
        width: 50%;
    }

    @media (min-width: 600px) and (max-width: 768px) {
        width: 60%;
        padding: 0 2rem;
        margin-top: 2rem;
    }

    @media (max-width: 600px) {
        width: 100%;
        padding: 0 1rem;
        margin: 1rem 0;
    }

    h2 {
        font-size: 42px;
        margin-bottom: 2rem;

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

        &:focus {
            outline: none;
        }

        ::placeholder {
            color: ${(props) => props.theme.colors.grey};
        }
    }
`

export const HeroBackground = styled.div`
    width: 60%;

    @media (max-width: 600px) {
        width: 100%;
    }

    img {
        width: 100%;
    }
`
