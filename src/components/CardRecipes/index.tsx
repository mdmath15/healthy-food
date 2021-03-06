import Button from "../Button"
import * as S from "./styles"

type RecipesProps = {
    title: string
    photo: string
}

function CardRecipe({ title, photo }: RecipesProps) {
    return (
        <S.Container>
            <img src={photo} alt="Comida" />
            <S.TextContainer>
                <h4>{title}</h4>
                <Button ml="0px" wd="120px">See Recipe</Button>
            </S.TextContainer>
        </S.Container>
    )
}

export default CardRecipe
