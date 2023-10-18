/* eslint-disable react/prop-types */
import { UserContext } from "./UserContext"

//los children son opcionales
const UserProvider = ({children}) => {
  return (
    <UserContext.Provider value={{hola:'Mundo'}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
