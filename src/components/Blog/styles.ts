import styled from "styled-components"

export const Container = styled.section`
    width: 100%;
    padding: 3rem 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #f0f3f7;
    gap: 1rem;

    @media (max-width: 600px) {
        padding: 1rem 0;
    }

    h3 {
        font-size: 36px;
        color: ${(props) => props.theme.colors.blue};

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
            padding: 0;
        }
    }

    .containerCarousel {
        max-width: 1280px;
        width: 100%;
        padding: 2rem 0;

        @media (max-width: 600px) {
            padding: 1rem 0;
        }
    }

    .carouselItem {
        transition: 0.3s;
        cursor: pointer;
        margin-left: 0;
        &:hover {
            transform: scale(1.1);

            @media (max-width: 600px) {
                transform: scale(1);
            }
        }
    }
`
