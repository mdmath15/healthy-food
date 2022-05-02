import * as S from "./styles"
import backgroundImg from "../../assets/Illustration.svg"
import Header from "../Header"
import { BiSearch } from "react-icons/bi"
import Button from "../Button"

function Hero() {
    return (
        <S.Container id="hero">
            <Header />
            <section>
                <S.HeroContent>
                    <h2>Ready for Trying a new recipe?</h2>
                    <input placeholder="Search a new recipe" />
                    <Button>
                        <BiSearch />
                    </Button>
                </S.HeroContent>
                <S.HeroBackground>
                    <img src={backgroundImg} alt="background" />
                </S.HeroBackground>
            </section>
        </S.Container>
    )
}

export default Hero
