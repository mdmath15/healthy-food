import styled from "styled-components"

export const Footer = styled.footer`
    display: flex;
    padding: 2rem 3rem;
    justify-content: space-between;

    @media (max-width: 600px) {
        padding: 1rem;
    }

    p {
        color: ${(props) => props.theme.colors.blue};
    }

    div {
        color: ${(props) => props.theme.colors.grey};

        span {
            margin-left: 2rem;

            @media (max-width: 600px) {
                margin-left: 0;
            }
        }
    }
`
