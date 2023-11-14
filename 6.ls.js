const fs = require('node:fs/promises')

fs.readdir('.')
    .then(files => {
        files.forEach(file => {
        console.log(file)
        })
    })
    .cath(err => {
        if (err) {
            console.error('Error al leer el directorio:', err)
            return;
        }
    })