import { useEffect, useState } from "react"


const useFetch = (url) => {
    const [state, setstate] = useState({
        data: null,
        isLoading: false,
        error:null
    })

    const getFetch = async() =>{

        setstate({
            ...state,
            isLoading: true
        })

        const resp = await fetch(url)
        const data = await resp.json()

        setstate({
            data: data,
            isLoading: false,
            error:null
        })
    }
    //queremos estar atentons a los cambios en la url
    useEffect(() => {
        getFetch()
    }, [url])

  return{
    data:state.data,
    isLoading:state.isLoading,
    error:state.error
  }
}

export default useFetch
