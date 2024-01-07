import { useEffect, useState } from "react";
import "./App.scss";
import "./form.scss";

export default function App() {
  const [multiText, setMultiText] = useState({
    animal0: "",
    animal1: "",
    animal2: "",
  });

  const handleMultiText = (e) => {
    setMultiText((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };



  const animals = [
    "cat",
    "dog",
    "fish",
    "bird",
    "rabbit",
    "hamster",
    "turtle",
    "snake",
    "lizard",
    "frog",
    "chicken",
    "duck",
    "goat",
    "horse",
    "cow",
    "pig",
    "sheep",
    "mouse",
    "rat",
    "guinea pig",
    "chinchilla",
    "ferret",
    "hedgehog",
    "gerbil",
    "chicken",
    "duck",
    "goat",
    "horse",
    "cow",
    "pig",
    "sheep",
    "mouse",
    "rat",
    "guinea pig",
    "chinchilla",
    "ferret",
    "hedgehog",
    "gerbil",
  ];

  const [selectedAnimal, setSelectedAnimal] = useState(``);
  const handleSelect = (e) => {
    setSelectedAnimal(e.target.value);
  };

  const [checkboxes, setCheckboxes] = useState({
    A: false,
    B: true,
    C: false,
    D: false,
  });

  const [radios, setRadios] = useState({
    A: false,
    B: true,
    C: false,
    D: false,
  });

  const handleCheckbox = e =>{
    setCheckboxes(prev => ({...prev, [e.target.name] : e.target.checked}))
  }

  const handleRadio = e =>{
    for(let key in radios){
        if(key === e.target.name){
            setRadios(prev => ({...prev, [key]:!prev[key]}))
        }else{
            setRadios(prev => ({...prev, [key]:false}))
        }
    }
  }

  const [textarea, setText] = useState(``)
  const handleTextarea = e =>{
    setText(e.target.value)
  }

 const [range, setRange] = useState(``)
 const handleRange = e =>{
    setRange(e.target.value)
 }

 const [color, setColor] = useState(``)
 const handleColor = e =>{
    setColor(e.target.value)
 }

 const [backgroundColor, setBackgroundColor] = useState(`#282c34`)
useEffect(()=>{
    setBackgroundColor(color + range)
},[color, range])

  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: backgroundColor}}>
        <h1>Form Control</h1>
        <div className="form">
          <input
            name="animal0"
            type="text"
            placeholder="Animal 1"
            value={multiText.animal0}
            onChange={(e) => handleMultiText(e, 0)}
          />
          <input
            name="animal1"
            type="text"
            placeholder="Animal 2"
            value={multiText.animal1}
            onChange={(e) => handleMultiText(e, 1)}
          />
          <input
            name="animal2"
            type="text"
            placeholder="Animal 3"
            value={multiText.animal2}
            onChange={(e) => handleMultiText(e, 2)}
          />

          <select value={selectedAnimal} onChange={handleSelect}>
            <option value="">Select</option>
            {animals.map((animal, index) => (
              <option key={index} value={animal}>
                {animal.toUpperCase()}
              </option>
            ))}
          </select>
          <div className="checkboxes">
            <input type="checkbox" id="A" name="A" checked={checkboxes.A} onChange={handleCheckbox} />
            <label htmlFor="A">A</label>
            <input type="checkbox" name="B" id="B" checked={checkboxes.B} onChange={handleCheckbox}/>
            <label htmlFor="B">B</label>
            <input type="checkbox" name="C" id="C" checked={checkboxes.C} onChange={handleCheckbox}/>
            <label htmlFor="C">C</label>
            <input type="checkbox" name="D" id="D" checked={checkboxes.D} onChange={handleCheckbox}/>
            <label htmlFor="D">D</label>
          </div>
          <div className="radios">
            <input type="checkbox" id="Ar" name="A" checked={radios.A} onChange={handleRadio} />
            <label htmlFor="Ar">A</label>
            <input type="checkbox" name="B" id="Br" checked={radios.B} onChange={handleRadio}/>
            <label htmlFor="Br">B</label>
            <input type="checkbox" name="C" id="Cr" checked={radios.C} onChange={handleRadio}/>
            <label htmlFor="Cr">C</label>
            <input type="checkbox" name="D" id="Dr" checked={radios.D} onChange={handleRadio}/>
            <label htmlFor="Dr">D</label>
          </div>
          <textarea value={textarea} onChange={handleTextarea} name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <h3>{range}</h3>
          <input  type="range" min="0" max="100" step="1" value={range} onChange={handleRange}/>
          <input type="color" value={color} onChange={handleColor} />
        </div>
      </header>
    </div>
  );
}
