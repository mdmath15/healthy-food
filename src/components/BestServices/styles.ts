import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    display: flex;
    background-color: #fff;
`

export const Background = styled.div`
    flex: 1;

    @media (max-width: 600px) {
        display: none;
    }

    img {
        @media (min-width: 600px) and (max-width: 1024px) {
            width: 120%;
        }

        width: 100%;
        height: 100%;
    }
`

export const Content = styled.section`
    flex: 1;
    align-self: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    gap: 2rem;

    @media (min-width: 600px) and (max-width: 768px) {
        align-items: center;
        gap: 0.5rem;
    }

    @media (max-width: 600px) {
        align-items: center;
        padding: 1rem 0;
    }

    h3 {
        font-size: 36px;
        max-width: 440px;
        width: 100%;
        color: ${(props) => props.theme.colors.blue};

        @media (min-width: 768px) and (max-width: 1024px) {
            font-size: 28px;
        }

        @media (min-width: 600px) and (max-width: 768px) {
            font-size: 24px;
            max-width: 340px;
        }

        @media (max-width: 600px) {
            max-width: 300px;
            font-size: 24px;
            text-align: center;
        }
    }

    p {
        max-width: 404px;
        letter-spacing: 0.5px;
        width: 100%;
        color: ${(props) => props.theme.colors.grey};
        line-height: 1.8;

        @media (min-width: 600px) and (max-width: 768px) {
            font-size: 16px;
            max-width: 340px;

            line-height: 1.3;
        }

        @media (max-width: 600px) {
            max-width: 300px;
            font-size: 16px;
            text-align: center;
        }
    }

    button {
        width: 132px;
        padding: 1rem;
        border: none;
        background-color: ${(props) => props.theme.colors.green};
        color: ${(props) => props.theme.colors.white};
        border-radius: 4px;
        transition: 0.3s;
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
        cursor: pointer;

        @media (min-width: 768px) and (max-width: 1024px) {
            align-self: center;
        }

        &:hover {
            transform: scale(1.1);
        }
    }
`
