import { useEffect } from "react";

export default function Sq({square, setSquares}) {

    useEffect(()=>{
        return ()=>console.log(`square is DEAD ` + square.id)
    }, [])

    const remove = _ => {
        setSquares(s => s.map(s =>s.id === square.id ? {...s, show:false} : s))
        // setSquares(s => s.filter(s => s.id !== square.id));
    }

    return (
        <div className="square spin pointer" style={{
            backgroundColor: square.color + '66',
            border: '1px solid ' + square.color,
        }}
        onClick={remove}
        >{square.id}</div>
    );
}