//let b = 8
// if (b>7){
//     console.log(b)
// }
// else if(b>3){
//     console.log('Nije ispunjen prvi uslov al zato jeste drugi.')
// }
// else if(b>1){
//     console.log('NIje ispunjen ni prvi ni drugi uslov')
// }
// else{
//     console.log('NIje nijedan uslov ispunjen.')

// }
// switch(b){
//     case 2:
//         console.log("B vece od jedan")
//         break
//     case 3:
//         console.log("B vece od dva")
//         break
//     case 4:
//         console.log("B vece od tri")
//         break
//     case 5:
//         console.log("B vece od 4")
//         break
//     default:
//         console.log("B jeste jedan")
//         break
// }


// let c = 4
// c > 5 ? console.log("vece od 5") : console.log("Nije vece od 5")

// console.log('Zice jesil vezbao.')

// for(i=0; i < 10; i++){
//     console.log('Zice je messi')
// }
// for (i =5 ; i>0;i--)
// {
//     console.log(i)
// }
// for(b=0;b<11;b+=2){
//     console.log(b)
// }

// let p = prompt('Unesi nesto')
// /* Stavimo +a , pretvaramo string u int  */
// console.log(+p)
// console.log(typeof +p)

// let n = prompt('Unesi broj')
// for(i = 0; i <n; i++){
//  console.log('Zice je musliman!')   
// }

// alert('Provera dal radi.')

// let  broj = 0
// for(let i = 0; i<3; i++){
//     broj+= +prompt("Unesi brojeve") 
//     console.log(broj)
// }
/* Unesi n brojeva da sabirate, unesite prompt i pomnozite? */
//Domaci
let n=+prompt('Unesi broj iteracija')
let rezultat = 1
let brojevi = 0
for(let i = 0; i<n; i++){
    brojevi = +prompt('Unesi brojeve:',brojevi)
    rezultat *= brojevi
    console.log('Uneti brojevi su:\n ',brojevi)
}
console.log('Proizvod unetih brojeva je:',rezultat)
