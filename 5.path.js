const path = require('node:path')

// barra separadora de carpetas segun SO
console.log(path.sep)

// Unir rutas con path.join
const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath)

//Nombre de un archivo, resultado: password.txt
const base = path.basename('/tmp/midu-secret-files/password.txt')
console.log(base)

// Nombre del Fichero, resultado: password
const filename = path.basename('/tmp/midu-secret-files/password.txt', '.txt')
console.log(filename)

// Te da la extensión, resultado: .jpg
const extension = path.extname('my.super.image.jpg')
console.log(extension)