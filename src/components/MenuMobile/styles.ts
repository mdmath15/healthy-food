import styled, { css } from "styled-components"

interface MobileMenuProps {
    mobileMenuActive: boolean
}

export const Nav = styled.nav<MobileMenuProps>`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 3rem 0;
    width: 200px;
    height: auto;
    background: ${(props) => props.theme.colors.green};
    z-index: 10;
    right: 0px;
    top: 0;
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s ease-in-out;
    transform: translateY(50px);

    ${(props) =>
        props.mobileMenuActive &&
        css`
            opacity: 1;
            pointer-events: auto;
            transform: translateY(0px);
        `}

    @media (max-width: 600px) {
        svg {
            width: 2rem;
        }
    }

    svg {
        margin: 4px;
        cursor: pointer;
        position: absolute;
        top: 0;
        right: 0;
    }

    ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;

        text-transform: uppercase;
        font-weight: 500;

        li {
            font-size: 1rem;
            color: ${(props) => props.theme.colors.white};
            border-bottom: 2px solid transparent;
            cursor: pointer;

            &:hover,
            :focus {
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
