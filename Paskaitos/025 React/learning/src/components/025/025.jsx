import './App.css';
import Rabbit from './Rabbit';
import Racoon from './Racoon';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{
          color:`red`, backgroundColor: 'black'
        }}>REACT WTF</h1>
      <Racoon name={` Petras`} color={`darkgreen`} />
      <Racoon name={` Austeja`} color={`skyblue`}/>
      <Rabbit />
      </header>
    </div>
  );
}

export default App;
