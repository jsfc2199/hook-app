/* eslint-disable react/prop-types */
import { useForm } from "./../../hooks/useForm";

const TodoAdd = ({OnNewTodo}) => { //onNewTodo eventoq ue vamos a emitir
  const { description, onInpuntChange, onResetForm } = useForm({
    description: "",
  });

  const onFormSubmit = (e) =>{
    e.preventDefault();
    if(description.length <= 1) return

    const newTodo = {
        id: new Date().getTime(),
        description: description,
        done:false
    }

    OnNewTodo(newTodo)
    onResetForm()
   
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="que hay para hacer?"
        className="formControl"
        name="description"
        onChange={onInpuntChange}
        value={description}        
      />
      <button type="submit" className="btn btn-outline-primary mt-1">
        Agregar
      </button>
    </form>
  );
};

export default TodoAdd;
