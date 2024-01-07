import React from 'react'
import B from './B'
import { ColorContext } from './ColorContext'
import { useContext } from "react";
function A({counter01}) {

  const {color} = useContext(ColorContext)
  return (
    <div className='big-bin a' style={{backgroundColor:color}}>
        <h1>A BIN</h1>
        <B  counter01={counter01}/>

    </div>
  )
}

export default A

