//Esto sólo en los módulos nativos
//que no tienen promesas nativas

//const { promisify } = require('node:util')
//const readFilePromise = promisify(fs.readFile)

const { readFile } = require('node:fs/promises');


// IIFE - Inmediatly Invoked Function Expression (FUNCIÓN AUTOINVOCADA)
(
    async () => {
    console.log('Leyendo el primer archivo... ')
const firstText = await readFile('./archivo.txt', 'utf-8')
console.log('primer texto:', firstText)
console.log('Hacer cosas mientras lee el archivo...')

console.log('Leyendo el segundo archivo... ')
const secondText = await readFile('./archivo2.txt', 'utf-8')
console.log('segundo texto', secondText)
    }
)()



