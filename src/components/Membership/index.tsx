import * as S from "./styles"
import BgMembership from "../../assets/bloco_final_image.svg"
import Footer from "../Footer"
import Button from "../Button"

function Membership() {
    return (
        <S.Container id="membership">
            <section>
                <S.Content>
                    <h2>Join our membership to get special offer</h2>
                    <input placeholder="Enter your email address" />
                    <Button>Join</Button>
                </S.Content>
                <S.Background>
                    <img src={BgMembership} alt="background" />
                </S.Background>
            </section>
            <Footer />
        </S.Container>
    )
}

export default Membership
