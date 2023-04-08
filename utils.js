function calculateTotalPrice(cart, discountPercent=0){
    let totalPrice = 0; 

    cart.forEach (item => { 
        totalPrice = totalPrice+item.price*item.quantity;
    });
    
    let discountAmount = totalPrice * discountPercent / 100;
    let discountedPrice = totalPrice - discountAmount;

    return (totalPrice, discountAmount, discountedPrice );
}

let cart  = [
    {"name": "Shirt", "price": 20, "quantity": 2},
    {"name": "Jeans", "price": 40, "quantity": 1},
    {"name": "Socks", "price": 5, "quantity": 3}
]

module.exports = {calculateTotalPrice};