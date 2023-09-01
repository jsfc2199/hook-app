
import { useState } from 'react';
import { useCounter } from './../hooks/useCounter';
import Small from './small';


const Memorize = () => {
    const {counter, increment} = useCounter(10)

    const [showHide, setSetshowHide] = useState(true)
  return (
    <>
      <h1>Counter: <Small value = {counter}/> </h1>
      <hr />
      <button className='btn btn-primary' onClick={() =>  increment()}> + 1</button>

      <button className='btn btn-outline-primary' onClick={() =>  setSetshowHide(!showHide)}> Show/hide {JSON.stringify(showHide)}</button>
    </>
  )
}

export default Memorize
