import { useEffect, useState } from "react"


const SimpleForm = () => {

    const [formsState, setformsState] = useState({
        username:'juan',
        email:"juan@juan.com"
    })

    useEffect(() => {
        console.log('useEffect');
    })

    const {username, email} = formsState

    const onInpuntChange = ({target}) =>{
        //del name extraigo lo que es el username o email, el value es el valor que esta teniendo en ese target
        const {name, value} = target

        //seteamos el valor
        setformsState({
            ...formsState,
            [name]:value
        })
    }

  return (
    <div>
      <h1>Formulario simple</h1>
      <hr />

      <input type="text" className="form-control" placeholder="username" name = "username" value={username} onChange={onInpuntChange}/>
      <input type="email" className="form-control" placeholder="correo@correo" name = "email" value={email} onChange={onInpuntChange}/>
    </div>
  )
}

export default SimpleForm
