//Map function 
    //Return new array of same length 
    // const niz = [1,2,3,4,5]
    // const mapNiz = niz.map((el)=> el*7)
    //Ako postoji condition, map vraca boolean vrednosti.

    // console.log(mapNiz)

    // const niz1 = [2,3,4,5,6,7]
    // const nizMap = niz1.map((el)=> {
    //         if(el%2==0){
    //             el*=2
    //         }
    //         else{
    //             el*=3
    //         }
    //     return el
    // })
    // console.log(nizMap)

    // const nizMap2 = niz1.map((el)=> (el%2===0 ? el*=2 : el*=3))

    // console.log(nizMap2)

//Matrica pomocu map
    //  const mat = [
    //      [1,2,3],
    //      [4,5,6],
    //      [7,8,9]
    //  ]
    //  const MapMatrica = mat.map((niz)=> niz.map((el)=> el%2==0 ? console.log(el) : ''))


//Filter function
    // const niz = [6,5,27,28,29,31,33,15]
    // const neparniBrojevi = niz.filter((el)=>el%2 !==0)
    // console.log(neparniBrojevi)

//Custom callback f-ja(From scratchs)
    // const customFilter = (niZ,callback) =>{
    //     noviNiz = []
    //     for(let i =0;i<niZ.length;i++){
    //         if(callback(niZ[i]) === true){
    //             noviNiz.push(niZ[i])
    //         }
    //     }
    //     return noviNiz
    // }
    // customCallback = (el)=>{
    //     return el>16 
    // }
    // console.log(customFilter(niz,customCallback))

//Pomnozi el niza sa 3 a zatim odvoji parne.
    // const niz = [7,12,1,8,19,20,15,22,25,30,2,10,63]
    // const nizMap = niz.map((el)=>el*3)
    // const nizFilter = nizMap.filter((el)=>el%2===0)
    // console.log(nizFilter)

//Izdvoji parne elemente matrice preko map:
    // const mat = [
    //     [1,2,3],
    //     [4,5,6],
    //     [7,8,9]
    // ]
    // const MapMatrica = mat.map((niz)=> niz.map((el)=> el%2==0 ? console.log(el) : ''))

//Reduce funkcija:
    // const niz = [2,8,14,17,10,50,60,30,43,3,9,68]
    // //Prev  value (index - 0,suma), Curr value (index - 1)
    // const zbirEl = niz.reduce((preValue,currValue)=> preValue+currValue,100)
    // console.log(zbirEl)

    // niz = [1,2,3,4,5,6,7,8,9,10]
    // const zbir = niz.reduce((prev,curr)=>prev+curr)
    // console.log(zbir/niz.length)

//Objekti

// const Objekat = {
//     auto: 'Alfa romeo',
//     vozac: 'Dzeni Bronja',
//     suvozac: 'Redzi(zatvor)',
//     godina: 23,
//     prijatelji: ['Mitar ','Omer','Pat'],
//     objekat2:{
//         ime:'Haron',
//         klub:'Lfc'
//     }
// }
// console.log(Objekat.auto)
// console.log(Objekat["auto"])
// console.log(Objekat['prijatelji'][0])
// console.log(Objekat.objekat2.klub)

// //Zadaci 

// let i = 5 ; i > 0 ; i--

// //Ispeci pa reci (RedziH)

// console.log('Junajted ocajan botluje top4')

//Slice vraca kopiju niza.
//Splice menja niz , tj vraca deo.(Nije pozeljno)
//Coach te uci kao klasicni udzbenik.


//Fizz buzz chalenge
//0 d0 100
//%3 fizz, %5 buzz, %3 and %5 fizz buzz

//NIz brojeva *63  / 3,izbacite zadnja dva, ubacite prva dva


// //FizzBuzz

// for(let i = 1;i<100;i++){
//     if(i%3 == 0 && i%5==0 ){
//         console.log('FizzBuzz')
//     }
//     else if(i %3 == 0){
//         console.log('Fizz')
//     }
//     else if(i%5 == 0){
//         console.log('Buzz')
//     }
//     else{
//         console.log(i)
//     }
// }

 //Niz , dodamo 2 na start i end
//Pomnozite sa 7, i deljive sa 3
// niz = [1,3,5,7,12,14,21,28,49,50,22,15]
// niz.push(2)
// niz.push(5)
// // console.log(niz)
// niz.unshift(4)
// niz.unshift(6)
// console.log(niz)
// niz2 = niz.map((el)=>el*7)
// // console.log(niz2)
// niz3 = niz2.filter(el=>el%3==0)
// console.log(niz3)

// niz4 = niz.map((el)=>el*7).filter((el)=>el%3==0)
// console.log(niz4)

