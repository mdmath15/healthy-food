import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import * as S from "./styles"

interface StateCaroselParams {
  width_carosel?: number
  width_childrens?: number
  qnt_childrens?: number
  max_width_carousel?: number
}

interface CaroselParams {
    children: React.ReactNode,
    max_width?: number
  }

function Carosel ({children, max_width}: CaroselParams):JSX.Element{

  const Carousel = useRef<HTMLDivElement>(null)

  const [stateCarosel, setStateCarousel] = useState<StateCaroselParams>()

  const handleCarousel = useCallback(() => {
    if(Carousel.current) {
      const carousel = Carousel.current
      setStateCarousel(
        {
          ...stateCarosel, 
          width_carosel: carousel.clientWidth,
          qnt_childrens: carousel.children.length,
          width_childrens: carousel.children.item(0)?.clientWidth,
          max_width_carousel: ((carousel.children.length -1) * carousel.children.item(0)?.clientWidth!)
        }
      )
    }
  }, [setStateCarousel])

  const handleCarouselAction = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    
    switch (e.currentTarget.id) {
      case "next":
        return Carousel.current!.scrollLeft += stateCarosel?.width_childrens!
    
      case "prev":
        return Carousel.current!.scrollLeft -= stateCarosel?.width_childrens!
        
      default:
        return null
    }
  }

  useEffect(() => handleCarousel(), [handleCarousel])

  return (
    <S.ContainerRelativo max={max_width || stateCarosel?.max_width_carousel }>
        <S.Container ref={Carousel}>
          {children}
          <div className="buttons">
            <button onClick={handleCarouselAction} id="prev" className="prev"><MdArrowBackIos size={30}/></button>
            <button onClick={handleCarouselAction} id="next" className="next"><MdArrowForwardIos size={30}/></button>
          </div>
        </S.Container>
      </S.ContainerRelativo>
  )
}

export default Carosel;