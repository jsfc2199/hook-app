/* eslint-disable no-unused-vars */
import { useState } from "react"

export const useCounter = (initialState = 10) =>{

    const [counter, setCounter] = useState(initialState)
    
    //se modifica para la prueba unitaria y cuando se llame increment 2 veces o mas tenga en cuenta el valor actual
    const increment = (value = 1) => {
        setCounter((current)=>current + value)
    }

    const decrement = (value = 1) => {
        setCounter((current)=>current - value)
    }

    const reset = () => {
        setCounter(initialState)
    }

    const randomNumber = () =>{
        const random = Math.floor(Math.random() * (20 - 1 + 1) + 1)
        setCounter(random)

    }

    return {
        counter, increment, decrement, reset, randomNumber
    }
}