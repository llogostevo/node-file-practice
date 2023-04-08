function calculateTotalPrice(cart, discountPercent=0){
    let totalPrice = 0; 
// go through the cart which is one array element
// calculate the total price of each item
    cart.forEach (item => { 
        totalPrice = totalPrice+item.price*item.quantity;
    });
    
    // calculate the discout and total price
    let discountAmount = totalPrice * discountPercent / 100;
    let discountedPrice = totalPrice - discountAmount;

    // js cant return more than one value so kept in an object for return
    return {totalPrice, discountAmount, discountedPrice};
}

// export the function calculate total price
module.exports = {calculateTotalPrice};