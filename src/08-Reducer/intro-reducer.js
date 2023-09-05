console.log('reducer');

const initialState = [{
    id:1,
    todo: 'recolectar gemas',
    done:false
}]

//reducer 
const todoReducer = (state = initialState, action = {}) => {
    //la accion es la que hace que cambie el estado
    if(action.type === '[todo] ADD TODO'){
        return [...state, action.payload] //traigo el estado anterior y traigo el nuevo payload, es decir que copiamos el estado anterior para no mutarlo
    }
    //siempre se retorna un estado
    return state
}


let todos = todoReducer()

const newTodo = {
    id:2,
    todo: 'recolectar esferas',
    done:false
}

const addTodoAction = {
    type : '[todo] ADD TODO',
    payload: newTodo //no siempre se tiene payload
}

todos = todoReducer(todos , addTodoAction)
console.log(todos);