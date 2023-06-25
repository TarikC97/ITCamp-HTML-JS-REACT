// const obj = {
//     ime: 'TarikC',
//     prezime: 'Curic',
//     niz: ['prvi,drugi'],
// } 
// function fja(arg1,arg2){
//         console.log(`Ime:${arg1} i prezime ${arg2}`)
// }
//

// obj.godine = '25'
// // console.log(obj.ime)
// // console.log(obj['prezime'])
// // console.log(obj)
// fja.call(obj,"Haris Diamond","Gorcevic")
// //Apply
// // fja.apply(obj,['el,el2'])
// //Mora zasebno da se pozove , u odnosu na apply i call fje,radi isto kao ostale fje.
// const bindFja = fja.bind(obj,'nesto','nesto2')
// bindFja()

// //Vraca niz kljuceva i vrednosti.
// const kljucevi = Object.keys(obj)
// console.log(kljucevi)
// const kljucevi2 = Object.values(obj)
// console.log(kljucevi2)
// //Zakljucavamo objekat, pocetna value ne moze da se menja.
// const freeze = Object.freeze(obj)
// // console.log(freeze)
// //Seal- Moze da se menjaju atributi , al nema dodavanja.
// const seal = Object.seal(obj)
// // console.log(seal)

//Closure - Jedan on principa rada javescripte(Moguce Pitanje za Intervju.)
//Local scope ne uzima global value.
// let a = 10
// function funcA (){
//     let a =5
//     console.log(a)
//     let b = 3
//     {
//         console.log(b)
//     }
// }
// function midleA (){
//     let a =3
//     console.log(a)
// }
// function lastA(){
//     console.log(a)
// }

// funcA()
// midleA()
// lastA()

//Fja koja pravi i vraca objekat
//22-5-2023
// function User (user,user2){
//     return{
//         ime: user,
//         prezime: user2
//     }
// }
//  console.log(User('Tarik','Curic'))


////////////////Klase/////////////////////
//Klase - sluze kao sablon za neki objekat.
//////////////////Cetiri osnovna principa OOP://////////
    //Nasledjivanja,Enkapsulacija,Polimorfizam,Apstrakcija
    //Nasledjivanje - Mozemo da koristimo klasu unutar druge klase
    //Enkapsulacija - Ne mozemo da dobijamo osobine objekta direktno. bez get fje(Private)
    //Apstrakcija - Rezultat metoda unutar objekata nam je jedino bitan.
    //Polimorfizam -
    //Properti atributa klase:
        //Static - Properti moze da se pozove samo na osnovu klase(ne moramo kreitrati novi objekat Klase)
        //Static - Zajednicko sve za jedan atribut klase
        //Public - Mozemo svi da pristupimo tom atributu
        //Private - Ne moze da se pristupi van klase bez get metode(#-oznacava se)
        //Protected - Osobinu koju moze da koristi klasa koja ga nasledjuje, ali ne sledece koje nasleduju.
// class User{
//     constructor(marka,model,gb,cena){
//         this.marka = marka
//         this.model = model
//         this.gb = gb
//         this.cena = cena
//     }
//     zbir(a,b){
//         return a+b
//     }
// }
// const obj = new User('Honor','Magic 5 Lite',6)
// console.log(obj)
// console.log(obj.zbir(5,6))
////26-05-2023
//Prototype - sve fje unutar klase nalaze se u prototype.
// class Bus {
//     constructor(sedista,boja){
//         this.sedista = sedista
//         this.boja = boja
//     }
//     setBoju(boja2){
//         this.boja = boja2
//     }
//     getBoja(){
//         return this.boja
//     }
// }
// const obj2 = new Bus('32','Crvena')
// console.log(obj2)
// obj2.setBoju('Plava')
// console.log(obj2)
// console.log(obj2.getBoja())
// class Pet {
//     legNum
//     tail

//     constructor(leg,tail){
//         this.legNum = leg
//         this.tail = tail
//     }   
// }
///////////////////////Nasledjivanje/////////////
// class Cat extends Pet{
//     name
//     color
//     constructor(legs,tails,name,color){
//         //Super(constructor call)
//         super(legs,tails)
//         this.name = name
//         this.color = color
//     }
//     getTail(){
//         return this.tail
//     }
// }
// class Dog extends Cat{
//     constructor(legs,tails,name,color){
//         super(legs,tails,name,color)
//     }
//     bark(){
//         console.log('Pas laje')
//     }
//     getColor(){
//         return this.color
//     }
// }
// const obj = new Cat(4,'Rep','Maca','Siva')
// console.log(obj)
// console.log(obj.getTail())
// const obj2 = new Dog(4,'Ima','Sandra','Bela')
// console.log(obj2.getColor())

//////////////////Enkapsulacija////////////////
// class Maxi {
//     //Private osobina ne moze da se koristi izvan klase.
//     #ime
//     constructor(ime,lokacija,logo){
//         //# - Private property
//         this.#ime = ime
//         this.lokacija = lokacija
//         this.logo = logo
//     }
//     getIme(){
//         return this.#ime
//     }
//     setIme(ime){
//         this.#ime=imeNeko
//     }
// }
// const maxi = new Maxi('Prodavnica','Prvi Maj','MaXiShop')
// maxi.setIme('Idea')
// console.log(maxi)

//Static - Properti moze da se pozove samo na osnovu klase(ne moramo kreitrati novi objekat Klase)
//Static - Zajednicko sve za jedan atribut klase
//Public - Mozemo svi da pristupimo tom atributu
//Private - Ne moze da se pristupi van klase bez get metode(#-oznacava se)
//Protected - Osobinu koju moze da koristi klasa koja ga nasledjuje, ali ne sledece koje nasleduju.
// class Osobine{
//     #godine;
//     static usi = 2
//     constructor(godine,ime,prezime){
//         this.#godine=godine
//         this.ime=ime
//         this.prezime=prezime
//     }
//     setGodine(mojeGodine){
//         this.#godine=mojeGodine
//     }
//     getGodine(){
//         return this.#godine
//     }
// }
// const godine = new Osobine('','Tarik','Curic')
// godine.setGodine('25')
// //Private atribut ne printa u Node.
// console.log(godine)
// const brojUsiju = Osobine.usi
// console.log(brojUsiju)
////////////////////Apstrakcija/////////////////////
// class User{
//     name;
//     height
//     age
//     constructor(name,height,age){ 
//         this.name=name
//         this.height=height
//         this.age=age
//     }
//     checkHeight(){
//         if(this.height<165){
//             console.log('You can pass height limit',this.height)
//         }
//         else{
//             console.log('You cant pass Height Limit')
//         }
//     }
//     checkAge(){
//         if(this.age <16){
//             console.log('You can pass Age limit',this.age)
//         }
//         else{
//             console.log('You cant pass age Limit')
//         }
//     }
// }

// const user1 = new User('TarikC',166,15)
// user1.checkAge()
// user1.checkHeight()
///////////////////Bronja Zadatak////////////////

// const ucenik1 = 'Redzi'
// const ucenik2 = 'Haris'
// const ucenik3 =  'Tarik'

// const ucenik1Godine = 16
// const ucenik2Godine = 14
// const ucenik3Godine = 13

// //Poredjati ucenike po starosti.
// //12 If uslova , 6 console.log
// if(ucenik3Godine > ucenik1Godine && ucenik3Godine > ucenik2Godine )
// {
//     if(ucenik1Godine > ucenik2Godine){
//         console.log(`${ucenik3} je najstariji,srednji ${ucenik1},najmladji${ucenik2}`)
//     }
//     else{
//         console.log(`${ucenik3} je najstariji,srednji ${ucenik2},najmladji${ucenik1}`)
//     }
// }
// else if(ucenik2Godine > ucenik3Godine && ucenik2Godine > ucenik1Godine ) {
//     if(ucenik1Godine > ucenik3Godine){
//         console.log(`${ucenik2} je najstariji,srednji ${ucenik1},najmladji${ucenik3}`)
//     }
//     else{
//         console.log(`${ucenik2} je najstariji,srednji ${ucenik3},najmladji${ucenik1}`)
//     }
// }
// else if(ucenik1Godine > ucenik3Godine && ucenik1Godine> ucenik2Godine){
//     if(ucenik2Godine > ucenik3Godine){
//         console.log(`${ucenik1} je najstariji,srednji ${ucenik2},najmladji${ucenik3}`)
//     }
//     else{
//         console.log(`${ucenik1} je najstariji,srednji ${ucenik3},najmladji${ucenik2}`)
//     }
// }
//////////////////////////07-06-2023//////////////////////
//typeof(typeof(2))
//returns string('number')

////////////////////////09-06-2023///////////////////////
//Spread operator - ...
// const profesor = {
//     name: 'Aldin',
//     course: 'JS'
// }
// const noviProfesor = {
//     ...profesor,
//     age: 20,
// }
// console.log(noviProfesor)

// const spreadArray = [1,2,3,4,5,6]

// const newSpreadArray = [...spreadArray,7,8]

// console.log(newSpreadArray)

// //Obnova objekata:
// const objectProba = {
//     mozak:"Ima",
//     ruke:2,
//     noge:2,
//     bojaKose: "smedja",
//     oci:"zelene",

//     bojaOciju(){
//         return this.oci
//     }
// }
// console.log(objectProba.bojaOciju())

// function checkAge(ime,prezime){
//     if(this.age>18){
//         console.log('Punoletan',ime,prezime)
//     }
//     else{
//         console.log('Nije punoletan',ime,prezime)
//     }
// }

// checkAge.call(objectProba, 'Aldin',"Halilovic")//Primi broj argumenata kao fja pa objekat
// checkAge.apply(objectProba,['Aldin','Halilovic'])//Prima objekat pa niz
// const trecaFja = checkAge.bind(objectProba)//Prima objekat i vraca drugu f-ju
// trecaFja('Tarik',"Curic")

// console.log(Object.keys(objectProba))//Vraca niz propertia
// console.log(Object.values(objectProba))//Vraca niz vrednosti

//////////////Obnova nizova//////////
// const niz = [1,2,3,4,5,6]
// const noviNiz = niz.map(el=>el*el)
// console.log(noviNiz)
// const noviNiz2 = noviNiz.filter(el=>el%2===0)
// console.log(noviNiz2)
// const indexNiz= niz.filter((el,i)=> {
//     if(i%2==0){
//         console.log(i)
//     }
// })
// const stringNiz = ['petar','milos','tamer','djordje','pero']
// const stringFilter = stringNiz.filter((el) => el[1] ==='e')
// console.log(stringFilter)

///Tezak zadatak Bronja
// const nekiBrojevi = [7,10,18,22,30,3,15,19,35,82,10,50,21,19]

// const teziZadatak = nekiBrojevi.map((el)=>{
//     if(el>18 && el<30){
//         return(el*8)/4
//     }
//     else if(el>18){
//         return el*4
//     }
//     else{
//         return el
//     }
// })
// console.log(teziZadatak)
//////////////////12-06-2023/////////////////
    //////////Matrica obnova//////////
// const prvaMat = [
//     [20,12,25],
//     [10,222,7],
//     [99,33,46] 
// ]
// for(let i=0;i<prvaMat.length;i++){
//     for(let j=0;j<prvaMat[i].length;j++){
//         if(prvaMat[i][j]%2==0){
//             console.log(prvaMat[i][j])
//         }
//         else{
//             console.log('Neparni broj')
//         }
//     }
// }
////////Reduce methoda vezbba//////

// const niz = [17,17,16,21,23,16,25,20]
// var sum = 0
// var god = 0
// for(let i =0;i<niz.length;i++){
//     sum+=niz[i]
// }
// god= sum/niz.length
// console.log(god)
// const niz2 = niz.reduce((acc,prev) => acc+prev)
// console.log(niz2/niz.length)
// const milje = [502.8,120.5,350.6,205.2,100,98,115,9000,53]
// const km = milje.map(el=>el*1.6)
// const avg = km.reduce((acc,prev)=>acc+prev)
// console.log(avg/km.length)
//////////Stringovi////////////
// const recenica = 'Mama ima momu'
// var brojac=0
// for(let i=0;i<recenica.length;i++){
//     if( recenica[i] === 'M' || recenica[i]==='m'){
//         brojac++
//     }
// }
// console.log(brojac)
///////////////////////Hoisting//////////////////// //
    //Prilikom kompajlovanja JS fajla varijablu(var,func) na vrh fajla salje, ali vrednost varijable ostaje dole.
    //Let,const,arrowfunc moraju prvo da se inicijalizuju.

   
// console.log(ime)//undefined
// ime = 5//A vrednost ostaje tu, a varijabla ime ide na vrh.
// console.log(ime)//Inicijalizirali smo varijablu.
// var ime//POzivamo var na varijablu na vrh

// console.log(hdmi)//Temporal dead zone
// let hdmi//let ne ide na vrh ostaje.
// hdmi = 10//Mora prvo da se inicijalizuje da bi vratilo neku value.
// console.log(hdmi)

// var ime = 'Tarik'//var ispod pozivanje fje vraca undefined.
// pozz(ime)
// function pozz(ime){
//     console.log(ime)
// }
//////////////////////Haris String zadatak/////////////
// var ime = 'TarikC12345'
// var brojacStringova =0
// for(let i = 0;i<ime.length;i++){
//     //+ pretvara nesto u broj
//     //Number(Tarik12345)/1 === Number(Tarik12345)
//     //Tarik/1 => undefined
//     //12345/1 => Number
//     //Return number(12345)
//     if(+ime[i]/1 === +ime[i]){
//         console.log(+ime[i])
//     }
//     else{
//         brojacStringova++
//     }
// }
// console.log('Broj stringova je:\n',brojacStringova)

//////////Profesor zadatak/////////
///Ubaci u svaki niz broj kola.
// const automobil ={
//     aldin: ["vw","audi"],
//     tajra: ["golf","audi","bmw"],
//     iman: ["peugeot","fiat","citroen"],
//     bronja: ["pagani","mclaren","Rollce roys"]
// }
// var keys = Object.keys(automobil)
// var values = Object.values(automobil)
// console.log(values)
// var auto2 = values.map((el)=>el+el.length)
// console.log(auto2)

// //Github search app updated
// //Prazan div za laoder , prazan div za input , on click doesnt move input above or under.
// //Even function - pretvara string u broj.


//////////////////DOM(Document object model)////////////////
///////////////////To Do List////////////////

// const inputText = document.getElementById('inputText')
// const addButton = document.getElementById('addButton')
// const inputContainer = document.getElementById('inputContainer')

// let vrednost = ""
// //Reusable function
// function singleCard(text){
//     const kartica = document.createElement('div')
//     const el = document.createElement('h3')
//     // kartica.classList.add('task')
//     el.innerText = text
//     kartica.appendChild(el)
//     return kartica
// }

// console.log(inputText)
// console.log(inputContainer)
// inputText.addEventListener('input',(e)=>{
//     vrednost= = e.target.value
// })

// addButton.addEventListener('click',(e)=>{
//     e.preventDefault()
//     console.log(vrednost)
//     inputText.value = ""
//     inputContainer.appendChild(singleCard(vrednost))
//     console.log(vrednost)
// })

///////////////////////Calculator///////////////

// const buttons = document.querySelectorAll("button")
// let equals = document.getElementById("equals")
// let display = document.getElementById("display")
// const newP = document.createElement("p")

// let result=""
// buttons.forEach((button)=>{
//     button.addEventListener("click",(e)=>{
//         if( e.target.value === "="){
//             return;
//         }
//         else{
//             let vrednost= e.target.value
//             result += vrednost
//             console.log(result)
//         }
//     })
// })
//  equals.addEventListener("click",(e)=>{
//      e.preventDefault()
//      newP.innerText = eval(result)
//      display.appendChild(newP)     
//      console.log(eval(result))
//  })


//////////////////Zadatak ALdin//////////////

const dogs = [
    {weight:22,curFood: 250,owners:['Alice','Bob']},
    {weight:8,curFood: 200,owners:['Matilda']},
    {weight:13,curFood: 275,owners:['Sarah','John']},
    {weight:32,curFood: 340,owners:['Michael']},
]
// dogs.forEach((dog)=>{
//      return {
//         ...dog,
//         recFood: (dog.weight**0.75)*28
//      }
// })
///1
for(i=0;i<dogs.length;i++){
    dogs[i] = {
        ...dogs[i],
        recFood: ((dogs[i].weight**0.75)*28).toFixed(0)
    }
}
console.log(dogs)

///2
const SarahDog = (dogs.find((dog) => dog.owners.find((el)=> el==='Sarah')))
console.log(SarahDog)
if(+SarahDog.recFood < SarahDog.curFood *1.1){
    console.log("Jede vise")
}
else{
    console.log("Jede manje")
}
///3