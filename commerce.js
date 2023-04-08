const utils = require("./utils.js")

// FILE SETUP
const fs = require('fs')
const data = fs.readFileSync('./data/data.json', 'utf-8')
const cart = JSON.parse(data);

let result = utils.calculateTotalPrice(cart, 10);

console.log(result);

fs.writeFileSync('output/cart1.json', JSON.stringify(result))