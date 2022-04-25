import styled, { keyframes } from "styled-components"

interface MobileMenuProps {
    mobileMenuActive: boolean
}

const ScaleUp = keyframes`
    0% {
      -webkit-transform: scale(0.5);
              transform: scale(0.5);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
    }
`

const ScaleDown = keyframes`
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scale(0.5);
              transform: scale(0.5);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
    }
  `

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
    right: 0;
    top: 0;
    animation: ${(props) => (props.mobileMenuActive ? ScaleUp : ScaleDown)} 0.5s ease-in-out;

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
