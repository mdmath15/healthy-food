import * as S from "./styles"
import BgSingUp from "../../assets/marginalia-vegetarian-shopping.png"
import Form from "../../components/Form"
import { Link } from "react-router-dom"
import { IoArrowBackOutline } from "react-icons/io5"
import { useEffect } from "react"

function SingUp() {
    useEffect(() => {
        document.title = "Healthy Food - Sing Up"
    }, [])

    return (
        <S.Container>
            <Link to="/">
                <S.Button>
                    <IoArrowBackOutline size={20} />
                </S.Button>
            </Link>
            <S.Background>
                <img src={BgSingUp} />
            </S.Background>
            <S.FormContainer>
                <Form />
            </S.FormContainer>
        </S.Container>
    )
}

export default SingUp
