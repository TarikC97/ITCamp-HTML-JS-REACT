//Arrow Function
//Samo jedna linija koda , nije potreban ni return ni zagrade.
const Arrow1 = () => console.log('Proba')
Arrow1()

const Arrow2 = () =>{
    console.log('Proba1')
    console.log('Proba2')
}
Arrow2()

const Arrow3 = (niz) => {
    sum =0 
    for(let i =0;i<niz.length;i++ ){
        sum+= niz[i]
    }
    return sum
}
let niz = [1,3,5,7,9]
console.log('Suma elemenata niza: \n',Arrow3(niz))
