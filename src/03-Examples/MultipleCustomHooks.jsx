import useFetch from "../hooks/useFetch";
import { useCounter } from './../hooks/useCounter';

const MultipleCustomHooks = () => {
    const {counter, randomNumber} = useCounter(1)

    console.log(counter);
  const { data, isLoading } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );

  

  const {name, status} = !!data && data //if data has value then use data 

  console.log(data);
  return (
    <>
      <h1>Rick and Morty Api</h1>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-right">
          <p className="mb-1">{name}</p>
          <footer className="blockquote-footer">{status}</footer>
        </blockquote>
      )}

      <button className="btn btn-primary" onClick={randomNumber}>Next character</button>
    </>
  );
};

export default MultipleCustomHooks;
