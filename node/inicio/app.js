const os = require('node:os');

console.log('Información de mi sistema');
console.log('-------------------------');
console.log('Nombre de sistema: ', os.platform());
console.log('Version del sistema: ', os.release());
console.log('Arquitectura', os.cpus());