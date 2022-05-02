import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 150px;
    border-radius: 8px;
    flex: 1;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;

    @media (min-width: 1200px)  {
        height: 180px;
    }

    @media (min-width: 600px) and (max-width: 768px) {
        height: 200px;
    }
`

export const TextContainer = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-between;
    text-align: start;
    padding: 0rem 2rem;

    @media (min-width: 1440px)  {
        height: 180px;

    }


    @media (min-width: 768px) and (max-width: 1024px) {
        padding: 0rem 0.5rem;
        justify-content: space-around;
    }

    @media (min-width: 600px) and (max-width: 768px) {
        justify-content: space-around;
        height: 200px;
    }

    @media (max-width: 600px) {
        padding: 0 0.5rem;
        height: 140px;
        justify-content: space-around;
    }

    h4 {
        font-size: 24px;
        padding-top: 0.5rem;

        @media (min-width: 768px) and (max-width: 1024px) {
            padding-top: 1rem;
        }

        @media (max-width: 600px) {
            font-size: 18px;
            padding-top: 0.5rem;
        }
    }
`
