import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const HomePage = () => {
  const {user} = useContext(UserContext)
    return (
      <>
      <h1>HomePage App</h1>
      <hr />
      Hola {user?.nombre}
      </>
    )
  }
  
  export default HomePage