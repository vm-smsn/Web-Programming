const costPerLiterInput = document.getElementById('costPerLiter');
const litersPurchasedInput = document.getElementById('litersPurchased');
const calculateButton = document.getElementById('calculateButton');
const totalCostParagraph = document.getElementById('totalCost');

function calculateTotalCost() {
    const costPerLiter = parseFloat(costPerLiterInput.value);
    const litersPurchased = parseFloat(litersPurchasedInput.value);
    const totalCost = costPerLiter * litersPurchased;
    
    totalCostParagraph.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
}

calculateButton.addEventListener('click', calculateTotalCost);
