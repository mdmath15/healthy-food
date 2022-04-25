/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

const useMedia = (media: string): boolean | null => {
    const [match, setMatches] = useState<boolean | null>(null)

    const changeMatch = () => {
        const { matches } = window.matchMedia(media)
        setMatches(matches)
    }

    useEffect(() => {
        changeMatch()
        window.addEventListener("resize", changeMatch)
        return () => window.removeEventListener("resize", changeMatch)
    }, [media])

    return match
}

export default useMedia
