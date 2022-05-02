import * as S from "./styles"

type ButtonProps = {
    children: React.ReactNode
    ml?: string
}

function Button({ children, ml }: ButtonProps) {
    return <S.Button ml={ml}>{children}</S.Button>
}

export default Button
