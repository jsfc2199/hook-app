import { useEffect } from "react"


const Message = () => {
    useEffect(() => {
      console.log("Mensaje Montado");
    
      return () => {
        console.log("Mensaje desmntado");
      }
    }, [])
    
  return (
    <>
      <h3>Usuario ya exite</h3>
    </>
  )
}

export default Message
