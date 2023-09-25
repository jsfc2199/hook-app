export const todoReducer = (initialState, action) => {
    switch(action.type){
        case '[TODO] Add Todo':
            return [...initialState, action.payload] //se añade el nuevo todo al arreglo y retornamos el nuevo arreglo
        default:
            return initialState
    }
}