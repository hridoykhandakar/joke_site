import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [value, setValue] = useState(0);
  const [joke, setJoke] = useState();
  const [delivery, setDelivery] = useState();
  const [setup, setSetup] = useState();
  const [type, setType] = useState();

  const URL = "https://v2.jokeapi.dev/joke/any";
  useEffect(() => {
    document.title = `you clicked ${value} times`;
    console.log("UseEffect run");
    async function getJoke() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        setType(data.type);

        if (data.type === "twopart") {
          setSetup(data.setup);
          setDelivery(data.delivery);
        } else {
          setJoke(data.joke);
        }
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }
    getJoke();
    setJoke();
  }, [value]);

  return (
    <div className="container h-full flex flex-col items-center">
      <h1>hello react</h1>

      <p>Value: {value}</p>
      <div className="border-2 p-3 border-sky-500 w-72">
        <h2 className="underline text-center text-2xl mb-4">
          Here is Your Joke
        </h2>

        {joke ? (
          <h3>{joke}</h3>
        ) : (
          <div>
            <p>
              <strong>Setup</strong>
              {setup}
            </p>
            <p>
              <strong>Delivery</strong>
              {delivery}
            </p>
          </div>
        )}
      </div>
      <button
        onClick={() => setValue(value + 1)}
        className="bg-green-600 text-white p-2 rounded mt-2"
      >
        Get More
      </button>
    </div>
  );
}

export default App;
