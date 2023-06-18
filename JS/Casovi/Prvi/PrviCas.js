//Teorija
//Primitivni tipovi podataka:
//number,string,boolean,undefined,null,symbol
//Referenti tipovi podataka:
//Object , array , function
//Javascript je single thread(Sinhroni JS) i kod se izvrsava redom linija po linija.
//Pokretanje javascript u terminalu - U terminalu -> node imeApp.js   
//Inicijalizacija - Dodeljivanje vrednosti
//"",0,-0 == False

//Number
a  = 5 
console.log(a*a)
console.log(typeof a)
//String
ime = 'TarikC'
console.log(ime)
console.log(typeof ime)
//Boolean
Kisa = false
console.log(Kisa)
//Stepen
b =4 ;
stepen  = b **2
console.log(stepen)
//Moduo
moduo = a%b
console.log(moduo)
//Increment
a+=1
console.log(a)
// Boolean
console.log(a==b)
//Not equal
console.log(a !== b)
//Or and AND
console.log(true || false)
console.log(true && false)
//& - True - 1 , & - False - 0
console.log(true & false)
console.log(true & true)
//Is a number check
console.log(isNaN(a))
//If,else check
if(a >7 ){
    console.log(true)
}
else{
    console.log("Broj je manji!")
}
//Parni brojevi
if(a%2 !== 0){
    console.log(a)
}
else{
    console.log('Neparan je a')
}
