let fs= require('fs');
let gu = require('fs');
let data = fs.readFileSync('input.txt');
let data2 = gu.readFileSync('input2.txt');

console.log(data.toString());
console.log(data2.toString());
