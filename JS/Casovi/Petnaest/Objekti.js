// 15 - 5 -2023
const ucionica = [
    {ime:'Tajra',id:1,godine:'17'},
    {ime:'Imad',id:2,godine:'17'},
    {ime:'Bronja',id:3,godine:'23'},
    {ime:'Tarik',id:4,godine:'25'},
    {ime:'Imad',id:5,godine:'17'},
    {ime:'Haris',id:6,godine:'18'},
    {ime:'Mehmed',id:7,godine:'16'},
    {ime:'Redzep',id:8,godine:'18'},
] 
const filterNiz = ucionica.filter((el)=> el.id%2===0)
console.log(filterNiz)
//Objekat sa parnim kljucem id.
const mapNiz = filterNiz.map((el)=>{
    return{
        id: el.id
    }
})
console.log(mapNiz)
//Parni kljucevi id.
const mapNiz2 = mapNiz.map(el => el.id)
console.log(mapNiz2)
