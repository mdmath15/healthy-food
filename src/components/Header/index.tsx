import { useState } from "react"
import useMedia from "../../hooks/useMedia"
import MenuMobile from "../MenuMobile"
import { FaBars } from "react-icons/fa"
import * as S from "./styles"
import { Link } from "react-router-dom"
import * as Scroll from "react-scroll"

function Header() {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false)
    const mobileActive = useMedia("(max-width: 900px)")

    return (
        <>
            <S.Container>
                <h1>Healthy Food</h1>
                <S.NavBar>
                    <ul>
                        <Scroll.Link to="recipes" smooth={true} duration={500}>
                            <li>Healthy Recipes</li>
                        </Scroll.Link>
                        <Scroll.Link to="blog" smooth={true} duration={500}>
                            <li>Blog</li>
                        </Scroll.Link>
                        <Scroll.Link to="membership" smooth={true} duration={500}>
                            <li>Join</li>
                        </Scroll.Link>

                        <Link to={"/singup"}>
                            <button>Register</button>
                        </Link>
                    </ul>
                </S.NavBar>
                {mobileActive && (
                    <S.MobileButton
                        onClick={() => {
                            setMobileMenu(true)
                        }}
                    >
                        <FaBars size={35} color={"white"} />
                    </S.MobileButton>
                )}
            </S.Container>
            {mobileMenu && (
                <MenuMobile mobileMenuActive={mobileMenu} setMenuMobileActive={setMobileMenu} />
            )}
        </>
    )
}

export default Header
