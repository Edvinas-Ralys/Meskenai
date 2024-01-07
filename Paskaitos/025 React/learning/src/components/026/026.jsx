import "./App.scss";
import Square from "./Square";
import Animal from "./Animal";

function App() {
  // const colors = [<li>red</li>, <li>green</li>, <li>blue</li>]
  const colors2 = [
    `red`,
    `green`,
    `blue`,
    `yellow`,
    `purple`,
    `red`,
    `green`,
    `blue`,
    `yellow`,
    `purple`,
  ];
  const farm = [
    `Big Cow`,
    `Small Cow`,
    `Pig`,
    `Chicken`,
    `Angry Chicken`,
    `Sheep`,
    `Angry Bird`,
    `Goat`,
    `Crazy Frog`,
    `The Destroyer`,
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>LIST</h1>
        <ul>
          {colors2.map((item, index) => (
            <li key={index} style={{ color: item }}>
              {item}
            </li>
          ))}
        </ul>
        {/* <div className="square-bin">
          {colors2.map((item, index) => (
            <Square key={index} color={item} />
          ))}
        </div> */}
        <div className="squares">
            {farm.map((animal, i)=> <Animal key={i} animal={animal} />)}
        </div>

      </header>
    </div>
  );
}

export default App;
