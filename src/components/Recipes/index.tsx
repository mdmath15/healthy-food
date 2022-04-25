import { recipes } from "../../data/data"
import CardRecipe from "../CardRecipes"
import * as S from "./styles"

function Recipes() {
    return (
        <S.Container id="recipes">
            <h3>Our Best Recipes</h3>
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
            </p>
            <section>
                {recipes.map((recipe) => {
                    return <CardRecipe key={recipe.id} title={recipe.title} photo={recipe.photo} />
                })}
            </section>
        </S.Container>
    )
}

export default Recipes
