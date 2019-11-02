const { argv } = require('./config/yargs');
const colors = require('colors');
const toDo = require('./to-do/to-do')
let comand = argv._[0];

switch (comand) {
  case ('crear'):
    let task = toDo.create(argv.description);
    console.log(task);
    break;
  case ('listar'):
    let list = toDo.getList();
    for (let task of list) {
      console.log('======Por Hacer====='.green);
      console.log(task.description);
      console.log('Estado: ',task.completed);
      console.log('================'.green);
    }

    break;
  case ('actualizar'):
    let updated = toDo.update(argv.description, argv.completed);
    console.log(updated);
    break;
  case ('borrar'):
    let deleted = toDo.deleted(argv.description);
    console.log(deleted);
    break;
  default:
    console.log('comando no es reconocido');

}