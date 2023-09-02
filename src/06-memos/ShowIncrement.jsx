/* eslint-disable react/prop-types */

const ShowIncrement = ({increment}) => {
  return (
    <button onClick={() => increment(5)}>
      Incrementar
    </button>
  )
}

export default ShowIncrement
