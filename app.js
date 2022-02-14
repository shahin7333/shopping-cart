function updateProduct(product, price, isIncrease) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncrease == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    // updateCase case dollar
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculateTotal
    calculateTotal();
}

// calculate total amount
function getInputValue(product) {
    const itemInput = document.getElementById(product + '-number');
    const itemNumber = parseInt(itemInput.value);
    return itemNumber;

}

function calculateTotal() {

    const mobileTotal = getInputValue('mobile') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subTotal = mobileTotal + caseTotal;
    const taxAmount = subTotal / 10;
    const totalAmount = subTotal + taxAmount;
    // update to the code
    document.getElementById('sub-amount').innerText = subTotal;
    document.getElementById('tax-amount').innerText = taxAmount;
    document.getElementById('total-amount').innerText = totalAmount;



}


// mobile handler
document.getElementById('mobile-plus').addEventListener('click', function () {
    updateProduct('mobile', 1219, true);
})
document.getElementById('mobile-minus').addEventListener('click', function () {
    updateProduct('mobile', 1219, false);
})

// case handler
document.getElementById('case-plus').addEventListener('click', function () {
    updateProduct('case', 59, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updateProduct('case', 59, false);
})