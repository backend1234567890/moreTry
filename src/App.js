import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/show")
    .then(res => res.json())
    .then(data => setItems(data))
  },[]);

  function showNumber() {
    return (
      <div><h3>{items.number}</h3></div>
    )
  }
  return (
    <main>
      <h1>
        Tes
      </h1>
      {showNumber()} 
    </main>)
}

export default App;
