// let matrica = [
//     [8,2,3],
//     [4,5,6],
//     [7,1,5]
// ]
// min = 11
// for(let i = 0;i<matrica.length;i++){
//     for(let j =0;j<matrica[i].length;j++){
//         if(matrica[i][j]<min){
//             min = matrica[i][j]
//         }
//     }
// }
// console.log('Najmanji broj matrice je:',min)

//Shift - removes first element from the array
//Unshift - Adds first element to the array

let niz = ['Prvi','Drugi','Treci','Cetvrti']
let niz2 =['Pet','Sest']
let dodajPrvi = niz.unshift('Prvi el')
for(let i = 0;i<niz.length;i++){
    console.log(niz[i])
}
let oduzmiPrvi = niz.shift()
console.log(niz.length)
let niz3 = niz.concat(niz2)
console.log(niz3.reverse())

//Vraca kopijju niza 
let slice = niz3.slice(0,3)
console.log(slice)
//Sece niz,radimo sa ostalim elementima
let splice = niz3.splice(3)
console.log(splice)

