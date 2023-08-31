let num = [1,2,3,4,5,6,7,8,9,10]

let maior = Math.max(... num)
let menor = Math.min(... num)
let somar = 0

for (let i = 0; i < num.length; i++) {
    somar += num[i]    
}
let media = (somar / num.length)

console.log('Maior: ' + maior)
console.log('Menor: ' + menor)
console.log('Media: ' + media)