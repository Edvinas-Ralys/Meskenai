import { useContext } from "react";
import { Context } from "./Context";
import { ColorContext } from "./ColorContext";


function C( {counter01}) {

  const { counter02, hello } = useContext(Context)
  const {color} = useContext(ColorContext)

  return (
    <div className="big-bin c">
      <h1>C BIN</h1>
      <p>Drilled. Counter ONE: {counter01}</p>
      <p>Context. Counter TWO: {counter02}</p>
      <p style={{color:color}}>{hello}</p>
    </div>
  );
}

export default C;
