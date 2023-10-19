/* eslint-disable no-undef */
const { renderHook, act } = require("@testing-library/react")

import { useCounter } from './../../hooks/useCounter';

describe('pruebas en use counter', () => {
  test('debe de retornar los valores por defecto', () => {

    const {result} = renderHook(() => useCounter())
    const {counter, decrement, increment, reset} = result.current

    expect(counter).toBe(10);
    expect(decrement).toEqual(expect.any(Function))
    expect(increment).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('debe de generar el cunter con el valor de 100 ', () => {
    const {result} = renderHook(() => useCounter(100))
    expect(result.current.counter).toBe(100)
  })
  
  //pruebas paras las funciones del custom hook
  test('debe de incrementar el contador ', () => {
    
    const {result} = renderHook(() => useCounter(100))
    const { increment} = result.current

    //ñas funciones dentro de un hook deben ser usadas con un act sino se ve un error
    act(() =>{
        increment();
        increment(2);
    })

    //se debe usar asi porque si desestructuramos el counter del result.current no tendremos el valor real aun
    expect(result.current.counter).toBe(103)
  })

  test('debe de decrementar el contador ', () => {
    
    const {result} = renderHook(() => useCounter(100))
    const { decrement} = result.current

    act(() =>{
        decrement();   
        decrement(5);  
    })

    expect(result.current.counter).toBe(94)
  })

  test('debe de resetear el contador ', () => {
    
    const {result} = renderHook(() => useCounter(100))
    const { reset, decrement} = result.current

    act(() =>{
        decrement();   
        decrement(5);  
        reset()
    })

    expect(result.current.counter).toBe(100)
  })
  
  
  
})
