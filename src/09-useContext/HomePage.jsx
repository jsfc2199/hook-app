import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const HomePage = () => {
  const {user} = useContext(UserContext)
    return (
      <>
      <h1>HomePage App</h1>
      <hr />
      <pre aria-label="pre">
        {user?.nombre}
      </pre>
      </>
    )
  }
  
  export default HomePage