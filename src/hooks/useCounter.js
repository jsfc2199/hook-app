/* eslint-disable no-unused-vars */
import { useState } from "react"

export const useCounter = (initialState = 10) =>{

    const [counter, setCounter] = useState(initialState)
    
    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
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