let niz = [3,2,5,6,15,8]
let niz2 = [
    [3,9],
    [10,4]
]
let max = 0
for(let j = 0;j<niz2.length;j++){
    for(let k =0;k<niz2[j].length;k++){
        if(niz2[j][k]> max)
        {
          console.log(niz2[j][k])
          max = niz2[j][k]  
        }
        
    }
}
console.log('Max je:',max)

function getMaxNumber(niz){
    const lengthN = niz.length
    let number =0
    for(let i=0;i<lengthN;i++){
        if(niz[i]>number){
            number = niz[i]
        }
    }
    return number
}
function getMinNumber(niz){
    const lengthN = niz.length
    let number =4
    for(let i=0;i<lengthN;i++){
        if(niz[i]<number){
            number = niz[i]
        }
    }
    return number
}
console.log('Najveci broj:',getMaxNumber(niz))
console.log('Najmanji broj:',getMinNumber(niz))