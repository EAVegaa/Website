let productsTotal = 0;
let transportTotal = 0;

function calculateTotal(selectedProducts) {
    productsTotal = selectedProducts.reduce((total, product) => total + product.value, 0);
    updateCombinedTotal();
    return productsTotal;
}

function formatValue(value) {
    return value.toFixed(1);
}

function simulateCalculation() {
    return new Promise(resolve => {
        setTimeout(resolve, 2000);
    });
}

function updateCombinedTotal() {
    const combinedTotal = productsTotal + transportTotal;
    const combinedTotalElement = document.querySelector('.combined-total-value');
    if (combinedTotalElement) {
        combinedTotalElement.textContent = `${formatValue(combinedTotal)} kg CO2`;
    }
}

function updateTransportTotal(total) {
    transportTotal = total;
    updateCombinedTotal();
}