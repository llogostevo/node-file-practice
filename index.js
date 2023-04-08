/* 

This file plays around with fs and file methods. 

SEE COMMERECE AND UTILS FOR SOLUTIION TO BELOW

You are running an e-commerce platform. 
For every user that shops on your platform, 
you need to calculate the total price along with discount amount 
and discounted price so that it can be shown at checkout.

Input:

JSON files containing purchase data for each customer in this format
Output:

JSON files containing 
the total price, any discount amount, 
and the discounted price for each purchase
Make sure that the same program can be 
reused for multiple users without any modifications.
*/

// FILE SETUP
const fs = require('fs')
const data = fs.readFileSync('./data/data.json', 'utf-8')
const cart = JSON.parse(data);

// console.log(data)
console.log(cart)
// console.log(cart[0])

for (const item in cart){
    console.log(item.name);
    console.log(item.price*item.quantity);
}

// SERVER SETUP
const http = require('http')
const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': `text/plain`});
    res.end(`${data}`);


});

// access the webaddress via http://localhost:3000/
server.listen(3000, () => {
    console.log('Server listening on port 3000')
});