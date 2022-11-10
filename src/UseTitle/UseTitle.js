import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(()=> {
        document.title = `${title}-B-nature`
    },[title])
}

export default useTitle;