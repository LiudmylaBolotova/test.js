
function calculateTotalPrice (orderedQuantity, pricePerItem) {
  // Change code below this line
  const totalPrice = orderedQuantity * pricePerItem;

  // Change code above this line
  return totalPrice;
};

calculateTotalPrice(10, 5);

console.log(calculateTotalPrice(10, 5));


function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount;
    // Change code below this line
    if (totalSpent >= 50000) {
       
        discount = 0,1;
    } else if (totalSpent >= 20000 && totalSpent < 50000) {
        
        discount = 0,05;
    } else if (totalSpent >= 5000 && totalSpent < 20000) {
       
        discount = 0,02;
    } else if (totalSpent < 500) {
        
        discount = 0;
    }
    // Change code above this line
    return discount;
}


console.log(discount);
getDiscount(137000);
getDiscount(46900);