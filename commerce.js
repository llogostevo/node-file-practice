// require the self built utils module
const utils = require("./utils.js")

// VALIDATION OF FILE DATA BEING OFFERED
// check if the call in node is less than 3 arguments, if it is a file name is not offered
if (process.argv.length <3) {
    // .error messages also go to console
    // however this writes to stderr and not stdout, this means the error log can be monitored 
    // seperately from every log
    console.error("error: no file name provided")
    console.error('usage: node commerce.js <filename>');

    process.exit(1);
}

// store the path of the file in the constant filePath
const filePath = process.argv[2];

// require the fs module
const fs = require('fs')

// read the file subprogram, passing in a parameter filename
const readFile = (filename) => {
    // return a promise to check if file cna be read, if read it will return contents as data
    return new Promise((resolve, reject) =>{
        //three paramaters, filename, the encoding method and the callback function which deals with the promise
       // the third parameter in readFile is err or data which will be returned
       // the use of the promise captuers any error and rejects
        fs.readFile(filename, 'utf-8', (err, data) =>{
            if(err) {
                // if there is an error reading this will jump to the catch statment
                reject(err);
            } else {
                //otherwise it will resolve to the then statement
                //resolve the promise and return the data from the file
                resolve(data);
            }
        });
    });
};

readFile(filePath)
// successful read then pull data from promise
    .then((data) =>{
        // log data as string
        console.log(data.toString());
        // convert data from json to be readable and store in cart
        const cart = JSON.parse(data);
        // run the data into the function to calc price and discount
        result = utils.calculateTotalPrice(cart, 10);
        // writeFileSync will overwrite each time, appendFile
            // fs.writeFileSync('cart1.json', JSON.stringify({"total price":result.totalprice,"discountAmount": result.discountAmount,"discountedPrice": result.discountedPrice}))
        fs.writeFileSync('cart1.json', JSON.stringify({"total price": result.totalPrice, "discountAmount": result.discountAmount, "discountedPrice": result.discountedPrice}))
        console.log(result);
        
        console.log("success");

    })
    .catch((error)=>{
        console.error(error);
        console.log("fail");
    })
    // this will run irrespective of whether it is an error or success
    .finally(()=>{
        console.log("File read complete");
    });

    // const data = fs.readFileSync()






