import * as S from "./styles"
import BgServices from "../../assets/bloco_services.svg"
import Button from "../Button"

function BestServices() {
    return (
        <S.Container>
            <S.Background>
                <img src={BgServices} alt={"Imagem Serviços"} />
            </S.Background>
            <S.Content>
                <h3>The best services ready To serve you</h3>
                <p>
                    Far far away, behind the word mountains, far from the countries Vokalia and
                    Consonantia, there live the blind texts.
                </p>
                <p>
                    Separated they live in Bookmarksgrove right at the coast of the Semantics, a
                    large language ocean.
                </p>
                <p>
                    A small river named Duden flows by their place and supplies it with the
                    necessary regelialia.
                </p>
                <Button>Know More</Button>
            </S.Content>
        </S.Container>
    )
}

export default BestServices
