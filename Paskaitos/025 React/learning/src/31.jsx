import "./components/027/buttons.scss";
import "./App.scss";
import "./form.scss";
import { useEffect, useState } from "react";

export default function App() {
  const [cat, setCat] = useState(``);
  const saveCat = () => {
    localStorage.setItem(`cat`, cat);
  };

  useEffect(()=>{
    // setCat(localStorage.getItem(`cat`))
    const animals = JSON.parse(localStorage.getItem(`animals`))
    if(null !== animals){
        setCat(animals.cat)
        setDog(animals.dog)
        setBird(animals.bird)
    }
  }, [])


  const removeCat = () => {
    localStorage.removeItem(`cat`);
  };


  const [dog, setDog] = useState(``);
  const addDog = () => {
    localStorage.setItem(`dog`, dog);
  };
  const removeDog = () => {
    localStorage.removeItem(`dog`);
  };

  const [bird, setBird] = useState(``);
  const addBird = () => {
    localStorage.setItem(`bird`, bird);
  };
  const removeBird = () => {
    localStorage.removeItem(`bird`);
  };

  const clear = () => {
    localStorage.clear();
  };

  const addAll = () =>{
    localStorage.setItem(`animals`, JSON.stringify({cat:cat, dog:dog, bird:bird}))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is LocalStorage</h1>
        <div className="form">
          <label htmlFor="cat">Enter cat name:</label>
          <input
            type="text"
            name="cat"
            placeholder="Cat"
            value={cat}
            onChange={(e) => setCat(e.target.value)}
          />
          <label htmlFor="dog">Enter dog name:</label>
          <input
            type="text"
            name="dog"
            placeholder="Dog"
            value={dog}
            onChange={(e) => setDog(e.target.value)}
          />
          <label htmlFor="bird">Enter bird name:</label>
          <input
            type="text"
            name="bird"
            placeholder="Bird"
            value={bird}
            onChange={(e) => setBird(e.target.value)}
          />
          <div className="buttons">
            <button onClick={saveCat}>Add cat</button>
            <button onClick={removeCat}>Remove cat</button>
            <button >Get cat</button>
            <button onClick={addDog}>Add dog</button>
            <button onClick={removeDog}>Remove dog</button>
            <button onClick={addBird}>Add bird</button>
            <button onClick={removeBird}>Remove bird</button>
            <button onClick={clear}>Clear</button>
            <button onClick={addAll}>Add all</button>
          </div>
        </div>
      </header>
    </div>
  );
}
