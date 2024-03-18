import { useState } from "react";

function App() {
  const [username, setUsername] = useState("Juju");

  console.log("RERENDER", username);

  const addLetter = () => {
    setUsername((curr) => {
      console.log(curr);

      return curr + "a";
    });
  };

  return (
    <div>
      <p>{username}</p>
      <button onClick={addLetter}>Ajoute une lettre</button>
    </div>
  )
}

export default App;