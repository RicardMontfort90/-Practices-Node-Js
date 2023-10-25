const fs = require('node:fs')

console.log('Leyendo el primer archivo... ')
fs.readFile('./archivo.txt', 'utf-8', (err, text) => { // <-- Ejecutas este callback cuando termine de leer el archivo
    console.log(text)
})



console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo... ')
const secondText = fs.readFile('./archivo2.txt', 'utf-8')

console.log(secondText)