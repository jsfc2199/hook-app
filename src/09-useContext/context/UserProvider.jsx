/* eslint-disable react/prop-types */
import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id:'123',
//     nombre:"juan",
//     email:'juan@juan.com'
// }
//los children son opcionales
const UserProvider = ({children}) => {

    const [user, setUser] = useState()
  return (
    <UserContext.Provider value={{user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider
