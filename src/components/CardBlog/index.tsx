import * as S from "./styles"

type postsProps = {
    title: string
    photo: string
    author: string
    avatar: string
}

function CardBlog({ title, photo, author, avatar }: postsProps) {
    return (
        <S.Container>
            <img src={photo} />
            <h4>{title}</h4>
            <S.UserInfo>
                <img src={avatar} />
                <span>{author}</span>
            </S.UserInfo>
        </S.Container>
    )
}

export default CardBlog
