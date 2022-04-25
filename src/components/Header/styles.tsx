import styled, { keyframes } from "styled-components"

export const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 3rem;
    z-index: 2;

    @media (max-width: 768px) {
        padding: 0.5rem 2rem;
    }

    @media (max-width: 600px) {
        padding: 0.2rem 1rem;
    }

    position: absolute;
    top: 0;
    left: 0;
    right: 0;

    h1 {
        font-size: 24px;
        color: ${(props) => props.theme.colors.green};
        cursor: pointer;

        @media (max-width: 600px) {
            font-size: 18px;
            color: #fff;
        }
    }
`

export const NavBar = styled.nav`
    ul {
        display: flex;
        align-items: center;
        gap: 2rem;

        text-transform: uppercase;
        font-weight: 500;

        @media (max-width: 900px) {
            display: none;
        }

        li {
            color: ${(props) => props.theme.colors.white};
            border-bottom: 2px solid transparent;
            cursor: pointer;

            &:hover {
                border-bottom: 2px solid ${(props) => props.theme.colors.white};
                transition: 0.3s ease-in-out;
            }
        }

        button {
            padding: 1rem 2rem;

            background-color: ${(props) => props.theme.colors.white};

            border-radius: 4px;
            border: none;

            text-transform: uppercase;
            font-weight: 500;

            cursor: pointer;

            transition: 0.3s;
            color: ${(props) => props.theme.colors.green};

            &:hover {
                transform: scale(1.1);
            }
        }
    }
`

export const MobileButton = styled.div`
    display: block;
    width: 3rem;
    height: 2.5rem;
    background-color: "none";
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;

    @media (max-width: 600px) {
        svg {
            width: 1.5rem;
        }
    }
`
