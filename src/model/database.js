import fs from "fs";
import { dirname } from "../constants.js";

const database = JSON.parse(
  fs.readFileSync(`${dirname}data.txt`, { encoding: "utf-8" })
);

let dataMap = new Map();
let listOfIds = [];

database.forEach((element) => {
  let { id, problemTitle, problemDescription, hint, solution } = element;
  dataMap.set(id, { problemTitle, problemDescription, hint, solution });
  listOfIds.push(id);
});

export function size() {
  return dataMap.size;
}

export function getId(index) {
  return listOfIds[index];
}

function idExists(id) {
  if (dataMap.has(id)) {
    return true;
  }
  return false;
}

export function getData(id) {
  if (idExists(id)) {
    return dataMap.get(id);
  }
  return null;
}
