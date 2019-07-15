'use strict';

const fs = require('fs');

let rawdata = fs.readFileSync('data/en_US.json');  
let obj = JSON.parse(rawdata);  
console.log(obj); 