export default function Racoon(props){
    const printHello = () => {
        return `Hello, World!`
    }
    const inputName = document.querySelector(`.input-name`)
    const submitName = document.querySelector(`.submit-name`)
    const displayName = () =>{
        return(<h1>Hello</h1>)
    }
    // submitName.addEventListener(`click`, ()=>{
    //     console.log(`Hello`)
    // })
    return (
        <>
            <h2 style = {{color: props.color}}>Hello, Racoon{
                props.name
                }
                {console.log(props)}</h2>
            <div>{printHello()}</div>
            <i>My name Slim Shady</i>
            <b>What is your name?</b>
            <input className="input-name" type="text" />
            <button className="submit-name">Submit name</button>
            {displayName()}
        </>

    )
}