const fs = require("fs");

let listToDo = [];
const saveDB = () => {
  let data = JSON.stringify(listToDo);
  fs.writeFile("db/data.json", data, err => {
    if (err) throw new Error("No se pudo guardar", err);
  });
};

const loadDB = () => {
  try {
    listToDo = require("../db/data.json");
  } catch (error) {
    listToDo = [];
  }
};
const create = description => {
  loadDB();
  let toDo = {
    description,
    completed: false
  };

  listToDo.push(toDo);
  saveDB();
  return toDo;
};

const getList = () => {
  loadDB();
  return listToDo;
};
const update = (description, completed = true) => {
  loadDB();
  let index = listToDo.findIndex(task => task.description === description);
  if (index >= 0) {
    listToDo[index].completed = completed;
    saveDB();
    return true;
  } else {
    false;
  }
};

const deleted = description => {
  loadDB();
  let newLIst = listToDo.filter(task => task.description !== description);
  if (listToDo.length === newLIst.length) {
    return false;
  } else {
    listToDo = newLIst;
    saveDB();
    return true;
  }
};
module.exports = {
  create,
  getList,
  update,
  deleted
};