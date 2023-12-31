import { useCounter, useFetch } from '../hooks'
import {Quote, LoadingHook} from '../03-Examples'

const Layout = () => {
    const {counter, randomNumber} = useCounter(1)


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

      <button className="btn btn-primary" onClick={randomNumber}>Next character</button>
    </>
  );
};

export default Layout;
