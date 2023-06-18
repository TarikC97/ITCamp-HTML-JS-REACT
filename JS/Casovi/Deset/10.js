//Falsy vrednosti:
// let ime = false
// let prezime;

// if(ime){
//     console.log('Tacno')
// }
// if(prezime){
//     console.log('Imam prezime')
// }else{
//     console.log('Sacekaj')
// }


// let nadimak;
// for(let i =0;i<5;i++){
// console.log(nadimak,i)
//     if(i===3){
//     nadimak='Taka'  
//     }
//     if(nadimak){
//         console.log('Imam nadimak',i)
//     }
//     else{
//         console.log('Sacekaj krug',i)
//     }
// }
// //Sve sto nije true vraca u falsy vrednost, i ispisuje true.
// undefined || true
// null || true
// 0 || true
// false || true
// NaN || true

//Var let i const

let  b=5;
const c=10

//Block scope
{
    let b =15
    // console.log(b,'Blok koda')
    //let b uzima poslednji value iznad njega , a ne prvi definisan value.
    const c = 20
    {
        console.log(b,'Blok koda')
    }
}
//Global scope
// {
//     var b =15;
// }
console.log(b,'Lokalni kod')
console.log(c,'Lokalni kod')
