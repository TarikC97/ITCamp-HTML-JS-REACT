///Zadatak 1

// const broj = prompt('Unos')
//  console.log(broj*broj)



///Zadatak 2

// for(let i= 1;i<100;i++){
//     if(i % 3 === 0 && i % 5 === 0){
//         console.log('Fizz i Buzz \n',i)
//     }
//     else if(i % 3 === 0){
//         console.log('Fizz\n',i)
//     }
//     else if(i% 5 === 0){
//         console.log('Buzz \n',i)
//     }
// }

//Zadatak 3
//product stock> 73 i rating > 4.3
// const fetchData = async()=>{
//     const data = await fetch(`https://dummyjson.com/products`)
//     const result = await data.json()
//     console.log(result.products)
//     const niz = result.products
//     const noviNiz = niz.filter((el)=> el.stock>73 && el.rating>4.3)
//     console.log(noviNiz)
// }
// fetchData()