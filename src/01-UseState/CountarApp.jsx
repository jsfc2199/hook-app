import { useState } from "react"

const CountarApp = () => {
    const [counter, setcounter] = useState(10)
  return (
    <div>
      <h1>Couanter : {counter} </h1>

      <hr />


        <button onClick={() => setcounter(counter + 1) }> +1 </button>   

 </div>
  )
}

export default CountarApp
