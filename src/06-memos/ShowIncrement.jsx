/* eslint-disable react/prop-types */

const ShowIncrement = ({increment}) => {
  return (
    <button onClick={() => increment()}>
      Incrementar
    </button>
  )
}

export default ShowIncrement
