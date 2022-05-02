import * as S from "./styles"

type ButtonProps = {
    children: React.ReactNode
    ml?: string,
    mr?: string,
    mt?: string,
    mb?: string,
    wd?: string,
    hg?: string
}

function Button({ children, ml, mr, mt, mb, wd, hg }: ButtonProps) {
    return <S.Button ml={ml} mr={mr} mt={mt} mb={mb} wd={wd} hg={hg}>{children}</S.Button>
}

export default Button
