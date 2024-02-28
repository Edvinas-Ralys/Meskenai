// setTimeout(_=>{
//     console.log(`Timeout`)
// }, 1000)

// const buyChicken = _ =>{
//     return new Promise ((resolve, reject) => {
//         setTimeout(_=>{
//             console.log(`Chicken is ready`)
//             // resolve(`Chicken`)
//             reject(`No chicken`)
//         }, 2000)
//     })
// }

// buyChicken()
// .then(food => {
//     console.log(food)
// })
// .catch(err => {
//     console.log(err)
// })

const getBurger = async() =>{
    return await `Burger`
}

console.log(getBurger())



