/* eslint-disable react/prop-types */
import { memo } from 'react';


const Small = memo(({value}) => {
    console.log("me volvi a dibujar");
  return (
    <small>{value}</small>
  )
})

Small.displayName = 'Small'

export default Small
