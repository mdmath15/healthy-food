import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    max-width: 320px;
    width: 100%;
    border-radius: 4px;
    box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35), 0 12px 20px -12px rgba(0, 0, 0, 0.35);

    @media (max-width: 600px) {
        max-width: 300px;
    }

    h4 {
        font-size: 24px;
        text-align: start;
        padding: 2rem 1rem;
        line-height: 1.2;
    }
`

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 0 1rem;

    img {
        width: 4rem;
    }

    span {
        font-size: 18px;
        color: ${(props) => props.theme.colors.grey};
    }
`
