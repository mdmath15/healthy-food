import CardBlog from "../CardBlog"
import * as S from "./styles"
import Carousel from "../Carousel"
import { posts } from "../../data/data"

function Blog() {
    return (
        <S.Container id="blog">
            <h3>Read Our Blog</h3>
            <p>
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
            </p>
            <Carousel max_width={1280}>
            {posts.map((post) => (
                <CardBlog
                    key={post.id}
                    title={post.title}
                    photo={post.photo}
                    avatar={post.avatar}
                    author={post.author}
                />
            ))}
            </Carousel>
        </S.Container>
    )
}

export default Blog
