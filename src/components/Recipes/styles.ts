import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    padding: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #f0f3f7;
    gap: 1rem;

    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 2rem 1rem;
    }

    @media (min-width: 600px) and (max-width: 768px) {
        padding: 2rem 0.4rem;
        gap: 0.5rem;
    }

    @media (max-width: 600px) {
        padding: 1rem 0.4rem;
        gap: 0.5rem;
    }

    h3 {
        font-size: 36px;
        color: ${(props) => props.theme.colors.blue};

        @media (min-width: 600px) and (max-width: 768px) {
            font-size: 28px;
        }

        @media (max-width: 600px) {
            font-size: 24px;
        }
    }

    p {
        max-width: 500px;
        width: 100%;
        padding-top: 16px;
        text-align: center;
        color: ${(props) => props.theme.colors.grey};

        @media (max-width: 600px) {
            max-width: 320px;
        }
    }

    section {
        max-width: 1092px;
        width: 100%;
        padding: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 2rem;

        @media (min-width: 768px) and (max-width: 1024px) {
            gap: 3.5rem;
        }

        @media (min-width: 600px) and (max-width: 768px) {
            flex-direction: column;
        }

        @media (max-width: 600px) {
            padding: 0;
            margin-top: 1rem;
        }
    }
`
