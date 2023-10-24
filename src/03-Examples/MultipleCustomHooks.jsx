import { useCounter, useFetch } from '../hooks'
import {Quote, LoadingHook} from './'

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
        <LoadingHook/>
      ) : (   
        <Quote name = {name} status={status}/>
      )}

      <button className="btn btn-primary" disabled = {isLoading} onClick={randomNumber}>Next character</button>
    </>
  );
};

export default MultipleCustomHooks;
