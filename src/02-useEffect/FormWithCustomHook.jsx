/* eslint-disable no-unused-vars */
import Message from "./Message";
import { useForm } from "../hooks/useForm";

const FormWithCustomHook = () => {
  const {formsState, onInpuntChange, username, email, password, onResetForm} = useForm({
    username: "",
    email: "",
    password: "",
  })

  // const {username, email, password} = formsState

  return (
    <div>
      <h1>Formulario con custom hook simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={onInpuntChange}
      />

      {username === "strider2" && <Message />}

      <input
        type="email"
        className="form-control"
        placeholder="correo@correo"
        name="email"
        value={email}
        onChange={onInpuntChange}
      />

      <input
        type="password"
        className="form-control"
        placeholder="password"
        name="password"
        value={password}
        onChange={onInpuntChange}
      />

      <button className="btn btn-success" onClick={onResetForm}>Reset</button>
    </div>
  );
};

export default FormWithCustomHook;
