import { useEffect, useState } from "react"
import BestServices from "../../components/BestServices"
import Blog from "../../components/Blog"
import * as Scroll from "react-scroll"
import Hero from "../../components/Hero"
import Membership from "../../components/Membership"
import Recipes from "../../components/Recipes"
import * as S from "./styles"
import { MdArrowUpward } from "react-icons/md"

function Home() {
    const [goToTop, setGoToTop] = useState(false)

    useEffect(() => {
        const scrollListener = () => {
            window.scrollY > 300 ? setGoToTop(true) : setGoToTop(false)
        }
        window.addEventListener("scroll", scrollListener)
        return () => {
            window.removeEventListener("scroll", scrollListener)
        }
    }, [])

    useEffect(() => {
        document.title = "Healthy Food - Home"
        console.log("ola");
        
    },[])

    return (
        <S.Main>
            <Hero />
            <Recipes />
            <BestServices />
            <Blog />
            <Membership />
            {goToTop && (
                <S.Arrow>
                    <Scroll.Link to="hero" smooth={true} duration={500}>
                        <MdArrowUpward size={35} />
                    </Scroll.Link>
                </S.Arrow>
            )}
        </S.Main>
    )
}

export default Home
