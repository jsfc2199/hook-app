import { useCallback, useState } from "react"
import ShowIncrement from './ShowIncrement';


const CallbackHook = () => {
    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
        () => {
            setCounter(counter+1)
        },
        []
    )

    // const incrementFather = () =>{
    //     setCounter(counter+1)
    // }
  return (
    <>
      <h1>Use call back hook: {counter}</h1>
      <hr />
      <ShowIncrement increment={incrementFather}/>
    </>
  )
}

export default CallbackHook
