import { useRef } from "react"

const FocusScreen = () => {
    const inputRef = useRef()
    const onClick = () =>{
        inputRef.current.select()
    }

  return (
    <>
      <h1>Focus scree</h1>
      <hr />
      <input type="text" placeholder="ingrese su nombre" className="form-control" ref={inputRef}/>
      <button className="bitn btn-primary mt-2" onClick={onClick}>Set focus</button>
    </>
  )
}

export default FocusScreen
