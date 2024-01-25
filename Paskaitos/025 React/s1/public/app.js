console.log(`app.js working`)

document.querySelector(`button`).addEventListener(`click`, _=>{
    const data = {}
    document.querySelectorAll(`input`). forEach(input =>{
        data[input.name] = input.value
    })
    console.log(data)
    const url = `http://localhost:3001/jsform`
    const options = {
        methond: `POST`,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    };
    fetch(url, options)
    .then(response => response.JSON)
    .then(data => {
        console.log(data)
    })
})