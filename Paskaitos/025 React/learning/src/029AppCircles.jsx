import { useCallback, useEffect, useState } from "react";
import "./App.scss";
import ColorCircle from "./components/029/ColorCircle";
import randomColor from './components/028/functions/randomColor'



export default function App() {

    const [counter01, setCounter01] = useState(0)
    const [counter02, setCounter02] = useState(0)
    const [circleColor, setCircleColor] = useState(randomColor)

    const count01 =_=>{
        setCounter01(prev => prev + 1)
    }
    const count02 =_=>{
        setCounter02(prev => prev + 1)
    }

    // const changeColor =_=>{
    //     setCircleColor(randomColor())
    // }

    const changeColor = useCallback(_=>{
        setCircleColor(randomColor())
    }, [])

    useEffect(_=>{
        changeColor()
    }, [changeColor, counter01, counter02])

  return (
    <div className="App">
      <header className="App-header">
        <h1>This is state and useEffect</h1>
        <ColorCircle color={circleColor} />
        <div className="buttons">
            <button style={{backgroundColor:'rgba(10,10,110, 0.4)'}} onClick={count01}>Pressed {counter01} times</button>
            <button style={{backgroundColor:'rgba(10,110,110, 0.4)'}} onClick={count02}>Pressed {counter02} times</button>
        </div>

      </header>
    </div>
  );
}
