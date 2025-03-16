



function calculateBill(billAmount, taxRate) {
    // this body
    console.log("it");
    const total = billAmount * (1 + taxRate) ;
    return total;
};
// fun call or run
const myToT = calculateBill();


const myToT2 = calculateBill();

console.log("it", myToT, myToT2);

// type allow pasting 