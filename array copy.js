const valores = [7.7, 10.0, 43.9, 1.0]
console.log(valores[1], valores[3])
console.log(valores[4]) //undefined

valores[4] = 10
console.log(valores)
console.log(valores.lenght)

valores.push({ id: 3 }, false, null, 'teste')
console.log(valores) // [ 7.7, 10, 43.9, 1, 10, { id: 3 }, false, null, 'teste' ]

console.log(valores.pop()) //retira o ultimo elem
console.log(valores) //[ 7.7, 10, 43.9, 1, 10, { id: 3 }, false, null ]

delete valores[0]
console.log(valores)

console.log(typeof valores) //object
