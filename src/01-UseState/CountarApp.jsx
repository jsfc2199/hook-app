import { useState } from "react";

const CountarApp = () => {
    const [counter, setcounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    return (
        <>
            <h1>Couanter : {counter.counter1} </h1>
            <h1>Couanter : {counter.counter2} </h1>
            <h1>Couanter : {counter.counter3} </h1>

            <hr />
            <button
                onClick={
                    () => setcounter({
                        counter1: counter.counter1 + 1,
                        counter2: counter.counter2,
                        counter3: counter.counter3,
                    })
                }> +1 </button>
        </>
    );
};

export default CountarApp;
