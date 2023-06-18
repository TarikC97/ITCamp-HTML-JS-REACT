//This se odnosi na objekat u koji se nalazi.
//U JS je sve objekat
const obj = [
    { ime:'Redzi', faks:'ne'},
    { ime:'Bronja',
     faks:'da',
     thisKey(){
        console.log(this.ime,' :Ime')
    }
},
]

obj[1].thisKey()

const BASE_URL = 'http://www.google.com/itd'

const prvoIme = 'Tarik'
const drugoIme = 'Zijad'
console.log(prvoIme + " i "+ drugoIme)

obj.godine = '20'
console.log(obj)

delete obj.godine
console.log(obj)
