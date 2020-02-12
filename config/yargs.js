
const optscre = {
    descripcion: {
        demand: true,
        alias: 'd',
        desc: 'Descripción de una tarea por hacer'
    }
}

const optsact = {
    descripcion: {
        demand: true,
        alias: 'd'
    },
    completado:{
        alias: 'c',
        default: true,
        desc: 'marca como completado o pendiente la tarea'
    }
}

const argv = require('yargs')
    .command ('crear', 
    'Crear un elemento por hacer',
    optscre)
    .command ('actualizar',
    'Actualiza el estado completado de una tarea',
    optsact)
    .command ('borrar', 
    'Borra los datos de una tarea',
    optscre)
    .help()
    .argv;

module.exports = {
    argv
}