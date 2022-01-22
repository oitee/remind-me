import fs from 'fs';
import {dirname} from '../constants.js';

//console.log(__dirname);
//const data = fs.readFileSync('../../data.txt');

const database = JSON.parse(fs.readFileSync(`${dirname}data.txt`, {encoding: "utf-8"}));

let dataMap = new Map();

database.forEach(element => {
    let {id, problemTitle, problemDescription, hint, solution} = element;
    dataMap.set(id, {problemTitle, problemDescription, hint, solution});
})




//console.log(dataMap);
// create a map of id to problems
// write a function that
// given an id, provides all the details entire object
// another function that tells you if an id is present


