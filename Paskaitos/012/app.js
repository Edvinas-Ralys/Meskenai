for(let i = 0; i < 5; i++){
    console.log(i+1)
    if(i + 1 === 3) break
}
let parcel = `S`

if(parcel ==`S`){
    console.log(`small`)
}
if(parcel ==  `M` || parcel == `S`){
    console.log(`Medium`)
}
if(parcel ==  `L` || parcel == `S` || parcel ==  `M`){
    console.log(`Large`)
}
if(parcel ==  `XL` || parcel ==  `L` || parcel == `S` || parcel ==  `M`){
    console.log(`extra large`)
}



//SWITCH
switch(parcel){
    case `S`:
        console.log(`Small`);
    case `M`:
        console.log(`Medium`);
    case `L`:
         console.log(`Large`);
    default:
        console.log(`XL`)

}