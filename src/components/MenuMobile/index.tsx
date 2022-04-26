import * as S from "./styles"
import * as Scroll from "react-scroll"
import { IoClose } from "react-icons/io5"
import { Link } from "react-router-dom"

interface MenuMobileProps {
    mobileMenuActive: boolean
    setMenuMobileActive: (value: boolean) => void
}

const MenuMobile = ({ mobileMenuActive, setMenuMobileActive }: MenuMobileProps) => {
    return (
        <S.Nav mobileMenuActive={mobileMenuActive}>
            <IoClose size={35} color={"white"} onClick={() => setMenuMobileActive(false)} />
            <ul>
                <Scroll.Link
                    to="recipes"
                    smooth={true}
                    duration={500}
                    onClick={() => setMenuMobileActive(!mobileMenuActive)}
                >
                    <li>Healthy Recipes</li>
                </Scroll.Link>
                <Scroll.Link
                    to="blog"
                    smooth={true}
                    duration={500}
                    onClick={() => setMenuMobileActive(!mobileMenuActive)}
                >
                    <li>Blog</li>
                </Scroll.Link>
                <Scroll.Link
                    to="membership"
                    smooth={true}
                    duration={500}
                    onClick={() => setMenuMobileActive(!mobileMenuActive)}
                >
                    <li>Join</li>
                </Scroll.Link>
                <Link to={"/singup"}>
                    <button>Register</button>
                </Link>
            </ul>
        </S.Nav>
    )
}

export default MenuMobile
